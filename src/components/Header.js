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

                    <button className="hamburger link_button"><FontAwesomeIcon icon={faBars} size="lg" /></button>
                </div>
                
                <nav className="topnav1">
                    <ul>
                        <li>
                            <button className="link_button">Explore<FontAwesomeIcon icon={faAngleDown} /></button>
                        </li><li>
                            <button className="link_button">Marketplace<FontAwesomeIcon icon={faAngleDown} /></button>
                        </li><li>
                            <button className="link_button">Community<FontAwesomeIcon icon={faAngleDown} /></button>
                        </li>
                    </ul>
                </nav>

                <nav className="topnav2">
                    <ul>
                        <li>
                            <button className="link_button"><FontAwesomeIcon icon={faCartShopping} /></button>
                        </li><li>
                            <button className="link_button">Log in</button>
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