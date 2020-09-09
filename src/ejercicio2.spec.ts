import { func, collaborator } from './ejercicio2';

jest.useFakeTimers();


describe(`ejercicio 2`, () => {
    it(`Devuelve el resultado devuelto por el colaborador`, async () => {
        const fastCollaborator: collaborator = () => Promise.resolve("hello");

        const result = await func(fastCollaborator);
        
        expect(result).toBe("hello");
    });

    describe('Si el colaborador no resuelve en 3 segundos', () => {
        const slowCollaborator: collaborator = () => {
            return new Promise((resolve, _) => {
                setTimeout(() => resolve("Hello after a long time"), 4000);
            });
        };

        let consoleSpy: any;

        beforeEach(() => {
            consoleSpy = jest.spyOn(console, 'log').mockImplementation();
        });

        afterEach(() => {
            consoleSpy.mockRestore();
        })

        it(`se ignora su resultado`, async () => {   
            const promise = func(slowCollaborator);

            jest.runAllTimers();
            
            expect(await promise).toBe("");
        });
    
        it(`La consola muestra el log "La prome se demoró"`, async () => {

            const promise = func(slowCollaborator);
            jest.runAllTimers();
    
            expect(consoleSpy).toHaveBeenCalledTimes(1);
            expect(consoleSpy).toHaveBeenLastCalledWith("La prome se demoró");
    
            await promise;

        });
    })
});