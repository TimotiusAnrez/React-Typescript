const add = (a:number,b:number):number => {
    return a+b
};

// params annotation(a:number, b:number) output annotation (:number)

const substract = (a:number,b:number) => {
    return a-b
}

// params annotation(a:number,b:number) output annotation(void)
// ! becareful to not give output annotation, it will be declared as void output
// always declare an output annotation

function divide(a:number,b:number):number{
    return a/b
}

const multiply = function(a:number, b:number):number{
    return a*b
}

// no matter what type of function you have to declare parameter annotations and the output annotations 
// in the same format (variable annotations):output annotations

const logger = (message:string):void => {
    console.log(message);
    return undefined || null
}

// won't return anything

const throwError = (message:string): never => {
    throw new Error(message);
}

// will not return since it will eject an error using throw syntax

const todayWeather = {
    date: new Date(),
    weather: 'sunny'
}

const logWeather = ({date, weather}: {date: Date, weather:string}):void => {
    console.log(date);
    console.log(weather);
}
// destructuring statement and annotations must be seperated

logWeather(todayWeather);