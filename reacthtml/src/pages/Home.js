import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faLink } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebookF, faSoundcloud, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Config from "../Config.json";

const TITLE = "A. G. Cook | " + Config.SITE_TITLE;
const AUTHOR = Config.AUTHOR;

class Home extends React.Component {
    render() {
        return (
        <main id="home">
            <HelmetProvider>
                <Helmet>
                    <title>{TITLE}</title>
                    <meta charSet="UTF-8" />
                    <meta name="author" content={AUTHOR} />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Helmet>
            </HelmetProvider>

            <figure className="picture">
                <figcaption><h1>A. G. Cook</h1></figcaption>
                <img className="responsive" src="images/ag_sun.jpg" alt="A. G. Cook" height="324" width="267" />
            </figure>

            <section className="description">
                <h1 className="desc">A. G. Cook</h1>
                <p className="desc">Alexander Guy Cook (born 23 August 1990) is an English music producer, singer, 
                    songwriter and the head of the UK record label <a href="https://www.discogs.com/label/631074-PC-Music-3">PC Music</a> Cook released 
                    his first solo singles in 2014. <br /><br />
                    Since founding PC Music in August 2013, Cook's label  has represented over 20 artists 
                    releasing music within a similar style, in which tropes from mainstream 1990s and 
                    2000s pop music are amplified. This style of exaggerated pop tropes grew to serve as 
                    the foundation of the genre hyperpop, which Cook is credited for developing and 
                    popularising. <a href="https://en.wikipedia.org/wiki/A._G._Cook" target="_blank" rel="noreferrer">Wikipedia.<br /><br /></a>
                </p>
                
                <table>
                    <tbody>
                        <tr>
                            <td><p className="left_aligned">Real Name</p></td>
                            <td><p className="right_aligned">Alexander Guy Cook</p></td>
                        </tr>
                        <tr>
                            <td><p className="left_aligned">Born</p></td>
                            <td><p className="right_aligned">23 August 1990</p></td>
                        </tr>
                        <tr>
                            <td><p className="left_aligned">Aliases</p></td>
                            <td><p className="right_aligned"><a href="https://www.discogs.com/artist/5794769-A-G-Music">
                                A. G. Music</a>, <a href="https://www.discogs.com/artist/6116030-Alex-Cook-6">
                                    Alex Cook</a>, <a href="https://www.discogs.com/artist/8081122-DJ-Lifeline">
                                        DJ Lifeline</a>, <a href="https://www.discogs.com/artist/3608233-DJ-Warlord">
                                            DJ Warlord</a>, <a href="https://www.discogs.com/artist/8400234-Gamsonite">
                                                Gamsonite</a></p></td>
                        </tr>
                        <tr>
                            <td><p className="left_aligned">In groups</p></td>
                            <td><p className="right_aligned"><a href="https://www.discogs.com/artist/3859266-Dux-Content">
                                Dux Content</a>, <a href="https://www.discogs.com/artist/5617253-EasyFX">
                                    EasyFX</a>, <a href="https://www.discogs.com/artist/5913787-Guys-Next-Door-2">
                                        Guys Next Door</a>, <a href="https://www.discogs.com/artist/3963478-Lipgloss-Twins">
                                            Lipgloss Twins</a>, <a href="https://www.discogs.com/artist/5913789-POBBLES">
                                                POBBLES</a></p></td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <aside className="ads"></aside>

            <section className="discography transform">
                <figure>
                    <figcaption>
                        <h2><Link to="/albums">Albums</Link></h2>
                    </figcaption>
                    <Link to="/albums"><img className="responsive" src="images/albums.png" alt="Albums" height="270" width="270" />
                    </Link>
                </figure>

                <figure>
                    <figcaption>
                        <h2><a href="#">Singles & EPs</a></h2>
                    </figcaption>      
                    <a href="#"><img className="responsive" src="images/singles_EPs.png" alt="Singles and EPs" height="270" width="270" /></a>
                </figure>

                <figure>
                    <figcaption>
                        <h2><a href="#">DJ Mixes</a></h2>
                    </figcaption>
                    <a href="#"><img className="responsive" src="images/DJ_mixes.png" alt="DJ mixes" height="270" width="270" /></a>
                </figure>

                <figure>
                    <figcaption>
                        <h2><a href="#">Full Discography</a></h2>
                    </figcaption>
                    <a href="#"><img className="responsive" src="images/full_discography.png" alt="Full discography" height="270" width="270" /></a>
                </figure>
            </section>

            <nav className="buttons">
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

            <nav className="external_links">
                <ul className="links">
                    <li>
                        <a href="https://www.agcook.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="link_icon" icon={faLink} size="lg" /></a>
                    </li><li>
                        <a href="https://www.instagram.com/agcook404/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="link_icon" icon={faInstagram} size="lg" /></a>
                    </li><li>
                        <a href="https://www.facebook.com/agcook404/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="link_icon" icon={faFacebookF} size="lg" /></a>
                    </li><li>
                        <a href="https://soundcloud.com/agcook" target="_blank" rel="noreferrer"><FontAwesomeIcon className="link_icon" icon={faSoundcloud} size="lg" /></a>
                    </li><li>
                        <a href="https://open.spotify.com/artist/335TWGWGFan4vaacJzSiU8?si=a8YpEcP1Tm-hJxQhZU39wQ" target="_blank" rel="noreferrer"><FontAwesomeIcon className="link_icon" icon={faSpotify} size="lg" /></a>
                    </li>
                </ul>
            </nav>
        </main>
        );
    }
}

export default Home;