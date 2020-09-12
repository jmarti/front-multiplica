import { readFileSync } from 'fs';

import { formatearTrama } from './ejercicio7';

const raw = readFileSync('./src/trama-examen-fe-1.json', 'utf8');
const json = JSON.parse(raw);

describe(`ejercicio 7`, () => {
    it(`convierte los objetos del array a la trama definida`, () => {

        const tramaConFormato = formatearTrama(json);
        
        expect(tramaConFormato).toStrictEqual([
            {
                consumes: [ 'application/json' ],
                hasBodyOrQueryReq: true,
                hasBodyReq: false,
                hasParameters: true,
                hasPathReq: false,
                hasQueryReq: true,
                httpMethod: 'get',
                parameters: {
                    body: {
                        modelName: 'ReqBodyInformacionPersonal',
                        params: [],
                        isRequired: false
                    },
                    path: { modelName: 'ReqPathInformacionPersonal', params: [] },
                    query: {
                        modelName: 'ReqQueryInformacionPersonal',
                        params: [
                            {
                                name: 'tipoDocumento',
                                isRequired: true,
                                comma: false,
                                isBoolean: false,
                                isNumber: false,
                                isString: true
                            },
                            {
                                name: 'documento',
                                isRequired: true,
                                comma: true,
                                isBoolean: false,
                                isNumber: false,
                                isString: true
                            }
                        ]
                    }
                },
                path: '/areaPrivada/clientes/perfil/datosPersonales'
            },
            {
                consumes: [ 'application/json' ],
                hasBodyOrQueryReq: true,
                hasBodyReq: false,
                hasParameters: true,
                hasPathReq: false,
                hasQueryReq: true,
                httpMethod: 'get',
                parameters: {
                    body: {
                        modelName: 'ReqBodyObtenerdireccionesPoliza',
                        params: [],
                        isRequired: false
                    },
                    path: { modelName: 'ReqPathObtenerdireccionesPoliza', params: [] },
                    query: {
                    modelName: 'ReqQueryObtenerdireccionesPoliza',
                    params: [
                        {
                            name: 'tipoDocumento',
                            isRequired: true,
                            comma: false,
                            isBoolean: false,
                            isNumber: false,
                            isString: true
                        },
                        {
                            name: 'documento',
                            isRequired: true,
                            comma: false,
                            isBoolean: false,
                            isNumber: false,
                            isString: true
                        },
                        {
                            name: 'tipoPoliza',
                            isRequired: false,
                            comma: true,
                            isBoolean: false,
                            isNumber: false,
                            isString: true
                        }
                    ]
                }
              },
              path: '/areaPrivada/clientes/perfil/direcciones'
            },
            {
                consumes: [ 'application/json' ],
                hasBodyOrQueryReq: true,
                hasBodyReq: false,
                hasParameters: true,
                hasPathReq: false,
                hasQueryReq: true,
                httpMethod: 'get',
                parameters: {
                    body: {
                        modelName: 'ReqBodyObtenerDireccionCorrespondenciaPersonal',
                        params: [],
                        isRequired: false
                    },
                    path: {
                        modelName: 'ReqPathObtenerDireccionCorrespondenciaPersonal',
                        params: []
                    },
                    query: {
                        modelName: 'ReqQueryObtenerDireccionCorrespondenciaPersonal',
                        params: [
                            {
                                name: 'tipoDocumento',
                                isRequired: true,
                                comma: false,
                                isBoolean: false,
                                isNumber: false,
                                isString: true
                            },
                            {
                                name: 'documento',
                                isRequired: true,
                                comma: true,
                                isBoolean: false,
                                isNumber: false,
                                isString: true
                            }
                        ]
                    }
                },
                path: '/areaPrivada/clientes/perfil/direccionCorrespondencia'
            },
            {
                consumes: [ 'application/json' ],
                hasBodyOrQueryReq: true,
                hasBodyReq: true,
                hasParameters: true,
                hasPathReq: false,
                hasQueryReq: true,
                httpMethod: 'put',
                parameters: {
                    body: {
                        modelName: 'ReqBodyActualizarDireccionCorrespondenciaPersonal',
                        params: [
                            {
                                name: 'json',
                                isRequired: true,
                                comma: true,
                                isBoolean: false,
                                isNumber: false,
                                isString: false
                            }
                        ],
                        isRequired: false
                    },
                    path: {
                        modelName: 'ReqPathActualizarDireccionCorrespondenciaPersonal',
                        params: []
                    },
                    query: {
                        modelName: 'ReqQueryActualizarDireccionCorrespondenciaPersonal',
                        params: [
                            {
                                name: 'tipoDocumento',
                                isRequired: true,
                                comma: false,
                                isBoolean: false,
                                isNumber: false,
                                isString: true
                            },
                            {
                                name: 'documento',
                                isRequired: true,
                                comma: true,
                                isBoolean: false,
                                isNumber: false,
                                isString: true
                            }
                        ]
                    }
              },
              path: '/areaPrivada/clientes/perfil/direccionCorrespondencia'
            }
        ]);
    });
});
