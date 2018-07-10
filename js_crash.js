// var name = 'selim reza swadhin';
// var age = 22;
// var skills = ['java', 'javascript', 'angular'];

// var something;
// var anything = null;

//console.log(typeof name);
// console.log(typeof age);
// console.log(typeof skills);
// console.log(something === anything);
// console.log(something == anything);
// console.log(undefined == null);
// console.log(undefined === null);
// console.log(100 == '100');
// console.log(100 === '100');

// console.log(name);

//  Number, String, Boolean undefined, null, Array, object, Function

// var age = 18;

// if(age >= 18){
//     console.log('yes, i am eligible');    
// }else{
//     console.log('no');    
// }

//var name = 'HM Nayem';
//console.log('hello',+ name);
// console.log('hello,'+ name);
// console.log('hello, +name');

/*----------------------------------------------*/

// for(var i = 0; i<10; i++){
//     console.log('hello,' +name);    
// }

// var names = [];
//console.log(typeof names);
// names[0]= 'hm nayem';
// names[1] = 'shegufa taranjum';
// names[2]= 'twinkle cats';

// names;
// console.log(names);

// for(var i =0; i<names.length; i++){
//     console.log('hello,' +names[i].toUpperCase());    
// }

//var names = ['hm nayem','shegufa taranjum','twinkle cats','abir azim'];
// var data =[1,2,3,4,5,6]
// console.log(data.length);
// console.log(names[1]);
// console.log(names[names.length-1]);
// console.log(names.indexOf('hm nayem'));
// console.log(names.indexOf('hm nayam'));

// names[names.length]='Someone';
// console.log(names);

// names.push('helena');
// console.log(names);
//  var sortedArray=names.sort();
//  console.log(sortedArray);
//  names.splice(1,2);
//  names.splice(1,1,'anyone');
//  console.log(names);

/*---------------------------------------------------*/

/* function declaration */
/* function add(a,b) {
          var c =a+b;
 }
  console.log(add(22,11)); */

/* function add(a,b) {
    var c =a+b
    return c;
}

console.log(add(22,11)); */


//  function add(a,b) {
//     //var c =a+b
//     return a+b;
// }

// console.log(add(22,11)); 

/* function expression */

/* var add = function (a,b) {
    return a+b;
}

// console.log(add(11,12));

var addition = add;
console.log(addition(12,12)); */

/*---------------------------------------------------------------------------*/

/*
// var names = ['hm nayem','shegufa taranjum','twinkle cats','abir azim'];

//  names.forEach(function(x) {
//         var y = x.toLocaleUpperCase();
//      console.log(y);
    
//  });


//  names.forEach(print);
 
//  function print(name) {
//      console.log(name);    
//  };
//  names.forEach(print);

//  function selim(name) {
//      console.log(name);    
//  };

//  names.forEach(selim); */

/*---------------------------------------------------------------*/

// function operation(a,b) {
//     var c = a+b;
//     var d = a-b;

//     console.log(a,b);    
// }

// operation(10,5); nise nia gesi.

/* function operation(a,b) {
    var c = a+b;
    var d = a-b;

    print(c,d);    
}

function print(c,d) {
    console.log(c,d);
    
}
operation(10,5); */

/*---------------------------------------------------*/

/* function operation(a,b,callback) {
    var c = a+b;
    var d = a-b;

    callback(c,d);    
}

function print(c,d) {
    console.log(c,d);
    
}

function multiple(c,d) {
    console.log(c*d);
    
}
function divide(c,d) {
    console.log(c/d);
    
}
//call function
//operation(10,5,print);
// operation(10,5,multiple);
// operation(10,5,divide); */

/*-----------------------------------------------------*/

/* // function operation(a,b,callback) {
//     var c = a+b;
//     var d = a-b;

//     callback(c,d);    
// }

// operation(10,4, function(c,d) {
//     console.log('Divide:' +(c/d));
    
// });

// operation(10,5, function(c,d) {
//     console.log('Multiple:' +(c*d));
    
// }); */



/*---------------------------------------*/
// function selim(a,b) {
//     var c = a+b;
//     var d = a-b;

//     y(c,d);    
// }

// function y(c,d) {
//     console.log(c,d);
    
// }
// selim(10,5);

/*--------------------------------------------------------------------------*/

//  var names = ['hm nayem','shegufa taranjum','twinkle cats','abir azim'];
//  function traverse(names,callback) {
//      for(var i = 0; i<names.length; i++){
//          callback(names[i]);
//      }
//  }
//  traverse(names,  function(name){
//      console.log(name.toUpperCase());  
//  });

/*---------------------------------------------------*/
/*---object----*/
// var person = {};
// person.name = 'Twinkle Cats';
// person.age = '6 month';
// person.print = function () {
//     console.log(this.name + ' '+this.age);    
// };

// person.print();

var person = {
    name:"hm nayem",
    age: 22,
    skills: ['java, javascript, angular, android'],

    print: function() {
        console.log(this.name, this.age, this.skills);
        
    }
};

//  person.name = 'Shegufa Taranjum'; //name change
// person.print();
   console.log(person['name']);

   for(var i in person){
       console.log(person[i]);       
   }

/*----array er vitor object---*/
   var people = [
    {
        name:"hm nayem",
        age: 22,
        skills: ['java, javascript, angular, android'],
    
        //  print: function() {
        //      console.log(this.name, this.age, this.skills);
            
        // }
    },

    {
        name:"selim reza",
        age: 23,
        skills: ['java1, javascript1, angular1, android1'],
    
        //  print: function() {
        //      console.log(this.name, this.age, this.skills);
            
        // }
    },

    {
        name:"sr selim",
        age: 24,
        skills: ['java2, javascript2, angular2, android2'],
    
        //  print: function() {
        //      console.log(this.name, this.age, this.skills);
            
        // }
    }
   ];


   people.forEach(function(person){
       console.log(person.name);
       
   });










 














