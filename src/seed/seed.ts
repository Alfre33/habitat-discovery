import bcryptjs from "bcryptjs";
import { User } from "../interfaces/user.interface";
import { Role } from "../interfaces/types.interface";
// import { Habitat } from "../interfaces/Habitat.interface";
import { CategoriaEspecies, Habitat, HabitatType } from "@prisma/client";

export const users: User[] = [
  {
    id: "549f52e3-8012-4a52-b4ae-9a1e58c3a081",
    name: "Alice",
    lastname: "Smith",
    role: Role.ADMINBASIC,
    email: "alice.admin@example.com",
    passwordHash: bcryptjs.hashSync("123456", 10),
  },
  {
    id: "574420dd-a85b-4090-bbdc-b5f6c6721dc1",
    name: "Bob",
    lastname: "Brown",
    role: Role.ADMINBASIC,
    email: "bob.user@example.com",
    passwordHash: bcryptjs.hashSync("123456", 10),
  },
  {
    id: "66bc2ab5-45d0-40ea-a870-847697752d90",
    name: "Charlie",
    lastname: "Johnson",
    role: Role.ADMINBASIC,
    email: "charlie.guest@example.com",
    passwordHash: bcryptjs.hashSync("123456", 10),
  },
  {
    id: "76771edf-3372-428f-9610-09ef33fa8d9a",
    name: "Diana",
    lastname: "Taylor",
    role: Role.ADMINBASIC,
    email: "diana.user@example.com",
    passwordHash: bcryptjs.hashSync("123456", 10),
  },
  {
    id: "82b25e55-7e88-4a1b-924b-9a006b36deea",
    name: "Eve",
    lastname: "Davis",
    role: Role.ADMINBASIC,
    email: "eve.admin@example.com",
    passwordHash: bcryptjs.hashSync("123456", 10),
  },
  {
    id: "9018bd7e-fea7-428b-97fb-bb72a2cf8a53",
    name: "Alice",
    lastname: "Smith",
    role: Role.ADMINBASIC,
    email: "alice1.admin@example.com",
    passwordHash: bcryptjs.hashSync("123456", 10),
  },
  {
    id: "b92c1cd4-91cf-486b-95c7-7844bf659cd4",
    name: "Bob",
    lastname: "Brown",
    role: Role.ADMINADVANCED,
    email: "bob1.user@example.com",
    passwordHash: bcryptjs.hashSync("123456", 10),
  },
  {
    id: "be605362-81f0-42db-ba4f-b2d478cdf4bb",
    name: "Charlie",
    lastname: "Johnson",
    role: Role.ADMINADVANCED,
    email: "charlie1.guest@example.com",
    passwordHash: bcryptjs.hashSync("123456", 10),
  },
  {
    id: "ce00688e-98cf-4ae6-b109-a36059e7fd15",
    name: "Diana",
    lastname: "Taylor",
    role: Role.ADMINADVANCED,
    email: "diana1.user@example.com",
    passwordHash: bcryptjs.hashSync("123456", 10),
  },
  {
    id: "e0d949e7-a15a-4e4e-9188-43849de0d3a2",
    name: "Eve",
    lastname: "Davis",
    role: Role.ADMINADVANCED,
    email: "eve1.admin@example.com",
    passwordHash: bcryptjs.hashSync("123456", 10),
  },
  {
    id: "e22d8eab-36d9-49ab-b239-2b62d6cb923e",
    name: "Alice",
    lastname: "Smith",
    role: Role.ADMINADVANCED,
    email: "alice2.admin@example.com",
    passwordHash: bcryptjs.hashSync("123456", 10),
  },
  {
    id: "e80dd21f-e8a0-4f8d-a8ab-0f3eaa6d0e21",
    name: "Bob",
    lastname: "Brown",
    role: Role.ADMINADVANCED,
    email: "bob2.user@example.com",
    passwordHash: bcryptjs.hashSync("123456", 10),
  },
  {
    //   id: "u3",
    name: "Charlie",
    lastname: "Johnson",
    role: Role.USER,
    email: "charlie2.guest@example.com",
    passwordHash: bcryptjs.hashSync("123456", 10),
  },
  {
    //   id: "u4",
    name: "Diana",
    lastname: "Taylor",
    role: Role.ADMINAPP,
    email: "diana2.user@example.com",
    passwordHash: bcryptjs.hashSync("123456", 10),
  },
];
export const userZoo = [
  {
    id: "549f52e3-8012-4a52-b4ae-9a1e58c3a000",
    name: "Alice",
    lastname: "Smith",
    role: Role.ADMINBASIC,
    email: "alice11.admin@example.com",
    passwordHash: bcryptjs.hashSync("123456", 10),
  },
  {
    id: "574420dd-a85b-4090-bbdc-b5f6c6721d00",
    name: "Bob",
    lastname: "Brown",
    role: Role.ADMINBASIC,
    email: "bob11.user@example.com",
    passwordHash: bcryptjs.hashSync("123456", 10),
  },
  {
    id: "66bc2ab5-45d0-40ea-a870-847697752d00",
    name: "Charlie",
    lastname: "Johnson",
    role: Role.ADMINBASIC,
    email: "charlie11.guest@example.com",
    passwordHash: bcryptjs.hashSync("123456", 10),
  },
  {
    id: "76771edf-3372-428f-9610-09ef33fa8d00",
    name: "Diana",
    lastname: "Taylor",
    role: Role.ADMINBASIC,
    email: "diana11.user@example.com",
    passwordHash: bcryptjs.hashSync("123456", 10),
  },
  {
    id: "82b25e55-7e88-4a1b-924b-9a006b36de00",
    name: "Eve",
    lastname: "Davis",
    role: Role.ADMINBASIC,
    email: "eve11.admin@example.com",
    passwordHash: bcryptjs.hashSync("123456", 10),
  },
  {
    id: "9018bd7e-fea7-428b-97fb-bb72a2cf8a00",
    name: "Alice",
    lastname: "Smith",
    role: Role.ADMINBASIC,
    email: "alice112.admin@example.com",
    passwordHash: bcryptjs.hashSync("123456", 10),
  },
  {
    id: "b92c1cd4-91cf-486b-95c7-7844bf659c00",
    name: "Bob",
    lastname: "Brown",
    role: Role.ADMINADVANCED,
    email: "bob112.user@example.com",
    passwordHash: bcryptjs.hashSync("123456", 10),
  },
  {
    id: "be605362-81f0-42db-ba4f-b2d478cdf400",
    name: "Charlie",
    lastname: "Johnson",
    role: Role.ADMINADVANCED,
    email: "charlie112.guest@example.com",
    passwordHash: bcryptjs.hashSync("123456", 10),
  },
  {
    id: "ce00688e-98cf-4ae6-b109-a36059e7fd00",
    name: "Diana",
    lastname: "Taylor",
    role: Role.ADMINADVANCED,
    email: "diana113.user@example.com",
    passwordHash: bcryptjs.hashSync("123456", 10),
  },
  {
    id: "e0d949e7-a15a-4e4e-9188-43849de0d300",
    name: "Eve",
    lastname: "Davis",
    role: Role.ADMINADVANCED,
    email: "eve115.admin@example.com",
    passwordHash: bcryptjs.hashSync("123456", 10),
  },
  {
    id: "e22d8eab-36d9-49ab-b239-2b62d6cb9200",
    name: "Alice",
    lastname: "Smith",
    role: Role.ADMINADVANCED,
    email: "alice211.admin@example.com",
    passwordHash: bcryptjs.hashSync("123456", 10),
  },
  {
    id: "e80dd21f-e8a0-4f8d-a8ab-0f3eaa6d0e00",
    name: "Bob",
    lastname: "Brown",
    role: Role.ADMINADVANCED,
    email: "bob211.user@example.com",
    passwordHash: bcryptjs.hashSync("123456", 10),
  },
];

// export const habitats: Habitat[] = [
//   {
//     name: "Acuario Inbursa",
//     type: HabitatType.ACUARIO,
//     location: "Ciudad de México",
//     userId: "549f52e3-8012-4a52-b4ae-9a1e58c3a081",
//     imgInstallations: ["", ""],
//   },
//   {
//     name: "Acuario de Veracruz",
//     type: HabitatType.ACUARIO,
//     location: "Veracruz",
//     userId: "574420dd-a85b-4090-bbdc-b5f6c6721dc1",
//     imgInstallations: ["", ""],
//   },
//   {
//     name: "Interactive Aquarium Cancún",
//     type: HabitatType.ACUARIO,
//     location: "Cancún",
//     userId: "66bc2ab5-45d0-40ea-a870-847697752d90",
//     imgInstallations: ["", ""],
//   },
//   {
//     name: "Zoológico de Chapultepec",
//     type: HabitatType.ZOO,
//     location: "Ciudad de México",
//     userId: "76771edf-3372-428f-9610-09ef33fa8d9a",
//     imgInstallations: ["", ""],
//   },
//   {
//     name: "Zoológico de Guadalajara",
//     type: HabitatType.ZOO,
//     location: "Guadalajara",
//     userId: "82b25e55-7e88-4a1b-924b-9a006b36deea",
//     imgInstallations: ["", ""],
//   },
// ];

export const especiesZoo = [
  {
    name: "León Africano",
    category: "MAMMAL",
    description:
      "El león africano es una especie icónica de los zoológicos, conocida por su majestuoso aspecto y su melena distintiva.",
    imgs: ["leon1.jpg", "leon2.jpg"],
    habitatType: "ZOO",
    habitatId: "1",
  },
  {
    name: "Elefante Asiático",
    category: "MAMMAL",
    description:
      "El elefante asiático es una especie en peligro de extinción, reconocida por su inteligencia y sus largas trompas.",
    imgs: ["elefante1.jpg", "elefante2.jpg"],
    habitatType: "ZOO",
    habitatId: "1",
  },
  {
    name: "Tigre de Bengala",
    category: "MAMMAL",
    description:
      "El tigre de Bengala es conocido por sus rayas distintivas y su poder como cazador.",
    imgs: ["tigre1.jpg", "tigre2.jpg"],
    habitatType: "ZOO",
    habitatId: "2",
  },
  {
    name: "Cebra",
    category: "MAMMAL",
    description:
      "La cebra es famosa por sus rayas blancas y negras que la hacen fácilmente reconocible.",
    imgs: ["cebra1.jpg", "cebra2.jpg"],
    habitatType: "ZOO",
    habitatId: "2",
  },
  {
    name: "Jirafa",
    category: "MAMMAL",
    description:
      "La jirafa es el animal terrestre más alto y es conocida por su largo cuello y patas.",
    imgs: ["jirafa1.jpg", "jirafa2.jpg"],
    habitatType: "ZOO",
    habitatId: "3",
  },
  {
    name: "Cocodrilo del Nilo",
    category: "REPTILE",
    description:
      "El cocodrilo del Nilo es uno de los reptiles más grandes y es famoso por su comportamiento agresivo.",
    imgs: ["cocodrilo1.jpg", "cocodrilo2.jpg"],
    habitatType: "ZOO",
    habitatId: "3",
  },
  {
    name: "Guacamayo Azul",
    category: "BIRD",
    description:
      "El guacamayo azul es conocido por sus vibrantes plumas azules y su capacidad para imitar sonidos humanos.",
    imgs: ["guacamayo1.jpg", "guacamayo2.jpg"],
    habitatType: "ZOO",
    habitatId: "4",
  },
  {
    name: "Pingüino Emperador",
    category: "BIRD",
    description:
      "El pingüino emperador es la especie de pingüino más grande y es conocido por su habilidad para sobrevivir en condiciones extremas.",
    imgs: ["pinguino1.jpg", "pinguino2.jpg"],
    habitatType: "ZOO",
    habitatId: "4",
  },
  {
    name: "Anaconda",
    category: "REPTILE",
    description:
      "La anaconda es una de las serpientes más largas del mundo y es conocida por su capacidad para estrangular a sus presas.",
    imgs: ["anaconda1.jpg", "anaconda2.jpg"],
    habitatType: "ZOO",
    habitatId: "5",
  },
  {
    name: "Loro Amazónico",
    category: "BIRD",
    description:
      "El loro amazónico es famoso por sus brillantes plumas verdes y su capacidad para hablar.",
    imgs: ["loro1.jpg", "loro2.jpg"],
    habitatType: "ZOO",
    habitatId: "5",
  },
  {
    name: "Canguro",
    category: "MAMMAL",
    description:
      "El canguro es conocido por su capacidad para saltar grandes distancias y por su bolsa para crías.",
    imgs: ["canguro1.jpg", "canguro2.jpg"],
    habitatType: "ZOO",
    habitatId: "6",
  },
  {
    name: "Serpiente Coralillo",
    category: "REPTILE",
    description:
      "La serpiente coralillo es conocida por su veneno potente y sus bandas de colores brillantes.",
    imgs: ["serpiente1.jpg", "serpiente2.jpg"],
    habitatType: "ZOO",
    habitatId: "6",
  },
  {
    name: "Lobo Gris",
    category: "MAMMAL",
    description:
      "El lobo gris es conocido por su comportamiento social y su capacidad para cazar en manada.",
    imgs: ["lobo1.jpg", "lobo2.jpg"],
    habitatType: "ZOO",
    habitatId: "7",
  },
  {
    name: "Panda Gigante",
    category: "MAMMAL",
    description:
      "El panda gigante es conocido por su adorable apariencia y su dieta basada en bambú.",
    imgs: ["panda1.jpg", "panda2.jpg"],
    habitatType: "ZOO",
    habitatId: "7",
  },
  {
    name: "Iguana Verde",
    category: "REPTILE",
    description:
      "La iguana verde es una especie común de lagarto conocida por su piel escamosa y su capacidad para trepar árboles.",
    imgs: ["iguana1.jpg", "iguana2.jpg"],
    habitatType: "ZOO",
    habitatId: "8",
  },
  {
    name: "Tortuga Galápagos",
    category: "REPTILE",
    description:
      "La tortuga Galápagos es una de las especies de tortugas más grandes del mundo y puede vivir más de 100 años.",
    imgs: ["tortuga1.jpg", "tortuga2.jpg"],
    habitatType: "ZOO",
    habitatId: "8",
  },
];

