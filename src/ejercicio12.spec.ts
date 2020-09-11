import axios from 'axios';
import MockDate from 'mockdate';

import { getConductorFromPlaca } from './ejercicio12';

jest.mock('axios');

describe(`ejercicio 12`, () => {

    let consoleSpy: any;
    let date;
    beforeEach(() => {
        jest.mock('axios');
        date = new Date();
        MockDate.set(date);
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
        MockDate.reset();
        consoleSpy.mockRestore();
    })

    describe(`casos inválidos`, () => {
        it(`imprime en consola el msg de error cuando hay error de promesas`, async () => {

            const mockedAxios = axios as jest.Mocked<typeof axios>;
            const time = new Date().toTimeString().split(" ")[0];
            mockedAxios.get.mockReturnValue(Promise.reject(new Error('la llamada falló')));

            await getConductorFromPlaca('D0Q643');
    
            expect(consoleSpy).toHaveBeenCalledTimes(1);
            expect(consoleSpy).toHaveBeenLastCalledWith(time + ' - ' + 'Error: la llamada falló');
    
        });
    });

    describe(`casos válidos`, () => {
        it(`imprime en consola el response de getConductor {name, dni, sexo}`, async () => {

            const mockedAxios = axios as jest.Mocked<typeof axios>;
            mockedAxios.get.mockImplementation(url => {
                switch (url) {
                    case '/path/to/api/placa':
                        return Promise.resolve({data: {
                            pais: "Perú",
                            dniConductor: "43887261"
                        }});
                    case '/path/to/api/conductor':
                        return Promise.resolve({data: {
                            name: "Dolores Fuertes",
                            dni: "43887261",
                            sexo: "F"
                        }});
                    default:
                        return Promise.reject(new Error('not found'));
                }
            });

            await getConductorFromPlaca('D0Q643');

            expect(consoleSpy).toHaveBeenCalledTimes(1);
            expect(consoleSpy).toHaveBeenLastCalledWith({
                name: "Dolores Fuertes",
                dni: "43887261",
                sexo: "F"
            });
        });
    });
});
