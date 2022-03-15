var path = require('path'),
  jasmineBrowser = require('jasmine-browser-runner'),
  jasmineCore = require('../../lib/jasmine-core.js');
var config = require(path.resolve('spec/support/jasmine-browser.json'));
config.projectBaseDir = path.resolve('some/path');
jasmineBrowser.startServer(config, { port: 4321 });

describe ("Pruebas a funciones básicas", function() {

    it('Prueba Formato funcion fibonacci', function() {
        expect(fibonacci("Hola mundo!")).toThrow();
    });

    it('Prueba el programa debe indicar si es primo', function() {
        expect(utils.esPrimo).toBeDefined();
        expect(utils.esPrimo(13)).toBeTruthy();
        expect(utils.esPrimo(6)).toBeFalsy();
    });

    it('Prueba el programa debe indicar si es par', function() {
        expect(utils.esPar).toBeDefined();
        expect(utils.esPar(2)).toBeTruthy();
        expect(utils.esPar(1)).toBeFalsy();
    });

    it('Prueba el programa debe indicar si es inpar', function() {
        expect(utils.esImpar).toBeDefined();
        expect(utils.esImpar(21)).toBeTruthy();
        expect(utils.esImpar(32)).toBeFalsy();
    });

});