export const especiesAcuario = [
  {
    name: "Tiburón Blanco",
    category: "FISH",
    description:
      "El tiburón blanco es uno de los depredadores más temidos del océano, conocido por su tamaño y ferocidad.",
    imgs: ["tiburon_blanco1.jpg", "tiburon_blanco2.jpg"],
    habitatType: HabitatType.ACUARIO,
    habitatId: "1",
  },
  {
    name: "Delfín",
    category: "MAMMAL",
    description:
      "El delfín es conocido por su inteligencia y su habilidad para realizar acrobacias en el agua.",
    imgs: ["delfin1.jpg", "delfin2.jpg"],
    habitatType: HabitatType.ACUARIO,
    habitatId: "1",
  },
  {
    name: "Pez Payaso",
    category: "FISH",
    description:
      "El pez payaso es famoso por su colorido patrón de rayas y su simbiosis con las anémonas.",
    imgs: ["pez_payaso1.jpg", "pez_payaso2.jpg"],
    habitatType: HabitatType.ACUARIO,
    habitatId: "2",
  },
  {
    name: "Tortuga Marina",
    category: "REPTILE",
    description:
      "La tortuga marina es conocida por su capacidad para migrar largas distancias a través del océano.",
    imgs: ["tortuga_marina1.jpg", "tortuga_marina2.jpg"],
    habitatType: HabitatType.ACUARIO,
    habitatId: "2",
  },
  {
    name: "Medusa",
    category: "INVERTEBRATE",
    description:
      "La medusa es conocida por su cuerpo gelatinoso y sus tentáculos venenosos.",
    imgs: ["medusa1.jpg", "medusa2.jpg"],
    habitatType: HabitatType.ACUARIO,
    habitatId: "3",
  },
  {
    name: "Tiburón Martillo",
    category: "FISH",
    description:
      "El tiburón martillo es conocido por su cabeza en forma de T y su comportamiento social.",
    imgs: ["tiburon_martillo1.jpg", "tiburon_martillo2.jpg"],
    habitatType: HabitatType.ACUARIO,
    habitatId: "3",
  },
  {
    name: "Caballito de Mar",
    category: "FISH",
    description:
      "El caballito de mar es conocido por su forma única y su capacidad para nadar verticalmente.",
    imgs: ["caballito_de_mar1.jpg", "caballito_de_mar2.jpg"],
    habitatType: HabitatType.ACUARIO,
    habitatId: "4",
  },
  {
    name: "Orca",
    category: "MAMMAL",
    description:
      "La orca, también conocida como ballena asesina, es famosa por su habilidad para cazar en grupo y su inteligencia.",
    imgs: ["orca1.jpg", "orca2.jpg"],
    habitatType: HabitatType.ACUARIO,
    habitatId: "4",
  },
  {
    name: "Estrella de Mar",
    category: "INVERTEBRATE",
    description:
      "La estrella de mar es conocida por su capacidad para regenerar sus brazos y su variedad de colores.",
    imgs: ["estrella_de_mar1.jpg", "estrella_de_mar2.jpg"],
    habitatType: HabitatType.ACUARIO,
    habitatId: "5",
  },
  {
    name: "Pulpo",
    category: "INVERTEBRATE",
    description:
      "El pulpo es conocido por su inteligencia, su capacidad para cambiar de color y sus habilidades de escape.",
    imgs: ["pulpo1.jpg", "pulpo2.jpg"],
    habitatType: HabitatType.ACUARIO,
    habitatId: "5",
  },
  {
    name: "Tiburón Tigre",
    category: "FISH",
    description:
      "El tiburón tigre es conocido por sus rayas oscuras en su cuerpo y su dieta variada.",
    imgs: ["tiburon_tigre1.jpg", "tiburon_tigre2.jpg"],
    habitatType: HabitatType.ACUARIO,
    habitatId: "6",
  },
  {
    name: "Manatí",
    category: "MAMMAL",
    description:
      "El manatí es un mamífero marino grande y dócil conocido por su dieta herbívora y su comportamiento tranquilo.",
    imgs: ["manati1.jpg", "manati2.jpg"],
    habitatType: HabitatType.ACUARIO,
    habitatId: "6",
  },
  {
    name: "Manta Raya",
    category: "FISH",
    description:
      "La manta raya es conocida por su gran tamaño y su capacidad para saltar fuera del agua.",
    imgs: ["manta_raya1.jpg", "manta_raya2.jpg"],
    habitatType: HabitatType.ACUARIO,
    habitatId: "7",
  },
  {
    name: "Narval",
    category: "MAMMAL",
    description:
      "El narval es conocido por su largo colmillo en espiral y su vida en las aguas árticas.",
    imgs: ["narval1.jpg", "narval2.jpg"],
    habitatType: HabitatType.ACUARIO,
    habitatId: "7",
  },
  {
    name: "Anguila Eléctrica",
    category: "FISH",
    description:
      "La anguila eléctrica es conocida por su capacidad para generar descargas eléctricas y su cuerpo alargado.",
    imgs: ["anguila1.jpg", "anguila2.jpg"],
    habitatType: HabitatType.ACUARIO,
    habitatId: "8",
  },
  {
    name: "Beluga",
    category: "MAMMAL",
    description:
      "La beluga es conocida por su color blanco y su capacidad para emitir sonidos complejos.",
    imgs: ["beluga1.jpg", "beluga2.jpg"],
    habitatType: HabitatType.ACUARIO,
    habitatId: "8",
  },
];

// export const habitatsAcuarios = [
//   {
//     name: "Acuario Inbursa",
//     logo: "https://th.bing.com/th/id/R.ae98582d761a2beba2ca5e655a50aa15?rik=juPeaR3%2faG7wzA&pid=ImgRaw&r=0",
//     // location: "Ciudad de México",
//     description:
//       "El acuario más grande de México, ubicado en Nuevo Polanco, con 3,500 metros cuadrados de espacio de exhibición y 1.6 millones de litros de agua de mar.",
//     type: HabitatType.ACUARIO,
//     userId: "549f52e3-8012-4a52-b4ae-9a1e58c3a081",
//   },
//   {
//     name: "Acuario de Veracruz",
//     logo: "https://th.bing.com/th/id/OIP.z8OHJZ4Q2jH9Kf1c8izZ8wHaHa?rs=1&pid=ImgDetMain",
//     // location: "Veracruz",
//     description:
//       "El acuario más grande de América Latina por volumen de agua, con 7 millones de litros. Ubicado en el antiguo Playón de Hornos.",
//     type: HabitatType.ACUARIO,
//     userId: "574420dd-a85b-4090-bbdc-b5f6c6721dc1",
//   },
//   {
//     name: "Acuario Michin Puebla",
//     logo: "https://th.bing.com/th/id/OIP.x1nfMVbNeA6sVY_WrBe8_QHaHa?w=640&h=640&rs=1&pid=ImgDetMain",
//     // location: "Puebla",
//     description:
//       "Uno de los acuarios más modernos de México, con una experiencia interactiva y diversas especies acuáticas.",
//     type: HabitatType.ACUARIO,
//     userId: "66bc2ab5-45d0-40ea-a870-847697752d90",
//   },
//   {
//     name: "Acuario Alameda",
//     logo: "https://th.bing.com/th/id/OIP.Z5El1HQpP7VSgxpWQ_TTTQHaHa?w=640&h=640&rs=1&pid=ImgDetMain",
//     // location: "Orizaba, Veracruz",
//     description:
//       "Ofrece una variedad de peces y accesorios acuáticos en un entorno bien cuidado.",
//     type: HabitatType.ACUARIO,
//     userId: "76771edf-3372-428f-9610-09ef33fa8d9a",
//   },
//   {
//     name: "Acuario Michin Guadalajara",
//     logo: "https://th.bing.com/th/id/OIP.418qTHA7U0iWyMlZz_jZ3QHaHa?rs=1&pid=ImgDetMain",
//     // location: "Guadalajara",
//     description:
//       "Un acuario moderno con una gran variedad de especies marinas y de agua dulce.",
//     type: HabitatType.ACUARIO,
//     userId: "82b25e55-7e88-4a1b-924b-9a006b36deea",
//   },
//   {
//     name: "Acuario Interactivo",
//     logo: "https://bodoke-lab.com/wp-content/uploads/2014/05/Screen-Shot-2014-05-13-at-10.51.54-AM.png",
//     // location: "Ciudad de México",
//     description:
//       "Un acuario interactivo que permite a los visitantes aprender y participar en actividades con los animales.",
//     type: HabitatType.ACUARIO,
//     userId: "9018bd7e-fea7-428b-97fb-bb72a2cf8a53",
//   },
//   {
//     name: "Acuario La Sirenita",
//     logo: "https://th.bing.com/th/id/R.93e91b5cee4352bcdfb528054b267d98?rik=hIfIarXeuwIVXg&pid=ImgRaw&r=0",
//     // location: "Tehuacán, Puebla",
//     description:
//       "Un acuario con una variedad de peces tropicales y una tienda de suministros acuáticos.",
//     type: HabitatType.ACUARIO,
//     userId: "b92c1cd4-91cf-486b-95c7-7844bf659cd4",
//   },
//   {
//     name: "Acuario de Acapulco",
//     logo: "https://th.bing.com/th/id/OIP.HC4EKVXFaGkVLWOPToR5sQHaEM?rs=1&pid=ImgDetMain",
//     // location: "Acapulco",
//     description:
//       "Un acuario que exhibe una variedad de especies marinas y ofrece actividades educativas.",
//     type: HabitatType.ACUARIO,
//     userId: "be605362-81f0-42db-ba4f-b2d478cdf4bb",
//   },
//   {
//     name: "Acuario de Monterrey",
//     logo: "https://th.bing.com/th/id/OIP.0FHnY2CFz45Zk36KTX1hGgHaFn?rs=1&pid=ImgDetMain",
//     // location: "Monterrey",
//     description:
//       "Un acuario que ofrece una experiencia educativa y recreativa con diversas especies acuáticas.",
//     type: HabitatType.ACUARIO,
//     userId: "ce00688e-98cf-4ae6-b109-a36059e7fd15",
//   },
//   {
//     name: "Acuario de Cancún",
//     logo: "https://www.logosc.cn/uploads/icon/2021/09/16/afe06ac2-8146-4ddf-b04f-bc1af8ca8985.png",
//     // location: "Cancún",
//     description:
//       "Un acuario que exhibe especies marinas del Caribe y ofrece actividades interactivas.",
//     type: HabitatType.ACUARIO,
//     userId: "e0d949e7-a15a-4e4e-9188-43849de0d3a2",
//   },
//   {
//     name: "Acuario de Mazatlán",
//     logo: "https://th.bing.com/th/id/OIP.meQ9dECDQ1d2KswpjSrYCQHaHa?rs=1&pid=ImgDetMain",
//     // location: "Mazatlán",
//     description:
//       "Un acuario que ofrece una variedad de especies marinas y de agua dulce en un entorno recreativo.",
//     type: HabitatType.ACUARIO,
//     userId: "e22d8eab-36d9-49ab-b239-2b62d6cb923e",
//   },
//   {
//     name: "Acuario de Oaxaca",
//     logo: "https://s3.amazonaws.com/pr-journal/bkw2n.jpg",
//     // location: "Oaxaca",
//     description:
//       "Un acuario que exhibe especies locales y ofrece programas educativos para visitantes.",
//     type: HabitatType.ACUARIO,
//     userId: "e80dd21f-e8a0-4f8d-a8ab-0f3eaa6d0e21",
//   },
// ];

