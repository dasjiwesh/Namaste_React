// HMR - Hot Module Replacement
// File Watcher Algorithm - C++
// Bundling
// Minify
// Cleaning Our Code
// Dev & Production Build
// Super Fast Build Algorithm
// Image Optimisation
// Catching While Development 
// HTTPS on dev

import React from 'react';
import ReactDOM from 'react-dom/client'
//JSX ==> React.createElement ==> Object ==> HTML(DOM)
const heading1 = React.createElement(
    'h1',
    {
        id:'title',
        key:'h1'
    },
    'Heading 1 for parcel') //Browser doesn't recognises this code whereas babel would.
const heading2 = React.createElement(
    'h2',
    {id:'title',
    key:'h2'},
    'Heading 2')//React.createElement understands that we've to put React inside this
const container = React.createElement(
    'div',
    {id:'container',
     hello: 'world'},
    [heading1, heading2])//We can pass any no of heading(elements of React) in this array[]
    //key should be mentioned whenever we're passing children otherwise console will show error

const ReactElement = 
(
  <h1 id='title' key='h2'>
 'Namaste React' {/*'Namaste React is the content which will be pushed instead of the actual content in 'id: root'' */}
  </h1>
)
console.log(heading); //This'll return object as React is nothing but simple JS

const FunctionalComponent = () =>
(
  <h1 id='title' key='h2'>
 'Namaste React' {/*'Namaste React is the content which will be pushed instead of the actual content in 'id: root'' */}
  </h1>
);

//Functional Component is a normal component. It could return a piece of JSX/ ReactElement
//Naming any component in capital letter is a good practice. But not mandatory.
const HeaderComponent = function() {
    return (
    <div>
        <h1>Namaste React Functional Component</h1>
        <h2>This is h2</h2>
    </div>
            );//After return we use () which is mandatory if there're 
//multiple lines. If there's single line then we don't use it
};

const HeaderComponent2 = () => {
      return(
    <div>
        <h1>Namaste React Functional Component</h1>
        <h2>This is h2</h2>
    </div>
            );
};//HeaderComponent2 & 3 can be written with/ without return as this a property of arroe function not React which 
//returns JSX.

//const data = api.getData();

const HeaderComponent3 = () => {
    (
    <div>
        {/* {data}  If we get data from anywhere JavaScript sanitises it so that it's safe to be used in browser. As 
          no-sanitisation can do harm */}
        {console.log('any JS Code')} {/*Within this curly brace we can write any JS Code */}
        {ReactElement} {/* This is how we put ReactElement in Functional Component. We can even put the entire code in place of 
        heading */}
        <FunctionalComponent /> {/* This is how we put Functional/ Class Component in FunctionalComponent like a tag.  
        Another way to write it is {FunctionalComponent()} as it is a JavaScript function */}
        {/* This is also called Self_Closing Tag. */}
        <h1>Namaste React Functional Component</h1>
        <h2>This is h2</h2>
    </div>
    );
}; //Preferable code for production
//HeaderComponent2 & HeaderComponent3 are written as arrow functions whereas HeaderComponent is written as normal 
//function

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<HeaderComponent3 />); //So this heading over here is an element of react which is an object in JS. Render is pushing 
//this element inside DOM. React will overwrite any existing element in root.
//We also do render once like root

//Functional Component can be written like root.render(<Functional Component />) this whereas ReactElement is written
//root.render(ReactElement)