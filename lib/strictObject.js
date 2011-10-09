var internal = "__properties";

function StrictObject(properties) {
	
	properties.forEach(function(property){
		strictObjectType.prototype[property] = function(val){
			if (arguments.length > 0){
				this[internal][property] = val;
				return this;
			} else
				return this[internal][property];
		}
	});

	for(var i=0; i< properties.length; i++) {
		
	}
	
	function strictObjectType(){
		this[internal] = {};
	}
	
	strictObjectType.prototype._toObject = toObject;
	
	return strictObjectType;
}

function toObject() {
	return this[internal];
}

module.exports = StrictObject;