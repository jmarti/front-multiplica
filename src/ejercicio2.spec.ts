import { func, collaborator } from './ejercicio2';


describe(`ejercicio 2`, () => {
    it(`Devuelve el resultado devuelto por el colaborador`, async () => {
        const fastCollaborator: collaborator = () => Promise.resolve("hello");

        const result = await func(fastCollaborator);
        
        expect(result).toBe("hello");
    });

    it(`Si el colaborador no resuelve en 3 segundos, se ignora su resultado`, async () => {
        const slowCollaborator: collaborator = () => {
            return new Promise((resolve, _) => {
                setTimeout(() => resolve("Hello after a long time"), 4000);
            });
        };

        const result = await func(slowCollaborator);
        
        expect(result).toBe("");
    });

    it(`Si el colaborador no resuelve en 3 segundos, console.log("La prome se demoró")`, async () => {
        const slowCollaborator: collaborator = () => {
            return new Promise((resolve, _) => {
                setTimeout(() => resolve("Hello after a long time"), 4000);
            });
        };

        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

        await func(slowCollaborator);

        expect(consoleSpy).toHaveBeenCalledTimes(1);
        expect(consoleSpy).toHaveBeenLastCalledWith("La prome se demoró");

        consoleSpy.mockRestore()
    });
});