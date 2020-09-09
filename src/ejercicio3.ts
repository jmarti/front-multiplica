import { readFile } from "fs";

export const readPort = (ruta: string): Promise<number> => {
    const DEFAULT_PORT = 6969; 
    
    return cargaJson(ruta)
        .then((res: any) => {
            const config = JSON.parse(res.toString());
            if (typeof config.puerto === 'undefined') {
                return DEFAULT_PORT;
            }
            
            if (isNaN(config.puerto)) {
                return DEFAULT_PORT;
            }

            return parseInt(config.puerto);
        })
        .catch(() => {
            return DEFAULT_PORT;
        });
};

const cargaJson = (ruta: string) => {
    return new Promise((resolve, reject) => {
        readFile(ruta, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
};