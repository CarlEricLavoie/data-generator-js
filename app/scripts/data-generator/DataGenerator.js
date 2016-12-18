var symbols = require("./symbols.js");
// require("./functions.js");

var Type = require("./Type.js");
var Variable = require("./Variable.js");
var errorMessages = require('./errorMessages.js');


//Data generator
function DataGenerator(name) {
	if(typeof window != 'undefined'){
		if(window[name]){
			console.error(new Error(`conflict emerged, object with name ${name} is already defined.`))
		}
		window[name] = this;
	}
}

//Extend Type
DataGenerator.prototype = Object.create(Type.prototype);

//Add type generation to DataGenerator
DataGenerator.prototype.type = function (type) {
	this.__defineGetter__(type[symbols.typeName], function () {
		return type;
	});
	return this;
};


//Export Type and Variable to be visible to fluid API
DataGenerator.Type = Type;
DataGenerator.Variable = Variable;

//Extend DataGenerator with export formats
var DataExporter = require('./export/DataExporter.js')(DataGenerator);

module.exports = DataGenerator;