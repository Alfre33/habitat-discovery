import { HabitatType } from "./types.interface";

export interface Animal {
    id: string;
    name: string;
    category: string;
    imgs: string[];
    habitatId: string;
    habitatType: HabitatType;
  }