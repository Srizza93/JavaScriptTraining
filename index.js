// OPERATORS--------------------------

// Comment
// console.log('Hello World');

// let name = 'Simone'; // String
// console.log(name);
// let age = 30; // Number
// let isApproved = true; // Boolean
// let surname; // Undefined
// let lastName = null; // Null

// let person = {
//     name: 'John',
//     age: 27
// }
// Dot Notation
// person.name = 'Michael';
// Bracket Notation
// let selection = 'name';
// person[selection] = 'Jim';

// console.log(person);

// let interestRate = 0.3;
// interestRate = 1;
// const constantInterestRate = 3;
// console.log(interestRate + ' ' + constantInterestRate);

//___Arrays______________________________________________________________________

// let selectedColors = ['red','blue'];
// selectedColors[2] = 1;
// console.log(selectedColors[0] + ' Array: ' + selectedColors);
// console.log(selectedColors.length);

//___Functions_______________________________________________________________________

// function greet(name) {
//     console.log('Hello ' + name);
// }

// function square(number) {
//     return number * number;
// }

// console.log('Square function ' + square(2));

// greet('Mary');
// greet(name);

//___Arithmetic_Operators____________________________________________________________

// let x = 10;
// let y = 3;

// console.log(x + y); // Addition
// console.log(x - y); // Subtraction
// console.log(x * y); // Multiplication
// console.log(x / y); // Division
// console.log(x % y); // Remainder of division
// console.log(x ** y); // Exponentiation 10*10*10 or 10^3

// Increment (++)
// console.log(++x); // This way it increments of 1
// console.log(x++); // This way it increments 1 in the next log, see below
// console.log(x);  // Here x will be already incremented of 1 due to above code

// Decrement (--) The contrary of Increment
// console.log(--x); // This way it decrements of 1
// console.log(x--); // This way it decrements 1 in the next log, see below
// console.log(x); // Here x will be already decremented of 1 due to above code

//___Comparison_Operators____________________________________________________________

// console.log(x > 0); // This will be a boolean, in this case true.
// console.log(x >= 0);
// console.log(x < 0);
// console.log(x >= 0);

// Strict Equality (Type + value)
// console.log(x === 1); // three times = to check if it is equal
// console.log(x !== 1); // Not equal
// console.log('1' === 1); This is False, string is different than number

// Lose Equality
// console.log(x == 1); Equal
// console.log('1' == 1); This is True, even if we're comparing a string with a number

//___Ternary_Operators________________________________________________________________

// If a customer has more than 100 points, they are a gold customer,
// otherwise, they are a silver customer.

// let points = 100;
// let type = points > 100 ? 'Gold' : 'Silver';
// console.log(type);

//___Logical_Operators_With_Booleans_Values________________________________________

// Logical AND (&&)
// Returns True if both operands are true
// console.log(true && true);
// let highIncome = true;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore;
// console.log('Eligible for loan: ' + eligibleForLoan);

// Logical OR (||)
// Returns True if one of the operands is true
// let highIncome = false;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome || goodCreditScore;

// NOT (!) Gives the opposite
// let applicationRefused = !eligibleForLoan;
// console.log('Eligible for loan: ' + eligibleForLoan);
// console.log('Application refused:', applicationRefused);

//___Logical_Operators_With_Non_Booleans_Values_____________________________________
// console.log(false||true); 
// console.log(false||'Simone'); // Truthy as it is not Falsy
// console.log(false||1); // Truthy 
// console.log(false||1||2); // It gives the first Truthy value which is 1
// Falsy (not false):
// undefined
// null
// 0
// false
// ''
// NaN

// Anything that is not Falsy --> Truthy

// let userColor = undefined;
// let userColor = 'red';
// let defaultColor = 'blue';
// let currentColor = userColor || defaultColor;
// console.log(currentColor);
// If user selected the color, he will get it,
// Otherwise, it will be selected the default color

//___BitWise_Operators______________________________________________________

// 1 = 00000001
// 2 = 00000010
// 3| = 00000011
// 0& = 00000000

// console.log(1 | 2); // BitWise OR, just one line instead of two ||
// console.log(1 & 2);

// Example of real life scenario
// Read, Write, Execute
// 00000100 Read only
// 00000110 Read and Write
// 00000111 All permissions

// const readPermission = 4;
// const writePermission = 2;
// const executePermission = 1;

// let myPermission = 0;
// myPermission = myPermission | readPermission | writePermission;
// let message = (myPermission & readPermission) ? 'yes' : 'no';
// console.log(message);

