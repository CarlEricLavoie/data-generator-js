new DataGenerator('productGenerator')
	.format(DataGenerator.FORMATS.IMPEX)
	.type(
		new Type('BaseProduct')
			.variable(
				new Variable('sku')
					.value(()=>_between(0,99999))
			)
	)

	.variable(
		new Variable('baseProducts')
			.type(productGenerator.BaseProduct)
			.amount(2)
			.dynamic(false)
	)

	.type(
		new Type('Product')
			.variable(
				new Variable('name')
					.value(faker.commerce.productName)
			)
			.variable(
				new Variable('department')
					.value(faker.commerce.department)
			)
			.variable(
				new Variable('price')
					.value(()=>_between(0,2500)/100 + '$')
			)
			.variable(
				new Variable('color')
					.value(faker.commerce.color)
			)
			.variable(
				new Variable('BaseProduct')
					.value(()=>_random(productGenerator.baseProducts))
			)
	)

	.variable(
		new Variable('products')
			.type(productGenerator.Product)
			.amount(()=>_between(5,25))
	);

console.table(productGenerator.products);