// export const habitatsZoo= [
//     {
//       "name": "Zoológico Guadalajara",
//       "logo": "https://th.bing.com/th/id/R.164d24779e066c04b1765db02b182c78?rik=wH9N7D9bZ5Re1A&pid=ImgRaw&r=0",
//       "description": "Uno de los zoológicos más grandes y antiguos de México, con una gran variedad de especies animales y programas educativos.",
//       "type": HabitatType.ZOO,
//       "userId": "549f52e3-8012-4a52-b4ae-9a1e58c3a000"
//     },
//     {
//       "name": "Africam Safari",
//       "logo": "https://th.bing.com/th/id/OIP.CoGxeHz6vzs20SehiVgNkwAAAA?w=360&h=360&rs=1&pid=ImgDetMain",
//       "description": "Un parque safari que recrea hábitats naturales de animales africanos y ofrece recorridos en autobús y vehículos.",
//       "type": HabitatType.ZOO,
//       "userId": "574420dd-a85b-4090-bbdc-b5f6c6721d00"
//     },
//     {
//       "name": "Croco Cun Zoo",
//       "logo": "https://th.bing.com/th/id/OIP.F_cX7swLVPNt0vSLxT8hawHaFP?w=1400&h=990&rs=1&pid=ImgDetMain",
//       "description": "Un zoológico que permite a los visitantes interactuar y alimentar a reptiles como cocodrilos y serpientes.",
//       "type": HabitatType.ZOO,
//       "userId": "66bc2ab5-45d0-40ea-a870-847697752d00"
//     },
//     {
//       "name": "Pai Pai Ecotourism Park",
//       "logo": "https://th.bing.com/th/id/OIP.cYu4PqUpV8psWKqvwS7FsQHaHa?rs=1&pid=ImgDetMain",
//       "description": "Un parque de ecoturismo que ofrece recorridos guiados para observar la fauna local en su hábitat natural.",
//       "type": HabitatType.ZOO,
//       "userId": "76771edf-3372-428f-9610-09ef33fa8d00"
//     },
//     {
//       "name": "Zoológico de Chapultepec",
//       "logo": "https://th.bing.com/th/id/OIP.73OxHUizAGxL-aLeYFGNmgHaGx?rs=1&pid=ImgDetMain",
//       "description": "Uno de los zoológicos más antiguos de América Latina, con una amplia variedad de animales y actividades educativas.",
//       "type": HabitatType.ZOO,
//       "userId": "82b25e55-7e88-4a1b-924b-9a006b36de00"
//     },
//     {
//       "name": "Zoológico de Monterrey",
//       "logo": "https://th.bing.com/th/id/OIP.M5O-cFNX2D2Z8U9Y8bjsxwAAAA?w=450&h=450&rs=1&pid=ImgDetMain",
//       "description": "Un zoológico que ofrece una experiencia educativa y recreativa con diversas especies animales.",
//       "type": HabitatType.ZOO,
//       "userId": "9018bd7e-fea7-428b-97fb-bb72a2cf8a00"
//     },
//     {
//       "name": "Zoológico de Querétaro",
//       "logo": "https://koa.com/content/campgrounds/barrie/events/55119event93ad5fae-1192-4443-9308-254ab6fa5a8a.PNG?crop=auto&width=800&height=530&cache=true",
//       "description": "Un zoológico que se enfoca en la conservación y educación ambiental con una variedad de especies animales.",
//       "type": HabitatType.ZOO,
//       "userId": "b92c1cd4-91cf-486b-95c7-7844bf659c00"
//     },
//     {
//       "name": "Zoológico de Chiapas",
//       "logo": "https://img.freepik.com/vector-premium/icono-puerta-zoologico-blanco-negro_755164-9819.jpg",
//       "description": "Un zoológico que alberga una variedad de especies animales y ofrece programas educativos para visitantes.",
//       "type": HabitatType.ZOO,
//       "userId": "be605362-81f0-42db-ba4f-b2d478cdf400"
//     },
//     {
//       "name": "Zoológico de Morelia",
//       "logo": "https://th.bing.com/th/id/OIP.cW7SJ1HdQC5XVrQLpjghLwHaFj?rs=1&pid=ImgDetMain",
//       "description": "Un zoológico que se enfoca en la conservación y el bienestar de las especies animales.",
//       "type": HabitatType.ZOO,
//       "userId": "ce00688e-98cf-4ae6-b109-a36059e7fd00"
//     },
//     {
//       "name": "Zoológico de Oaxaca",
//       "logo": "https://static.vecteezy.com/system/resources/previews/038/053/889/original/zoo-gate-icon-in-thin-outline-style-vector.jpg",
//       "description": "Un zoológico que exhibe especies locales y ofrece programas educativos para visitantes.",
//       "type": HabitatType.ZOO,
//       "userId": "e0d949e7-a15a-4e4e-9188-43849de0d300"
//     },
//     {
//       "name": "Zoológico de Puebla",
//       "logo": "https://th.bing.com/th/id/OIP.LsiVb0oZ10OXbwm8c2-e6wHaHa?rs=1&pid=ImgDetMain",
//       "description": "Un zoológico que ofrece una experiencia educativa y recreativa con diversas especies animales.",
//       "type": HabitatType.ZOO,
//       "userId": "e22d8eab-36d9-49ab-b239-2b62d6cb9200"
//     },
//     {
//       "name": "Zoológico de Mérida",
//       "logo": "https://th.bing.com/th/id/OIP.-dqaXghHjS89e7extCdmEgAAAA?w=300&h=300&rs=1&pid=ImgDetMain",
//       "description": "Un zoológico que se enfoca en la conservación y educación ambiental con una variedad de especies animales.",
//       "type": HabitatType.ZOO,
//       "userId": "e80dd21f-e8a0-4f8d-a8ab-0f3eaa6d0e00"
//     }
//   ]

