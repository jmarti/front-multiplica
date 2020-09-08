export let arrPersonas = [
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
  ]
  

export const func = (idx: number) => {

    if (typeof arrPersonas[idx] === 'undefined') {
        return {};
    }

    return {...arrPersonas[idx], name: 'choy'};
}