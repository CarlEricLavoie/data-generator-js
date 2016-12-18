function DataExporter(){
	this.format = DataExporter.FORMATS.JSON;
}

DataExporter.FORMATS = {
	JSON : new require('./JSONExporter')(),
	XML :  new require('./XMLExporter')()
};

module.exports = DataExporter;