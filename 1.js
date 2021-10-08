// var and let
// var is a function scope and get hoisted where as let is a block scope and it does not get hoisted

var varAndLetExample = function (){
    var a = 'hello word';
    console.log(a); //hello world

    if(true){
        let c ='block scope example';
        console.log(c); // block scope example
    }
    console.log(c); // c is not defined

    b = 'hoisting example';
    console.log(b);
    var b; // hoisting example
    //let b; // reference error

}
//console.log(a); // reference error
//varAndLetExample();








// == and ===
// == equal checks only value and === checks value and type.

var doubleAndTripleEqualExample = function(){
    console.log( 2 == '2' ) // true;
    console.log( 2 === '2' ) // false
}
//doubleAndTripleEqualExample();








//array methods
// push, pop, shift, unshift, splice, slice, concat


let arrayMethods = function (){

    //push and unshift
    let a = [1,2,3,4];
    a.push(6);
    console.log('push : '+ a); // [1,2,3,4,6] add at the end
    a.unshift(7);
    console.log( 'unshift : ' + a); // [7,1,2,3,4,6]; add at the beggining

    //pop and shift
    let b = [1,2,3,4];
    b.pop();
    console.log('pop : '+ b, b.length); // 1,2,3 , 3 length , pop removes the lst element oth array
    b.shift();
    console.log('shift : '+ b); // 2,3 shift removes the first ele of the array

    //splice and slice
    let c = [1,2,3,4];
    //c.splice(1, 2);
    //console.log(c); // [1,4] first parameter is a index and 2nd is how any elemnts u want to del in a row. 3 and so on is to add in array.
    d = c.slice(1);
    console.log('slice : '+d) // 2,3,4 return a new array

    // concat
    let e = [1,2,3,4];
    let f = [5,6,7,8];
    let g;
    g=e.concat(f);
    console.log('concat : ' + g); // [1,2,3,4,5,6,7,8]
}
//arrayMethods();









// looping structure in javascript

let loopingEample = function(){
    let a = [4,3,5,2,1];
    let b = {id:1, type:'one', name:'veeru', age:30};
    let c = [
        {id:1, type:'one'},
        {id:2, type:'two'},
        {id:3, type:'three'},
        {id:4, type:'four'}
    ]

    // for( x in b){
    //     //console.log(x, b[x]); // in for objects
    // }
    // for (x of a){
    //     //console.log(x); // of for array
    // }

    // c.forEach(function(v, i){
    //     console.log(v, i);
    // })
    // Object.keys(b).forEach(function(v, i){
    //     console.log(v, i);
    // })
    let e = 0;
    let d = 0;
    do{
        e += d++;
    }
    while(d < 10);
    console.log(e);
}
//loopingEample();









//clouser : it is access of outer variable inside the function is clouser
// let x = 10;
let clouserExample = function (){
    let a = x;
    x = 20;
    //console.log(x);
    NestedclouserExample();

};
function NestedclouserExample(){
    console.log(x);//20  access of outer variable inside the function is clouser
}
//clouserExample()
//console.log(x);









// call and apply


// var person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
//   var person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
//   console.log(person.fullName.apply(person1, ["Oslo", "Norway"]));
//   console.log(person.fullName.call(person1, "Oslo", "Norway"));









//tricky que

//factorial

// let num, fact;
// num = 5;
// fact = 1;

// for(let i=num; i>=1; i--){
//     fact = fact*i;
// }
// console.log(fact); // 120 i,e 5*4*3*2*1


//prime Numbers
//let number = 0;
// for(let i=2; i<100; i++){
//     let number = 0;
//     for(let j=2; j<i; j++){
//         if(i%j === 0){
//             number = 1;
//         }
//     }
//     if(number == 0){
//         console.log(i+' ');
//     }
// }


//adding adjcent numbers

// let a = [1,2,3,4,5,6] // output should be 12
// let c = 0;
// for(let i=0; i<a.length; i++){
//     if(a[i]%2 === 0){
//         c += a[i];
//     }
// }
// console.log(c);

// reversing a word and a senctence
// let a = "hello";
// let b = 'hello world';
// let c = a.split('').reverse().join(''); // olleh
// let d = b.split(' ').reverse().join(' '); // world hello
// let e = b.split(' ').reverse().join(' ').split('').reverse().join('');//olleh dlrow
// let f = b.split('').reverse().join(''); // dlrow olleh
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)

