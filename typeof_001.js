var miFunction = new Function("2+2");
var forma = "  redonda   ";
var forma2 = new String("  redonda   ");
var size = 1;

var miOtraFunction = function otraFuncion(){
    console.log("no hago nada");
}

console.log(typeof miFunction);
console.log(typeof miOtraFunction);
console.log(typeof forma);
console.log(typeof size);

if( typeof forma == 'string') {
    console.log(forma.trim());
}