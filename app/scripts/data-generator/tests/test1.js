//test
var userGenerator =
	new DataGenerator('userGenerator')
		.variable(new Variable('lastNames')
			.value(['carl', 'eric', 'jean', 'george']))

		.variable(new Variable('userNames')
			.value(['lavoie', 'croteau']))

		.type(new Type('User')

			.variable(
				new Variable('firstName')
					.value(()=>_random(userGenerator.userNames)))

			.variable(
				new Variable('lastName')
					.value(()=>_random(userGenerator.lastNames)))

			.variable(
				new Variable('age')
					.value(()=>_between(1, 99))))

		//create users which is a list of User
		.variable(new Variable('users')
			.type(userGenerator.User)
			.amount(()=>_between(1, 10)))

		//create customer which is an extension of user
		.type(new Type('Customer')
			.extend(userGenerator.User)
			.variable(
				new Variable('customerId')
					.value(()=>_between(10000,99999))
			))

		.variable(new Variable('customers')
			.type(userGenerator.Customer)
			.amount(5))

		.type(new Type('USCustomer')
			.extend(userGenerator.Customer)
			.variable(
				new Variable('country')
					.value("US")
			))

		.variable(new Variable('usCustomers')
			.type(userGenerator.USCustomer)
			.amount(()=>_between(2,10))
		);
