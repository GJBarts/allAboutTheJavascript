console.log(definedLater);
var definedLater;
definedLater = "I am defined";
console.log(definedLater);

console.log(definedSimultaneously);
var definedSimultaneously = "I am defined";
console.log(definedSimultaneously);

function dosomethingElse() {
    console.log("I did it");
}

// var functionVar = function() {
//     console.log("I did it!");
// }
//
// if (dosomethingElse() instanceof functionVar) {
//     console.log("this");
// }

dosomethingElse();