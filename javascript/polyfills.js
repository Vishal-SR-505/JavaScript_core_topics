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
