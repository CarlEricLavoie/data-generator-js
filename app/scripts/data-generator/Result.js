var DataExporter  = require('./export/DataExporter')();

function Result(){
}



Result.prototype = Object.create(Array.prototype);

Result.prototype.format = function(){
	return DataExporter.export(this);
	// return JSON.stringify(this);
};

module.exports = Result;