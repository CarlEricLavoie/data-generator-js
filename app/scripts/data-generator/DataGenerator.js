var symbols = require("./symbols.js");
// require("./functions.js");

var Type = require("./Type.js");
var Variable = require("./Variable.js");
var errorMessages = require('./errorMessages.js');

//Data generator
function DataGenerator(name) {
	if(window[name]){
		console.error(new Error(`conflict emerged, object with name ${name} is already defined.`))
	}
	window[name] = this;
}

DataGenerator.Type = Type;

DataGenerator.prototype = Object.create(Type.prototype);

DataGenerator.prototype.type = function (type) {
	this.__defineGetter__(type[symbols.typeName], function () {
		return type;
	});
	return this;
};

// DataGenerator.prototype.variable = function(variable){
// 	Type.prototype.variable.call(this,variable);
// 	var getter = this.__lookupGetter__(variable.name);
// 	this.__defineGetter__(variable.name, function () {
// 		var value = getter();
// 		console.info(`old value ${value}, new value ${JSON.stringify(value)}`);
// 		if(variable._type instanceof DataGenerator.Type){
// 			value = JSON.stringify(value);
// 		}
// 		return value;
// 	});
//
// 	return this;
// };

DataGenerator.Type = Type;
DataGenerator.Variable = Variable;

module.exports = DataGenerator;