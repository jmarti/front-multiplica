interface Persona {
    name: string;
    edad: number;
};

export const func = (arrPersonas: Persona[], ...edadesExcluidas: number[]) => {
    
    return arrPersonas.reduce((nombres: string[], p) => {
        
        if (edadesExcluidas.some(edad => p.edad === edad)) {
            return [...nombres, p.name];
        }

        return nombres;
    }, []);
};
