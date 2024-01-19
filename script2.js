let str = "salom";

function sliceFunc(str1, age) {
    // ? includes()

    // let incStr = str.includes("nima")
    // ? indexOf
    // let indexStr = str1.indexOf("dunyo")
    // let arrFruit = ["banana", "apple", "orange", "lemon"]
    // let indexArr = arrFruit.indexOf("apple")

    // ? if else shart operatori
    // if(str1.length > 10) {
    //     return "string uzuun";
    // } else {
    //     return "katta"
    // }

    // if (age < 16) {
    //     return "uzur yoshingiz kichik";
    // } else if(age >= 50) {
    // } else {
    //     return "marhamat hush kelibsiz"
    // }

}

console.log(sliceFunc(str, 50));
   //? Masala
    // 90+   A+
    // 70 va 90 oralig'ida A
    // 60 va 70 oralig'ida B
    // 50 va 60 oralig'ida C
    // 50 dan kichik F  yani yiqilgan

    /// ?  1-masala
   let ball = 95;

   function exam(ball){
     if (ball = 90){
        return "+A"
     }else if(ball > 70  &&  ball > 90 ){
         return "B"
     }else if(ball >50  &&  ball > 60){
          return "C"
     } else (ball > 50 ) 
         return "F"    
   }
   console.log(exam(ball));

     /// ? 2-masala 
   let str2 = ""; 

  function str3(str2){
    if(str2.length >1){
      return true
    } else if(str2.length > 0){
        return false
    } else{
        return true
    }
  }
  console.log(str3(str2));

 
   /// ? 3-masala
  let  person = {
     name:"Rayhona ",
     surname :"Mirzoyeva ",
     age:15 ,
     adress:"Uzbekistan",
  }
   
  console.log(person.age);