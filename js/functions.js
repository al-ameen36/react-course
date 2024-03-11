function add(){
    const sum = 2+2 
    // does not return a value
}


function sub(num1,num2){
    return num1 - num2 // returns a value
}

// to use a function call it -> functionName()
add()
sub(20,10)

// Parameters vs arguments
// parameters are the place holders between our function definition's
//  eg function sub(num1,num2)

// arguments are the actual values we pass to the function when calling it
// e.g sub(10,3)


const num1 = add()
const num2 = sub(20,1)
console.log(num1); // does not return a value, hence we get undefined in the console
console.log(num2); // returns a value. we see the returned value in the console


// function paramaeters
function mul(num1, num2){
    return num1 * num2
}

console.log(mul(5*3,5));
console.log(sub(mul(5*3,5), mul(1,2)));


// console.log(mul(5,5));
// console.log(mul(15,5));
// console.log(mul(100,5));

// TODO 
// Arrow functions