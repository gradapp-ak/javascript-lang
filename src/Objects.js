var anObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
}; //string, number && for simplicity a string with no quotes are all valid property of the object

console.log("Object="+anObject[5]); //["5"] also works, but not anObject.5
console.log("Object="+anObject["make"]);
console.log("Object="+anObject.model);

//delete a property
delete anObject.make;
console.log("Object="+anObject["make"]);

console.log("Has own property, 5? ="+anObject.hasOwnProperty("5"));
