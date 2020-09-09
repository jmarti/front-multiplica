export const bebidas: string[] = [
    'agua de jamaica',
    'limonada',
    'fanta',
    'cerveza',
    'kerosene',
    'gasolina',
    'chicharra',
    'pisco',
    'punto g',
    'ron',
    'leche',
    'quaker',
    'guarana'
];

export const func = (codigo: string) => {
    if (!/^codigo\d+$/.test(codigo)) {
        return bebidas[0]
    };

    const idx = parseInt(codigo.substring(6));

    if (typeof bebidas[idx] === 'undefined') {
        return bebidas[0];
    }
    
    return bebidas[idx];
};
