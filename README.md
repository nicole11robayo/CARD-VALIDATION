# Tarjeta de crédito válida

## Índice

* [1. Introducción](#1-introducción)
* [2. Preámbulo](#2-preámbulo)
* [3. Resumen del proyecto](#3-resumen-del-proyecto)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. La franquicia de la tarjeta](#5-la-franquicia-de-la-tarjeta)


***

## 1. Introducción
Mi producto esta destinado para los usuarios que se quieren suscribir a mi sitio web de películas online "TVMOVIES",
el cual les ofrece una prueba graruita por un mes y para evitar fraude,les pide validar el número de su tarjeta crédito/débito 
(mediante el algoritmo de Luhn) para asegurar que el usuario cuente con un medio de pago válido para el siguiente mes.


## 2. Preámbulo

El [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn),
también llamado algoritmo de módulo 10, es un método de suma de verificación,
se utiliza para validar números de identificación; tales como el IMEI de los
celulares, tarjetas de crédito, etc.

Este algoritmo es simple. Obtenemos el reverso del número a verificar (que
solamente contiene dígitos [0-9]); a todos los números que ocupan una posición
par se les debe multiplicar por dos, si este número es mayor o igual a 10,
debemos sumar los dígitos del resultado; el número a verificar será válido si
la suma de sus dígitos finales es un múltiplo de 10.

![gráfica de algoritmo de Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

## 3. Resumen del proyecto

En la primera pantalla se muestra un mensaje con una descripción de lo que se va a hacer junto con una caja de texto que 
contiene las especificaciones del plan al cual se va a suscribir y el boton "siguiente" que da paso a la segunda pantalla 
donde el usuario tiene que ingresar su número de tarjeta (crédito/débito) el cual se va a validar. 

Finalmente al oprimir el botón "validar", internamente se van a ejetuar las funciones y se va a mostrar en pantalla un mensaje 
que indica si es válido o no, una caja de texto con los detalles de la tarjeta (Número con los dígitos ocultos, franquicia y 
validez) y si es válido un mensaje que indica que ya puede empezar a disfrutar del servicio, y si es inválido le pide regresar.

## 4. Consideraciones generales

* La caja donde se ingresa el número a validar no acepta el campo vacío
* La validación se hace con el algoritmo de Luhn, no se guarda ningún dato
* La caja de ingreso del número admite letras pero sadrá inválido lógicamente


## 5. La franquicia de la tarjeta

Además de validar si el número de la tarjeta es válida, muestra la [franquicia](https://es.wikipedia.org/wiki/N%C3%BAmero_de_tarjeta_bancaria) 
de la tarjeta (ej: Visa, MasterCard, etc)
haciendo uso estas [reglas de validación](https://stevemorse.org/ssn/cc.html). 

***



### Descripción de scripts / archivos

* `README.md`: debe explicar la información necesaria para el uso de tu aplicación web,
  así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron.
* `src/index.html`: este es el punto de entrada a tu aplicación. Este archivo
  debe contener tu _markup_ (HTML) e incluir el CSS y JavaScript necesario.
* `src/style.css`: este archivo debe contener las reglas de estilo. Queremos que escribas tus
propias reglas, por eso NO está permitido el uso de frameworks de CSS (Bootstrap, Materialize, etc).
* `src/validator.js`: acá debes implementar el objeto `validator`, el cual ya está
  _exportado_ en el _boilerplate_. Este objeto (`validator`) debe contener dos
  métodos:
  - `validator.isValid(creditCardNumber)`: `creditCardNumber` es un `string`
     con el número de tarjeta que se va a verificar. Esta función debe retornar un
     `boolean` dependiendo si es válida de acuerdo al [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn).
  - `validator.maskify(creditCardNumber)`: `creditCardNumber` es un `string` con
    el número de tarjeta y esta función debe retornar un `string` donde todos menos
    los últimos cuatro caracteres sean reemplazados por un numeral (`#`) o 🐱.
    Esta función deberá siempre mantener los últimos cuatro caracteres intactos, aún
    cuando el `string` sea de menor longitud.

    Ejemplo de uso

    ```js
    maskify('4556364607935616') === '############5616'
    maskify(     '64607935616') ===      '#######5616'
    maskify(               '1') ===                '1'
    maskify(               '')  ===                ''
    ```
* `src/index.js`: acá debes escuchar eventos del DOM, invocar `validator.isValid()`
  y `validator.maskify()` según sea necesario y actualizar el resultado en la UI (interfaz de usuario).
* `test/validator.spec.js`: este archivo contiene algunos tests de ejemplo y acá
  tendrás que implementar los tests para `validator.isValid()` y `validator.maskify()`.

El _boilerplate_ incluye tareas que ejecutan [eslint](https://eslint.org/) y
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar el `HTML` y
`JavaScript` con respecto a una guías de estilos. Ambas tareas se ejecutan
automáticamente antes de ejecutar las pruebas (tests) cuando usamos el comando
`npm run test`. En el caso de `JavaScript` estamos usando un archivo de
configuración de `eslint` que se llama `.eslintrc` que contiene un mínimo de
información sobre el parser que usar (qué version de JavaScript/ECMAScript), el
entorno (browser en este caso) y las [reglas recomendadas (`"eslint:recommended"`)](https://eslint.org/docs/rules/).
En cuanto a reglas/guías de estilo en sí,
usaremos las recomendaciones _por defecto_ de tanto `eslint` como `htmlhint`.


### Recursos y temas relacionados

Súmate al canal de Slack [#project-card-validation](https://claseslaboratoria.slack.com/archives/C03LXJ10WJD) para conversar y pedir ayuda de proyecto.

A continuación un video de Michelle que te lleva a través del algoritmo de Luhn
y un par de cosas más que debes saber para resolver este proyecto. ¡Escúchala
con detenimiento y sigue sus consejos! :)

[![tips credit card](https://img.youtube.com/vi/f0zL6Ot9y_w/0.jpg)](https://www.youtube.com/watch?v=f0zL6Ot9y_w)

[Link](https://www.youtube.com/watch?v=f0zL6Ot9y_w)

Terminal y shell de UNIX:

[![Playlist de Terminal y shell de UNIX](https://img.youtube.com/vi/GB35Eyb-J4c/0.jpg)](https://www.youtube.com/playlist?list=PLiAEe0-R7u8nGH5TEHfSTeDNIvjZFe_Yd)

[Link](https://www.youtube.com/playlist?list=PLiAEe0-R7u8nGH5TEHfSTeDNIvjZFe_Yd)

Control de versiones y trabajo colaborativo con Git y GitHub:

[![Playlist de control de versiones y trabajo colaborativo](https://img.youtube.com/vi/F1EoBbvhaqU/0.jpg)](https://www.youtube.com/playlist?list=PLiAEe0-R7u8k9o3PbT3_QdyoBW_RX8rnV)

[Link](https://www.youtube.com/playlist?list=PLiAEe0-R7u8k9o3PbT3_QdyoBW_RX8rnV)

Desarrollo Front-end:

* [Documentación de NPM](https://docs.npmjs.com/)

Organización del Trabajo:

* [Metodologías Ágiles](https://www.youtube.com/watch?v=v3fLx7VHxGM)
* [Scrum en menos de 2 minutos](https://www.youtube.com/watch?v=TRcReyRYIMg)
* [Scrum en Detalle](https://www.youtube.com/watch?v=nOlwF3HRrAY&t=297s). No
  esperamos que hagas todo eso desde este proyecto. Iremos profundizando poco a
  poco a lo largo del -_bootcamp_.
* [Blog: cómo funciona el algoritmo de Luhn](http://www.quobit.mx/asi-funciona-el-algoritmo-de-luhn-para-generar-numeros-de-tarjetas-de-credito.html).

***