//___Excercise____Swap_Values___________________________________________________

// let a = 'red';
// let b = 'blue';
// let c = a;
// a = b;
// b = c;

// console.log(a);
// console.log(b);

// CONTROL FLOW-----------------------------

//___If_Else___________________________________________________________________

// let hour = 20;

// if (hour >= 6 && hour < 12) {
//     console.log('Good Morning!');
// }
// else if (hour >= 12 && hour < 18) {
//     console.log('Good Afternoon!')
// }
// else {
//     console.log('Good Evening!')
// }

//___Switch_And_Case_____________________________________________________________

// let role = 'guest';

// switch (role) {
//     case 'guest':
//         console.log('Guest User');
//         break; 
//     case 'moderator':
//         console.log('Moderator User');
//         break;
//     default:
//         console.log('Unknown User');
// }

// if (role === 'guest') console.log('Guest User');
// else if (role === 'moderator') console.log('Moderator User');
// else console.log('Unknown User');

//___FOR___________________________________________________________________

// for (let i = 1; i <= 5; i++) {
//     console.log('Hello World', i);
//     if (i % 2 !== 0) console.log(i);
// }

//___While__________________________________________________________________

// let i = 0;
// while (i <= 5) {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// }

//___Do_While________________________________________________________________

// let i = 0;
// do {
//     if (i % 2 !== 0) console.log(i);
//        i++;
// } while (i <= 5);

//___For_In___________________________________________________________________

// const person = {
//     name: 'Simone',
//     age: 27
// };

// for (let key in person) {
//     console.log(key, person[key]);
// }

// const colors = ['red','green','blue'];

// for (let index in colors) {
//     console.log(index, colors[index]);
// }

//___For_Of___________________________________________________________________

// const colors = ['red','green','blue'];

// for (let color of colors) {
//     console.log(color);
// }

//___Break_And_Continue________________________________________________________

// let i = 0;
// while (i <= 10) {
//     // if (i === 5) break
//     if (i % 2 === 0) {
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }

//___Excercise_Max_Of_Two_Numbers______________________________________________

// let a = 12;
// let b = 7;
// let max = Math.max(a,b);
// console.log(max);

// function max (a,b) {
    // if (a > b) return a;
    // return b; // No need to add else statement as if a is not > than b, 
              // It will only execute the rest of the code
//     return (a > b) ? a : b;
// }

// console.log(max(5,1));

//___Excercise_Landscape_Or_Portrait__________________________________________
// console.log(isLandscape(400,600));
// function isLandscape (width, height) {
//     return (width > height);
// }

//___Excercise_Fizz_Buzz______________________________________________________

// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => fizzBuzz
// Not divisible by 3 and 5 => input
// Not a number => 'Not a Number'
// const output = fizzBuzz(false);
// console.log(output);

// function fizzBuzz (input) {
//     if (typeof input !== 'number') 
//         return NaN;
    
//     if ((input % 3 === 0) && (input % 5 === 0)) 
//         return 'fizzBuzz';
    
//     if (input % 3 === 0) 
//         return 'Fizz';
    
//     if (input % 5 === 0) 
//         return 'Buzz';
    
//     return input;
// }

//___Excercise_Demerit_Points_________________________________________________

// Speed limit: 70
// 5 --> 1 point
// Math.floor(1.3)
// 12 points -> Licence suspended

// checkSpeed(130);
// function checkSpeed(speed) {
//     let count = 0;
//     let points = 12;
//     for (let i = 70; i <= speed; i++) {
//         count++;
//         if (speed <= 70) {
//             console.log('Ok');
//             console.log(12 - points);
//             break;
//         }
//         if (count === 5) {
//             count = 0;
//             points--;
//         }
//         if (points === 0) {
//             console.log('License suspended');
//             break;
//         }
//     } console.log(speed, 12 - points + ' points');
// }

// checkSpeed(130);

// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const kmPerPoint = 5;

//     if (speed < speedLimit + kmPerPoint) {
//         console.log('Ok');
//         return;
//     }
//     const points = Math.floor((speed - speedLimit) / kmPerPoint);
//     if (points >= 12) 
//         console.log('License suspended');
//     else 
//         console.log('Points',points);
//     }
    
//___Excercise_Even_And_Odd_Numbers____________________________________________

// showNumbers(10);

