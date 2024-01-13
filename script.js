let shirtColor = "red";
shirtSize = "xxl"; 

let shirt = {
    color:"red",
    size: "xxl",
    // Method
    sayHello: function (){
        return "hiiiii"
    }
}

//console.log(shirt.sayHello());
// console.log(shirt['color']);

// function sayHello(){
  //   return " hello everyOne "
//}

//console.log(sayHello());

   // ? Malumot turlari
// Number
// boolean
// string
// undefined
// null
// object

let str1 = "Bittali Qo`shtirnoq";
// Bittali Qo`shtirnoq
// 012345678910 
 
let str2 ='bektik orqali string yasash'

// ? String property
//console.log(str.length);

//? String methods
// charAt()
//console.log(str.charAt(6));

// At()
//console.log(str.At(6));

// slice()

let str = 'Bittali qo`shtirnoq kjhcbwjcbhkjwuc';
console.log(str[0]);

let slicedStr = str.slice(-10, -1)
console.log(slicedStr);

// Substring()
let newSub = str.substring(8, str [length -1])
console.log(newSub);

// Substr()

 let substrNew = str.substr(8,5)
 console.log(substrNew);

   // toLowerCase()
 //  console.log(str.loLowerCase());

   // toUpperCase
   console.log(str.toUpperCase());

   // concat

   let a = "hello         ";
   let  b = "world         ";
   let  z = "war";
   let  x = a.concat(b,z)
   console.log(a + b + z);
   
   // trim()

    console.log(a.length);
    console.log(a.trim().length);

  // reapet()
  console.log(z.repeat(5));

  //replace()

  let word = "alik yaxshimisiz alik";
  let newOne = word.replace("alik", "salom");
  let newAll = word .replaceAll("alik", "salom");
  console.log(newAll);

  // split()
  let newArr =word.split(",");

  console.log(newArr);
  let arr = [{ name :"Shaxzod"},{name:"Daler"},{name: "Amir"}];
 
  // Function

  function sayHello(a,b){
    let result = a + b * 10;

    return result;
}
console.log(sayHello(12,34));
  


