// map() polyfills

const arr = [1,2,3,4,5];

Array.prototype.myMap = function (cb){

let temp = [];

    for (let i=0;i<this.length;i++){

        temp.push(cb(this[i],i,this))
    }
    return temp;
}


let output = arr.myMap((ele,index,arr)=>{

    return ele*2;
})

console.log("output :: ",output);



// filter() polyfills

const arr = [1,2,3,4,5];

Array.prototype.myfilter = function (cb){

let temp = [];

    for (let i=0;i<this.length;i++){
if(cb(this[i],i,this)){
    temp.push(this[i]);
}
    }
    return temp;
}


let output = arr.myfilter((ele,index,arr)=>{

    return ele>=4;
})

console.log("output :: ",output);


// reduce() polyfills

const arr = [1, 2, 3, 4];

Array.prototype.myRedue = function(cb, initialValue) {
    let accumulator = initialValue;

    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
    }
    return accumulator;

}

let output = arr.myRedue((acc,curr,i,arr)=>{

    return acc + curr;
}
, 0)

console.log("output :: ", output);



let obj = {
    name:"vishal",
}


function sampleFn(role){
    console.log(`Iam ${this.name} my role is ${role}`)
}


Function.prototype.myCall = function(context = {},...args){
    // if(typeof this !== "function"){
    //     throw new Error(this + "It's not a function");
    // }

    context.fn = this;
    console.log(context)
    context.fn(...args)
}

sampleFn.myCall(obj,"dev");



let obj = {
    name: "vishal",
}

function sampleFn(role) {
    console.log(`Iam ${this.name} my role is ${role}`)
}

Function.prototype.myBind = function(context={}, ...args) {
    // if(typeof this !== "function"){
    //     throw new Error(this + "It's not a function");
    // }
    // if(!Array.isArray(args)){
    //     throw new Error(this + "argument is not an array");
    // }
    context.fn = this;
    return function(...newArgs) {
        return context.fn(...args, ...newArgs);
    }
}

let newFunction = sampleFn.myBind(obj);
newFunction("dev");
