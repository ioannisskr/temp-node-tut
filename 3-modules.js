// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');

require('./7-mind-grenade');   //αυτοματα κανει invoke το function, 
                                //με το που κανουμε import το file
                                //αφου το εχουμε κανει export
sayHi('Bitch');
sayHi(names.john);
sayHi(names.peter);

