import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Config from "../Config.json";

const TITLE = "Video and form | " + Config.SITE_TITLE;
const AUTHOR = Config.AUTHOR;

class VideoForm extends React.Component {
    render() {
        return(
            <main id="video_form">
                <HelmetProvider>
                    <Helmet>
                        <title>{TITLE}</title>
                        <meta charSet="UTF-8" />
                        <meta name="author" content={AUTHOR} />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    </Helmet>
                </HelmetProvider>

                <section className="video">
                    <h2>A. G. Cook - Beautiful Superstar (Official Music Video)</h2>
                    <video className="responsive" width="533" height="300" controls>
                        <source src="images/beautiful_superstar_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                    </video> 
                </section>

                <section className="form">
                    <h2>Form</h2>

                    <div className="background">
                        <form>
                            <label htmlFor="uname">Username</label><br />
                            <input type="text" id="uname" name="uname" /><br />
                            <label htmlFor="email">Email address</label><br />
                            <input type="text" id="email" name="email" /><br />
                            <label htmlFor="password">Password</label><br />
                            <input type="text" id="password" name="password" /><br />

                            <input type="checkbox" id="terms" name="terms" />
                            <label htmlFor="terms">I accept the Privacy Policy and I agree to the Terms of Service, including minimum age requirements.</label><br />
                            <input type="checkbox" id="marketing" name="marketing" />
                            <label htmlFor="marketing">Sign up for marketing messages to hear about music trends and other news.</label><br />

                            <input type="submit" value="Submit" />
                        </form> 
                    </div>
                </section>
            </main>
        );
    }
}

export default VideoForm;