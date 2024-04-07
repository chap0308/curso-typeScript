    En TypeScript, un parámetro de tipo primitivo se refiere a un tipo de dato básico que representa un valor primitivo. Los tipos primitivos en TypeScript incluyen:

    number: Representa números, tanto enteros como de punto flotante.
    string: Representa secuencias de caracteres.
    boolean: Representa valores verdaderos o falsos (true o false).
    null: Representa la ausencia intencional de un valor.
    undefined: Representa la ausencia no intencional de un valor.
    bigint: Representa números enteros grandes.
    symbol: Representa un identificador único e inmutable.

# Para que se muestre los resultados(console.log) de los archivos de TypeScript, tenemos que descomentar en tsconfig.json:
    "sourceMap": true,
# De esta manera podremos verlo en la consola la referencia del archivo .ts y debe tener el archivo .js esto:
    //# sourceMappingURL=objetos.js.map
------------------------------------
    "removeComments": true,
--------------------------------------
# SECCION 6 - 48
# para incluir y excluir algunos archivos(por default node_modules siempre está excluido, pero si quisieran incluir algun archivo en especifico sería:)
# exclude hace que no se genere el archivo de js aunque hubiera un archivo ts y estuviera corriendo tsc -w
    ,
    "exclude": [
        "node_modules2"
    ],
    "include": [
        "node_modules/algo.ts"
    ]
-------------------------------------------
# SECCION 6 - 49
# CON ESTO GENERAMOS TODO EL CODIGO DE LOS ARCHIVOS DE TYPESCRIPT EN UNA SOLA CARPETA(NO BORRAR main.js ni main.js.map)
    "module": "amd",       
    "outFile": "./main.js",

# Seccion 7 - 51: usar include solo para mostrar los resultados de ese archivo en la consola

    "include": [
    "ESC6.ts"
  ]