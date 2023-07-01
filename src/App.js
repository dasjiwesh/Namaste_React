import React from "react";
import ReactDOM from "react-dom/client";
//Default Import
import Header from './components/Header';
//Named Import
import Body from './components/Body.js';
import Footer from './components/Footer';

const AppLayout = () => {
  return(
      <>
        <Header />
        <Body />
        <Footer />
      </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);