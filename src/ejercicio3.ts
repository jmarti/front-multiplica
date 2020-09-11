import { readFileSync } from "fs";

type ConfigRule = (value: any) => any;
type RuleMapper = Record<string, ConfigRule>;
type ConfigObject = Record<string, any>;


const readConfig = (ruta: string): ConfigObject => {

    const validatePort: ConfigRule = (portNumber: any) => parseInt(portNumber) || 6969;
    // por simular que se tienen mas reglas para más elementos de la configuracion
    const validateHost: ConfigRule = (host: any) => '127.0.0.1';
    const validateUsername: ConfigRule = (username: any) => 'jordi';

    const fieldRules: RuleMapper = {
        puerto: validatePort,
        host: validateHost,
        username: validateUsername,
    }

    const readConfigFile = (ruta: string): ConfigObject => {
        try {
            const config = readFileSync(ruta);
            return JSON.parse(config.toString());
        } catch {
            return {};
        }
    }

    const configObject = readConfigFile(ruta);

    const validEntries = Object.entries(fieldRules)
        .map(([name, validation]) => {
            return {[name]: validation(configObject[name])};
        })
        .filter(e => e);

    return Object.assign({}, ...validEntries);
};


export const readPort = (ruta: string): any => {
    return readConfig(ruta).puerto;
};
