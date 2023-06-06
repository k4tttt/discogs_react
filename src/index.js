import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import $ from 'jquery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/*------------------- RESPONSIVE TOP NAVIGATION ------------------*/
/**
* Toggle between displaying and hiding the responsive dropdown
* menu in the header. 
*/
$(document).ready(function() {
  $(document.getElementsByClassName("hamburger link_button")[0]).click(function() {
      var x = document.getElementsByClassName("topnav1")[0];
      var y = document.getElementsByClassName("topnav2")[0];
      $(x).slideToggle();
      $(y).slideToggle();

      if (x.className === "topnav1") {
          x.className += " responsive";
          y.className += " responsive";
      } else {
          x.className = "topnav1";
          y.className = "topnav2";
      }
  });
});

/**
* Toggle between displaying and hiding the top navigation elements, 
* depending on the screen width.
* Also toggle the placeholder text in the search bar.
*/
window.addEventListener('resize', toggleTopnav);

function toggleTopnav() {
  if (document.documentElement.clientWidth > 1150) {
      $(document.getElementsByClassName("topnav1")[0]).show();
      $(document.getElementsByClassName("topnav2")[0]).show();
  }

  if (document.documentElement.clientWidth <= 1150) {
      $(document.getElementsByClassName("topnav1")[0]).hide();
      $(document.getElementsByClassName("topnav2")[0]).hide();
  }

  if (document.documentElement.clientWidth <= 520) {
      $(document.getElementById("searchbar")).attr("placeholder",
      "Search...");
  }

  if (document.documentElement.clientWidth > 520) {
      $(document.getElementById("searchbar")).attr("placeholder",
      "Search artists, albums and more...");
  }
}


/*------------------- DRAGGABLE ------------------*/
/**
* Make the elements in the footer draggable.
*/
/*
$(document).ready(function() {
  $(document.getElementsByClassName("draggable")).draggable({containment: ".footer"});
});
*/