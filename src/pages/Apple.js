import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight, faAngleLeft, faPlus, faStar, faReply } from '@fortawesome/free-solid-svg-icons';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Config from "../Config.json";
import $ from 'jquery';

const TITLE = "Apple | A. G. Cook | " + Config.SITE_TITLE;
const AUTHOR = Config.AUTHOR;

class Apple extends React.Component {
    componentDidMount() {
        itemsPerSlide();
    }

    render() {
        return(
            <main id="apple">
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
                            <Link to="../../">A. G. Cook</Link>
                        </li><li>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </li><li>
                            <Link to="../albums">Albums</Link>
                        </li><li>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </li><li>
                            <p>Apple</p>
                        </li>
                    </ul>
                </nav>

                <section className="albuminfo">
                    <figure>
                        <figcaption><h1>Apple | A. G. Cook</h1></figcaption>
                        <img className="responsive" src="../../images/apple.jpg" alt="Apple album cover" height="280" width="280" />
                    </figure>

                    <table>
                        <tbody>
                            <tr>
                                <td><p className="left_aligned">Release date</p></td>
                                <td><p className="right_aligned">18 September 2020</p></td>
                            </tr>
                            <tr>
                                <td><p className="left_aligned">Genre</p></td>
                                <td><p className="right_aligned"><a href="https://www.discogs.com/genre/electronic">
                                    Electronic</a>, <a href="https://www.discogs.com/genre/rock">
                                        Rock</a>, <a href="https://www.discogs.com/genre/pop">Pop</a></p></td>
                            </tr>
                            <tr>
                                <td><p className="left_aligned">Style</p></td>
                                <td><p className="right_aligned"><a href="https://www.discogs.com/style/experimental">
                                    Experimental</a>, <a href="https://www.discogs.com/style/synth-pop">
                                        Synth-pop</a>, <a href="https://www.discogs.com/style/hyperpop">
                                            Hyperpop</a>, <a href="https://www.discogs.com/style/alternative%20rock">
                                                Alternative Rock</a>, <a href="https://www.discogs.com/style/acoustic">
                                                    Acoustic</a>, <a href="https://www.discogs.com/style/indie%20pop">Indie Pop</a></p></td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className="tracklist">
                    <h1>Apple | A. G. Cook</h1>
                    <h2>Tracklist</h2>

                    <ul><li><p>Oh Yeah</p></li><li><p>3:32</p></li></ul>
                    <ul><li><p>Xxoplex</p></li><li><p>2:36</p></li></ul>
                    <ul><li><p>Beautiful Superstar</p></li><li><p>4:42</p></li></ul>
                    <ul><li><p>Animals</p></li><li><p>4:08</p></li></ul>
                    <ul><li><p>Airhead</p></li><li><p>4:37</p></li></ul>
                    <ul><li><p>Haunted</p></li><li><p>2:51</p></li></ul>
                    <ul><li><p>The Darkness</p></li><li><p>5:11</p></li></ul>
                    <ul><li><p>Jumper</p></li><li><p>3:05</p></li></ul>
                    <ul><li><p>Stargon</p></li><li><p>4:51</p></li></ul>
                    <ul><li><p>Lifeline</p></li><li><p>4:06</p></li></ul>
                </section>

                <section className="credits">
                    <h2>Credits</h2>

                    <ul>
                        <li className="credit_item">
                            <ul className="credit_desc">
                                <li>
                                    <a href="https://www.discogs.com/artist/5792559-Timothy-Luke"><img src="../../images/timothy_luke.jpg" alt="Timothy Luke" /></a>
                                </li><li>
                                    <p><a href="https://www.discogs.com/artist/5792559-Timothy-Luke">Timothy Luke</a><br />Art Direction, Artwork</p>
                                </li>
                            </ul>
                        </li><li className="credit_item">
                            <ul className="credit_desc">
                                <li>
                                    <a href="https://www.discogs.com/artist/300468-Stuart-Hawkes"><img src="../../images/stuart_hawkes.jpg" alt="Stuart Hawkes" /></a>
                                </li><li>
                                    <p><a href="https://www.discogs.com/artist/300468-Stuart-Hawkes">Stuart Hawkes</a><br />Mastered by</p>
                                </li>
                            </ul>
                        </li><li className="credit_item">
                            <ul className="credit_desc">
                                <li>
                                    <a href="https://www.discogs.com/artist/3269967-Geoff-Swan"><img src="../../images/geoff_swan.jpg" alt="Geoff Swan" /></a>
                                </li><li>
                                    <p><a href="https://www.discogs.com/artist/3269967-Geoff-Swan">Geoff Swan</a><br />Mixed by</p>
                                </li>
                            </ul>
                        </li><li className="credit_item">
                            <ul className="credit_desc">
                                <li>
                                    <a href="https://www.discogs.com/artist/4933932-Niko-Battistini"><img src="../../images/profile.png" alt="Fallback profile icon" /></a>
                                </li><li>
                                    <p><a href="https://www.discogs.com/artist/4933932-Niko-Battistini">Niko Battistini</a><br />Mixed by [Mix Assistance]</p>
                                </li>
                            </ul>
                        </li><li className="credit_item">
                            <ul className="credit_desc">
                                <li>
                                    <a href="../../index.html"><img src="../../images/ag_sun.jpg" alt="A. G. Cook" /></a>
                                </li><li>
                                    <p><a href="../../index.html">A. G. Cook</a><br />Producer</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </section>

                <nav className="version_nav">
                    <h2>Versions</h2>
                    <button>Filter by<FontAwesomeIcon icon={faAngleDown} /></button> 
                </nav>

                <div className="versions">
                    <div className="background">
                        <div className="preheader">
                            <p>2 versions</p>
                            <button>Add to Wantlist<FontAwesomeIcon icon={faAngleDown} /></button>
                        </div>

                        <table>
                            <thead className="thead">
                                <tr>
                                    <th colSpan="2">Title, Format</th>
                                    <th>Label, Catalog Number</th>
                                    <th>Country</th>
                                    <th colSpan="2">Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img className="middle" src="../../images/apple.jpg" alt="Album cover of Apple" width="90" height="90" /></td>
                                    <td><a className="bold" href="https://www.discogs.com/release/15793595-A-G-Cook-Apple">Apple</a><br />10xFile, MP3, Album, 320 kbps</td>
                                    <td><a href="https://www.discogs.com/label/631074-PC-Music-3">PC Music</a>, PC0APPLE</td>
                                    <td>UK</td>
                                    <td>2020</td>
                                    <td><button className="expand"><FontAwesomeIcon className="expandicon" icon={faAngleDown} /></button></td>
                                </tr>
                                <tr>
                                    <td><img className="middle" src="../../images/apple_lp.jpg" alt="Album cover of Apple LP" width="90" height="90" /></td>
                                    <td><a className="bold" href="https://www.discogs.com/release/15795185-A-G-Cook-Apple">Apple</a><br />LP, Album, Stereo</td>
                                    <td><a href="https://www.discogs.com/label/631074-PC-Music-3">PC Music</a>, PC0APPLE</td>
                                    <td>UK</td>
                                    <td>2021</td>
                                    <td><button className="expand"><FontAwesomeIcon className="expandicon" icon={faAngleDown} /></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <section className="recommendations">
                    <h2>Recommendations</h2>
                    
                    <div className="slideshow transform">
                        <div className="arrow">
                            <button className="link_button" /*onClick={plusSlides(-1)}*/><FontAwesomeIcon icon={faAngleLeft} size="xl" /></button>
                        </div><div className="" id="slides">
                            <div className="slide fade">
                                <figure>
                                    <a href="https://www.discogs.com/master/1787603-A-G-Cook-7G"><img src="../../images/7g.jpg" alt="Album cover of 7G" width="150" height="150" /></a>
                                    <figcaption>
                                        <a className="bold" href="https://www.discogs.com/master/1787603-A-G-Cook-7G">7G</a><br /><a href="../../index.html">A. G. Cook</a>
                                    </figcaption>
                                </figure>
                            </div><div className="slide fade">
                                <figure>
                                    <a href="https://www.discogs.com/release/16800267-Planet-1999-Devotion-Deluxe"><img src="../../images/devotion_(deluxe).jpg" alt="Album cover of Devotion (Deluxe)" width="150" height="150" /></a>
                                    <figcaption>
                                        <a className="bold" href="https://www.discogs.com/release/16800267-Planet-1999-Devotion-Deluxe">Devotion (Deluxe)</a><br /><a href="https://www.discogs.com/artist/7354961-Planet-1999">Planet 1999</a>
                                    </figcaption>
                                </figure>
                            </div><div className="slide fade">
                                <figure>
                                    <a href="https://www.discogs.com/master/2980216-Caroline-Polachek-Desire-I-Want-To-Turn-Into-You"><img src="../../images/desire,_i_want_to_turn_into_you.jpg" alt="Album cover of Desire, I Want To Turn Into You" width="150" height="150" /></a>
                                    <figcaption>
                                        <a className="bold" href="https://www.discogs.com/master/2980216-Caroline-Polachek-Desire-I-Want-To-Turn-Into-You">Desire, I Want To Turn Into You</a><br /><a href="https://www.discogs.com/artist/1269616-Caroline-Polachek">Caroline Polachek</a>
                                    </figcaption>
                                </figure>
                            </div><div className="slide fade">
                                <figure>
                                    <a href="https://www.discogs.com/release/24935812-Doss-4-New-Hit-Songs-Remixes"><img src="../../images/4NHS_Remixes.jpeg" alt="Album cover of 4 New Hit Songs Remixes" width="150" height="150" /></a>
                                    <figcaption>
                                        <a className="bold" href="https://www.discogs.com/release/24935812-Doss-4-New-Hit-Songs-Remixes">4 New Hit Songs Remixes</a><br /><a href="https://www.discogs.com/artist/3814699-Doss-2">Doss</a>
                                    </figcaption>
                                </figure>
                            </div><div className="slide fade">
                                <figure>
                                    <a href="https://www.discogs.com/master/2303896-A-G-Cook-Superstar"><img src="../../images/superstar.jpg" alt="Album cover of Superstar" width="150" height="150" /></a>
                                    <figcaption>
                                        <a className="bold" href="https://www.discogs.com/master/2303896-A-G-Cook-Superstar">Superstar</a><br /><a href="../../index.html">A. G. Cook</a>
                                    </figcaption>
                                </figure>
                            </div><div className="slide fade">
                                <figure>
                                    <a href="https://www.discogs.com/release/6674464-A-G-Cook-Featuring-Hannah-Diamond-Drop-FM"><img src="../../images/drop_fm.jpg" alt="Album cover of Drop FM" width="150" height="150" /></a>
                                    <figcaption>
                                        <a className="bold" href="https://www.discogs.com/release/6674464-A-G-Cook-Featuring-Hannah-Diamond-Drop-FM">Drop FM</a><br /><a href="../../index.html">A. G. Cook</a>
                                    </figcaption>
                                </figure>
                            </div><div className="slide fade">
                                <figure>
                                    <a href="https://www.discogs.com/release/12137145-Sophie-Oil-Of-Every-Pearls-Un-Insides"><img src="../../images/oil_of_every_pearls_un-insides.jpg" alt="Album cover of Oil of Every Pearl's Un-Insides" width="150" height="150" /></a>
                                    <figcaption>
                                        <a className="bold" href="https://www.discogs.com/release/12137145-Sophie-Oil-Of-Every-Pearls-Un-Insides">Oil of Every Pearl's Un-Insides</a><br /><a href="https://www.discogs.com/artist/3150192-Sophie-42">SOPHIE</a>
                                    </figcaption>
                                </figure>
                            </div><div className="slide fade">
                                <figure>
                                    <a href="https://www.discogs.com/master/2630819-Various-Volume-3"><img src="../../images/pc_music_vol.3.jpeg" alt="Album cover of Volume 3" width="150" height="150" /></a>
                                    <figcaption>
                                        <a className="bold" href="https://www.discogs.com/master/2630819-Various-Volume-3">Volume 3</a><br /><a href="https://www.discogs.com/label/631074-PC-Music-3">PC Music</a>
                                    </figcaption>
                                </figure>
                            </div><div className="slide fade">
                                <figure>
                                    <a href="https://www.discogs.com/master/1647730-Hannah-Diamond-Reflections"><img src="../../images/reflections.jpg" alt="Album cover of reflections" width="150" height="150" /></a>
                                    <figcaption>
                                        <a className="bold" href="https://www.discogs.com/master/1647730-Hannah-Diamond-Reflections">Reflections</a><br /><a href="https://www.discogs.com/artist/3859775-Hannah-Diamond">Hannah Diamond</a>
                                    </figcaption>
                                </figure>
                            </div><div className="slide fade">
                                <figure>
                                    <a href="https://www.discogs.com/master/2849974-%C3%96-Hypernormality"><img src="../../images/hypernormality.jpg" alt="Album cover of Hypernormality" width="150" height="150" /></a>
                                    <figcaption>
                                        <a className="bold" href="https://www.discogs.com/master/2849974-%C3%96-Hypernormality">Hypernormality</a><br /><a href="https://www.discogs.com/artist/6642733-%C3%96-3">Ö</a>
                                    </figcaption>
                                </figure>
                            </div>
                        </div><div className="arrow">
                            <button className="link_button" /*onClick={plusSlides(1)}*/><FontAwesomeIcon icon={faAngleRight} size="xl" /></button>
                        </div>
                    </div>
                    <div id="dots">
                        <span className="dot">
                        </span><span className="dot">
                        </span><span className="dot">
                        </span><span className="dot">
                        </span><span className="dot">
                        </span><span className="dot">
                        </span><span className="dot">
                        </span><span className="dot">
                        </span><span className="dot">
                        </span><span className="dot">
                        </span>
                    </div>
                </section>

                <section className="reviews">
                    <h2>Reviews</h2>
                    <button>Add review<FontAwesomeIcon icon={faPlus} /></button>
                    <ul>
                        <li>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><img src="../../images/profile.png" alt="Profile icon" width="40" height="40" /></td>
                                        <td>User Name | Date<br /><FontAwesomeIcon icon={faStar} size="xs" /><FontAwesomeIcon icon={faStar} size="xs" /><FontAwesomeIcon icon={faStar} size="xs" /><FontAwesomeIcon icon={faStar} size="xs" /><FontAwesomeIcon icon={faStar} size="xs" /></td>
                                    </tr>
                                    <tr>
                                        <td></td><td className="ref">referencing <a href="https://www.discogs.com/release/15795185-A-G-Cook-Apple">Apple (LP, Album, Stereo) PC0APPLE</a></td>
                                    </tr>
                                    <tr>
                                        <td></td><td><p>One of my favorite albums, and a damn good pressing of it. Sounds excellent, especially impressive with insanely dynamic stuff like “Xxoplexx”. There's two great bonus tracks that are vinyl only, and the overall package and alternate cover, gatefold, poster, and lyric booklet are truly aesthetically pleasing and wonderful. Love it.</p></td>
                                    </tr>
                                    <tr className="endrow">
                                        <td></td><td><button className="link_button"><FontAwesomeIcon icon={faReply} />Reply</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </li><li>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><img src="../../images/profile.png" alt="Profile icon" width="40" height="40" /></td>
                                        <td>User Name | Date<br /><FontAwesomeIcon icon={faStar} size="xs" /><FontAwesomeIcon icon={faStar} size="xs" /><FontAwesomeIcon icon={faStar} size="xs" /><FontAwesomeIcon icon={faStar} size="xs" /><FontAwesomeIcon icon={faStar} size="xs" /></td>
                                    </tr>
                                    <tr>
                                        <td></td><td className="ref">referencing <a href="https://www.discogs.com/release/15795185-A-G-Cook-Apple">Apple (LP, Album, Stereo) PC0APPLE</a></td>
                                    </tr>
                                    <tr>
                                        <td></td><td><p>this is legit the most beautiful packaging i've seen on vinyl. from the details in the cover, the huge foldout poster, the silver printed booklet... i'm very impressed! Also, the sound sounds just fantastic to me.</p></td>
                                    </tr>
                                    <tr className="endrow">
                                        <td></td><td><button className="link_button"><FontAwesomeIcon icon={faReply} />Reply</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </li>
                    </ul>
                </section>

                <aside className="statistics">
                    <h2>Statistics</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td><p className="left_aligned">Have</p></td>
                                <td><p className="right_aligned">579</p></td>
                            </tr>
                            <tr>
                                <td><p className="left_aligned">Want</p></td>
                                <td><p className="right_aligned">283</p></td>
                            </tr>
                            <tr>
                                <td><p className="left_aligned">Avg rating</p></td>
                                <td><p className="right_aligned">4.63 / 5</p></td>
                            </tr>
                            <tr>
                                <td><p className="left_aligned">Ratings</p></td>
                                <td><p className="right_aligned">49</p></td>
                            </tr>
                        </tbody>
                    </table>

                    <ul>
                        <li>
                            <button>Lists<FontAwesomeIcon icon={faAngleRight} /></button>
                        </li><li>
                            <button>Videos<FontAwesomeIcon icon={faAngleRight} /></button>
                        </li>
                    </ul>
                </aside>
            </main>
        );
    }
}

export default Apple;


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
/*
function plusSlides(n) {
  showSlides(slideIndex += n);
}*/

/**
* Set which slide to be shown, and hide the remaining ones. Also 
* display the correct amount of dots.
* @param {*} n index of slide to be shown.
*/
function showSlides(n) {
  let dots = document.getElementsByClassName("dot");
  let allSlides = Array.from(document.getElementsByClassName("slide"));
  let slides = [];

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
