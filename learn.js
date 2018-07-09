
console.log("logging in the console");

var k;
console.log(typeof k);

console.log(typeof f1);

var l = {a:12,b:f1}
let index = "a"
console.log("check this out="+l[index])

console.log(typeof l);

function f1(){
	return "helollo"
}

console.log(f1());

var a = "30"

console.log(a*2)

var ar = []
var qw = "false"

if(qw){
	console.log("truthy")
}else {
	console.log("un-truthy")
}

var ko = "42"
console.log("coerces =="+(ko == 42))
console.log("strict ==="+(ko === 42))

function foo() {
	var a = 1;

	if (a >= 1) {
		let b = 2;
		var b1 = 21;

		while (b < 5) {
			let c = b * 2;
			b++;

			console.log( a + c );
		}
	}
	//console.log(b1);
}
foo();

var scopeV = 89;
(function(){
	var scopeV = 78;
	console.log("inner="+scopeV);
})();
console.log("outer="+scopeV);


var wFunc = function Ass(){
	var l = 90;

	this.q = 67;
	this.v = function(){
		console.log("probably object variable");
	};
	
	function add(){
		console.log("weird, but true, probably private variable");
	}
	
	return add;
}
console.log(typeof wFunc);
var result = wFunc();
console.log("wFunc="+result);
//console.log("wFunc.v()="+result.v);
//console.log("wFunc.q="+result.q);
//console.log("wFunc.l="+result.l);

var instance = new wFunc();
console.log("instance="+instance);
console.log("instance.v()="+instance.v);
console.log("instance.q="+instance.q);
console.log("instance.l="+instance.l);
console.log("instance.add="+instance.add);








































