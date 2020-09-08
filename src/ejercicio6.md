Dado sgte codigo.

```js
var arrPersonas = [
  {
    name: 'Pepe',
    donacion: true,
    esposas: ['Rosangela', 'Mayte']
  },
  {
    name: 'Juan',
    donacion: false,
    esposas: ['Yahaira']
  },
  {
    name: 'Lalo',
    donacion: true,
    esposas: []
  }
]
```

Crear una funcions que reciba como parámetro un número y retorne un obj.

En el cual usaremos el número que recibimos para obtener el obj q este en dicha posición del array arrPersonas, para modificar su nombre a 'choy'.

Si se ingresa una posición, en la cual no exista un obj, devolver un obj vacío.

Cabe indicar que no queremos modificar los objetos de arrPersonas.
