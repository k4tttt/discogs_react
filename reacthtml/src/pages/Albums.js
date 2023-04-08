import React from "react";

class Albums extends React.Component {
    render() {
        return(
            <main>
                <nav class="page_nav">
                    <ul>
                        <li>
                            <a href="../index.html">A. G. Cook</a>
                        </li><li>
                            <i class="fa-solid fa-angle-right"></i>
                        </li><li>
                            <p>Albums</p>
                        </li>
                    </ul>
                    
                    <button onclick="window.location.href='#';">Sort by<i class="fa-solid fa-angle-down"></i></button>
                </nav>

                <section class="discography">
                    <figure>
                        <a href="#"><img class="responsive" src="../images/apple_vs_7g.png" alt="Image of albums" height="270" width="270" /></a>
                        <figcaption>
                            <h2><a href="#">Apple vs. 7G</a></h2>
                            <p>2021</p>
                        </figcaption>
                    </figure>
        
                    <figure>     
                        <a href="apple"><img class="responsive" src="../images/apple.png" alt="Image of singles and EPs" height="270" width="270" /></a>
                        <figcaption>
                            <h2><a href="albums/apple.html">Apple</a></h2>
                            <p>2020</p>
                        </figcaption> 
                    </figure>
        
                    <figure>
                        <a href="#"><img class="responsive" src="../images/7g.png" alt="Image of DJ mixes" height="270" width="270" /></a>
                        <figcaption>
                            <h2><a href="#">7G</a></h2>
                            <p>2020</p>
                        </figcaption>
                    </figure>

                </section>

                <nav class="buttons">
                    <button class="button1" onclick="window.location.href='#';">Vinyl and CD<i class="fa-solid fa-angle-right"></i></button>
                    <ul class="functions">
                        <li>
                            <button onclick="window.location.href='#';">Lists<i class="fa-solid fa-angle-right"></i></button>
                        </li><li>
                            <button onclick="window.location.href='#';">Reviews<i class="fa-solid fa-angle-right"></i></button>
                        </li><li>
                            <button onclick="window.location.href='#';">Videos<i class="fa-solid fa-angle-right"></i></button>
                        </li>
                    </ul>
                </nav>
            </main>
        );
    }
}

export default Albums;