// const obj = {
//     fn: function()
//     {
//         console.log(this);
//     },
//     fn2: ()=>{
//         console.log(this);
//     }
// };
// obj.fn(); //As fn is a function it's this is obj
// obj.fn2();// fn2 being an arrow function it's this is obj(parent)'s this which is window(global object)

// const person = {
//     name: 'Jiwesh'
// };
// const person2 = {
//     name: 'Jiwesh2'
// };
// function x()
// {
//     console.log(this);
// }
// //Same global object
// x();
// x.call(this);
// //Different objects as per call
// x.call(person);
// x.call(person2);


// const person = {
//     name: 'Jiwesh',
//     print: function()
//     {
//         console.log(this);
//     },
// };
// const person2 = {
//     name: 'Jiwesh2',
// };
// person.print();
// person.print.call();
// person.print.call(this);
// person.print.call(person2);
// person.print.call(person);


const obj = {
    firstName: 'Akshay',
    printName: () =>
    {
        console.log(this.firstName);
    },
    printName2: function()
    {
        console.log(this);
    },
};
//const obj2 = {
//     firstName: 'Jiwesh2',
// };
obj.printName();
//obj.firstName2();

obj.printName.call();
obj.printName2.call();