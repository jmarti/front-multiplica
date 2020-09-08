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
];


export const func = (idx: number) => {
    
  const persona = getPersona(idx);

  if (typeof persona === 'undefined') {
      return {};
  }

  return {...persona, name: 'choy'};
}

export const getPersona = (idx: number) => {
  return arrPersonas[idx];
}