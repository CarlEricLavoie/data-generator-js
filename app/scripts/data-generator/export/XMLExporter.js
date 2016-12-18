var ObjTree = require('../lib/ObjTree');
function XMLExporter(){

}
XMLExporter.export= function(obj){
	xmlTree = new ObjTree();
	return xmlTree.writeXML( obj );
};

module.exports = XMLExporter;