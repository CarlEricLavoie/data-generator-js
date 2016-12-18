var ValueEvaluator = require('./ValueEvaluator');


//Variable
function Variable(name) {
	this.name = name;
	this._amount = 1;
}
Variable.prototype.type = function (type) {
	this._type = type;
	return this;
};
Variable.prototype.value = function (value) {
	this._value = value;
	return this;
};
Variable.prototype.amount = function (amount) {
	this.__defineGetter__('_amount', function () {
		return ValueEvaluator.evaluate(amount) || 1;
	});
	return this;
};

// window.Variable = Variable;

module.exports = Variable;