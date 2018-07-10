var list = [1,2,3,4,13,341,89] //init

list.push(675); //adds to the end
console.log("List ="+list);

var deleted = list.pop(675); //removes from the end
console.log("List ="+list);

list.shift();
console.log("List="+list); //removed from the beginning

var head = list.unshift(78);
console.log("List="+list); //added to the beginning

//replace element in the middle
var spliceOutput = list.splice(2,3,54);
console.log("Splice List="+list); //remove elements starting from index 2, about 3 elements and replace it with 54added to the beginning
console.log("Splice output="+spliceOutput);

//insert element in the middle
var spliceOutput = list.splice(2,0,121);
console.log("Splice List="+list); //remove elements starting from index 2, about 3 elements and replace it with 54added to the beginning
console.log("Splice output="+spliceOutput);

//simply remove the element in the middle
var spliceOutput = list.splice(2,1);
console.log("Splice List="+list); //remove elements starting from index 2, about 3 elements and replace it with 54added to the beginning
console.log("Splice output="+spliceOutput);

//array loop
for (var i = 0; i < list.length; i++) {
   console.log(list[i]);
}

