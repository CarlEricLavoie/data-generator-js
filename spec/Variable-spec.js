var DataGenerator = require("../app/scripts/data-generator/DataGenerator.js");
var Variable = DataGenerator.Variable;

describe("Variable", function() {
	it("is a class", function() {
		expect(Variable instanceof Function).toBe(true);
		expect(new Variable() instanceof Variable).toBe(true);
	});

	it("is has dynamic set to true by default", function(){
		var variable = new Variable('Test');
		expect(variable.isDynamic).toBe(true);
	});

});