export const habitatsZoo = [
  {
    id: "d1e8f1c3-8a4b-472e-9b71-1e7dfdfc9b5e",
    name: "Zoológico Guadalajara",
    logo: "https://th.bing.com/th/id/R.164d24779e066c04b1765db02b182c78?rik=wH9N7D9bZ5Re1A&pid=ImgRaw&r=0",
    description:
      "Uno de los zoológicos más grandes y antiguos de México, con una gran variedad de especies animales y programas educativos.",
    type: HabitatType.ZOO,
    userId: "549f52e3-8012-4a52-b4ae-9a1e58c3a000",
    // categories: ["MAMIFERO", "AVE", "REPTIL", "ANFIBIO", "INSECTO"],
    categories: [
      CategoriaEspecies.MAMIFERO,
      CategoriaEspecies.AVE,
      CategoriaEspecies.REPTIL,
      CategoriaEspecies.ANFIBIO,
      CategoriaEspecies.ARACNIDO,
      CategoriaEspecies.ARACNIDO,
    ],
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735278201/zoo2_fqskpi.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735278199/zoo10_trfx51.jpg",
    ],
  },
  {
    id: "f21b15c3-2914-4d4a-8bdc-8485c99e26a3",
    name: "Africam Safari",
    logo: "https://th.bing.com/th/id/OIP.CoGxeHz6vzs20SehiVgNkwAAAA?w=360&h=360&rs=1&pid=ImgDetMain",
    description:
      "Un parque safari que recrea hábitats naturales de animales africanos y ofrece recorridos en autobús y vehículos.",
    type: HabitatType.ZOO,
    userId: "574420dd-a85b-4090-bbdc-b5f6c6721d00",
    // categories: ["MAMIFERO", "AVE", "REPTIL", "ANFIBIO", "ARACNIDO"],
    categories: [
      CategoriaEspecies.MAMIFERO,
      CategoriaEspecies.AVE,
      CategoriaEspecies.REPTIL,
      CategoriaEspecies.ANFIBIO,
      CategoriaEspecies.ARACNIDO,
      CategoriaEspecies.ARACNIDO,
    ],
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735278197/zoo13_ls64zi.webp",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735278198/zoo11_upx3ho.jpg",
    ],
  },
  {
    id: "4b8871bc-7b9c-4b2b-9375-7c663929f2e2",
    name: "Croco Cun Zoo",
    logo: "https://th.bing.com/th/id/OIP.F_cX7swLVPNt0vSLxT8hawHaFP?w=1400&h=990&rs=1&pid=ImgDetMain",
    description:
      "Un zoológico que permite a los visitantes interactuar y alimentar a reptiles como cocodrilos y serpientes.",
    type: HabitatType.ZOO,
    userId: "66bc2ab5-45d0-40ea-a870-847697752d00",
    // categories: ["MAMIFERO", "AVE", "REPTIL", "ANFIBIO", "INSECTO", "ARACNIDO"],
    categories: [
      CategoriaEspecies.MAMIFERO,
      CategoriaEspecies.AVE,
      CategoriaEspecies.REPTIL,
      CategoriaEspecies.ANFIBIO,
      CategoriaEspecies.ARACNIDO,
      CategoriaEspecies.ARACNIDO,
    ],
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735278194/zoo20_kxwrhi.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735278196/zoo14_aarhih.jpg",
    ],
  },
  {
    id: "687f16a3-73bd-4e7f-83e4-4b8a9a42d853",
    name: "Pai Pai Ecotourism Park",
    logo: "https://th.bing.com/th/id/OIP.cYu4PqUpV8psWKqvwS7FsQHaHa?rs=1&pid=ImgDetMain",
    description:
      "Un parque de ecoturismo que ofrece recorridos guiados para observar la fauna local en su hábitat natural.",
    type: HabitatType.ZOO,
    userId: "76771edf-3372-428f-9610-09ef33fa8d00",
    // categories: [
    //   "MAMIFERO",
    //   "AVE",
    //   "REPTIL",
    //   "ANFIBIO",
    //   "ARACNIDO",
    //   "INVERTEBRADO",
    // ],
    categories: [
      CategoriaEspecies.MAMIFERO,
      CategoriaEspecies.AVE,
      CategoriaEspecies.REPTIL,
      CategoriaEspecies.ANFIBIO,
      CategoriaEspecies.ARACNIDO,
      CategoriaEspecies.ARACNIDO,
    ],
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735278190/zoo21_eqd4cj.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735278195/zoo15_bxnjxg.jpg",
    ],
  },
  {
    id: "271a06d4-4da9-4c24-a7b0-7ac0e2b4ae68",
    name: "Zoológico de Chapultepec",
    logo: "https://th.bing.com/th/id/OIP.73OxHUizAGxL-aLeYFGNmgHaGx?rs=1&pid=ImgDetMain",
    description:
      "Uno de los zoológicos más antiguos de América Latina, con una amplia variedad de animales y actividades educativas.",
    type: HabitatType.ZOO,
    userId: "82b25e55-7e88-4a1b-924b-9a006b36de00",
    // categories: ["MAMIFERO", "AVE", "REPTIL", "ANFIBIO", "INSECTO"],
    categories: [
      CategoriaEspecies.MAMIFERO,
      CategoriaEspecies.AVE,
      CategoriaEspecies.REPTIL,
      CategoriaEspecies.ANFIBIO,
      CategoriaEspecies.ARACNIDO,
      CategoriaEspecies.ARACNIDO,
    ],
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735278198/zoo12_w9fhkz.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735278191/zoo19_wfctin.jpg",
    ],
  },
  {
    id: "45b8625b-d40c-41b7-940f-7ae8078b5c5e",
    name: "Zoológico de Monterrey",
    logo: "https://th.bing.com/th/id/OIP.M5O-cFNX2D2Z8U9Y8bjsxwAAAA?w=450&h=450&rs=1&pid=ImgDetMain",
    description:
      "Un zoológico que ofrece una experiencia educativa y recreativa con diversas especies animales.",
    type: HabitatType.ZOO,
    userId: "9018bd7e-fea7-428b-97fb-bb72a2cf8a00",
    categories: [
      CategoriaEspecies.MAMIFERO,
      CategoriaEspecies.AVE,
      CategoriaEspecies.REPTIL,
      CategoriaEspecies.ANFIBIO,
      CategoriaEspecies.ARACNIDO,
    ],
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735278190/zoo24_wcxo35.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735278191/zoo18_pgu5rt.jpg",
    ],
    // categories: ["MAMIFERO", "AVE", "REPTIL", "ANFIBIO", "ARACNIDO"],
  },
  {
    id: "e153cfb8-8e93-4d6c-b7c0-c39fe14e7d0c",
    name: "Zoológico de Querétaro",
    logo: "https://koa.com/content/campgrounds/barrie/events/55119event93ad5fae-1192-4443-9308-254ab6fa5a8a.PNG?crop=auto&width=800&height=530&cache=true",
    description:
      "Un zoológico que se enfoca en la conservación y educación ambiental con una variedad de especies animales.",
    type: HabitatType.ZOO,
    userId: "b92c1cd4-91cf-486b-95c7-7844bf659c00",
    categories: [
      CategoriaEspecies.MAMIFERO,
      CategoriaEspecies.AVE,
      CategoriaEspecies.REPTIL,
      CategoriaEspecies.ANFIBIO,
      CategoriaEspecies.ARACNIDO,
      CategoriaEspecies.ARACNIDO,
    ],
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735278190/zoo23_bk7vc8.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735278193/zoo16_qqor1a.jpg",
    ],
    // categories: ["MAMIFERO", "AVE", "REPTIL", "ANFIBIO", "INSECTO", "ARACNIDO"],
  },
  {
    id: "7a30372c-0e58-411d-87e7-f614e967b718",
    name: "Zoológico de Chiapas",
    logo: "https://img.freepik.com/vector-premium/icono-puerta-zoologico-blanco-negro_755164-9819.jpg",
    description:
      "Un zoológico que alberga una variedad de especies animales y ofrece programas educativos para visitantes.",
    type: HabitatType.ZOO,
    userId: "be605362-81f0-42db-ba4f-b2d478cdf400",
    categories: [
      CategoriaEspecies.MAMIFERO,
      CategoriaEspecies.AVE,
      CategoriaEspecies.REPTIL,
      CategoriaEspecies.ANFIBIO,
      CategoriaEspecies.ARACNIDO,
      CategoriaEspecies.ARACNIDO,
    ],
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735278206/zoo4_pmxgal.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735278193/zoo16_qqor1a.jpg",
    ],
    // categories: [
    //   "MAMIFERO",
    //   "AVE",
    //   "REPTIL",
    //   "ANFIBIO",
    //   "ARACNIDO",
    //   "INVERTEBRADO",
    // ],
  },
  {
    id: "a69c8199-5dc4-44d1-8b38-4e04084b93e1",
    name: "Zoológico de Morelia",
    logo: "https://th.bing.com/th/id/OIP.cW7SJ1HdQC5XVrQLpjghLwHaFj?rs=1&pid=ImgDetMain",
    description:
      "Un zoológico que se enfoca en la conservación y el bienestar de las especies animales.",
    type: HabitatType.ZOO,
    userId: "ce00688e-98cf-4ae6-b109-a36059e7fd00",
    // categories: ["MAMIFERO", "AVE", "REPTIL", "ANFIBIO", "INSECTO", "ARACNIDO"],
    categories: [
      CategoriaEspecies.MAMIFERO,
      CategoriaEspecies.AVE,
      CategoriaEspecies.REPTIL,
      CategoriaEspecies.ANFIBIO,
      CategoriaEspecies.ARACNIDO,
      CategoriaEspecies.ARACNIDO,
    ],
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735278206/zoo5_axhpap.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735278201/zoo8_w80zrx.jpg",
    ],
  },
  {
    id: "9d9ac3b9-e60b-4e59-8f88-91f738fdb95b",
    name: "Zoológico de Oaxaca",
    logo: "https://static.vecteezy.com/system/resources/previews/038/053/889/original/zoo-gate-icon-in-thin-outline-style-vector.jpg",
    description:
      "Un zoológico que exhibe especies locales y ofrece programas educativos para visitantes.",
    type: HabitatType.ZOO,
    userId: "e0d949e7-a15a-4e4e-9188-43849de0d300",
    // categories: ["MAMIFERO", "AVE", "REPTIL", "ANFIBIO", "INSECTO"],
    categories: [
      CategoriaEspecies.MAMIFERO,
      CategoriaEspecies.AVE,
      CategoriaEspecies.REPTIL,
      CategoriaEspecies.ANFIBIO,
      CategoriaEspecies.ARACNIDO,
      CategoriaEspecies.ARACNIDO,
    ],
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735278206/zoo3_o3pga2.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735278206/zoo4_pmxgal.jpg",
    ],
  },
  {
    id: "3d4c4d10-cf6a-4bbf-94f1-3f28b6fa1653",
    name: "Zoológico de Puebla",
    logo: "https://th.bing.com/th/id/OIP.LsiVb0oZ10OXbwm8c2-e6wHaHa?rs=1&pid=ImgDetMain",
    description:
      "Un zoológico que ofrece una experiencia educativa y recreativa con diversas especies animales.",
    type: HabitatType.ZOO,
    userId: "e22d8eab-36d9-49ab-b239-2b62d6cb9200",
    // categories: ["MAMIFERO", "AVE", "REPTIL", "ANFIBIO", "ARACNIDO"],
    categories: [
      CategoriaEspecies.MAMIFERO,
      CategoriaEspecies.AVE,
      CategoriaEspecies.REPTIL,
      CategoriaEspecies.ANFIBIO,
      CategoriaEspecies.ARACNIDO,
      CategoriaEspecies.ARACNIDO,
    ],
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735278204/zoo6_owfirv.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735278204/zoo7_jeinym.jpg",
    ],
  },
  {
    id: "912bbdf0-d9a5-4850-8a8e-4b70ee3c9bc5",
    name: "Zoológico de Mérida",
    logo: "https://th.bing.com/th/id/OIP.-dqaXghHjS89e7extCdmEgAAAA?w=300&h=300&rs=1&pid=ImgDetMain",
    description:
      "Un zoológico que se enfoca en la conservación y educación ambiental con una variedad de especies animales.",
    type: HabitatType.ZOO,
    userId: "e80dd21f-e8a0-4f8d-a8ab-0f3eaa6d0e00",
    // categories: [
    //   "MAMIFERO",
    //   "AVE",
    //   "REPTIL",
    //   "ANFIBIO",
    //   "ARACNIDO",
    //   "INVERTEBRADO",
    // ],
    categories: [
      CategoriaEspecies.MAMIFERO,
      CategoriaEspecies.AVE,
      CategoriaEspecies.REPTIL,
      CategoriaEspecies.ANFIBIO,
      CategoriaEspecies.ARACNIDO,
      CategoriaEspecies.ARACNIDO,
    ],
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735278202/zoo1_dymbqr.webp",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735278200/zoo9_ijm3f9.jpg",
    ],
  },
];

export const addressHabitatsZoo = [
  {
    id: "ab12f32e-7c62-4189-9a5e-1c2d3622df85",
    street: "Calz Independencia Norte 4510",
    state: "Jalisco",
    city: "Guadalajara",
    country: "México",
    PostalCode: "44280",
    habitatId: "d1e8f1c3-8a4b-472e-9b71-1e7dfdfc9b5e",
  },
  {
    id: "f7a1b4e7-92e1-4931-9d13-3f1b8d7811bb",
    street: "Blvd. Carlos Camacho Espíritu KM 16.5",
    state: "Puebla",
    city: "Puebla",
    country: "México",
    PostalCode: "72960",
    habitatId: "f21b15c3-2914-4d4a-8bdc-8485c99e26a3",
  },
  {
    id: "c8b5b1a5-f379-4ab4-b122-f77a6c9234d7",
    street: "Carretera Federal 307 KM 31",
    state: "Quintana Roo",
    city: "Puerto Morelos",
    country: "México",
    PostalCode: "77580",
    habitatId: "4b8871bc-7b9c-4b2b-9375-7c663929f2e2",
  },
  {
    id: "9817b5ec-33f0-4185-9d5b-85c0ab8f1e8c",
    street: "Carretera Tulum - Cancún KM 28",
    state: "Quintana Roo",
    city: "Tulum",
    country: "México",
    PostalCode: "77760",
    habitatId: "687f16a3-73bd-4e7f-83e4-4b8a9a42d853",
  },
  {
    id: "b1b8c3d4-e4c2-4873-bd8a-5f6a8e8a2d7a",
    street: "Bosque de Chapultepec 1ra Sección",
    state: "Ciudad de México",
    city: "Ciudad de México",
    country: "México",
    PostalCode: "11100",
    habitatId: "271a06d4-4da9-4c24-a7b0-7ac0e2b4ae68",
  },
  {
    id: "d9f1c3b7-7a4b-412b-9c71-3e7dfdfc9a5b",
    street: "Avenida Ignacio Morones Prieto 1500",
    state: "Nuevo León",
    city: "Monterrey",
    country: "México",
    PostalCode: "64720",
    habitatId: "45b8625b-d40c-41b7-940f-7ae8078b5c5e",
  },
  {
    id: "fcab1d4e-9261-493b-9d13-3c8f5b7812bb",
    street: "Blvd. Bernardo Quintana Arrioja 120",
    state: "Querétaro",
    city: "Querétaro",
    country: "México",
    PostalCode: "76060",
    habitatId: "e153cfb8-8e93-4d6c-b7c0-c39fe14e7d0c",
  },
  {
    id: "e8b2b1c5-f279-4ab4-b132-e77a6d9834e7",
    street: "Av. Central Norte 202",
    state: "Chiapas",
    city: "Tuxtla Gutiérrez",
    country: "México",
    PostalCode: "29000",
    habitatId: "7a30372c-0e58-411d-87e7-f614e967b718",
  },
  {
    id: "a817b5bd-33f0-4185-8d7b-85c0ad8f2d7a",
    street: "Calz. Juárez 1150",
    state: "Michoacán",
    city: "Morelia",
    country: "México",
    PostalCode: "58030",
    habitatId: "a69c8199-5dc4-44d1-8b38-4e04084b93e1",
  },
  {
    id: "b9b3c3d4-e4c2-4873-ae8a-5f6a8e8a3d7a",
    street: "Av. Central de Abastos",
    state: "Oaxaca",
    city: "Oaxaca",
    country: "México",
    PostalCode: "68090",
    habitatId: "9d9ac3b9-e60b-4e59-8f88-91f738fdb95b",
  },
  {
    id: "e3b1c3d4-9e63-4873-bd9a-5f6a8e8b4d7a",
    street: "Av. Hermanos Serdán 101",
    state: "Puebla",
    city: "Puebla",
    country: "México",
    PostalCode: "72000",
    habitatId: "3d4c4d10-cf6a-4bbf-94f1-3f28b6fa1653",
  },
  {
    id: "d1a8c3d4-e4c2-4873-bb7a-5f6a8e8c5d7a",
    street: "Calle 59 648",
    state: "Yucatán",
    city: "Mérida",
    country: "México",
    PostalCode: "97000",
    habitatId: "912bbdf0-d9a5-4850-8a8e-4b70ee3c9bc5",
  },
];

