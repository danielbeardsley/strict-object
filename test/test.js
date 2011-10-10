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

		'creates objects with a _toObject() function which returns only the attributes that have been set' : function(strictObject){
			var o = new strictObject();
			assert.equal(0, Object.keys(o._toObject()));
			o.name('Danny');

			var keys = Object.keys(o._toObject());
			assert.equal(keys.length, 1);
			assert.equal('name', keys[0]);
		},

		'should create an object that': {
			topic: function(strictObject){
				return new strictObject();
			},

			'has a _toObject() function' : function(o){
				assert.equal('function', typeof o._toObject);
			},

			'has a name(val) function that sets the name property' : function(o){
				o.name('Danny');
				assert.equal('Danny', o._toObject().name);
				assert.equal('Danny', o.name());
			},

			'has a name(val) function that is chainable' : function(o){
				assert.equal(o, o.name('dummy'));
			},

			'has a name() function that gets the name property' : function(o){
				o.name('George');
				assert.equal('George', o.name());
			},

			'has a name() function that allows setting to null and undefined' : function(o){
				o.name(null);
				assert.equal(null, o.name());

				o.name(o.undefined_property_0001);
				assert.equal(o.undefined_property_0002, o.name());
			}
		}
	}
}).export(module);
