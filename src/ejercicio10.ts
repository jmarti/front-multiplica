interface Persona {
    name: string;
    donacion: boolean;
    esposas: string[];
};

export const func = (personas: Persona[]) => {
    return personas.filter(p => {
        
        if (!p.donacion) return false;

        if (!(p.esposas.length > 0)) return false;

        for (let esposa of p.esposas) {
            const inicialEsposa = esposa.charAt(0);
            
            if (inicialEsposa === 'Y' || inicialEsposa === 'N') {
                return true;
            }
        }

        return false;
    
    });
};