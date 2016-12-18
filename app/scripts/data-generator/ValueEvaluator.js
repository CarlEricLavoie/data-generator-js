var ValueEvaluator = {
	evaluate : function(value) {
		switch (typeof value) {
			case 'function':
				return value();
			default :
				return value;
		}
	}
};
module.exports =ValueEvaluator;