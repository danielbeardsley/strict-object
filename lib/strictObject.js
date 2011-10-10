(function(module) {
	var internal = "__properties";

	module.create = function createStrictObject(properties) {

		function strictObjectType(){
			// This object will store the actual properties
			this[internal] = {};
		}

		properties.forEach(defineProperty);

		strictObjectType.prototype._toObject = toObject;

		return strictObjectType;

		// Adds a magic getter / setter to strictObjectType
		function defineProperty(property) {
			// Create the individual getter / setters
			strictObjectType.prototype[property] = function(val){

				// if an argument is provided, this is called as a setter
				if (arguments.length > 0){
					this[internal][property] = val;
					// Chainable for the win
					return this;
				// Otherwise this was called as a getter, so return the property
				} else
					return this[internal][property];
			}
		}
	}

	function toObject() {
		return this[internal];
	}

})('object' === typeof module ? module.exports : (window.StrictObject = {}));
