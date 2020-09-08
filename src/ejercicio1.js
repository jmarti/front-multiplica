const func1 = (x, y) => {
    if (typeof x === "undefined" ) {
        throw new Error("argumento1 requerido");
    }
    if (typeof y === "undefined" ) {
        throw new Error("argumento2 requerido");
    }
};

module.exports = {
    func1: func1
};