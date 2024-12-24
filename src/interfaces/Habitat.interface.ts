import { Animal } from "./animal.interface";
import { HabitatType } from "./types.interface";

  
 export interface Habitat {
    id?: string;
    name: string;
    type: HabitatType;
    location: string;
    imgInstallations: string[];
    userId: string;
    animals?: Animal[];
  }
  
