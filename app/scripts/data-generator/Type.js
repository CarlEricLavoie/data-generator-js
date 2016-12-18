var Variable = require("./Variable.js");
var Result = require("./Result.js");
var ValueEvaluator = require('./ValueEvaluator');
var symbols = require('./symbols');
var errorMessages = require('./errorMessages');

function Type(name) {
	eval(`
		function ${name}(){
			if(this.super){
				Object.assign(this, new this.super());
			}
			Object.keys(this.constructor)
	 			.forEach((x)=>this[x] = this.constructor[x]);
		};
		${name}[symbols.typeName] = "${name}";
		var self = ${name};
	`);
	Object.setPrototypeOf(self, Type.prototype);
	// var self = Object.appendChain(this,
	// 	`
	//
	// 	this.constructor.prototype.constructor.call(this);
	// 	console.log('${name}');
	// 	Object.keys(this.constructor)
	// 		.forEach((x)=>this[x] = this.constructor[x]);
	// 		debugger;
	// 	`);
	// this.prototype.constructor('console.log("here");');
	return self;
}

Type.prototype = Object.create(Function.prototype);
Type.prototype.constructor = Type;


//add a variable to a type
Type.prototype.variable = function (variable) {
	if(!(variable instanceof Variable)){
		throw errorMessages.INVALID_VARIABLE;
	}
	if(variable.isDynamic){
		this.__defineGetter__(variable.name, function () {
			var values = new Result();
			for (var i = 0; i < variable._amount; i++) {
				if (variable._value) {
					values.push(ValueEvaluator.evaluate(variable._value));
				} else {
					values.push(new variable._type());
				}
			}

			return values.length === 1 ? values[0] : values;
		});
	}else{
		var values = new Result();
		for (var i = 0; i < variable._amount; i++) {
			if (variable._value) {
				values.push(ValueEvaluator.evaluate(variable._value));
			} else {
				values.push(new variable._type());
			}
		}

		this.__defineGetter__(variable.name, ()=>values);
	}

	return this;
};


//extend a type properly.
Type.prototype.extend = function (type) {
	if(!(type instanceof Type)){
		throw errorMessages.INVALID_TYPE;
	}
	this.prototype = Object.create(type.prototype);
	this.prototype.super = type;
	this.prototype.constructor = this;
	return this;
};

Type.Variable = Variable;

module.exports = Type;
