function JSONExporter(){

}
JSONExporter.export= function(obj, callback){
	callback(obj);
};

module.exports = JSONExporter;