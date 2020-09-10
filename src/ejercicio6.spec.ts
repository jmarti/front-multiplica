import { getPersona } from './ejercicio6';

describe(`ejercicio 6`, () => {
    const arrPersonas = [
        {
            name: 'Pepe',
            donacion: true,
            esposas: ['Rosangela', 'Mayte']
        },
        {
            name: 'Juan',
            donacion: false,
            esposas: ['Yahaira']
        },
        {
            name: 'Lalo',
            donacion: true,
            esposas: []
        }
    ];

    it(`devuelve objeto vacío si el index no existe`, () => {
        
        const result = getPersona(arrPersonas, 10);

        expect(result).toStrictEqual({});
    });

    it(`devuelve el objeto que esté en la posición del array con el attributo 'name' con valor 'choy'`, () => {
        const result = getPersona(arrPersonas, 0);
        
        expect(result).toEqual({
            name: 'choy',
            donacion: true,
            esposas: ['Rosangela', 'Mayte']
        });
    });

    it('arrPersonas no ha sido modificado', () => {

        const freshArrPersonas = arrPersonas.map(p => ({...p}));
        
        getPersona([], 0);

        expect(arrPersonas).toEqual(freshArrPersonas);
    });
});
