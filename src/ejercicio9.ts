import { compose } from 'lodash/fp';

interface Modelo {
    name: string;
}

interface Marca {
    name: string;
    modelo: Modelo | {} | undefined;
}

export interface Placa {
    marca?: Marca | {} | undefined;
    pais: string;
}

const getMarca = (placa: Placa) => {
    return placa.marca || undefined;
}

const getModelo = (marca: Marca) => {
    return marca && marca.modelo || undefined;
}

const getModeloName = (modelo: Modelo) => {
    return modelo && modelo.name || 'no existe modelo';
}

export const getModeloFromPlaca = compose(
    getModeloName,
    getModelo,
    getMarca
);



/*
function compN(funcs: Function[]) {
    return funcs.reduce(function(g, f) {
      return function(x: any) {
        return g(f(x));
      }
    }, id);
  }
  */