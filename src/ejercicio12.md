Simulando el llamado a un API, mediante las sgte funciones asíncronas (retornan una promesa).

Escribir un programa que consulte una placa a `getPlaca(nroPlaca)`, y que con el response obtenido `{pais, dniConductor}`, haga una consulta a `getConductor(dniConductor)`, pasandole el campo `dniConductor` del response anterior.

Imprimir en consola el response del `getConductor` `{name, dni, sexo}`.

En los mensajes de error de promesas o sentencias, imprimir la hora más el msg de error.

Estas son las funciones a usar que hacen el llamado a algún API (no es necesario crear el API):

```js
function getPlaca(nroPlaca) {
  // response: {pais, dniConductor}
  return fetch('some-api/' + nroPlaca)
}

function getConductor(dniConductor) {
  // response: {name, dni, sexo}
  return fetch('some-api/' + dniConductor)
}
```