export const habitatsAcuarios = [
  {
    id: "1a8f8c3d-8a3b-472e-9b71-1e7dfdfc9b5e",
    name: "Acuario Inbursa",
    logo: "https://th.bing.com/th/id/R.ae98582d761a2beba2ca5e655a50aa15?rik=juPeaR3%2faG7wzA&pid=ImgRaw&r=0",
    description:
      "El acuario más grande de México, ubicado en Nuevo Polanco, con 3,500 metros cuadrados de espacio de exhibición y 1.6 millones de litros de agua de mar.",
    type: HabitatType.ACUARIO,
    userId: "549f52e3-8012-4a52-b4ae-9a1e58c3a081",
    // categories: ["PEZDULCE", "PEZSALADO", "MOLUSCO", "CRUSTACEO", "MEDUSA"],
    categories: [
      CategoriaEspecies.PEZDULCE,
      CategoriaEspecies.PEZSALADO,
      CategoriaEspecies.MOLUSCO,
      CategoriaEspecies.CRUSTACEO,
      CategoriaEspecies.MEDUSA,
    ],
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735279825/acuario1_zk33fj.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735279824/acuario2_zbp7cl.webp",
    ],
  },
  {
    id: "2b9d9c3b-1b8a-4d4a-9bdc-8485c99e26a3",
    name: "Acuario de Veracruz",
    logo: "https://th.bing.com/th/id/OIP.z8OHJZ4Q2jH9Kf1c8izZ8wHaHa?rs=1&pid=ImgDetMain",
    description:
      "El acuario más grande de América Latina por volumen de agua, con 7 millones de litros. Ubicado en el antiguo Playón de Hornos.",
    type: HabitatType.ACUARIO,
    userId: "574420dd-a85b-4090-bbdc-b5f6c6721dc1",
    // categories: ["PEZDULCE", "MOLUSCO", "CRUSTACEO", "INVERTEBRADO", "ANEMONA"],
    categories: [
      CategoriaEspecies.PEZDULCE,
      CategoriaEspecies.PEZSALADO,
      CategoriaEspecies.MOLUSCO,
      CategoriaEspecies.CRUSTACEO,
      CategoriaEspecies.MEDUSA,
    ],
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735279824/acuario3_jddyij.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735279823/acuario4_cyss9z.jpg",
    ],
  },
  {
    id: "3c7e7d2c-2c9b-4d2b-9275-7c663929f2e2",
    name: "Acuario Michin Puebla",
    logo: "https://th.bing.com/th/id/OIP.x1nfMVbNeA6sVY_WrBe8_QHaHa?w=640&h=640&rs=1&pid=ImgDetMain",
    description:
      "Uno de los acuarios más modernos de México, con una experiencia interactiva y diversas especies acuáticas.",
    type: HabitatType.ACUARIO,
    userId: "66bc2ab5-45d0-40ea-a870-847697752d90",
    // categories: ["PEZSALADO", "ANEMONA", "MEDUSA", "CRUSTACEO", "MOLUSCO"],
    categories: [
      CategoriaEspecies.PEZDULCE,
      CategoriaEspecies.PEZSALADO,
      CategoriaEspecies.MOLUSCO,
      CategoriaEspecies.CRUSTACEO,
      CategoriaEspecies.MEDUSA,
    ],
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735279822/acuario5_b7sx9l.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735279821/acuario6_qpz5m4.jpg",
    ],
  },
  {
    id: "4d8e8e2d-3d9b-4c2c-9285-8d774839f3f3",
    name: "Acuario Alameda",
    logo: "https://th.bing.com/th/id/OIP.Z5El1HQpP7VSgxpWQ_TTTQHaHa?w=640&h=640&rs=1&pid=ImgDetMain",
    description:
      "Ofrece una variedad de peces y accesorios acuáticos en un entorno bien cuidado.",
    type: HabitatType.ACUARIO,
    userId: "76771edf-3372-428f-9610-09ef33fa8d9a",
    // categories: ["PEZSALADO", "MOLUSCO", "CRUSTACEO", "ANEMONA", "MEDUSA"],
    categories: [
      CategoriaEspecies.PEZDULCE,
      CategoriaEspecies.PEZSALADO,
      CategoriaEspecies.MOLUSCO,
      CategoriaEspecies.CRUSTACEO,
      CategoriaEspecies.MEDUSA,
    ],
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735279820/acuario8_nktc5n.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735279818/acuario9_qfwgiq.jpg",
    ],
  },
  {
    id: "5e9f9e2e-4e8a-4c3d-9395-9e885a3a2828",
    name: "Acuario Michin Guadalajara",
    logo: "https://th.bing.com/th/id/OIP.418qTHA7U0iWyMlZz_jZ3QHaHa?rs=1&pid=ImgDetMain",
    description:
      "Un acuario moderno con una gran variedad de especies marinas y de agua dulce.",
    type: HabitatType.ACUARIO,
    userId: "82b25e55-7e88-4a1b-924b-9a006b36deea",
    // categories: ["PEZDULCE", "PEZSALADO", "MOLUSCO", "CRUSTACEO", "MEDUSA"],
    categories: [
      CategoriaEspecies.PEZDULCE,
      CategoriaEspecies.PEZSALADO,
      CategoriaEspecies.MOLUSCO,
      CategoriaEspecies.CRUSTACEO,
      CategoriaEspecies.MEDUSA,
    ],
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735279820/acuario7_nocuf2.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735279817/acuario10_he5adx.jpg",
    ],
  },
  {
    id: "6f9a9a1f-5f8a-4d3d-8395-8f774839f3d3",
    name: "Acuario Interactivo",
    logo: "https://bodoke-lab.com/wp-content/uploads/2014/05/Screen-Shot-2014-05-13-at-10.51.54-AM.png",
    description:
      "Un acuario interactivo que permite a los visitantes aprender y participar en actividades con los animales.",
    type: HabitatType.ACUARIO,
    userId: "9018bd7e-fea7-428b-97fb-bb72a2cf8a53",
    // categories: ["PEZDULCE", "MOLUSCO", "CRUSTACEO", "INVERTEBRADO", "ANEMONA"],
    categories: [
      CategoriaEspecies.PEZDULCE,
      CategoriaEspecies.PEZSALADO,
      CategoriaEspecies.MOLUSCO,
      CategoriaEspecies.CRUSTACEO,
      CategoriaEspecies.MEDUSA,
    ],
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735279817/acuario11_lto7d8.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735279815/acuario12_rbs7se.jpg",
    ],
  },
  {
    id: "7a9b9b1a-6f7a-4b3d-8395-7e774839f3c3",
    name: "Acuario La Sirenita",
    logo: "https://th.bing.com/th/id/R.93e91b5cee4352bcdfb528054b267d98?rik=hIfIarXeuwIVXg&pid=ImgRaw&r=0",
    description:
      "Un acuario con una variedad de peces tropicales y una tienda de suministros acuáticos.",
    type: HabitatType.ACUARIO,
    userId: "b92c1cd4-91cf-486b-95c7-7844bf659cd4",
    // categories: ["PEZSALADO", "ANEMONA", "MEDUSA", "CRUSTACEO", "MOLUSCO"],
    categories: [
      CategoriaEspecies.PEZDULCE,
      CategoriaEspecies.PEZSALADO,
      CategoriaEspecies.MOLUSCO,
      CategoriaEspecies.CRUSTACEO,
      CategoriaEspecies.MEDUSA,
    ],
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735279814/acuario13_ioasiv.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735279814/acuario14_odrvtn.jpg",
    ],
  },
  {
    id: "8b9c9c1b-7e7a-4d3d-9295-8f885a4a3838",
    name: "Acuario de Acapulco",
    logo: "https://th.bing.com/th/id/OIP.HC4EKVXFaGkVLWOPToR5sQHaEM?rs=1&pid=ImgDetMain",
    description:
      "Un acuario que exhibe una variedad de especies marinas y ofrece actividades educativas.",
    type: HabitatType.ACUARIO,
    userId: "be605362-81f0-42db-ba4f-b2d478cdf4bb",
    // categories: ["PEZSALADO", "MOLUSCO", "CRUSTACEO", "ANEMONA", "MEDUSA"],
    categories: [
      CategoriaEspecies.PEZDULCE,
      CategoriaEspecies.PEZSALADO,
      CategoriaEspecies.MOLUSCO,
      CategoriaEspecies.CRUSTACEO,
      CategoriaEspecies.MEDUSA,
    ],
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735279813/acuario15_atj3dd.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735279812/acuario16_af5oll.jpg",
    ],
  },
  {
    id: "9c9d9d1c-8e8a-4d3d-9395-9f885a5a4848",
    name: "Acuario de Monterrey",
    logo: "https://th.bing.com/th/id/OIP.0FHnY2CFz45Zk36KTX1hGgHaFn?rs=1&pid=ImgDetMain",
    description:
      "Un acuario que ofrece una experiencia educativa y recreativa con diversas especies acuáticas.",
    type: HabitatType.ACUARIO,
    userId: "ce00688e-98cf-4ae6-b109-a36059e7fd15",
    // categories: ["PEZDULCE", "PEZSALADO", "MOLUSCO", "CRUSTACEO", "MEDUSA"],
    categories: [
      CategoriaEspecies.PEZDULCE,
      CategoriaEspecies.PEZSALADO,
      CategoriaEspecies.MOLUSCO,
      CategoriaEspecies.CRUSTACEO,
      CategoriaEspecies.MEDUSA,
    ],
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735279811/acuario17_l6ccj5.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735279809/acuario20_fx0zxy.webp",
    ],
  },
  {
    id: "adadada-9e8a-4e3d-8395-9e885b6a5858",
    name: "Acuario de Cancún",
    logo: "https://www.logosc.cn/uploads/icon/2021/09/16/afe06ac2-8146-4ddf-b04f-bc1af8ca8985.png",
    description:
      "Un acuario que exhibe especies marinas del Caribe y ofrece actividades interactivas.",
    type: HabitatType.ACUARIO,
    userId: "e0d949e7-a15a-4e4e-9188-43849de0d3a2",
    // categories: ["PEZDULCE", "MOLUSCO", "CRUSTACEO", "INVERTEBRADO", "ANEMONA"],
    categories: [
      CategoriaEspecies.PEZDULCE,
      CategoriaEspecies.PEZSALADO,
      CategoriaEspecies.MOLUSCO,
      CategoriaEspecies.CRUSTACEO,
      CategoriaEspecies.MEDUSA,
    ],
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735279811/acuario18_plm8lg.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735279809/acuario19_pjpihl.jpg",
    ],
  },
  {
    id: "bdbdbdb-7e7a-4e3d-9295-8e885b6a6868",
    name: "Acuario de Mazatlán",
    logo: "https://th.bing.com/th/id/OIP.meQ9dECDQ1d2KswpjSrYCQHaHa?rs=1&pid=ImgDetMain",
    description:
      "Un acuario que ofrece una variedad de especies marinas y de agua dulce en un entorno recreativo.",
    type: HabitatType.ACUARIO,
    userId: "e22d8eab-36d9-49ab-b239-2b62d6cb923e",
    // categories: ["PEZSALADO", "MOLUSCO", "CRUSTACEO", "ANEMONA", "MEDUSA"],
    categories: [
      CategoriaEspecies.PEZDULCE,
      CategoriaEspecies.PEZSALADO,
      CategoriaEspecies.MOLUSCO,
      CategoriaEspecies.CRUSTACEO,
      CategoriaEspecies.MEDUSA,
    ],
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735279807/acuario24_ddxqeq.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735279807/acuario21_hq6yjs.jpg",
    ],
  },
  {
    id: "cdcdcdc-8e8a-4e3d-8395-9e885b6a7878",
    name: "Acuario de Oaxaca",
    logo: "https://s3.amazonaws.com/pr-journal/bkw2n.jpg",
    description:
      "Un acuario que exhibe especies locales y ofrece programas educativos para visitantes.",
    type: HabitatType.ACUARIO,
    userId: "e80dd21f-e8a0-4f8d-a8ab-0f3eaa6d0e21",
    // categories: ["PEZDULCE", "PEZSALADO", "MOLUSCO", "CRUSTACEO", "MEDUSA"],
    categories: [
      CategoriaEspecies.PEZDULCE,
      CategoriaEspecies.PEZSALADO,
      CategoriaEspecies.MOLUSCO,
      CategoriaEspecies.CRUSTACEO,
      CategoriaEspecies.MEDUSA,
    ],
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735279807/acuario23_gvh5na.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735279808/acuario22_iihu73.jpg",
    ],
  },
];

