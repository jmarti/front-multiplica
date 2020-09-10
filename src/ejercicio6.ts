interface Persona {
  name: string;
  donacion: boolean;
  esposas: string[];
}


export const getPersona = (arrPersonas: Persona[], idx: number) => {
  
  const persona = arrPersonas[idx];

  if (typeof persona === 'undefined') {
    return {};
  }

  return {...persona, name: 'choy'};
}