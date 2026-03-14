// // console.log("Tanmay Kadam");

// fullName = "Tanmay Kadam";
// console.log(fullName);

// const student = {
//     name: "Tanmay",
//     age: 22,
//     city: "Pune"
// };

// for ( let i in student) {
//     console.log(i);
//     console.log(student[i]);
// }


// for ( let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// let number = prompt("Enter a number: ");
// let guessNumber = Math.floor(Math.random() * 10) + 1;

// if (number == guessNumber) {
//     console.log("Congratulations! You guessed the number.");
// } else {
//     console.log("Sorry! The correct number was " + guessNumber);
// }

// let fullName = prompt("Enter name: ");
// let a = "@";
// let sizeOfName = fullName.length;

// let userName = a.concat(fullName).concat(sizeOfName.toString());
// let userName2 = a + fullName + sizeOfName;
// console.log(userName);
// console.log(userName2);

// let marks = [85, 97, 44, 37, 76, 60];
// let totalMarks = 0;

// for (let i = 0; i < marks.length; i++) {
//     totalMarks += marks[i];
// }

// let averageMarks = totalMarks / marks.length;
// console.log("Average Marks: " + averageMarks);


// let prices = [250,645, 300, 900, 50];
// for ( let i = 0; i < prices.length; i++) {
//     prices[i] = prices[i] - (prices[i] / 10);
// }

// console.log(prices);

// let arr = ["car", "bike", "bus", "train"];
// arr.splice(2, 0, "boat");
// console.log(arr);

// arr.splice(1, 1);
// console.log(arr);

// arr.splice(2, 1, "plane");
// console.log(arr);

// let arr = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// // arr.splice(0, 1)
// arr.shift()
// console.log(arr);
// arr.splice(1, 1, "Ola");
// console.log(arr);
// arr.push("Amazon");
// console.log(arr);


// function declaration

// function sub (a, b) {
//     return a - b;
// }

// //function expression
// let arrowSum = function (a, b) {
//     return a + b;
// };

// let arrowMul = (a, b) => {
//     return a * b;
// };

// function vowelsCount(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase();
//         if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//             count++;
//         }
//     }
//     return count;
// }

// let vowels = vowelsCount("Hello World");
// console.log(vowels);

// const countVowels = (str) => {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase();
//         if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//             count++;
//         }
//     }
//     return count;
// }




// let arr = [1,2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr.forEach((val, idx) => {
//     console.log(`Index: ${idx}, Value: ${val} and Square: ${val * val}`);
// });

// function printSquares(arr) {

// }


// for (let i = 0; i < arr.length; i++) {
//     console.log(`Index: ${i}, Value: ${arr[i]} and Square: ${arr[i] * arr[i]}`);
// }

// let evenArr = arr.filter((val) => {
//     return val % 2 === 0;
// });
// console.log(evenArr);





// const marks = [85, 97, 44, 37, 76, 60];

// const highMarks =  marks.filter((mark) => {
//     return mark >= 90;
// });

// console.log(highMarks);





// let number = prompt("Enter a number: ");
// let arr = [];
// for (let i = 1; i <= number; i++) {
//     arr.push(i);
// }

// const reduceArr = arr.reduce((acc, val) => {
//     return acc + val;
// });

// console.log(reduceArr);

// const reduceArr2 = arr.reduce((acc, val) => {
//     return acc * val;
// });

// console.log(reduceArr2);


// let heading2 = document.getElementById("heading2")
// let appendText = " -  From Tanmay Kadam"
// let originalText = heading2.innerText;
// heading2.innerText = originalText + appendText;
// console.log(heading2.innerText);



// let boxes = document.querySelectorAll(".box");
// console.log(boxes);

// boxes.forEach((box, index) => { 
//     box.innerText = `This is box number ${index + 1}`;
// });

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click Me";
// newBtn.style.backgroundColor = "red";
// newBtn.style.color = "white";

// document.body.prepend(newBtn);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));
// para.setAttribute("class", "para2");
// console.log(para.getAttribute("class"));


// let modeBtn = document.getElementById("btn");
// let isDarkMode = false;
// const modeChange = () => {
//     if (!isDarkMode) {
//         // document.body.classList.add("dark-mode");
//         document.body.style.backgroundColor = "black";
//         isDarkMode = true;
//     } else {
//         // document.body.classList.remove("dark-mode");
//         document.body.style.backgroundColor = "white";
//         isDarkMode = false;
//     }
//     console.log(`Mode changed ${isDarkMode}`);
// }
// modeBtn.addEventListener("click", modeChange);



//Classes

// let DATA = "This is some data";
// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     viewData () {
//         console.log("Data :", DATA);
//     }
// }

// class admin extends User {
//     editData () {
//         DATA = "Data has been edited by admin";
//     }
// }

// let userObj = new User("Tanmay", "tk@gmail.com");
// console.log(userObj);

// let adminObj = new admin("Admin", "admin@gmail.com");
// console.log(adminObj);

let description = document.querySelector("#dog-description");
const baseUrl = "https://dogapi.dog/api/v2/";

// let promise = fetch(`${baseUrl}/breeds`);

const getBreeds = async () => {
    try {
        let response = await fetch(`${baseUrl}/breeds`);
        let data = await response.json();
        
        console.log(response);
        console.log(data);
        console.log(typeof data);
        console.log(data.data[0])
        console.log(data.data[0].attributes.description);
        description.innerText = data.data[0].attributes.description;
        // return data;
    }
    catch (error) {
        console.log("Error fetching breeds: ", error);
    }
}



getBreeds();
console.log("This will log before the breeds are fetched");













