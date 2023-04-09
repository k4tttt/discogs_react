import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faAngleDown, faCartShopping } from '@fortawesome/free-solid-svg-icons';

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
                        <FontAwesomeIcon className="fa-solid fa-magnifying-glass" icon={faMagnifyingGlass} />
                    </div>

                    <a className="hamburger" href="#"><FontAwesomeIcon icon={faBars} size="lg" /></a>
                </div>
                
                <nav className="topnav1">
                    <ul>
                        <li>
                            <a href="#">Explore<FontAwesomeIcon icon={faAngleDown} /></a>
                        </li><li>
                            <a href="#">Marketplace<FontAwesomeIcon icon={faAngleDown} /></a>
                        </li><li>
                            <a href="#">Community<FontAwesomeIcon icon={faAngleDown} /></a>
                        </li>
                    </ul>
                </nav>

                <nav className="topnav2">
                    <ul>
                        <li>
                            <a href="#"><FontAwesomeIcon icon={faCartShopping} /></a>
                        </li><li>
                            <a href="#">Log in</a>
                        </li><li>
                            <button>Register</button>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;