var converter = require('json-2-csv');

function IMPEXExporter(){

}
IMPEXExporter.export= function(obj, callback){
	converter.json2csv(obj, function(err,csv){
		debugger;
		callback(csv);
	});
};

module.exports = IMPEXExporter;