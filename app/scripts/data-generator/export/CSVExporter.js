var converter = require('json-2-csv');

function CSVExporter(){

}
CSVExporter.export= function(obj, callback){
	converter.json2csv(obj, function(err,csv){
		callback(csv);
	});
};

module.exports = CSVExporter;