export const addressAcuarios = [
  {
    id: "d5c42f2a-3c9b-4a65-92d4-8f5d1a9b6e29",
    street: "Blvd. Miguel de Cervantes Saavedra 386",
    state: "Ciudad de México",
    city: "Ciudad de México",
    country: "México",
    PostalCode: "11520",
    habitatId: "1a8f8c3d-8a3b-472e-9b71-1e7dfdfc9b5e",
  },
  {
    id: "d7c81f3b-4c9d-4b74-9b7d-8f6d2a0d5e38",
    street: "Blvd. Manuel Ávila Camacho s/n, Playón de Hornos",
    state: "Veracruz",
    city: "Veracruz",
    country: "México",
    PostalCode: "91900",
    habitatId: "2b9d9c3b-1b8a-4d4a-9bdc-8485c99e26a3",
  },
  {
    id: "b3a81d3e-2d8c-4b74-9c6f-7e5d3a0d4f47",
    street: "Av. Osa Mayor 2901, Reserva Territorial Atlixcáyotl",
    state: "Puebla",
    city: "Puebla",
    country: "México",
    PostalCode: "72820",
    habitatId: "3c7e7d2c-2c9b-4d2b-9275-7c663929f2e2",
  },
  {
    id: "c2b41e2d-3c8d-4b73-9b6d-6f4d2b0d5e27",
    street: "Colón Poniente 318, Centro",
    state: "Veracruz",
    city: "Orizaba",
    country: "México",
    PostalCode: "94300",
    habitatId: "4d8e8e2d-3d9b-4c2c-9285-8d774839f3f3",
  },
  {
    id: "e7c71d3f-5d8b-4b74-9b7d-7e6d2b0d4e38",
    street: "Av. Mariano Otero 1105, Col. Rinconada del Sol",
    state: "Jalisco",
    city: "Guadalajara",
    country: "México",
    PostalCode: "45055",
    habitatId: "5e9f9e2e-4e8a-4c3d-9395-9e885a3a2828",
  },
  {
    id: "f3b31e3d-6c8a-4a63-9b5c-6f5c2a0d5d27",
    street: "Reforma 222, Juárez, Cuauhtémoc",
    state: "Ciudad de México",
    city: "Ciudad de México",
    country: "México",
    PostalCode: "06600",
    habitatId: "6f9a9a1f-5f8a-4d3d-8395-8f774839f3d3",
  },
  {
    id: "a2b91e3b-4d8d-4b73-9a6d-7d5d2b0d5c37",
    street: "Av. 16 de Septiembre 100, Centro",
    state: "Puebla",
    city: "Tehuacán",
    country: "México",
    PostalCode: "75700",
    habitatId: "7a9b9b1a-6f7a-4b3d-8395-7e774839f3c3",
  },
  {
    id: "d1c81f2e-6d8b-4c74-9b7d-8f6d2b0d4e27",
    street: "Costera Miguel Alemán s/n, Hornos",
    state: "Guerrero",
    city: "Acapulco",
    country: "México",
    PostalCode: "39355",
    habitatId: "8b9c9c1b-7e7a-4d3d-9295-8f885a4a3838",
  },
  {
    id: "e9a31f3d-7c8a-4b73-9b6c-7e6d2a0d4e38",
    street: "Parque Fundidora, Av. Fundidora y Adolfo Prieto",
    state: "Nuevo León",
    city: "Monterrey",
    country: "México",
    PostalCode: "64010",
    habitatId: "9c9d9d1c-8e8a-4d3d-9395-9f885a5a4848",
  },
  {
    id: "d7b51f2e-5d8b-4c74-9b6d-8f6d3a0d4d27",
    street: "Blvd. Kukulcán Km 4, Zona Hotelera",
    state: "Quintana Roo",
    city: "Cancún",
    country: "México",
    PostalCode: "77500",
    habitatId: "adadada-9e8a-4e3d-8395-9e885b6a5858",
  },
  {
    id: "d5b81d3e-3c8a-4b63-9a5c-6e6d2a0d5d28",
    street: "Av. de los Deportes 111",
    state: "Sinaloa",
    city: "Mazatlán",
    country: "México",
    PostalCode: "82160",
    habitatId: "bdbdbdb-7e7a-4e3d-9295-8e885b6a6868",
  },
  {
    id: "e1c41d2e-4d8b-4a63-9b5c-7f5d2a0d5e28",
    street: "Calle Macedonio Alcalá 800",
    state: "Oaxaca",
    city: "Oaxaca",
    country: "México",
    PostalCode: "68000",
    habitatId: "cdcdcdc-8e8a-4e3d-8395-9e885b6a7878",
  },
];

// export const especiesCategory = [
//   {
//     id: "ae46d3e9-f3b4-41b4-91e6-2e028635a3e5",
//     name: "Mamíferos",
//     description:
//       "Son animales que nacen de la madre y se alimentan de la leche materna. La mayoría tienen pelaje y son endotermos.",
//     commonAnimals: ["León", "Tigre", "Elefante", "Jirafa", "Oso"],
//     colorHex: "#FF5733",
//   },
//   {
//     id: "b197a6c2-4f77-4e3b-89d4-5c4737a56f67",
//     name: "Aves",
//     description:
//       "Son animales vertebrados, endotermos, que tienen alas y la mayoría puede volar. Tienen plumas y ponen huevos con cáscaras duras.",
//     commonAnimals: ["Águila", "Guacamayo", "Pingüino", "Flamenco", "Búho"],
//     colorHex: "#FFC300",
//   },
//   {
//     id: "c28bb728-9d4a-45e1-8a58-66f9e1b4ad47",
//     name: "Reptiles",
//     description:
//       "Son animales vertebrados, ectotermos, que tienen la piel cubierta de escamas. La mayoría pone huevos con cáscaras duras.",
//     commonAnimals: ["Cocodrilo", "Serpiente", "Iguana", "Camaleón", "Tortuga"],
//     colorHex: "#33FF57",
//   },
//   {
//     id: "d1ef92f1-873b-42a1-88b3-1f3f3d9f4e6a",
//     name: "Anfibios",
//     description:
//       "Son animales vertebrados, ectotermos, que viven una parte de su vida en el agua y otra en la tierra. Tienen piel húmeda y sin escamas.",
//     commonAnimals: ["Rana", "Salamandra", "Tritón"],
//     colorHex: "#33FFF3",
//   },
//   {
//     id: "f8a293e6-8c4d-4b4b-82d6-2e5b5c5a6d74",
//     name: "Insectos",
//     description:
//       "Son invertebrados con cuerpo segmentado en tres partes, exoesqueleto, y seis patas. La mayoría pasa por metamorfosis.",
//     commonAnimals: ["Mariposa", "Abeja", "Hormiga", "Escarabajo", "Grillo"],
//     colorHex: "#FF5733",
//   },
//   {
//     id: "g9b394e7-8e5d-4b5a-92e7-3f6b6c6b7e85",
//     name: "Arácnidos",
//     description:
//       "Son invertebrados con cuatro pares de patas y un cuerpo dividido en dos segmentos. Incluyen arañas y escorpiones.",
//     commonAnimals: ["Araña", "Escorpión", "Ácaro"],
//     colorHex: "#C70039",
//   },
//   {
//     id: "e3fa82c5-8b2d-4e58-901d-1e564a7f4b42",
//     name: "Peces de Agua Dulce",
//     description:
//       "Son peces que viven en ríos, lagos y estanques. Tienen adaptaciones específicas para sobrevivir en agua dulce.",
//     commonAnimals: ["Pez Betta", "Pez Dorado", "Guppy"],
//     colorHex: "#3498DB",
//   },
//   {
//     id: "h1c4b6f3-9a5e-4c5d-93f2-2f6e7c7d8e96",
//     name: "Peces de Agua Salada",
//     description:
//       "Son peces que viven en océanos y mares. Tienen adaptaciones para manejar el alto contenido de sal en el agua.",
//     commonAnimals: ["Pez Payaso", "Tiburón", "Manta Raya"],
//     colorHex: "#1ABC9C",
//   },
//   {
//     id: "i2d5c7e4-9b6f-4d6e-94f3-3f7f8d8e9f07",
//     name: "Moluscos",
//     description:
//       "Son invertebrados de cuerpo blando, a menudo protegidos por una concha. Incluyen pulpos, calamares y almejas.",
//     commonAnimals: ["Pulpo", "Calamar", "Caracol"],
//     colorHex: "#9B59B6",
//   },
//   {
//     id: "j3e6d8f5-9c7f-4e7f-95f4-4f8g9e9f0g18",
//     name: "Crustáceos",
//     description:
//       "Son invertebrados con cuerpo segmentado y exoesqueleto duro. Incluyen cangrejos, langostas y camarones.",
//     commonAnimals: ["Cangrejo", "Langosta", "Camarón"],
//     colorHex: "#E74C3C",
//   },
//   {
//     id: "k4f7e9g6-9d8g-5e8g-96g5-5g9h0h1i1h29",
//     name: "Anémonas",
//     description:
//       "Son invertebrados marinos con tentáculos urticantes. Tienen una simbiosis con algunos peces, como los peces payaso.",
//     commonAnimals: ["Anémona de Mar"],
//     colorHex: "#F1C40F",
//   },
//   {
//     id: "l5g8f0h7-9e9h-6f9h-97h6-6h0i1i2j2i30",
//     name: "Medusas",
//     description:
//       "Son invertebrados marinos de cuerpo gelatinoso y tentáculos que contienen células urticantes. Pueden ser bioluminiscentes.",
//     commonAnimals: ["Medusas"],
//     colorHex: "#ac94fa ",
//   },
// ];

export const especiesCategory = [
  {
    // id: "ae46d3e9-f3b4-41b4-91e6-2e028635a3e5",
    name: CategoriaEspecies.MAMIFERO,
    description:
      "Son animales que nacen de la madre y se alimentan de la leche materna. La mayoría tienen pelaje y son endotermos.",
    commonAnimals: ["León", "Tigre", "Elefante", "Jirafa", "Oso"],
    colorHex: "especie-50",
  },
  {
    // id: "b197a6c2-4f77-4e3b-89d4-5c4737a56f67",
    name: CategoriaEspecies.AVE,
    description:
      "Son animales vertebrados, endotermos, que tienen alas y la mayoría puede volar. Tienen plumas y ponen huevos con cáscaras duras.",
    commonAnimals: ["Águila", "Guacamayo", "Pingüino", "Flamenco", "Búho"],
    colorHex: "especie-100",
  },
  {
    // id: "c28bb728-9d4a-45e1-8a58-66f9e1b4ad47",
    name: CategoriaEspecies.REPTIL,
    description:
      "Son animales vertebrados, ectotermos, que tienen la piel cubierta de escamas. La mayoría pone huevos con cáscaras duras.",
    commonAnimals: ["Cocodrilo", "Serpiente", "Iguana", "Camaleón", "Tortuga"],
    colorHex: "especie-200",
  },
  {
    // id: "d1ef92f1-873b-42a1-88b3-1f3f3d9f4e6a",
    name: CategoriaEspecies.ANFIBIO,
    description:
      "Son animales vertebrados, ectotermos, que viven una parte de su vida en el agua y otra en la tierra. Tienen piel húmeda y sin escamas.",
    commonAnimals: ["Rana", "Salamandra", "Tritón"],
    colorHex: "especie-300",
  },
  {
    // id: "f8a293e6-8c4d-4b4b-82d6-2e5b5c5a6d74",
    name: CategoriaEspecies.INSECTO,
    description:
      "Son invertebrados con cuerpo segmentado en tres partes, exoesqueleto, y seis patas. La mayoría pasa por metamorfosis.",
    commonAnimals: ["Mariposa", "Abeja", "Hormiga", "Escarabajo", "Grillo"],
    colorHex: "especie-400",
  },
  {
    // id: "g9b394e7-8e5d-4b5a-92e7-3f6b6c6b7e85",
    name: CategoriaEspecies.ARACNIDO,
    description:
      "Son invertebrados con cuatro pares de patas y un cuerpo dividido en dos segmentos. Incluyen arañas y escorpiones.",
    commonAnimals: ["Araña", "Escorpión", "Ácaro"],
    colorHex: "especie-500",
  },
  {
    // id: "e3fa82c5-8b2d-4e58-901d-1e564a7f4b42",
    name: CategoriaEspecies.PEZDULCE,
    description:
      "Son peces que viven en ríos, lagos y estanques. Tienen adaptaciones específicas para sobrevivir en agua dulce.",
    commonAnimals: ["Pez Betta", "Pez Dorado", "Guppy"],
    colorHex: "especie-600",
  },
  {
    // id: "h1c4b6f3-9a5e-4c5d-93f2-2f6e7c7d8e96",
    name: CategoriaEspecies.PEZSALADO,
    description:
      "Son peces que viven en océanos y mares. Tienen adaptaciones para manejar el alto contenido de sal en el agua.",
    commonAnimals: ["Pez Payaso", "Tiburón", "Manta Raya"],
    colorHex: "especie-700",
  },
  {
    // id: "i2d5c7e4-9b6f-4d6e-94f3-3f7f8d8e9f07",
    name: CategoriaEspecies.MOLUSCO,
    description:
      "Son invertebrados de cuerpo blando, a menudo protegidos por una concha. Incluyen pulpos, calamares y almejas.",
    commonAnimals: ["Pulpo", "Calamar", "Caracol"],
    colorHex: "especie-750",
  },
  {
    // id: "j3e6d8f5-9c7f-4e7f-95f4-4f8g9e9f0g18",
    name: CategoriaEspecies.CRUSTACEO,
    description:
      "Son invertebrados con cuerpo segmentado y exoesqueleto duro. Incluyen cangrejos, langostas y camarones.",
    commonAnimals: ["Cangrejo", "Langosta", "Camarón"],
    colorHex: "especie-800",
  },
  {
    // id: "k4f7e9g6-9d8g-5e8g-96g5-5g9h0h1i1h29",
    name: CategoriaEspecies.ANEMONA,
    description:
      "Son invertebrados marinos con tentáculos urticantes. Tienen una simbiosis con algunos peces, como los peces payaso.",
    commonAnimals: ["Anémona de Mar"],
    colorHex: "especie-850",
  },
  {
    // id: "l5g8f0h7-9e9h-6f9h-97h6-6h0i1i2j2i30",
    name: CategoriaEspecies.MEDUSA,
    description:
      "Son invertebrados marinos de cuerpo gelatinoso y tentáculos que contienen células urticantes. Pueden ser bioluminiscentes.",
    commonAnimals: ["Medusas"],
    colorHex: "especie-900",
  },
  {
    // id: "m6h9g1i8-9e9j-7f0k-97l7-6h0i2j3k3l40",
    name: CategoriaEspecies.INVERTEBRADO,
    description:
      "Son animales que no tienen columna vertebral. Incluyen una gran variedad de especies, como insectos, moluscos, y crustáceos.",
    commonAnimals: ["Mariposa", "Abeja", "Cangrejo", "Pulpo", "Caracol"],
    colorHex: "especie-950",
  },
];

