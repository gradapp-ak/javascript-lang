let duck = { //here, you are defining the object inline, but if we want to create a template to reuse then create a constructor
    name: 'Aflac',
    numLegs: 2,
    canFly: false,
    sayName: () => `My name is ${duck.name}`, //weird this.name doesn't work; weird duck can be referenced from within the object; But in a function it works below
    sayNameAgain: function () {
        return `This duck's name is: ${this.name}`
    }
}

console.log(`Calling on object=${duck.sayName()}`)
console.log(`Calling on object=${duck.sayNameAgain()}`)

function Bird(color, home, swimmer) { //var home is not a valid args. Types are not needed
    this.color = color
    this.home = home
    this.swimmer = swimmer
}

console.log(`Constructor Bird property=${Bird.home}`) //undefined
console.log(`Constructor prototype Bird property=${Bird.prototype.home}`) //undefined

let funCall = Bird(`vellow`, 'african', false);
console.log(`Bird funCall=${funCall}`) //undefined.

let instance1 = new Bird('black', 'north-american', true);
console.log(`Bird property=${instance1.home}`)

let ins2 = new Bird(`grey`,'indian',true);

//added a new property on the constructor; weridly this works
Bird.fly = function fly(up){ this.fly = up; return '0'}
console.log(`Bird fly: ${Bird.fly()}`)

//console.log(`Bird fly: ${new Bird().fly()}`) this fails

//old instances
//console.log(`Instance ${instance1.fly()}`) this fails
//console.log(`Instance ${ins2.fly()}`) this fails

//extend on the prototype
Bird.prototype.sing = function(song){this.song = song; return '55'}

console.log(`Instance ${instance1.sing('uhouoo')}, Song= ${instance1.song}`)
console.log(`Instance ${ins2.sing('hoho')}, Song= ${ins2.song}`)

//there is a special constructor property on the classes
console.log(`Display constructor=${ins2.constructor === Bird}`)

//check the prototype of; not sure if this is useful. But
console.log(`Bird's prototype = ${Bird.prototype.isPrototypeOf(ins2)}`)

//proper way to prototype
function Vehicle(){} //constructor
Vehicle.prototype = {
    constructor: Vehicle,
    setColor: function(color){ this.color = color}
}

function Car() {}
Car.prototype = Object.create(Vehicle.prototype)

let color2 = new Car()
    color2.setColor('red');
console.log(`Car color=${color2.color}`)


console.log(`=====================`)
//===========BASIC operation on an Object
var anObject = {
    make: "Ford",
    5: "five",
    "model": "focus"
}; //string, number && for simplicity a string with no quotes are all valid property of the object

console.log("Object=" + anObject[5]); //["5"] also works, but not anObject.5
console.log("Object=" + anObject["make"]);
console.log("Object=" + anObject.model);

//delete a property
delete anObject.make;
console.log("Object=" + anObject["make"]);

console.log("Has own property, 5? =" + anObject.hasOwnProperty("5"));

var theObject = {
    a: "a",
    b: `p`,
    c: `we`
}

//iterate over the object
for (var e in theObject) {
    console.log(`element=${e}`)
}

let keys = Object.keys(theObject)
console.log(keys);

//iterate over all the keys of an Object using OF
for (var key of keys) {
    console.log(`key=${key}`)
}

//iterate over all the keys of an Object using IN
for (let key in keys) {
    console.log(`Keys using 'in'=${key}`)
}