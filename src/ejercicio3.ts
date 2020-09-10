import { readFileSync } from "fs";

export const readPort = (ruta: string): any => {
    const DEFAULT_PORT = 6969; 
    
    try {
        const config = readFileSync(ruta);
        const puerto = JSON.parse(config.toString()).puerto;

        if (typeof puerto === 'undefined') {
            throw new Error();
        }

        if (isNaN(puerto)) {
            throw new Error();
        }

        return parseInt(puerto);
    }
    
    catch {
        return DEFAULT_PORT;
    }
};