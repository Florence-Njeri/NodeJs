//Event module for event driven programming
const EventEmitter=require('events');
const eventEmitter=new EventEmitter();
//Attach a listener to the onject 
eventEmitter.on('tutorial',(num1,num2)=>{
    console.log(num1+num2);
});
//
eventEmitter.emit('tutorial',1,2);

//Class extends from the events emitter class
class Person extends EventEmitter{
    constructor(name){
        super();
        this._name=name;
    }
    get name(){
        return this._name;
    }
}

let pedro=new Person('Pedro');
pedro.on('name',()=>{
    console.log('My name is '+ pedro.name);
})
pedro.emit('name');
