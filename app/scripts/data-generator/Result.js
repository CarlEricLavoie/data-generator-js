var DataExporter  = require('./export/DataExporter')();

function Result(){
}



Result.prototype = Object.create(Array.prototype);

Result.prototype.format = function(callback){
	DataExporter.export(this, callback);
};

module.exports = Result;