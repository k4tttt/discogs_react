import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Config from "../Config.json";

const TITLE = "Albums | A. G. Cook | " + Config.SITE_TITLE;
const AUTHOR = Config.AUTHOR;

class Albums extends React.Component {
    render() {
        return(
            <main id="albums">
                <HelmetProvider>
                    <Helmet>
                        <title>{TITLE}</title>
                        <meta charSet="UTF-8" />
                        <meta name="author" content={AUTHOR} />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    </Helmet>
                </HelmetProvider>

                <nav className="page_nav">
                    <ul>
                        <li>
                            <Link to="../">A. G. Cook</Link>
                        </li><li>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </li><li>
                            <p>Albums</p>
                        </li>
                    </ul>
                    
                    <button>Sort by<FontAwesomeIcon icon={faAngleDown} /></button>
                </nav>

                <section className="albumgallery transform">
                    <figure>
                        <a href="#"><img className="responsive" src="../images/apple_vs_7g.png" alt="Album cover of Apple vs. 7G" height="270" width="270" /></a>
                        <figcaption>
                            <h2><a href="#">Apple vs. 7G</a></h2>
                            <p>2021</p>
                        </figcaption>
                    </figure>
        
                    <figure>     
                        <Link to="/apple"><img className="responsive" src="../images/apple.png" alt="Album cover of Apple" height="270" width="270" /></Link>
                        <figcaption>
                            <h2><Link to="/apple">Apple</Link></h2>
                            <p>2020</p>
                        </figcaption> 
                    </figure>
        
                    <figure>
                        <a href="#"><img className="responsive" src="../images/7g.png" alt="Album cover of 7G" height="270" width="270" /></a>
                        <figcaption>
                            <h2><a href="#">7G</a></h2>
                            <p>2020</p>
                        </figcaption>
                    </figure>

                </section>

                <nav className="buttons1">
                    <button className="button1">Vinyl and CD<FontAwesomeIcon icon={faAngleRight} /></button>
                    <ul className="functions">
                        <li>
                            <button>Lists<FontAwesomeIcon icon={faAngleRight} /></button>
                        </li><li>
                            <button>Reviews<FontAwesomeIcon icon={faAngleRight} /></button>
                        </li><li>
                            <button>Videos<FontAwesomeIcon icon={faAngleRight} /></button>
                        </li>
                    </ul>
                </nav>
            </main>
        );
    }
}

export default Albums;