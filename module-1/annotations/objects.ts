const profile = {
    name:'alex',
    age:20,
    coordinates:{
        lat:0,
        lng:15
    },
    setAge(age:number):void{
        this.age = age;
    }
};

const { age }:{age: number} = profile;
// remember that destructure and annotations need to be seperated for structure
// if you want to desctruture something you have to state the structure of the object

const {coordinates: {lat,lng}}:{coordinates:{lat:number, lng:number}} = profile