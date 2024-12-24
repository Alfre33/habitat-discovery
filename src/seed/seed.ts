import bcryptjs from "bcryptjs";
import { User } from "../interfaces/user.interface";
import { HabitatType, Role } from "../interfaces/types.interface";
import { Habitat } from "../interfaces/Habitat.interface";

export const users: User[] = [
  {
    //   id: "u1",
    name: "Alice",
    lastname: "Smith",
    role: Role.ADMIN,
    email: "alice.admin@example.com",
    passwordHash: bcryptjs.hashSync("123456", 10),
  },
  {
    //   id: "u2",
    name: "Bob",
    lastname: "Brown",
    role: Role.USER,
    email: "bob.user@example.com",
    passwordHash: bcryptjs.hashSync("123456", 10),
  },
  {
    //   id: "u3",
    name: "Charlie",
    lastname: "Johnson",
    role: Role.USER,
    email: "charlie.guest@example.com",
    passwordHash: bcryptjs.hashSync("123456", 10),
  },
  {
    //   id: "u4",
    name: "Diana",
    lastname: "Taylor",
    role: Role.USER,
    email: "diana.user@example.com",
    passwordHash: bcryptjs.hashSync("123456", 10),
  },
  {
    //   id: "u5",
    name: "Eve",
    lastname: "Davis",
    role: Role.ADMIN,
    email: "eve.admin@example.com",
    passwordHash: bcryptjs.hashSync("123456", 10),
  },
];

export const habitats: Habitat[] = [
  {
    name: "Acuario Inbursa",
    type: HabitatType.ACUARIO,
    location: "Ciudad de México",
    userId: "0adc83d4-2e2f-48c5-8c1d-2a45be4329a6",
    imgInstallations: ["", ""],
  },
  {
    name: "Acuario de Veracruz",
    type: HabitatType.ACUARIO,
    location: "Veracruz",
    userId: "58775199-6908-45b3-bec9-4f3b3f6639f2",
    imgInstallations: ["", ""],
  },
  {
    name: "Interactive Aquarium Cancún",
    type: HabitatType.ACUARIO,
    location: "Cancún",
    userId: "7bdba42d-45f0-4c98-bb52-d6626171395a",
    imgInstallations: ["", ""],
  },
  {
    name: "Zoológico de Chapultepec",
    type: HabitatType.ZOO,
    location: "Ciudad de México",
    userId: "8e2c9a55-9983-429d-8609-bf2f9242a6f0",
    imgInstallations: ["", ""],
  },
  {
    name: "Zoológico de Guadalajara",
    type: HabitatType.ZOO,
    location: "Guadalajara",
    userId: "dff23e3b-11f2-47c2-b366-ed14140b53fc",
    imgInstallations: ["", ""],
  },
];

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
    habitatType: "ACUARIO",
    habitatId: "1",
  },
  {
    name: "Delfín",
    category: "MAMMAL",
    description:
      "El delfín es conocido por su inteligencia y su habilidad para realizar acrobacias en el agua.",
    imgs: ["delfin1.jpg", "delfin2.jpg"],
    habitatType: "ACUARIO",
    habitatId: "1",
  },
  {
    name: "Pez Payaso",
    category: "FISH",
    description:
      "El pez payaso es famoso por su colorido patrón de rayas y su simbiosis con las anémonas.",
    imgs: ["pez_payaso1.jpg", "pez_payaso2.jpg"],
    habitatType: "ACUARIO",
    habitatId: "2",
  },
  {
    name: "Tortuga Marina",
    category: "REPTILE",
    description:
      "La tortuga marina es conocida por su capacidad para migrar largas distancias a través del océano.",
    imgs: ["tortuga_marina1.jpg", "tortuga_marina2.jpg"],
    habitatType: "ACUARIO",
    habitatId: "2",
  },
  {
    name: "Medusa",
    category: "INVERTEBRATE",
    description:
      "La medusa es conocida por su cuerpo gelatinoso y sus tentáculos venenosos.",
    imgs: ["medusa1.jpg", "medusa2.jpg"],
    habitatType: "ACUARIO",
    habitatId: "3",
  },
  {
    name: "Tiburón Martillo",
    category: "FISH",
    description:
      "El tiburón martillo es conocido por su cabeza en forma de T y su comportamiento social.",
    imgs: ["tiburon_martillo1.jpg", "tiburon_martillo2.jpg"],
    habitatType: "ACUARIO",
    habitatId: "3",
  },
  {
    name: "Caballito de Mar",
    category: "FISH",
    description:
      "El caballito de mar es conocido por su forma única y su capacidad para nadar verticalmente.",
    imgs: ["caballito_de_mar1.jpg", "caballito_de_mar2.jpg"],
    habitatType: "ACUARIO",
    habitatId: "4",
  },
  {
    name: "Orca",
    category: "MAMMAL",
    description:
      "La orca, también conocida como ballena asesina, es famosa por su habilidad para cazar en grupo y su inteligencia.",
    imgs: ["orca1.jpg", "orca2.jpg"],
    habitatType: "ACUARIO",
    habitatId: "4",
  },
  {
    name: "Estrella de Mar",
    category: "INVERTEBRATE",
    description:
      "La estrella de mar es conocida por su capacidad para regenerar sus brazos y su variedad de colores.",
    imgs: ["estrella_de_mar1.jpg", "estrella_de_mar2.jpg"],
    habitatType: "ACUARIO",
    habitatId: "5",
  },
  {
    name: "Pulpo",
    category: "INVERTEBRATE",
    description:
      "El pulpo es conocido por su inteligencia, su capacidad para cambiar de color y sus habilidades de escape.",
    imgs: ["pulpo1.jpg", "pulpo2.jpg"],
    habitatType: "ACUARIO",
    habitatId: "5",
  },
  {
    name: "Tiburón Tigre",
    category: "FISH",
    description:
      "El tiburón tigre es conocido por sus rayas oscuras en su cuerpo y su dieta variada.",
    imgs: ["tiburon_tigre1.jpg", "tiburon_tigre2.jpg"],
    habitatType: "ACUARIO",
    habitatId: "6",
  },
  {
    name: "Manatí",
    category: "MAMMAL",
    description:
      "El manatí es un mamífero marino grande y dócil conocido por su dieta herbívora y su comportamiento tranquilo.",
    imgs: ["manati1.jpg", "manati2.jpg"],
    habitatType: "ACUARIO",
    habitatId: "6",
  },
  {
    name: "Manta Raya",
    category: "FISH",
    description:
      "La manta raya es conocida por su gran tamaño y su capacidad para saltar fuera del agua.",
    imgs: ["manta_raya1.jpg", "manta_raya2.jpg"],
    habitatType: "ACUARIO",
    habitatId: "7",
  },
  {
    name: "Narval",
    category: "MAMMAL",
    description:
      "El narval es conocido por su largo colmillo en espiral y su vida en las aguas árticas.",
    imgs: ["narval1.jpg", "narval2.jpg"],
    habitatType: "ACUARIO",
    habitatId: "7",
  },
  {
    name: "Anguila Eléctrica",
    category: "FISH",
    description:
      "La anguila eléctrica es conocida por su capacidad para generar descargas eléctricas y su cuerpo alargado.",
    imgs: ["anguila1.jpg", "anguila2.jpg"],
    habitatType: "ACUARIO",
    habitatId: "8",
  },
  {
    name: "Beluga",
    category: "MAMMAL",
    description:
      "La beluga es conocida por su color blanco y su capacidad para emitir sonidos complejos.",
    imgs: ["beluga1.jpg", "beluga2.jpg"],
    habitatType: "ACUARIO",
    habitatId: "8",
  },
];

