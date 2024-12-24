import prisma from "../lib/prisma";
import { habitats, users } from "./seed";
async function main() {
  // const respUsers = await prisma.user.createMany({
  //   data: users,
  // });
  const respHabitats = await prisma.habitat.createMany({
    data: habitats,
  });

  console.log("seed ejecutado correctamente", { respHabitats });
}

(() => {
  main();
})();