// adding two numbers
// console.log(2 + 2)//4
// console.log(2+'2')//22
// console.log(2+'2' + 3 + 4)//2234
// console.log(2+ 2 + 3 + 4) // 11

//greater then
//console.log(1<2<3); // 1<2 =1 and 1<3 // true
//console.log(7>6>5); // 7>6 = 1 i,e true and 1>5 false


//comparing objects or mabject matching
// let a = {id:1};
// let b = {id:1};

// console.log(a == b); // false
// console.log(Object.is(a) == Object.is(b)); // true

// //deep copy
// let a = {id:1, name:'one'};
// let b = Object.assign({}, a);
// console.log(b);
// console.log(Object.entries(b));

//map , filter, reduce
// let a = [1,2,3,4];
// let b = a.reduce(function(v, i){
//     return v + i;
// })
// console.log(b)

// //sorting and removing duplicate
// let a = [4,3,5,2,1,2,3,5,10];
// let b = [...new Set(a)].sort(function(a,b){
//     return a-b;
// });
// console.log(b);

// joining an array
// let a = [...[1,2,3,4],...[5,6,7,8]];
// console.log(a);

//object seal, object freez
// let a = {id:1, name:'one'};
// Object.seal(a); // id = 2
// Object.freeze(a); // id = 1
// a.id = 2;
// a.age = 3;
// console.log(a);

// var Employee =
// {
// company: 'xyz'
// }
// var Emp1 = Object.create(Employee);
// delete Emp1.company;
//  console.log(Emp1.company);


//how to change background color of html element fro javascipt
//document.body.style.backgroundColor = '#c2cfcf';


// indexOf for checking duplicates in the array
// let a = [4,7,8,1,2,66,10,1,2,3,4];
// let b = [];
// a.forEach(function(v, i){
//     if(b.indexOf(v) == -1){
//         b.push(v);
//     }
    
// })
// console.log(b);

//dividing the array into requried data
// let a = [{id:1, name:'hello'},{id:2, name:'bye'},{id:3, name:'hello'},{id:4, name:'bye'},{id:5, name:'hello'},{id:6, name:'bye'},{id:7, name:'hello'},{id:8, name:'bye'},{id:9, name:'hello'},{id:10, name:'bye'}]

//     function chunk(arr, size) {
// 		var newArr = [];
// 		  for (var i=0; i<arr.length; i+=size) {
// 		    newArr.push(arr.slice(i, i+size));
// 		  }
// 		  return newArr;
// 		}
//     let b = chunk(a, 5);
//     console.log(b);



// function getWeight(mystring){
//     let sum=0;
//     // Your code here.
//     let toConvert = mystring.split('');
//     let alpha = {a:1, b:2,c:3, d:4};

//    toConvert.forEach(function(val, key){
//          Object.keys(alpha).map(function(v,k){
//             if(v === val){
//               sum += alpha[v];
//              };
//         })
//     })
    
//     return sum;
// }

// console.log(getWeight("abc"));

// let a = {id:1};
// let b = a;
// a.id = 2;
// console.log(b); // {id:2}  shallow copy

let a = [{id:1, name:'one'},{id:2, name:'one'}];
// let aa = [1,2,3];
// let  b = [...aa];
let b = a.map(a => ({...a}));
 a[0].id = 10;
//let b = {...a};
//let b = Object.assign({}, a);
//a.id = 2;
console.log(b);



//3 div having same class name how to get center 1
let midDiv = function(){
    let x = document.getElementsByClassName('example');
    console.log(x[1].innerHTML);
};
let divId = function(){
    let x = document.getElementById(1).innerHTML;
    console.log(x);
}



//promise example

let promiseExample = function(){
    let a = new Promise((resolve, reject) => {
        let booValue = 1;
        if(booValue){
            resolve('its resolved');
        }else{
            reject('its rejected')
        }
    })

    a.then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })
}

//promiseExample();


//bind example

let bindExample = function (){

    let a = {id:1, value:2};
    let b = {id:20, value:30};

    function callThis(){
        console.log(this.id, this.value);
    }

    let c = callThis.bind(b);
    c();
}
//bindExample();


// const itterrating 
let constItterrating = function(){
    for(const i=0; i<10; i++){
        console.log(i); // 0 and typeo Error const can not be itterable
    }
}
//constItterrating();


