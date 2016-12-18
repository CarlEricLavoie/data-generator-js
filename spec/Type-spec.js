var DataGenerator = require("../app/scripts/data-generator/DataGenerator.js");
var errorMessage = require('../app/scripts/data-generator/errorMessages');
var Type = DataGenerator.Type;

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