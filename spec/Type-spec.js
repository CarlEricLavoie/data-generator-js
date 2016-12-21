var DataGenerator = require("../app/scripts/data-generator/DataGenerator.js");
var errorMessage = require('../app/scripts/data-generator/errorMessages');
var Type = DataGenerator.Type;
var Variable = DataGenerator.Variable;

describe("Type", function() {
	it("is a class", function() {
		expect(Type instanceof Function).toBe(true);
		expect(new Type() instanceof Type).toBe(true);
	});

	it("constructs Object constructors", function() {
		expect(new Type() instanceof Function).toBe(true);
		expect(new (new Type())() instanceof Function).toBe(false);
	});

	it("exposes a method to add variable", function(){
		var type = new Type('Test');
		expect(type.variable instanceof Function).toBe(true);
		expect(type.variable(new DataGenerator.Variable('test'))).not.toThrow();
		expect(type.variable).toThrow(errorMessage.INVALID_VARIABLE);
	});


	it("handles Variable value as a function", function(){
		var variableName = "varTest";
		var variable = new Variable(variableName);
		var obj = {
			func : function(){}
		};
		spyOn(obj, 'func');
		variable.value(obj.func);

		var testGenerator = new Type('testGenerator').variable(variable);

		testGenerator[variableName];

		expect(obj.func).toHaveBeenCalled();
	});

	it("handles Variable amount as a function", function(){
		var variableName = "varTest";
		var variable = new Variable(variableName);
		var obj = {
			func : function(){}
		};
		spyOn(obj, 'func').and.returnValue(5);

		variable.value(1);
		variable.amount(obj.func);

		var testGenerator = new Type('testGenerator').variable(variable);

		testGenerator[variableName];

		expect(obj.func).toHaveBeenCalled();
		expect(testGenerator[variableName].length).toBe(5);
	});


	it("handles Variable amount as simple value", function(){
		var variableName = "varTest";
		var variable = new Variable(variableName);
		variable.value(1);
		variable.amount(2);

		var testGenerator = new Type('testGenerator').variable(variable);

		expect(testGenerator[variableName].length).toBe(2);
	})


	//extend requires a lof of reflection and therefor further testing
	describe(".extend", function(){
		it("is a function", function(){
			var type = new Type('Test');
			expect(type.extend instanceof Function).toBe(true);
		});

		it("can only be called with a valid Type as argument", function(){
			var type = new Type('Test');
			var type2 = new Type('Test2');

			expect(type2.extend(type)).not.toThrow();
			expect(type2.extend).toThrow(errorMessage.INVALID_TYPE);
		});

		it("allows to properly chain prototypes", function(){
			var type = new Type('Test');
			var type2 = new Type('Test2');
			type2.extend(type);

			expect(new type2() instanceof type2).toBe(true);
			expect(new type2() instanceof type).toBe(true);

			expect(new type() instanceof type).toBe(true);
			expect(new type() instanceof type2).toBe(false);

		});
	})

});