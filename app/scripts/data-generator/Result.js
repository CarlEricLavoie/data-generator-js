function Result(){

}

Result.prototype = Object.create(Array.prototype);

Result.prototype.to = function(){
	return JSON.stringify(this);
};

module.exports = Result;