## strict-object ##
A utility that makes it safer and prettier to deal with javascript objects that have a
defined set of properties.

Status: [![Build Status](https://secure.travis-ci.org/danielbeardsley/strict-object.png?branch=master)](http://travis-ci.org/danielbeardsley/strict-object)

### Installing ###
strict-object is compatable with npm, browsers, windows script host,and probably more.

```
npm install strict-object
```

When minified, strict-object.js ends up less than 400 bytes.

### What ###
```javascript
// Create a new person type
var Person = StrictObject.define(['name', 'age', 'country']);

// Instatiate a Person
var pete = new Person();

// set properties using functions
pete.name('Peter');

// get properties using functions
console.log(pete.name());

// property setters return the target object and are thus chainable
pete.name('Peter')
    .age(26)
    .country('Uzbekistan');

// retrieve the properties as an object
console.log(pete._toObject()); // {name: 'Peter', age: 26, country: 'Uzbekistan'}

// Instatiate a Person with initial values
var pete = new Person({
	name: "Peter",
	age: 26,
	country: "Uzbekawhat?"
});

```

### Running Tests ###

```
npm test
```

### Why ###
Because typos are too easy with basic objects.

```javascript
var thing = {};
thing.descriptivePropertyName = 'value';
console.log(thing.descriptvePropertyName); // null -- because of a typo.
```

Syntax is ugly with basic objects

```javascript
var thing = {
	key: "value",
	key2: "value2"
};
```

Cleaner and safer with strict-object

```javascript		
thing = new Thing()
	.key("value")
	.key2("value2");
```

### License ###
No License, the content of this repository is in the public domain, no
attribution is necessary.