export const zooAnimals = [
  {
    // id: "1f21b15c-2914-4d4a-8bdc-8485c99e26a1",
    name: "León",
    description:
      "El rey de la selva, conocido por su melena y rugido imponente.",
    habitatType: HabitatType.ZOO,
    category: CategoriaEspecies.MAMIFERO,
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261576/leonCard_flwbvo.png",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261573/leonSlider1_vcqy4g.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261573/leonSlider2_syatpt.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261562/leonSlider3_mcpego.jpg",
    ],
  },
  {
    // id: "2f21b15c-2914-4d4a-8bdc-8485c99e26a2",
    name: "Tigre de Bengala",
    description: "El felino más grande del mundo, con un pelaje rayado único.",
    habitatType: HabitatType.ZOO,
    category: CategoriaEspecies.MAMIFERO,
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261573/tigreCard_kmj024.png",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261574/tigreSlider1_g0iryn.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261561/tigreSlider2_ka2ktf.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261560/tigreSlider3_nxixzb.webp",
    ],
  },
  {
    // id: "3f21b15c-2914-4d4a-8bdc-8485c99e26a3",
    name: "Elefante Africano",
    description:
      "El mamífero terrestre más grande, con orejas enormes y colmillos.",
    habitatType: HabitatType.ZOO,
    category: CategoriaEspecies.MAMIFERO,
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261561/elefanteCard_aygxnj.png",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261560/elefanteslider2_jhp3l0.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261549/elefanteSlider1_o52cnj.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261549/elefanteSlider3_vhd6z1.jpg",
    ],
  },
  {
    // id: "4f21b15c-2914-4d4a-8bdc-8485c99e26a4",
    name: "Jirafa",
    description: "El animal terrestre más alto, conocido por su largo cuello.",
    habitatType: HabitatType.ZOO,
    category: CategoriaEspecies.MAMIFERO,
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261563/girafaCard_lyvham.webp",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261549/jirafasSlider3_idr9po.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261549/jirafaSlider2_kerrth.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261546/jirafaSlider1_dix18d.jpg",
    ],
  },
  {
    // id: "5f21b15c-2914-4d4a-8bdc-8485c99e26a5",
    name: "Oso Pardo",
    description: "Un poderoso depredador omnívoro con un espeso pelaje marrón.",
    habitatType: HabitatType.ZOO,
    category: CategoriaEspecies.MAMIFERO,
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261572/osoPardoCard_kavthq.png",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261538/osoPardoSlider1_cczfai.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261535/osoPardoSlider2_jmwipt.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261534/osoPardoSlider3_dhiqpu.jpg",
    ],
  },
  {
    // id: "6f21b15c-2914-4d4a-8bdc-8485c99e26a6",
    name: "Cocodrilo del Nilo",
    description: "Un reptil formidable que habita ríos y lagos.",
    habitatType: HabitatType.ZOO,
    category: CategoriaEspecies.REPTIL,
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261534/cocodriloCard_cqr1jl.png",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261528/cocodriloSlider3_ihdqlq.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261536/cocodriloSlider1_hcyb1a.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261534/cocodriloSlider2_sbcxrv.jpg",
    ],
  },
  {
    // id: "7f21b15c-2914-4d4a-8bdc-8485c99e26a7",
    name: "Serpiente Pitón",
    description:
      "Un reptil no venenoso conocido por su capacidad de constricción.",
    habitatType: HabitatType.ZOO,
    category: CategoriaEspecies.REPTIL,
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261572/serpienteCard_mluc3i.png",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261527/serpienteSlider2_iv8g37.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261528/serpienteSlider3_qpmarp.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261528/serpienteSlider1_pqmceg.jpg",
    ],
  },
  {
    // id: "8f21b15c-2914-4d4a-8bdc-8485c99e26a8",
    name: "Camaleón",
    description: "Un reptil famoso por su capacidad de cambiar de color.",
    habitatType: HabitatType.ZOO,
    category: CategoriaEspecies.REPTIL,
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261539/camaleonCard_e91ijf.webp",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261522/camaleonSlider1_qc1igb.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261521/camaleonSlider3_qqnoav.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261527/camaleonSlider2_jambl7.jpg",
    ],
  },
  {
    // id: "9f21b15c-2914-4d4a-8bdc-8485c99e26a9",
    name: "Águila Real",
    description: "Un ave rapaz majestuosa con una envergadura impresionante.",
    habitatType: HabitatType.ZOO,
    category: CategoriaEspecies.AVE,
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261521/aguilaCard_bkcrlw.png",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261519/aguilaSlider1_ndwuzb.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261519/aguilaSlider2_mvwku1.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261518/aguilaSlider3_mtqr7u.jpg",
    ],
  },
  {
    // id: "10f21b15c-2914-4d4a-8bdc-8485c99e26a10",
    name: "Pingüino Emperador",
    description:
      "Un ave no voladora que habita en climas fríos y se desliza sobre hielo.",
    habitatType: HabitatType.ZOO,
    category: CategoriaEspecies.AVE,
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261518/pinguinoCard_cavnmj.png",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261516/pinguinoSlider1_l7ftiw.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261515/pinguinoSlider3_kdximi.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261516/pinguinoSlider2_vt815b.jpg",
    ],
  },
  {
    // id: "11f21b15c-2914-4d4a-8bdc-8485c99e26a11",
    name: "Flamenco",
    description: "Un ave alta con plumas rosadas y patas largas.",
    habitatType: HabitatType.ZOO,
    category: CategoriaEspecies.AVE,
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261515/flamengoCard_mfahlb.png",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261514/flamengoSlider1_barwv4.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261513/flamengoSlider2_ppit6s.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261513/flamengoSlider3_bml6p2.jpg",
    ],
  },
  {
    // id: "12f21b15c-2914-4d4a-8bdc-8485c99e26a12",
    name: "Guacamayo Azul",
    description: "Un loro colorido con plumaje azul brillante.",
    habitatType: HabitatType.ZOO,
    category: CategoriaEspecies.AVE,
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261512/guacamayoAzulCard_qe4hzr.png",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261511/guacamayoAzulSlider1_xeednd.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261510/guacamayoAzulSlider2_azl9c6.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261510/guacamayoAzulSlider3_hkubyu.jpg",
    ],
  },
  {
    // id: "13f21b15c-2914-4d4a-8bdc-8485c99e26a13",
    name: "Mariposa Monarca",
    description:
      "Un insecto migratorio conocido por sus llamativas alas naranjas y negras.",
    habitatType: HabitatType.ZOO,
    category: CategoriaEspecies.INSECTO,
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261510/monarcaCard_soi7n8.png",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261508/monarcaSlider1_tpyyvo.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261508/monarcaSlider2_puja5a.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261507/monarcaSlider3_tvo2jl.jpg",
    ],
  },
  {
    // id: "14f21b15c-2914-4d4a-8bdc-8485c99e26a14",
    name: "Escarabajo Hércules",
    description: "Un insecto fuerte con un gran cuerno en el caparazón.",
    habitatType: HabitatType.ZOO,
    category: CategoriaEspecies.INSECTO,
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261507/escarabajoHerculesCard_ho8oib.png",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261506/escarabajoHerculesSlider1_lye2tf.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261505/escarabajoHerculesSlider3_nlyvgj.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261505/escarabajoHerculesSlider2_dfmuls.jpg",
    ],
  },
  {
    // id: "15f21b15c-2914-4d4a-8bdc-8485c99e26a15",
    name: "Rana Dardo Venenosa",
    description: "Un anfibio colorido que segrega toxinas en su piel.",
    habitatType: HabitatType.ZOO,
    category: CategoriaEspecies.ANFIBIO,
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261504/ranaVenenosaCard_f5pd3n.png",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261503/ranaVenenosaSlider1_vnsesy.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261502/ranaVenenosaSlider2_rxoqbi.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261502/ranaVenenosaSlider3_zubh0m.jpg",
    ],
  },
  {
    // id: "16f21b15c-2914-4d4a-8bdc-8485c99e26a16",
    name: "Salamandra Gigante",
    description: "Un anfibio acuático de gran tamaño y piel resbaladiza.",
    habitatType: HabitatType.ZOO,
    category: CategoriaEspecies.ANFIBIO,
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261501/salamandraCard_bbysll.png",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261501/salamandraSlider1_hhswsk.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261500/salamandraSlider2_eqwam2.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261499/salamandraSlider3_zrda0a.jpg",
    ],
  },
  {
    // id: "17f21b15c-2914-4d4a-8bdc-8485c99e26a17",
    name: "Cebra",
    description: "Un mamífero herbívoro con un distintivo pelaje rayado.",
    habitatType: HabitatType.ZOO,
    category: CategoriaEspecies.MAMIFERO,
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261499/cebraCard_horip7.png",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261498/cebraSlider2_r5n8om.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261498/cebraSlider1_cfpkvm.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261497/cebraSlider3_nwzzjq.jpg",
    ],
  },
  {
    // id: "18f21b15c-2914-4d4a-8bdc-8485c99e26a18",
    name: "Gorila de Montaña",
    description: "Un primate fuerte y social que vive en selvas montañosas.",
    habitatType: HabitatType.ZOO,
    category: CategoriaEspecies.MAMIFERO,
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261498/gorilaCard_ks6i87.png",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261495/gorilaSlide1_xr9pvj.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261495/gorilaSlide2_zwa72c.webp",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261494/gorilaSlide3_g2iyyi.jpg",
    ],
  },
  {
    // id: "19f21b15c-2914-4d4a-8bdc-8485c99e26a19",
    name: "Rinoceronte Blanco",
    description: "Un mamífero grande con piel gruesa y un cuerno prominente.",
    habitatType: HabitatType.ZOO,
    category: CategoriaEspecies.MAMIFERO,
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261494/rinoceronteCard_qxt7ve.png",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261493/rinoceronteSlide1_f4fx3r.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261493/rinoceronteSlide2_n5w1eh.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261492/rinoceronteSlide3_anuk6k.jpg",
    ],
  },
  {
    // id: "20f21b15c-2914-4d4a-8bdc-8485c99e26a20",
    name: "Lémur de Cola Anillada",
    description:
      "Un primate pequeño conocido por su cola a rayas y comportamiento social.",
    habitatType: HabitatType.ZOO,
    category: CategoriaEspecies.MAMIFERO,
    images: [
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261492/lemurCard_eriyev.png",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261491/lemurSlide3_qgkeqo.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261491/lemurSlide1_d031ho.jpg",
      "https://res.cloudinary.com/dmgl1fqth/image/upload/v1735261491/lemurSlide2_faorjx.jpg",
    ],
  },
];

