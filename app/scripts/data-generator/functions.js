//functions
var functions = {
	_random: function(items) {
		return items[Math.floor(Math.random() * items.length)];
	},
	_between : function(min, max) {
		return Math.floor(Math.random() * max) + min;
	}
};
module.exports = functions;