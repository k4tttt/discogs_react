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
  $(document.getElementsByClassName("hamburger")[0]).click(function() {
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


/*------------------- SLIDESHOW ------------------*/
let slideIndex = 1;
let numItemsPerSlide;

$(document).ready(function() {
  if (document.getElementById("apple")) {
      window.addEventListener('resize', itemsPerSlide);
      itemsPerSlide();
  }
});

/**
* Determine the number of items per slide, depending on
* the screen width.
*/
function itemsPerSlide() {
  if (document.documentElement.clientWidth >= 1150) {
      numItemsPerSlide = 5;
  } else {
      if (document.documentElement.clientWidth < 1150) {
          numItemsPerSlide = 4;
      }
      if (document.documentElement.clientWidth < 930) {
          numItemsPerSlide = 3;
      }
      if (document.documentElement.clientWidth < 720) {
          numItemsPerSlide = 2;
      }
      if (document.documentElement.clientWidth < 510) {
          numItemsPerSlide = 1;
      }
  }
  
  showSlides(slideIndex);
}

/**
* Change which slide is showing in the slideshow.
* @param {*} n indicates how many steps the slideshow should move.
*/
function plusSlides(n) {
  showSlides(slideIndex += n);
}

/**
* Set which slide to be shown, and hide the remaining ones. Also 
* display the correct amount of dots.
* @param {*} n index of slide to be shown.
*/
function showSlides(n) {
  let dots = document.getElementsByClassName("dot");
  let allSlides = Array.from(document.getElementsByClassName("slide"));
  let slides = new Array();

  // Split all slides into sections with correct number of items
  for (let i = 0; i < (allSlides.length)/numItemsPerSlide; i++) {
      let currentItems = allSlides.slice(i*numItemsPerSlide, i*numItemsPerSlide+numItemsPerSlide);
      slides.push(currentItems);
  }
  
  // Make the slideshow loopable
  if (n > slides.length) {slideIndex = 1;}    
  if (n < 1) {slideIndex = slides.length;}

  // Hide all dots
  for (let i = 0; i < dots.length; i++) {
      dots[i].style.display = "none";
  }

  // Set all items to hidden and display correct amount of dots
  for (let i = 0; i < slides.length; i++) {
      dots[i].style.display = "inline-block";
      dots[i].className = dots[i].className.replace(" active", "");
      let currentSlide = slides[i];
      
      for (let j = 0; j < currentSlide.length; j++) {
          currentSlide[j].style.display = "none";
      }
  }

  // Display only the correct slide
  dots[slideIndex - 1].className += " active";
  let displaySlide = slides[slideIndex - 1];
  
  for (let i = 0; i < displaySlide.length; i++) {
      displaySlide[i].style.display = "inline-block";
  }

  // Set the correct width for the slide container and dots
  document.getElementById("slides").style.width = numItemsPerSlide*190 + "px";
  document.getElementById("dots").style.width = (numItemsPerSlide*190 + 37.75*2) + "px";
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