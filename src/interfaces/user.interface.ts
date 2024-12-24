import { Habitat } from "./Habitat.interface";
import { Role } from "./types.interface";

export interface User {
    id?: string;
    name: string;
    lastname: string;
    role: Role;
    email: string;
    passwordHash: string;
    habitat?: Habitat; // Opcional
  }

  