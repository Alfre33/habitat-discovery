export function normalizeString(str: string) {
    // Convertir a minúsculas
    str = str.toLowerCase();
    // Reemplazar caracteres con acento
    str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    // Reemplazar espacios por guiones bajos
    str = str.replace(/\s+/g, "_");
    // Eliminar caracteres especiales
    str = str.replace(/[^\w_]/g, "");
    return str;
  }