export const aquariumAnimals = [
  {
    // id: "1a8c1c2a-2914-4d4a-8bdc-8485c99e26a1",
    name: "Pez Payaso",
    description:
      "Un pequeño pez tropical conocido por su simbiosis con las anémonas.",
    habitatType: HabitatType.ACUARIO,
    category: CategoriaEspecies.PEZDULCE,
    images: [
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283868/pezPayasoCard_okzouh.webp",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283866/pezPayasoSlider3_b7fblv.jpg",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283865/pezPayasoSlider2_pb2qsq.jpg",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283865/pezPayasoSlider1_nkifif.jpg",
    ],
  },
  {
    // id: "2b9d2c3b-2914-4d4a-8bdc-8485c99e26a2",
    name: "Tiburón Gris de Arrecife",
    description:
      "Un tiburón ágil y de tamaño mediano que habita en los arrecifes de coral.",
    habitatType: HabitatType.ACUARIO,
    category: CategoriaEspecies.PEZDULCE,
    images: [
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283865/tiburonGrisCard_axflpe.webp",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283863/tiburonGrisSlider1_suysbc.jpg",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283863/tiburonGrisSlider3_uvl23b.jpg",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283863/tiburonGrisSlider2_crmnrl.jpg",
    ],
  },
  {
    // id: "3c9e3d4c-2914-4d4a-8bdc-8485c99e26a3",
    name: "Manta Raya",
    description:
      "Un pez cartilaginoso de gran tamaño que parece volar bajo el agua.",
    habitatType: HabitatType.ACUARIO,
    category: CategoriaEspecies.PEZDULCE,
    images: [
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283863/mantaRayaCard_xfjokk.png",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283862/mantaRayaSlide2_igmtxz.jpg",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283862/mantaRayaSlide1_zlpvx8.jpg",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283861/mantaRayaSlide3_cxm7yj.jpg",
    ],
  },
  {
    // id: "4d9f4e5d-2914-4d4a-8bdc-8485c99e26a4",
    name: "Pulpo Común",
    description:
      "Un molusco inteligente conocido por su capacidad de camuflaje.",
    habitatType: HabitatType.ACUARIO,
    category: CategoriaEspecies.MOLUSCO,
    images: [
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283865/pulpoCard_syffkk.png",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283861/pulpoSlide1_jgonve.jpg",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283861/pulpoSlide3_boivbl.jpg",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283860/pulpoSlide2_pd1lpx.webp",
    ],
  },
  {
    // id: "5e9g5f6e-2914-4d4a-8bdc-8485c99e26a5",
    name: "Medusa Luna",
    description: "Una medusa translúcida que brilla bajo ciertas luces.",
    habitatType: HabitatType.ACUARIO,
    category: CategoriaEspecies.MEDUSA,
    images: [
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283860/medusaCard_xd92xw.png",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283859/medusaSlide1_fpdpip.jpg",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283859/medusaSlide2_xwejvl.jpg",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283859/medusaSlide3_xpmyos.jpg",
    ],
  },
  {
    // id: "6f9h6g7f-2914-4d4a-8bdc-8485c99e26a6",
    name: "Cangrejo Ermitaño",
    description:
      "Un crustáceo que vive en conchas vacías para proteger su cuerpo blando.",
    habitatType: HabitatType.ACUARIO,
    category: CategoriaEspecies.CRUSTACEO,
    images: [
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283864/cangrejoCard_les5w8.png",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283859/cangrejoSlide1_jivoep.jpg",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283857/cangrejoSlide3_pko10c.jpg",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283857/cangrejoSlide2_hoywzb.jpg",
    ],
  },
  {
    // id: "7g9i7h8g-2914-4d4a-8bdc-8485c99e26a7",
    name: "Anémona Gigante",
    description: "Un invertebrado marino con tentáculos urticantes.",
    habitatType: HabitatType.ACUARIO,
    category: CategoriaEspecies.ANEMONA,
    images: [
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283860/anemonaCard_u4toiz.png",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283858/anemonaSlide3_yo7uwx.jpg",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283856/anemonaSlide1_q14bqp.jpg",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283856/anemonaSlide2_iu6gi4.jpg",
    ],
  },
  {
    // id: "8h9j8i9h-2914-4d4a-8bdc-8485c99e26a8",
    name: "Estrella de Mar",
    description: "Un equinodermo que puede regenerar sus brazos.",
    habitatType: HabitatType.ACUARIO,
    category: CategoriaEspecies.INVERTEBRADO,
    images: [
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735284299/estrellademarcard_ikowtu.png",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283856/estrelladeMarSlide1_swjnc9.webp",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283856/estrelladeMarSlide2_msavqa.jpg",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283855/estrelladeMarSlide3_ggac4u.jpg",
    ],
  },
  {
    // id: "9i9k9j0i-2914-4d4a-8bdc-8485c99e26a9",
    name: "Caballito de Mar",
    description:
      "Un pez pequeño y único conocido por su forma y comportamiento de crianza.",
    habitatType: HabitatType.ACUARIO,
    category: CategoriaEspecies.PEZSALADO,
    images: [
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283856/caballitodeMarCard_g6v4ik.png",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283854/caballitodeMarSlide1_djfytz.jpg",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283853/caballitodeMarSlide3_a4dhc0.jpg",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283864/caballitodeMarSlide2_pjaaa2.png",
    ],
  },
  {
    // id: "10j9l10k-2914-4d4a-8bdc-8485c99e26a10",
    name: "Pez Ángel",
    description:
      "Un pez de colores brillantes que habita en arrecifes tropicales.",
    habitatType: HabitatType.ACUARIO,
    category: CategoriaEspecies.PEZSALADO,
    images: [
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283857/pezAngelCard_pguqp4.png",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283853/pezAngelSlide3_ekobk5.jpg",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283853/pezAngelSlide2_ou4o7m.jpg",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283853/pezAngelSlide1_exmacy.jpg",
    ],
  },
  {
    // id: "11k9m11l-2914-4d4a-8bdc-8485c99e26a11",
    name: "Tiburón Martillo",
    description: "Un tiburón conocido por la forma única de su cabeza.",
    habitatType: HabitatType.ACUARIO,
    category: CategoriaEspecies.PEZSALADO,
    images: [
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283853/tiburonMartilloCard_b3ekew.png",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283851/tiburonMartilloSlide2_hrfqej.webp",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283850/tiburonMartilloSlide1_lnh4ez.jpg",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283849/tiburonMartilloSlide3_hm9ty8.webp",
    ],
  },
  {
    // id: "12l9n12m-2914-4d4a-8bdc-8485c99e26a12",
    name: "Pez Globo",
    description: "Un pez que se infla como mecanismo de defensa.",
    habitatType: HabitatType.ACUARIO,
    category: CategoriaEspecies.PEZSALADO,
    images: [
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283849/pezGloboCard_vjzhq6.png",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283848/pezGloboSlide3_fsktt7.gif",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283848/pezGloboSlide1_vg867a.jpg",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283847/pezGloboSlide2_gju8tv.jpg",
    ],
  },
  {
    // id: "13m9o13n-2914-4d4a-8bdc-8485c99e26a13",
    name: "Caracol Marino",
    description: "Un molusco de cuerpo blando protegido por una concha.",
    habitatType: HabitatType.ACUARIO,
    category: CategoriaEspecies.MOLUSCO,
    images: [
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283853/caracolMarinoCard_vrvhfm.png",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283846/caracolMarinoSlide1_jqexau.jpg",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283845/caracolMarinoSlide3_m87ocf.jpg",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283845/caracolMarinoSlide2_kuuumj.jpg",
    ],
  },
  {
    // id: "14n9p14o-2914-4d4a-8bdc-8485c99e26a14",
    name: "Langosta Espinosa",
    description: "Un crustáceo marino grande y colorido sin pinzas.",
    habitatType: HabitatType.ACUARIO,
    category: CategoriaEspecies.CRUSTACEO,
    images: [
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283846/langostaCard_mxqskk.png",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283844/langostaSlide1_yb6rcs.jpg",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283844/langostaSlide2_bf2jic.jpg",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283844/langostaSlide3_ag7su1.jpg",
    ],
  },
  {
    // id: "15o9q15p-2914-4d4a-8bdc-8485c99e26a15",
    name: "Pez León",
    description: "Un pez venenoso con aletas largas y rayas llamativas.",
    habitatType: HabitatType.ACUARIO,
    category: CategoriaEspecies.PEZDULCE,
    images: [
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283843/PezLeonCard_eumgpb.png",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283843/PezLeonSlide2_cc2msv.jpg",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283843/PezLeonSlide1_jxdpdb.jpg",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283842/PezLeonSlide3_amhdwh.jpg",
    ],
  },
  {
    // id: "16p9r16q-2914-4d4a-8bdc-8485c99e26a16",
    name: "Tortuga Marina",
    description:
      "Un reptil que habita en mares y pone huevos en playas arenosas.",
    habitatType: HabitatType.ACUARIO,
    category: CategoriaEspecies.REPTIL,
    images: [
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283843/TortugaMarinaCard_naxy7a.png",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283842/TortugaMarinaSlide2_wr7frw.jpg",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283842/TortugaMarinaSlide1_dvh3jw.jpg",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283853/TortugaMarinaSlide3_ulxzso.jpg",
    ],
  },
  {
    // id: "17q9s17r-2914-4d4a-8bdc-8485c99e26a17",
    name: "Erizo de Mar",
    description: "Un invertebrado marino cubierto de púas móviles.",
    habitatType: HabitatType.ACUARIO,
    category: CategoriaEspecies.INVERTEBRADO,
    images: [
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283854/ErizodeMarCard_ie9mdu.png",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283841/ErizodeMarSlide1_hg5oxc.jpg",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283841/ErizodeMarSlide2_yt3hgg.jpg",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283841/ErizodeMarSlide3_c4mlul.jpg",
    ],
  },
  {
    // id: "18r9t18s-2914-4d4a-8bdc-8485c99e26a18",
    name: "Delfín Mular",
    description: "Un mamífero marino inteligente y juguetón.",
    habitatType: HabitatType.ACUARIO,
    category: CategoriaEspecies.MAMIFERO,
    images: [
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283853/Delf%C3%ADnCard_mzjg74.webp",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283841/Delf%C3%ADnSlide1_eikozm.jpg",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283841/Delf%C3%ADnSlide2_kw0bef.jpg",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283839/Delf%C3%ADnSlide3_pjwbnn.jpg",
    ],
  },
  {
    // id: "19s9u19t-2914-4d4a-8bdc-8485c99e26a19",
    name: "Foca Común",
    description:
      "Un mamífero marino que nada ágilmente y descansa en costas rocosas.",
    habitatType: HabitatType.ACUARIO,
    category: CategoriaEspecies.MAMIFERO,
    images: [
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283840/FocaCard_roq2w4.png",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283840/FocaSlide1_nu4s7q.jpg",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283838/FocaSlide3_imf7ww.jpg",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283838/FocaSlide2_cdfafz.jpg",
    ],
  },
  {
    // id: "20t9v20u-2914-4d4a-8bdc-8485c99e26a20",
    name: "Tiburón Ballena",
    description:
      "El pez más grande del océano, inofensivo y filtrador de plancton.",
    habitatType: HabitatType.ACUARIO,
    category: CategoriaEspecies.PEZDULCE,
    images: [
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283838/Tibur%C3%B3nBallenaCard_eqdwg6.png",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283838/Tibur%C3%B3nBallenaSlide2_igcnwt.jpg",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283838/Tibur%C3%B3nBallenaSlide3_d7tos8.jpg",
      "https://res.cloudinary.com/dpsmkqc8v/image/upload/v1735283838/Tibur%C3%B3nBallenaSlide1_iix9m1.jpg",
    ],
  },
];
