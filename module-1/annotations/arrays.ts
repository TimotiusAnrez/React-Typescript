// array in typescript will only have one type of each element of that arrays

const carMarkers = ['fords', 'toyota', 'chevy']; // array of strings
const carModel = []; //array with any type

const dates = [new Date(), new Date()];

const carsByMaker:string[][] = [['f150'],['corolla'],['camaro']];

// Help with inference when extracting values

const carInGarage = carMarkers[0];
const myCar = carMarkers.pop();

// Prevent incompatrible value

carMarkers.push('100'); // will get type error since carMakers is array of strings

// help with 'map'

carMarkers.map((car:string):string => {
    return car.toUpperCase();
});

// Flexible types

const importantDates:(Date | string)[] = [new Date(), '2030-10-10']; // will give 2 type annotations, arrays of date object or string
// ! other than date or string it will give an error

// ? tuples
// * => array like structure where each element represents some property of a record

const drink = {color:'brown', carbonated:true, sugar:40};
// tupple looks like this => [brown, true, 40] but tupple has a fixed order of structure, if you switch one it will be a meaningless record

const pepsi = ['brown', true, 40]; // ! order inside of tuple is important so we must constrict each structure

// so to constrict it we need to put in annotations
const cola: [string, boolean, number] = ['brown', true, 60]; // ? this will constrict the structure of this tupple

// cola[0] = 40 //! error generated if we put in value not suitable for the typed constrict to the index of tupple

type Drink = [string, boolean, number] // ? this is type alias, that will make our live easier to declare a type

const fanta: Drink = ['orange', true, 40]