export const habitatsAcuarios=  [
    {
      "name": "Acuario Inbursa",
      "location": "Ciudad de México",
      "description": "El acuario más grande de México, ubicado en Nuevo Polanco, con 3,500 metros cuadrados de espacio de exhibición y 1.6 millones de litros de agua de mar.",
      "habitatType": "ACUARIO",
      "habitatId": "1"
    },
    {
      "name": "Acuario de Veracruz",
      "location": "Veracruz",
      "description": "El acuario más grande de América Latina por volumen de agua, con 7 millones de litros. Ubicado en el antiguo Playón de Hornos.",
      "habitatType": "ACUARIO",
      "habitatId": "2"
    },
    {
      "name": "Acuario Michin Puebla",
      "location": "Puebla",
      "description": "Uno de los acuarios más modernos de México, con una experiencia interactiva y diversas especies acuáticas.",
      "habitatType": "ACUARIO",
      "habitatId": "3"
    },
    {
      "name": "Acuario Alameda",
      "location": "Orizaba, Veracruz",
      "description": "Ofrece una variedad de peces y accesorios acuáticos en un entorno bien cuidado.",
      "habitatType": "ACUARIO",
      "habitatId": "4"
    },
    {
      "name": "Acuario Michin Guadalajara",
      "location": "Guadalajara",
      "description": "Un acuario moderno con una gran variedad de especies marinas y de agua dulce.",
      "habitatType": "ACUARIO",
      "habitatId": "5"
    },
    {
      "name": "Acuario Interactivo",
      "location": "Ciudad de México",
      "description": "Un acuario interactivo que permite a los visitantes aprender y participar en actividades con los animales.",
      "habitatType": "ACUARIO",
      "habitatId": "6"
    },
    {
      "name": "Acuario La Sirenita",
      "location": "Tehuacán, Puebla",
      "description": "Un acuario con una variedad de peces tropicales y una tienda de suministros acuáticos.",
      "habitatType": "ACUARIO",
      "habitatId": "7"
    },
    {
      "name": "Acuario de Acapulco",
      "location": "Acapulco",
      "description": "Un acuario que exhibe una variedad de especies marinas y ofrece actividades educativas.",
      "habitatType": "ACUARIO",
      "habitatId": "8"
    },
    {
      "name": "Acuario de Monterrey",
      "location": "Monterrey",
      "description": "Un acuario que ofrece una experiencia educativa y recreativa con diversas especies acuáticas.",
      "habitatType": "ACUARIO",
      "habitatId": "9"
    },
    {
      "name": "Acuario de Cancún",
      "location": "Cancún",
      "description": "Un acuario que exhibe especies marinas del Caribe y ofrece actividades interactivas.",
      "habitatType": "ACUARIO",
      "habitatId": "10"
    },
    {
      "name": "Acuario de Mazatlán",
      "location": "Mazatlán",
      "description": "Un acuario que ofrece una variedad de especies marinas y de agua dulce en un entorno recreativo.",
      "habitatType": "ACUARIO",
      "habitatId": "11"
    },
    {
      "name": "Acuario de Oaxaca",
      "location": "Oaxaca",
      "description": "Un acuario que exhibe especies locales y ofrece programas educativos para visitantes.",
      "habitatType": "ACUARIO",
      "habitatId": "12"
    }
  ]
  


