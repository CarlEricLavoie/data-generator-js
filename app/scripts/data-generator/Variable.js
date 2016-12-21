var ValueEvaluator = require('./ValueEvaluator');
var errorMessages = require('./errorMessages');

//Variable
function Variable(name) {
	this.name = name;
	this._amount = 1;
	this.isDynamic = true;
}
Variable.prototype.type = function (type) {
	this._type = type;
	return this;
};
Variable.prototype.value = function (value) {
	this._value = value;
	return this;
};

Variable.prototype.dynamic = function(value){
	this.isDynamic = !!value;
	return this;
};

Variable.prototype.amount = function (amount) {
	this.__defineGetter__('_amount', function () {
		return ValueEvaluator.evaluate(amount) || 1;
	});
	return this;
};

module.exports = Variable;