import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <button onclick="changeColor()">
                    Change color
                </button><button id="reset" onclick="resetColor()">
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