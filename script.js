
let arrayran = [];
for (let index = 0; index < 10; index++) {
    arrayran[index] = Math.floor(Math.random() * 100);
}

console.log(arrayran)

let evensum = 0;

for (let index = 0; index < arrayran.length; index++) {
    if (arrayran[index] % 2 == 0) {
        evensum += arrayran[index];
    }
}


console.log("the sum of even numbers: " + evensum);
document.writeln("the sum even number : ", evensum, "<br>");

let sumless = 0;

for (let index = 0; index < arrayran.length; index++) {
    if (index < 5) {
        sumless += arrayran[index];
    };
};
console.log("the sum of numbers less than 5: " + sumless)
document.write("the sum of number less than 5: ", sumless, '<br>');


// ................

let object = {
    name: "Hussam",
    number: "+963980266994",
    age: 21,
    email: "hosam4255@gmail.com",
};

console.log(object);
document.write(object, "<br>");

console.log("Name: " + object.name);
console.log("Number: " + object.number);
console.log("Age: " + object.age);
console.log("Email:" + object.email);

//on HTML 

document.writeln("Name : ", object.name, "<br>");
document.writeln("Number : ", object.number, "<br>");
document.writeln(" Age : ", object.age, "<br>");
document.writeln("Email : ", object.email, "<br>");