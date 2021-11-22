// interface + Classes = strong code reuses in TS
// * interface will creates a new type describing the property names and value types of an object

interface Car {
    name: string;
    year: number;
    broken: boolean;
    summary():string; //method that will return a string
}

interface Reportable{
    summary():string
}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string{
        return `Name: ${this.name}, Year: ${this.year}, Broken: ${this.broken}`
    }
};

const printVehicle = (vehicle: Car):void => {
    console.log(vehicle.summary());
};
// since the type annotations is too long we are going to shorten it using interface

printVehicle(oldCivic);


const pepsiZero = {
    color:'brown',
    carbonated:true,
    sugar:80,
    summary():string{
        return `My drink has ${this.sugar} grams of sugar`
    }
}

const printSummary = (item: Reportable):void => {
    console.log(item.summary())
}

printSummary(oldCivic)
printSummary(pepsiZero)

// reportable interface and printSummary can be reuse by oldCivic and pepsiZero
// ! by using this strategy our interface can be a gate keeping for specific function that need the interface condition met before can be run
// ? general strategy for reusable code in TS
/**
 *      * Create functions that accept arguement that are typed with interfaces
 *      * Objects/classes can decide to implement a given interface to work with a function
 */