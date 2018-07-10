var list = [1, 2, 3, 4, 13, 341, 89] //init

list.push(675); //adds to the end
console.log("List =" + list);

var deleted = list.pop(675); //removes from the end
console.log("List =" + list);

var deletedOne = list.shift();
console.log("List=" + list); //removed from the beginning

var head = list.unshift(78);
console.log("List=" + list); //added to the beginning

//replace element in the middle
var spliceOutput = list.splice(2, 3, 54);
console.log("Splice List=" + list); //remove elements starting from index 2, about 3 elements and replace it with 54added to the beginning
console.log("Splice output=" + spliceOutput);

//insert element in the middle
var spliceOutput = list.splice(2, 0, 121);
console.log(`Splice List=${list}`); //remove elements starting from index 2, about 3 elements and replace it with 54added to the beginning
console.log(`Splice output=${spliceOutput}`);

//simply remove the element in the middle
var spliceOutput = list.splice(2, 1);
console.log("Splice List=" + list); //remove elements starting from index 2, about 3 elements and replace it with 54added to the beginning
console.log(`Splice output=${spliceOutput}`);

//copy the array
let l1 = [12, 23, 34, 41, 53, 60]

let copied = l1.slice(1, 3)
console.log("Copied=" + copied + ", Unchanged original=" + l1);

//copy the entire array with spread operator
let l2 = [...l1]
console.log(`Spread Copied=${l2}`);

//copy && combine array
let l3 = [`a`, `b`, ...l1, 'we', ...l2, 'yui']
console.log(`Combined array copy=${l3}`);

let r1 = l3.find( e => e === 'a')
console.log(`Find result=${r1}`)

r1 = l3.find( e => e === 'huy')
console.log(`Find result=${r1}`)

r1 = l3.indexOf('we')
console.log(`Index of result=${r1}`)

//array loop
for (var i = 0; i < list.length; i++) {
    console.log(list[i]);
}

