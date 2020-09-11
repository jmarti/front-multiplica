import axios from 'axios';


export const getConductorFromPlaca = async (nroPlaca: string) => {
    try {
        const dniConductor = await getPlaca(nroPlaca);
        const conductor = await getConductor(dniConductor);
        console.log(conductor);
    } catch (error) {
        handleErrors(error);
    }
}


const getConductor = async (dniConductor: string) => {

    try {
        const response = await axios.get('/path/to/api/conductor', {
            params: { dniConductor }
        });
        return response.data;

    } catch (error) {
        throw error;
    }
};

const getPlaca = async (nroPlaca: string) => {

    try {
        const response = await axios.get('/path/to/api/placa', {
            params: { nroPlaca }
        });
        return response.data;
        
    } catch (error) {
        throw error;
    }
};

const handleErrors = (error: Error) => {
    const time = new Date().toTimeString().split(" ")[0];
    console.log(time + ' - ' + error);
}
