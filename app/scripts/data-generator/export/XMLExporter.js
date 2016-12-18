var ObjTree = require('../lib/ObjTree');
function XMLExporter(){

}
XMLExporter.export= function(obj, callback){
	xmlTree = new ObjTree();
	callback(xmlTree.writeXML( obj ))
};

module.exports = XMLExporter;