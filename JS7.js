console.log("this is 7th tutorial of javascript");

function greet(name , greetText){
    let name1 = "name1"; //here the name1 is a local variable and it has no use of the global variable 
    console.log(greetText + "" + name)
    console.log(name + " is a good boy")
     
}
let name = "harry";
let name1 = "shubham";
let name2= "rohan";
let name3 = "aditya";
let name4 = "varul";
let greetText = "goodmorning"
greet(name1,greetText);
greet(name2,greetText);
greet(name3,greetText);
greet(name4,greetText);