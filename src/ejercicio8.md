Dado el siguiente código, realizar la invocación del método 'speak' del objeto cat, para imprimir en consola el valor de la propiedad 'sound' del objeto 'dog'

```js
var talk = talky;
var cat = {
  speak: talk,
  sound: 'miau'
}
var dog = {
  speak: cat.speak,
  sound: 'wof'
}
function talky() {
  console.log(this.sound);
}
```