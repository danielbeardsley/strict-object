var vows = require('vows'),
assert = require('assert'),
SO = require('../lib/strictObject.js');

vows.describe('SO').addBatch({
	'A simple SO with one property': {
		topic: function() {
			return new SO(['name'])
		},
		
		'should allow creation of new objects': function(strictObject){
			var o = new strictObject();
		},
		
		'should create an object': {
			topic: function(strictObject){
				return new strictObject();
			},
			
			'that has a _toObject() function' : function(o){
				assert.ok(typeof o._toObject === 'function');
			},
			
			'that has a name() function that sets the name property' : function(o){
				o.name('Danny');
				assert.equal('Danny', o._toObject().name);
			},
			
			'that has a name() function that gets the name property' : function(o){
				o.name('George');
				assert.equal('George', o.name());
			}
		}
	}
}).export(module);