// function showNumbers(limit) {
//     for (let i = 0; i <= limit; i++) {
//         if (i % 2 === 0) {
//             console.log(i,'Even')
//         }
//         else console.log(i,'Odd')

//     const message = (i  % 2 === 0) ? 'EVEN' : 'ODD';
//     console.log(i, message);
//     }
// }
    

//___Excercise_Count_Truthy_____________________________________________________

// const array = [null,1,4,1,3,5,undefined,2,'',false,0,NaN,3];

// console.log('Result',countTruthy(array));
// function countTruthy(array) {
//     let count = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] === 'number' && array[i] !== 0 && !isNaN(parseFloat(array[i]))) {
//             count++;
//         }
//     }
//     return count;
   
// }

// function countTruthy(array) {
//     let count = 0;
//     for (let value of array) 
//         if (value) 
//             count++;
//         return count;
//}
// If result is Truthy, count will increment

//___Excercise_String_Properties_______________________________________________________

// const movie = {
//     title: 'a',
//     releaseYear: 2018,
//     rating: 4.5,
//     director: 'b'
// };

// showProperties(movie);

// function showProperties(obj) {
//     for (let property in obj) 
//         if (typeof obj[property] === 'string')
//         console.log(property,obj[property]);
// }

//___Excercise_Sum_Of_Multiples_3_And_5__________________________________________________

// console.log(sum(12));

// Limit 10
// Multiples of 3: 3, 6, 9
// Multiples of 5: 5, 10
// Result: 33

// function sum(limit) {
//     let sum = 0;

//     for (let i  = 0; i <= limit; i++) 
//         if (i % 3 === 0 || i % 5 === 0) 
//             sum += i;
        
//     return sum;
// }

//___Excercise_Grade_____________________________________________________________________

// const marks = [80,80,50];

// Average = 70;

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

// console.log(calculateGrade(marks));

// function calculateGrade(marks) {
//     const average = calculateAverage(marks);
//     if (average < 60) return 'F';
//     if (average < 70) return 'D';
//     if (average < 80) return 'C';
//     if (average < 90) return 'B';
//     return 'A';
// }

// function calculateAverage(array) {
//     let sum = 0;
//     for (let value of array) 
//         sum += value;
//     return sum/marks.length;
// }

//___Excercise_Stars_______________________________________________________________

// showStars(3);

// function showStars(rows) {
//     let string = '';
//     for (let i = 1; i <= rows; i++) {
//         string = string + '*';
//         console.log(string);
//     }
// }

//___Excercise_Prime_Numbers________________________________________________________

// showPrimes(10);

// Prime (whose factors are only 1 and itself)
// Composite

// 12 = 1, 2, 3, 4, 6, 12
// Can be devided evenly by its factors

// 11 = 1, 11
// 13 = 1, 13

// Prime numbers within 20:
// 2, 3, 5, 7, 11, 13, 17, 19


// function showPrimes(limit) {
//     for (let number = 2; number <= limit; number++)
//         if (isPrime(number)) console.log(number);
// }

// function isPrime(number) {
//     for (let factor = 2; factor < number; factor++) 
//         if (number % factor === 0) 
//             return false;
//     return true;
// }

//-----------OBJECTS--------------------------------------------------------

// Object-oriented programming or OOP

