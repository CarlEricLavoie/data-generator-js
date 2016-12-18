function DataExporter(){

}

//supported formats
DataExporter.FORMATS = {
	JSON : require('./JSONExporter'),
	XML :  require('./XMLExporter')
};


//default format
DataExporter.format = DataExporter.FORMATS.JSON;

//function to export from JSON to other formats
DataExporter.export = function(result){
	return DataExporter.format.export(result);
};

//Used as a decorator
module.exports = function(DataGenerator){
	if(DataGenerator){
		DataGenerator.FORMATS = {};
		Object.keys(DataExporter.FORMATS).forEach((x)=>DataGenerator.FORMATS[x]=x);
		DataGenerator.prototype.format = function(format){
			if(!DataGenerator.FORMATS[format]){
				throw errorMessages.INVALID_EXPORT_FORMAT;
				return;
			}
			DataExporter.format = DataExporter.FORMATS[format];
			return this;
		};
	}

	return DataExporter;
}