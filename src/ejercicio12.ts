type GetPlacaCollaborator<T> = (nroPlaca: string) => Promise<T>;
type GetConductorCollaborator<T> = (dniConductor: string) => Promise<T>;

export const getConductorFromPlaca = async (nroPlaca: string,
                                            getPlacaCollaborator: GetPlacaCollaborator<Response>,
                                            getConductorCollaborator: GetConductorCollaborator<Response>) => {

    try {
        const getPlacaCollaboratorRes = await getPlacaCollaborator(nroPlaca);
        const placaRes = await handleResponse(getPlacaCollaboratorRes);
        
        if (placaRes.error) {
            throw placaRes.error;
        }

        if (!placaRes.response.dniConductor) {
            throw 'No se encuentra el dni del conductor';
        }

        const getConductorRes = await getConductorCollaborator(placaRes.response.dniConductor);
        const conductorRes = await handleResponse(getConductorRes);
        
        if (conductorRes.error) {
            throw conductorRes.error;
        }

        console.log(conductorRes.response);

    } catch (error) {
        handleErrors(error);
   }
};

const handleResponse = async (res: Response) => {
    let error;

    if (res.status === 500) {
        return { error: 'Server error'};
    }
    
    const body = await res.json();

    if (!body.response) {
        error = 'el body del response está vacío'

    } else if (body.response.error) {
        error = body.response.error;
    }
        
    return {
        error,
        response: body.response
    };
};

const handleErrors = (error: Error) => {
    const time = new Date().toTimeString().split(" ")[0];
    console.log(time + ' - ' + error);
};
