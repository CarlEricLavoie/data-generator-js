/**
 *	This test includes 2 generators and show how they can be used together
 **/

new DataGenerator('addressGenerator')
	.type(
		new Type('Address')
			.variable(
				new Variable('city')
					.value(faker.address.city)
			)
			.variable(
				new Variable('country')
					.value(faker.address.country)
			)
			.variable(
				new Variable('streetAddress')
					.value(faker.address.streetAddress)
			)
			.variable(
				new Variable('zipCode')
					.value(faker.address.zipCode)
			)
	);


new DataGenerator('personGenerator')
	.type(
		new Type('Person')
			.variable(
				new Variable('firstName')
					.value(faker.name.firstName)
			)
			.variable(
				new Variable('lastName')
					.value(faker.name.lastName)
			)
			.variable(
				new Variable('address')
					.type(addressGenerator.Address)
			)
			.variable(
				new Variable('image')
					.value(faker.image.avatar)
			)
	)
	.variable(
		new Variable('randomPerson')
			.type(personGenerator.Person)
	);


new DataGenerator('companyGenerator')
	.type(
		new Type('Company')
			.variable(
				new Variable('name')
					.value(faker.company.companyName)
			)
			.variable(
				new Variable('catchPhrase')
					.value(faker.company.catchPhrase)
			)
			.variable(
				new Variable('employees')
					.type(personGenerator.Person)
					.amount(()=>_between(5,100))
			)
			.variable(
				new Variable('administrator')
					.type(personGenerator.Person)
			)
			.variable(
				new Variable('id')
					.value(
						(function(){
							var id = 0;
							return ()=>++id;
						})()
					)
			)
	)
	.variable(
		new Variable('randomCompany')
			.type(companyGenerator.Company)
			.amount(10)
	);