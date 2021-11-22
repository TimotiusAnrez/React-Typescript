let apples = 5;
let speed = 'fast';
let hasName = true;

let nothingMuc:null = null;

let nothing:undefined = undefined;

// without giving annotation to typescript, 
// typescript will guess what the type is for the variable and will constrict the reasignment type value to that variable
// since null and undefined is nothing, means we need to give the annotation to typescript if we want that type of value



// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue']; //? aray of strings, no other type value can be inserted
let myNumbers: number[] = [1,2,3]; //? array of numbers
let truths: boolean[] = [true, true, false]; //? array of booleans
let objects: object[] = [{1:true}] //? array of objects

// classes

class Car{

}

let car:Car = new Car();

// ? delcare types using existing class

// Object literal
let point: {x:number; y:number} = {
    x:10,
    y:20
};
// ! damn this is crazy, 
// * as long as you declare the type first before puting in the value you are good to go


// function
/**
 * what we care about function is what value it gets as parameter
 * and what value it gets out as output
 */

const logNumber:(i:number) => void = (i:number) => {
    console.log(i);
};

// :(i:number) => void
// ? is the annotation that we tell typescript what value that we give as input :(i:number)
// ? and the output we got as return (=> void)

/**
 * when to use type annotations and inferences?
 * 
 * we always be using type inferences most of the time
 * 
 * but there is three scenarios where we are going to use type annotations to help typescript figuring early error
 * 
 *      * when a functions returns any type and we need to clarify the value
 *      * when we declare a variable on one line then initialize it later
 *      * when we want a variable to have a type that can't be inferred
 */

// 1)
    const json = '{"x":10,"y":20}';
    const coordinates: {x:number;y:number}= JSON.parse(json); //? use annotation to declare output of the JSON.parse
    console.log(coordinates); // {x:10, y:20}
// JSON.parse() will output any kind of type, so typescript can't predict the output of JSON.parse 
// since it relly on our input gave to JSON.parse

// any is a type just like string or boolean
// meaning TS has no idea what this is, and it can't check for correct property references
// avoid variables with any at all cost

// * type inference will only works if we declare variable and initialization on the same line

// 2) declare variable on one line initialize later

let words = ['red', 'green', 'blue'];
let foundWord:boolean;

for(let i = 0; i < words.length; i++){
    if(words[i] === 'green'){
        foundWord = true
    }
}

//  3) when we want a variable to have a type that can't be inferred
let numbers = [-10, -1, 12];
let numberAboveZero:boolean | number = false; // so we can declare two types either boolean or nummber

for (let i=0; i < numbers.length; i++){
    if(numbers[i] > 0){
        numberAboveZero = numbers[i]
    }
}

