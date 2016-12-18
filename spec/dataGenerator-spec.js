var DataGenerator = require("../app/scripts/data-generator/DataGenerator.js");

describe("DataGenerator", function() {
	it("is a class", function() {
		expect(DataGenerator instanceof Function).toBe(true);
	});

	it("exposes a Type class", function() {
		expect(DataGenerator.Type instanceof Function).toBe(true);
	});

	it("exposes a Variable class", function(){
		expect(DataGenerator.Variable instanceof Function).toBe(true);
	});

	it("is an extension of class Type", function(){
		expect(DataGenerator.Type.prototype.isPrototypeOf(new DataGenerator())).toBe(true);
		expect(DataGenerator.prototype.isPrototypeOf(new DataGenerator())).toBe(true);
		expect(DataGenerator.prototype.isPrototypeOf(new DataGenerator.Type())).toBe(false);
		expect(DataGenerator.Type.prototype.isPrototypeOf(new DataGenerator.Type())).toBe(true);
		// expect(DataGenerator.Type instanceof DataGenerator).toBe(false);
	});
});