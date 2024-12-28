import prisma from "../lib/prisma";
import { normalizeString } from "./normalize-slug";
import {
  zooAnimals,
  habitatsAcuarios,
  habitatsZoo,
  users,
  userZoo,
  aquariumAnimals,
  addressHabitatsZoo,
  addressAcuarios,
  especiesCategory,
} from "./seed";

async function main() {
  await prisma.animalImage.deleteMany();
  await prisma.animal.deleteMany();
  await prisma.addressHabitat.deleteMany();
  await prisma.especiesCategory.deleteMany();
  await prisma.habitat.deleteMany();
  await prisma.user.deleteMany();

  const respUsers = await prisma.user.createMany({
    data: users,
  });
  const respUsersZoo = await prisma.user.createMany({
    data: userZoo,
  });

  // const datawithSlug = habitatsAcuarios.map((habitat) => {
  //   const { name, ...rest } = habitat;

  //   const slug = normalizeString(name);
  //   return {
  //     ...rest,
  //     name,
  //     slug,
  //   };
  // });
  // const respHabitatsA = await prisma.habitat.createMany({
  //   data: datawithSlug,
  // });

  for (const habitat of habitatsAcuarios) {
    const { name, images, ...rest } = habitat;

    // Generar slug del nombre
    const slug = normalizeString(name);

    // Crear hábitat y obtener su ID
    const createdHabitat = await prisma.habitat.create({
      data: {
        ...rest,
        name,
        slug,
      },
    });

    const animalImages = images.map((img) => ({
      url: img,
      habitatId: createdHabitat.id,
    }));

    await prisma.imageInstalaciones.createMany({
      data: animalImages,
    });
  }

  for (const habitat of habitatsZoo) {
    const { name, images, ...rest } = habitat;

    // Generar slug del nombre
    const slug = normalizeString(name);

    // Crear hábitat y obtener su ID
    const createdHabitat = await prisma.habitat.create({
      data: {
        ...rest,
        name,
        slug,
      },
    });

    const animalImages = images.map((img) => ({
      url: img,
      habitatId: createdHabitat.id,
    }));

    await prisma.imageInstalaciones.createMany({
      data: animalImages,
    });
  }

  // const datawithSlugZoo = habitatsZoo.map((habitat) => {
  //   const { name, ...rest } = habitat;
  //   const slug = normalizeString(name);
  //   return {
  //     ...rest,
  //     name,
  //     slug,
  //   };
  // });

  // const respHabitatsZ = await prisma.habitat.createMany({
  //   data: datawithSlugZoo,
  // });

  const addressZoo = await prisma.addressHabitat.createMany({
    data: addressHabitatsZoo,
  });
  const addressAcuario = await prisma.addressHabitat.createMany({
    data: addressAcuarios,
  });
  // const respHabitats = await prisma.habitat.createMany({
  //   data: habitats,
  // });

  // const especieszoo = habitatsZoo.map((habitat) => {
  //   const { id, ...rest } = habitat;

  //   const especie = zooAnimals.map(async (animal) => {
  //     const {images,...restAnimals}=animal;
  //     const dataZoo = {
  //       ...restAnimals,
  //       habitatId: id,
  //       animalSlug:normalizeString(animal.name)
  //     };
  //     const animaldata = await prisma.animal.createMany({
  //       data: dataZoo,
  //     });

  //     const especieImage=images.map(img=>({
  //       url:img,
  //       animalId:animaldata
  //     }))

  //   });
  // });

  for (const habitat of habitatsZoo) {
    const { id: habitatId } = habitat;

    for (const animal of zooAnimals) {
      const { images, ...restAnimal } = animal;

      // Crear cada animal y obtener su ID
      const createdAnimal = await prisma.animal.create({
        data: {
          ...restAnimal,
          habitatId,
          animalSlug: normalizeString(animal.name),
        },
      });

      // Crear las imágenes asociadas al animal
      const animalImages = images.map((img) => ({
        url: img,
        animalId: createdAnimal.id,
      }));

      await prisma.animalImage.createMany({
        data: animalImages,
      });
    }
  }

  for (const habitat of habitatsAcuarios) {
    const { id: habitatId } = habitat;

    for (const animal of aquariumAnimals) {
      const { images, ...restAnimal } = animal;

      // Crear cada animal y obtener su ID
      const createdAnimal = await prisma.animal.create({
        data: {
          ...restAnimal,
          habitatId,
          animalSlug: normalizeString(animal.name),
        },
      });

      // Crear las imágenes asociadas al animal
      const animalImages = images.map((img) => ({
        url: img,
        animalId: createdAnimal.id,
      }));

      await prisma.animalImage.createMany({
        data: animalImages,
      });
    }
  }

  // const especiesAcuario = habitatsAcuarios.map((habitat) => {
  //   const { id,...rest } = habitat;

  //   const especie = aquariumAnimals.map(async (animal) => {
  //     const dataZoo = {
  //       ...animal,
  //       habitatId: id,
  //       animalSlug:normalizeString(animal.name)
  //     };
  //     const resp = await prisma.animal.createMany({
  //       data: dataZoo,
  //     });
  //   });
  // });

  const categoriesEspecies = await prisma.especiesCategory.createMany({
    data: especiesCategory,
  });
  // const count=especies.length

  // const especies = habitatsZoo.flatMap((habitat) => {
  //   const { id: habitatId } = habitat;

  //   return zooAnimals.map((animal) => ({
  //     ...animal,
  //     habitatId, // Asociamos el habitatId actual
  //   }));
  // });

  // // Inserta todos los animales en la base de datos
  // const result = await prisma.animal.createMany({
  //   data: especies,
  //   skipDuplicates: true, // Evita errores si algún registro ya existe
  // });
  console.log("seed ejecutado correctamente");
}

(() => {
  main();
})();
