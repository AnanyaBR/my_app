//hof - higher order function
// a function which takes a function as an argument or a function that returns a function as a value is called as a higher order function

//callback function - the function which is being passes as an argument to another function is called as a callback function

//a function which takes another function as an argument
/*
forEach, filter, find, map, addEventListner, then
*/




// a function that returns a dun tion as value

function sum(n){
    n = n%2==0 ? n: 0
    return function(a,b){
        return a+b+n
    }
}

console.log(sum(5)(10,15)) // 25
console.log(sum(2)(10,15))

function add(a,b){
    return a+b
}

console.log(add(10, 20)) //30