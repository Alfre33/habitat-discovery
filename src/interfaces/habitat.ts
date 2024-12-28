import { CategoriaEspecies, HabitatType } from "@prisma/client";

export interface HabitatResponse {
  id: string;
  name: string;
  type: HabitatType;
  slug: string;
  description: string;
  logo: string | null;
  userId: string;
  categories: CategoriaEspecies[];
  AddressHabitat: AddressHabitat |null;
  ImageInstalaciones: ImageInstalacione[];
}

export interface AddressHabitat {
  id: string;
  street: string;
  state: string;
  city: string;
  country: string;
  PostalCode: string;
  habitatId: string;
}

// export enum Country {
//     México = "México",
// }

export interface ImageInstalacione {
  id: string;
  url: string;
  habitatId: string;
}

export enum Category {
  Crustaceo = "CRUSTACEO",
  Medusa = "MEDUSA",
  Molusco = "MOLUSCO",
  Pezdulce = "PEZDULCE",
  Pezsalado = "PEZSALADO",
}

export enum Type {
  ACUARIO = "ACUARIO",
  ZOO = "ZOO",
}
