//Export types to global scope
var DataGenerator = require('./DataGenerator');
var functions = require('./functions');
var symbols = require('./symbols');

Object.assign(window, {
	DataGenerator : DataGenerator,
	Type : DataGenerator.Type,
	Variable : DataGenerator.Type.Variable,
});

Object.assign(window, functions);
Object.assign(window, symbols);

