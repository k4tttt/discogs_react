import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <button onClick={changeColor}>
                    Change color
                </button><button id="reset" onClick={resetColor}>
                    Reset color
                </button>
                <div>
                    <img className="draggable" src="images/discogs_logo_white.svg" alt="Discogs logo" height="40" width="109" />
                    <img className="draggable" src="images/discogs_icon.png" alt="Discogs icon" height="100" width="100" />
                </div>
            </footer>
        );
    }
}

export default Footer;


/*------------------- COLOR CHANGER ------------------*/
/**
 * Change the color of the header and footer to a random rgb color.
 */
function changeColor() {
    var r = Math.floor((Math.random()*256));
    var g = Math.floor((Math.random()*256));
    var b = Math.floor((Math.random()*256));
    document.getElementsByClassName("footer")[0].style.backgroundColor = "rgb("+r+","+g+","+b+")";
    document.getElementsByClassName("header")[0].style.backgroundColor = "rgb("+r+","+g+","+b+")";
    document.getElementById("reset").style.display = "inline-block";
  }
  
  /**
  * Reset the color of the header and footer to the original color.
  */
  function resetColor() {
    document.getElementsByClassName("footer")[0].style.backgroundColor = "#8888FF";
    document.getElementsByClassName("header")[0].style.backgroundColor = "#8888FF";
    document.getElementById("reset").style.display = "none";
  }