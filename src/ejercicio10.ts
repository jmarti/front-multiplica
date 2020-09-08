interface Persona {
    name: string;
    donacion: boolean;
    esposas: string[];
};

export const func = (personas: Persona[]) => {
    return personas.reduce((nombres: string[], p) => {
        
        if (!p.donacion) return nombres;

        if (!(p.esposas.length > 0)) return nombres;

        for (let esposa of p.esposas) {
            const inicialEsposa = esposa.charAt(0);
            
            if (inicialEsposa === 'Y' || inicialEsposa === 'N') {
                return [...nombres, p.name];
            }
        }

        return nombres;
    
    }, []);
};