/* process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
});
*/

"use strict";
const fs = require("fs");

try {
    let mode = process.argv[2];
    let fileName = process.argv[3];

    if (mode == 'read') {
        fs.readFile(fileName, { encoding: "utf-8" },
            function (err, contenido) {
                if (!err) {
                    console.log(contenido);
                }
            });

        // const contenido = fs.readFileSync(fileName, { encoding: "utf-8" });
        // console.log("Fichero leído correctamente:");
        // console.log(contenido);
    } else {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.on('line', function (contenido) {
            fs.appendFile(fileName, contenido, { encoding: "utf-8" },
                function (err) {
                    if (err) {
                        console.log("Error al escribir el fichero.");
                    } else {
                        console.log("Fichero escrito correctamente.");
                    }
                });

            if (contenido == 'exit')
                readline.close();
        });
    }
} catch (err) {
    console.log("Se ha producido un error:");
    console.log(err.message);
}
