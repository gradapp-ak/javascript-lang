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
for(let key in keys){
    console.log(`Keys using 'in'=${key}`)
}