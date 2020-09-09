import { readFile } from "fs";

export const func = (ruta: string) => {    
    return cargaJson(ruta)
        .then((res: any) => {
            const config = JSON.parse(res.toString());
            if (typeof config.puerto === 'undefined') {
                return 6969;
            }
            return config.puerto;
        })
        .catch(() => {
            return 6969;
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