// Object can contain any type of key-value, such as:
// variable,
// another object,
// boolean
// function

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function() {
//         console.log('draw');
//     }
// };

// circle.draw(); // This is the draw METHOD of circle object

//___Factory_Function_________________________________________________________

// function createCircle(radius) {
//     return {
//         radius,
//         draw() {
//             console.log('draw');
//         }
//     };
// } 

// const circle1 = createCircle(1);
// console.log(circle1);

// const circle2 = createCircle(2);
// console.log(circle2);

// THERE IS NO DIFFERENCE BETWEEN USING FACTORY FUNCTION OR CONSTRUCTO FUNCTION
// IT IS EXACTLY THE SAME THING.

//___Constructor_Function_____________________________________________________

// function Circle(radius) {
//     this.radius = radius; // This is a way to create an object
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const circle = new Circle(1);

// console.log(circle);

//___Dynamic_Nature_Of_Objects__________________________________________________

// const circle = {
//     radius: 1
// };

// circle.color = 'yellow';
// circle.draw = function() {};

// delete circle.color;

// console.log(circle);

//___Constructor_Property_______________________________________________________

// let x = {}; // TRANSLATE to this let x = new Object();

//___Functions_Are_Objects_______________________________________________________

// function Circle(radius) {
//     this.radius = radius; // This is a way to create an object
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// Circle.call({},1);
// Circle.apply({}, [1,2,3]);

// const Circle1 = new Function('radius', `
// this.radius = radius;
// this.draw = function() {
//   console.log('draw');
// }
// `);

// const circle = new Circle1(1);
// console.log(circle);

// const another = new Circle(1);

//___Value_Vs_Reference_Type_______________________________________________

// let a = 50;
// let b = a;

// a = 80;

// console.log(a,b); // Here value of b doesn't change when a changes.

// let x = { value: 10 };
// let y = x;

// x.value = 20;

// console.log(x,y); // Here value of y change when x changes. This is an object 
                  // and y get the object address not the x value

// Primitives are copied by their value
// Objects are copied by their reference

// If this was a primitive, it would show 10 instead of 11
// let obj = { value:10 }; 

// function increase(obj) {
//     obj.value++;
// }

// increase(obj);
// console.log(obj); 

//___Enumerating_Properties_Of_An_Object_____________________________________

// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw')
//     }
// };

// for (let key in circle) 
//     console.log(key,circle[key]);

// for (let key of Object.keys(circle)) 
//     console.log(key,circle[key]);

// for (let entry of Object.entries(circle)) 
//     console.log(entry);

// if ('radius' in circle) console.log('yes');

//___Cloning_An_Object___________________________________________________________

// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw')
//     }
// };

// const another = {};
// for (let key in circle)
//    another[key] = circle[key];

// OR

// const another = Object.assign({
//     color: 'yellow' // Adding one more property
// }, circle);

// OR

// const another = { ...circle };

// console.log(another);

//___Math________________________________________________________________________

// https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Math

//___String_______________________________________________________________________

// https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/String

// // String primitive
// const message = 'This is my first message';

// // String Object
// const another = new String('hi');

//___Template_Literals______________________________________________________________

// const message =
// 'This is my\n' +
// '\'first\' message';

// // Object {}
// // Boolean true, false
// // String '',""
// // Template ``

// const another = `This is my
// 'first' message`;

// console.log(message, another);

// // Templates
// const name = 'John';
// const emailTemplate =
// // You can use variables string or math
// `Hi ${name} ${2 + 3},

// Thank you for joining us

// Regards,
// Simone`;

// console.log(emailTemplate);

//___Date____________________________________________________________________

// const now = new Date();
// const date1 = new Date('May 11 2018 09:00');
// const date2 = new Date(2018, 4, 11, 9);

// now.setFullYear(2017);

// console.log(now);

//___Excercise_Address_Object_________________________________________________

// Street
// City
// Zip Code
// showAddress(address)

// const address = {
//     street: 'a',
//     city: 'b',
//     zipCode: 'c'
// }

// function showAddress(address) {
//     for (let key in address) console.log(key,address[key]);
// }

// showAddress(address);

//___Excerise_Factory_And_Constructor_Function___________________________________

// // Factory Function
// function createAddress1(street,city,zipCode) {
//     return {
//         street,
//         city,
//         zipCode
//     };
// } 

// const address1 = createAddress1('a','b','c');
// console.log(address1);

// // Constructor Function

// function createAddress2(street,city,zipCode) {
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipCode;
// }

// const address2 = new createAddress2('a','b','c');

// console.log(address2);

//___Excercise_Object_Equality_______________________________________________________

// Constructor Function

// let address1 = new Address('a','b','c');
// let address2 = new Address('a','b','c');
// let address3 =  address1;

// function Address(street,city,zipCode) {
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipCode;
// }

// // check is keys are all the same
// function areEqual(address1,address2) {
//     return address1.street === address2.street 
//     && address1.city === address2.city
//     && address1.zipCode === address2.zipCode;
// }

// // Check if it is the same object or these are two different objects
// function areSame(address1,address2) {
//     return address1 === address2;
// }

// console.log('areEqual:', areEqual(address1,address2));
// console.log('areSame:', areSame(address1,address2));
// // Here are address1 and address3 are the same object
// console.log('areSame:', areSame(address1,address3)); 

//___Excercise_Blog_Post_Object__________________________________________________________

// Title
// Body
// Author
// Views
// Comments
//     (author,body)
// isLive

// let connection = false;

// let blogPost = {
//     title: 'Title',
//     body: 'Body',
//     author: 'Author',
//     views: 200,
//     comments: [
//         { author: 'authorComments', body: 'bodyComments'},
//         { author: 'authorComments2', body: 'bodyComments2'},
//         { author: 'authorComments3', body: 'bodyComments3'}
//     ],
//     isLive: connection
// };

// console.log(blogPost);

//___Excercise_Constructor_Functions____________________________________________

// const post1 = new BlogPost('a','b','c');

// console.log(post1);

// function BlogPost(title,body,author) {
//     this.title = title;
//     this.body = body;
//     this.author = author;
//     this.views = 0;
//     this.comments = [];
//     this.isLive = false;
// }

//___Excercise_Price_Range_Object_________________________________________________

// let priceRanges = [ 
//     {label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
//     {label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20},
//     {label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 30}
// ];
// console.log(priceRanges);

//------------ARRAYS----------------------------------------------------------------

//___Adding_Elements________________________________________________________________

// const numbers = [3,4];

// // End
// numbers.push(5,6);

// // Beginning
// numbers.unshift(1,2);

// // Middle
// numbers.splice(2,0,'a','b'); // position,items to delete,new items.

// console.log(numbers);

//___Finding_Elements_(Primitive)_____________________________________________________

// const numbers = [1,2,3,1,4];

// console.log(numbers.indexOf(1));
// console.log(numbers.lastIndexOf(1));

// // Check first index of 1, starting from positon of 2
// console.log(numbers.indexOf(1,2));

// // If Item doesn't exists, its position will be -1
// // Check if item exists in array

// console.log(numbers.indexOf(1) !== -1);
// // OR
// console.log(numbers.includes(1));

//___Finding_Elements_(Reference Types)__________________________________________________

// const courses = [
//     {id: 1, name: 'a'}, // Shift, alt, down arrow (Copy lines)
//     {id: 2, name: 'b'},
// ];

// const course = courses.find(function(course) {
//     return course.name === 'a';
// });

// const course2 = courses.findIndex(function(course) {
//     return course.name === 'b';
// });

// console.log(course);
// console.log(course2);

//___Arrow_Function_______________________________________________________________________

// Above code in one line
// const courses = [
//     {id: 1, name: 'a'}, // Shift, alt, down arrow (Copy lines)
//     {id: 2, name: 'b'},
// ];

// const course = courses.find(course => course.name === 'a');
// console.log(course);

//___Removing_Elements_____________________________________________________________________

// const numbers = [1,2,3,4];

// End
// const last = numbers.pop();
// console.log(last);

// Beginning
// const first = numbers.shift();
// console.log(first);

// Middle
// numbers.splice(2,1);

// console.log(numbers);

//___Emptying_An_Array_________________________________________________________________________

// let numbers = [1,2,3,4];

// BEST if array is not referenced to any other array
// Solution 1
// numbers = [];

// BEST if array is referenced to other array
// Solution 2
// numbers.length = 0;

// Solution 3
// numbers.splice(0, numbers.length);

// Solution 4
// while (numbers.length > 0)
//     numbers.pop();

// console.log(numbers);

//___Combining_And_Sliciing_Arrays_______________________________________________________________

// const first = [1,2,3];
// const second = [4,5,6];

// const combined = first.concat(second);

// const slice = combined.slice(2,4);

// console.log(combined);
// console.log(slice);

//___The_Spread_Operator___________________________________________________________________________

// const first = [1,2,3];
// const second = [4,5,6];

// const combined = [ ...first, 'a', ...second, 'b' ];
// const copy = [ ...combined ];
// console.log(combined);
// console.log(copy);

//___Iterating_An_Array_____________________________________________________________________________

// const numbers = [1,2,3];

// for (let number of numbers) {
//     console.log(number);
// }

// // OR

// numbers.forEach(number => console.log(number));
// // You can also add index
// numbers.forEach((number,index) => console.log(number, index));

//___Joining_Arrays_____________________________________________________________________________________

// const numbers = [1,2,3];
// // This below is a string
// const joined = numbers.join(',');
// console.log(joined);

// const message = 'This is my first message';
// const parts = message.split(' ');
// console.log(parts);

// const combined = parts.join('-');
// console.log(combined);

//___Sorting_Arrays_______________________________________________________________________________________

// const numbers = [2,3,1];
// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

// const courses = [
//     {id: 1, name: 'Node.js'},
//     {id: 2, name: 'javaScript'},
//     {id: 3, name: 'Agile'},
// ];
// courses.sort(function(a,b) {
//     // a < b => -1
//     // a > b => 1
//     // a === b => 0
//     const nameA = a.name.toUpperCase();
//     const nameB = b.name.toUpperCase();
    
    
//     if (nameA < nameB) return -1;
//     if (nameA > nameB) return 1;
//     return 0;
// });
// console.log(courses);

//___Testing_The_Elements_Of_An_Array_______________________________________________________________________
// Every and Some

// const numbers = [-1,2,3];

// // Check positive numbers
// const allPositive = numbers.every(function(value) {
//     return value >= 0;
// });
// const atLeastOnePositive = numbers.some(function(value) {
//     return value >= 0;
// });

// console.log(allPositive);
// console.log(atLeastOnePositive);

//___Filtering_An_Array_______________________________________________________________________________________

// const numbers = [1,-1,2,3];

// const filtered = numbers.filter(value => value >= 0);

// console.log(filtered);

//___Mapping_An_Array_________________________________________________________________________________________

// const numbers = [1,-1,2,3];



// const items = filtered.map(value => '<li>' + value + '</li>');
// const html = '<ul>' +  items.join('') + '</ul>';

// // Map concatenation
// const items = numbers
// .filter(value => value >= 0)
// .map(value => ({value : value}) )
// .filter(obj => obj.value > 1)
// .map(obj => obj.value);

// console.log(items);
// // How do I display JavaScript in HTML?
// document.write(items);

//___Reducing_An_Array__________________________________________________________________________________________

// const numbers = [1,-1,2,3];

// // let sum = 0;
// // for (let n of numbers)
// //     sum+=n;

// // console.log(sum);
// // document.write(sum);

// const sum = numbers.reduce(
//     (accumulator, currentValue) => accumulator + currentValue);

// console.log(sum);

//___Excercise_Array_From_Range__________________________________________________________________________________

// const numbers = arrayFromRange(-10,4);

// console.log(numbers);

// function arrayFromRange(min,max) {
//     const array = [];
//     for (let n = min; n <= max; n++)
//         array.push(n);
//     return array;
// }

//___Excercise_Includes___________________________________________________________________________________________

// const numbers = [1,2,3,4];

// console.log(numbers.includes(1));
// console.log(includes(numbers,2));

// function includes(array, searchElement) {
//     for (let n of array) 
//         if (n === searchElement) return true;
//     return false;
// }

//___Excercise_Except________________________________________________________________________________________________

// const numbers = [1,2,3,4,1,1,1];

// const output = except(numbers,[1,2]);
// console.log(output);

// function except(array, excluded) {
//     const output = [];
//     for (let element of array)
//         if (!excluded.includes(element))
//            output.push(element);
//     return output;
// }

//___Excercise_Moving_An_Element_______________________________________________________________________________________

// const numbers = [1,2,3,4];

// const output = move(numbers,0,1);

// console.log(output);

// function move(array,index,offset) {
//     const numberToMove = array[index];
//     const positionToMove = index + offset;
//     if (positionToMove > array.length-1 || positionToMove < 0) {
//         console.error('Invalid position');
//         return;
//     }
//     array.splice(index,1)
//     array.splice(positionToMove,0,numberToMove);
//     return array;
// }

// function move(array,index,offset) {
//     const position = index + offset;
//     if (position >= array.length || position < 0) {
//         console.error('Invalid offset.');
//         return;
//     }
//     const output = [...array];
//     const element = output.splice(index,1)[0];
//     output.splice(position, 0, element);
//     return output;
// }

//___Excercise_Count_Occurences_________________________________________________________________________________________

// const numbers = [1,2,4,3,4,1,3,1,1];

// const count = countOccurences(numbers, 1);

// console.log(count);

// function countOccurences(array,searchElement) {
//     for (let n = 0; n < array.length; n++)
//        if (array[n] !== searchElement) {
//            array.splice(n,1);
//            n-=1;
//        }
//     let sum = 0;
//     if (array.length > 0)
//         sum = array.reduce(
//             (accumulator, currentValue) => accumulator + currentValue);
//     return sum;
// }

// function countOccurences(array,searchElement) {
//     return array.reduce((accumulator, currentValue) => {
//         const occurences = (currentValue === searchElement) ? 1 : 0;
//         console.log(accumulator, currentValue, searchElement);
//         return accumulator + occurences;
//     }, 0);
    
// }

//___Excercise_Get_Max_____________________________________________________________________________________________________

// const numbers = [];

// const max = getMax(numbers);

// console.log(max);

// function getMax(array) {
//     if (array.length === 0) return undefined;
//     let max = array[0];
//     for (value of array)
//         if (value > max) max = value;
//     return max;
// }

// function getMax(array) {
//     if (array.length === 0) return undefined;
//     return array.reduce((actualMax,current) => (actualMax > current) ? actualMax : current);
// }

//___Excercise_Movies_______________________________________________________________________________________________________

// const movies = [
//     { title: 'a', year: 2018, rating: 4.5 },
//     { title: 'b', year: 2018, rating: 4.7 },
//     { title: 'c', year: 2018, rating: 3 },
//     { title: 'd', year: 2017, rating: 4.5 },
// ];

// All the movies in 2018 with rating > 4
// Sort them by their rating
// Descending order
// Pick their tile

// Result: 'b'
//         'a'

// showMovies(movies);

// function showMovies(movies) {
//     const bestRate = [];
//     for (let n = 0; n < movies.length; n++) 
//     if (movies[n].year === 2018 && movies[n].rating >= 4) bestRate.unshift(movies[n]);  
//     bestRate.sort(function(a,b) {
//         const nameA = a.title.toUpperCase();
//         const nameB = b.title.toUpperCase();  
//         if (nameA > nameB) return -1;
//         if (nameA < nameB) return 1;
//             return 0;
//         });  
//     return bestRate.forEach(n => console.log(n.title));
// }

// Simple Code
// const titles = movies
//     .filter(m => m.year === 2018 && m.rating >= 4)
//     .sort((a,b) => a.rating - b.rating)
//     .reverse()
//     .map(m => m.title);

// console.log(titles);

//---------FUNCTIONS----------------------------------------------------------------------------------------------------------

// let walk = function() {
//     console.log('walk');
// };
// let move = run;

// run();
// move();

//__Hoisting___________________________________________________________________________________________________________________
// Process of moving Funcation Declaration to the top of the code.

// Function Declaration

// walk();

// function walk() {
//     console.log('walk');
// }

// Difference is that Function Declaration can be called before inzialitation

// Function Expression

// run();

// const run = function() {
//     console.log('run');
// };

//___Arguments_________________________________________________________________________________________________________________

// function sum(a, b) {
//     console.log(arguments);
//     return a + b; // 1 + undefined = NaN
// }

// function sum() {
//     let total = 0;
//     for (let value of arguments)
//         total += value;
//     return total;
// }
// console.log(sum(1,2,3,4,5));

//___The_Rest_Operator__________________________________________________________________________________________________________

// function sum(...args) { // By using ... it refers to all elements instead of only one.
//     return args.reduce((a,b) => a + b);
// }
// console.log(sum(1,2,3,4,5));

// Get final price after discount is applied to all items
// function sum(discount, ...prices) { 
//     const total = prices.reduce((a,b) => a + b);
//     return total * (1 - discount);
// }
// console.log(sum(0.1,20,30));

//___Default_Parameters___________________________________________________________________________________________________________

// Calculate total interest
// Rate and years are default parameters
// All default values MUST be at the end. You can't set one default value in the middle.
// function interest(principal, rate = 3.5, years = 5) {
//     return principal * rate / 100 * years;
// }

// console.log(interest(10000));

//__Getters_And_Setters___________________________________________________________________________________________________________

// const person = {
//     firstName: 'Simone',
//     lastName: 'R',
//     get fullName() {
//         return `${person.firstName} ${person.lastName}`;
//     },
//     set fullName(value) {
//         const parts = value.split(' ');
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// };

// person.fullName = 'John Smith';

// // Getters => Access properties
// // Setters => Change (mutate) them

// console.log(person);

//___Try_And_Catch_________________________________________________________________________________________________________________

// const person = {
//     firstName: 'Simone',
//     lastName: 'R',
//     get fullName() {
//         return `${person.firstName} ${person.lastName}`;
//     },
//     set fullName(value) {
//         if (typeof value !== 'string')
//             throw new Error('Value is not a string');

//         const parts = value.split(' ');
//         if (parts.length !== 2)
//             throw new Error('Enter first and last name');

//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// };

// try {
//     person.fullName = '';
// }
// catch (e) {
//     alert(e);
// }

// console.log(person);

//___Local_Vs_Global_Scope_____________________________________________________________________________________________________________

// const color = 'red'; // Global Scope

// function start() {
//     const message = 'Hi';
//     const color = 'blue'; // Local Scope
//     console.log(color); // Local Scope has precedence on Global Scope
// }

// function stop() {
//     const message = 'bye';
// }

// start();

//___Let_Vs_Var_________________________________________________________________________________________________________________________
// var use is NOT RECOMMENDED

// let x = 0;
// var y = 0; // var is accessible in console, by typing window.y | This doesn't happen with let
// Window object. Type window in console. This is to build Front-End application

// function start() {
//     for (let i = 0; i < 5; i++) 
//         console.log(i);

//     console.log(i); // This is going to throw an Erro as i is not accessible outside loop
// }

// function start() {
//     for (var i = 0; i < 5; i++) // var is accessible everywhere inside the function
//         console.log(i);
//         if (true) {
//             var color = 'red'; // This is also accessible outside if statement, but inside the function
//         }

//         console.log(color);
//         console.log(i); // This doesn't throw any Error, and it keeps looping one more time
// }

// start();

//___The_'this'_ Keword__________________________________________________________________________________________________________________

// method -> obj
// function -> global (window, global)

// const video = {
//     title: 'a',
//     play() {
//         console.log(this);
//     }
// } 

// video.stop = function() {
//     console.log(this);
// }

// function Video(title) {
//     this.title = title;
//     console.log(this);
// }

// const video = {
//     title: 'a',
//     tags: ['a','b','c'],
//     showTags() {
//         this.tags.forEach(function (tag) {
//             console.log(this, tag);
//         }, this); 
//     }
// } 

// video.play();
// video.stop();
// const v = new Video('b');
// video.showTags();

//___Changing_Thw_Value_Of_'this'______________________________________________________________________________________________________

// First approach_______________
// const video = {
//     title: 'a',
//     tags: ['a','b','c'],
//     showTags() {
//         const self = this; // declare this out of the tag function
//         this.tags.forEach(function (tag) {
//             console.log(self.title, tag); // Now this refers to title
//         }); 
//     }
// };

// video.showTags();

// Second approach_____________
// function playVideo(a, b) {
//     console.log(this);
// }

// playVideo.call({ name: 'Simone' },1,2);
// // Only difference between call and apply is that if you have more values
// // with 'apply' you need to use square brackets
// playVideo.apply({ name: 'Simone' },[1,2]);
// playVideo.bind({ name: 'Simone' })(); // last brackets () are calling the function

// const video = {
//     title: 'a',
//     tags: ['a','b','c'],
//     showTags() {
//         this.tags.forEach(function (tag) {
//             console.log(this.title, tag); 
//         }.bind(this)); 
//     }
// };

// video.showTags();

// Third approach_______________

// const video = {
//     title: 'a',
//     tags: ['a','b','c'],
//     showTags() {
//         this.tags.forEach(tag => {
//             console.log(this.title, tag); 
//         }); 
//     }
// };

// video.showTags();

//___Excercise_Sum_Of_Arguments___________________________________________________________________________________________________

// sum(1,2,3,4) => 10
// Then modify sum function to be able to accept an array and return the same result
// Check if argument is an Array.isArray(array); gives true or false

// console.log(sum([1,2,3,4]));

// function sum(numbers) {
//     if (Array.isArray(numbers))
//         return numbers.reduce((accumulator,currentValue) => accumulator + currentValue);
//     let total = 0;
//     for (let element of arguments)
//         total+=element;
//     return total;
// }

// function sum(...items) {
//     if (items.length === 1 && Array.isArray(items[0]))
//         items = [...items[0]];
//     return items.reduce((a,b) => a + b);
// }

//___Excercise_Area_Of_Circle______________________________________________________________________________________________________

// Create a circle object
// circe.radius = 2 (Read and write)
// console.log(circle.area); (Read only)

// const circle = {
//     radius: 2,
//     get area() { // area can't be set, it'll depends on radius value
//         return Math.PI * this.radius * this.radius;
//     }
// };

// console.log(circle.area);

//___Excercise_Error_Handling________________________________________________________________________________________________________
const numbers = [1,2,4,3,4,1,3,1,1];  

function countOccurences(array,searchElement) {
    if (!Array.isArray(array))
        throw new Error('Error: Not an array');
    return array.reduce((accumulator, currentValue) => {
        const occurences = (currentValue === searchElement) ? 1 : 0;
        console.log(accumulator, currentValue, searchElement);
        return accumulator + occurences;
    }, 0); 
}

try {
    const count = countOccurences(null, 1);
    console.log(count);
}
catch(e) {
    alert(e);
}


// Codes taken by JavaScript Basics for Beginners - Udemy.com - Mosh Hamedani