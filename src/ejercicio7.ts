import { query } from 'jsonpath';
import { flatten, upperFirst } from 'lodash';

export const formatearTrama = (trama: any) => {
    const pathsEntry = Object.entries(trama.paths);

    const processedPaths = pathsEntry.map(([ path, data ]: any) => {
        const swaggerRouterController = data['x-swagger-router-controller'];

        const availableCalls = ['get', 'post', 'put', 'delete'];
        const filteredCalls = Object.keys(data)
            .filter(key => availableCalls.includes(key))
            .reduce((obj: any, key) => {
                obj[key] = data[key];
                return obj;
            }, {});

        const processedCalls = Object.entries(filteredCalls)
            .map(([ method, entry ]: any) => {
                return {
                    consumes:            query(entry, '$.consumes[0]'),
                    hasBodyOrQueryReq: !!query(entry, '$.parameters.*').find(paramObj => ['body', 'query'].indexOf(paramObj.in) !== -1),
                    hasBodyReq:        !!query(entry, '$.parameters.*').find(paramObj => paramObj.in === 'body'),
                    hasParameters:     !!query(entry, '$.parameters.*').length,
                    hasPathReq:        !!query(entry, '$.parameters.*').find(paramObj => paramObj.in === 'path'),
                    hasQueryReq:       !!query(entry, '$.parameters.*').find(paramObj => paramObj.in === 'query'),
                    httpMethod:          method,
                    parameters:          processParameters(entry),
                    path,
                };
        });
        return processedCalls;
    });

    return flatten(processedPaths);
};

const processParameters = (entry: any) => {

    const paramsType = ['body', 'path', 'query'];

    const parametersSkeleton: any = paramsType.reduce((skeleton, type) => {
        const skel: any = Object.assign(skeleton, {
            [type]: {
                modelName: `Req${upperFirst(type)}${upperFirst(entry.operationId)}`,
                params: []
            }
        });
        if (type === 'body') {
            skel.body.isRequired = false;
        }
        return skel;
    }, {});

    const procesedParameters = entry.parameters.reduce((parameters: any, param: any) => {
        const procesedParam = {
            name: param.name,
            isRequired: param.required,
            comma: false,
            isBoolean: param.type === 'boolean',
            isNumber: param.type === 'number',
            isString: param.type === 'string'
        };

        parametersSkeleton[param.in].params.push(procesedParam);

        return parameters;
    }, parametersSkeleton);
    
    paramsType.forEach(type => {
        const typeParamsLength = procesedParameters[type].params.length;

        if (typeParamsLength) {
            procesedParameters[type].params[typeParamsLength-1].comma = true;
        }
    });

    return procesedParameters
}


