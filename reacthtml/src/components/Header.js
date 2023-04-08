import React from "react";

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="topnav0">
                    <figure>
                        <a href="https://www.discogs.com">
                            <img className="logo" src="images/discogs_logo_white.svg" alt="Discogs logo" height="40" width="109" />
                        </a>
                    </figure>
                    
                    <div className="search">
                        <input id="searchbar" type="text" placeholder="Search artists, albums and more..." />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>

                    <a className="hamburger" href="javascript:void(0);"><i className="fa-solid fa-bars fa-lg"></i></a>
                </div>
                
                <nav className="topnav1">
                    <ul>
                        <li>
                            <a href="#">Explore<i className="fa-solid fa-angle-down"></i></a>
                        </li><li>
                            <a href="#">Marketplace<i className="fa-solid fa-angle-down"></i></a>
                        </li><li>
                            <a href="#">Community<i className="fa-solid fa-angle-down"></i></a>
                        </li>
                    </ul>
                </nav>

                <nav className="topnav2">
                    <ul>
                        <li>
                            <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
                        </li><li>
                            <a href="#">Log in</a>
                        </li><li>
                            <button onclick="window.location.href='#';">Register</button>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;