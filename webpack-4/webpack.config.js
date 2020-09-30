const path = require("path"); /*este es un modulo de node y se encarga de la gestion de rutas*/

/*Para exportar un modulo, se debe hacer de la forma de commonJS*/
module.exports = {
  entry: "./index.js" /*El archivo que queremos transpilar */,
  mode: "development" /* modo de ejecución */,
  output: {
    /*Configuraciones para el archivo final que generará webpack */
    path: path.resolve(
      __dirname
    ) /* La ruta en donde quedará el archivo final */,
    filename: "bundle.js" /*El nombre con el que se creará el archivo final */,
  },
};
