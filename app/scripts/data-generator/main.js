//Export types to global scope
var DataGenerator = require('./DataGenerator');
var functions = require('./functions');
var symbols = require('./symbols');
var faker = require('faker');

Object.assign(window, {
	DataGenerator : DataGenerator,
	Type : DataGenerator.Type,
	Variable : DataGenerator.Type.Variable,
	faker : faker
});

Object.assign(window, functions);
Object.assign(window, symbols);

