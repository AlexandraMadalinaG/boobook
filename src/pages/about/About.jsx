import React from 'react';
import './About.css';
import aboutImg from '../../assets/about-img.jpeg';

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="section-title">
                    <h2>About</h2>
                </div>

                <div className="about-content grid">
                    <div className="about-img">
                        <img src={aboutImg} alt="" />
                    </div>
                    <div className="about-text">
                        <h2 className="about-title fs-26 ls-1">About BooBook</h2>
                        <p className="fs-17">
                            We are BooBook. We are full of enthusiasm, fantasy and creativity. We
                            are waiting for you to discover the most wonderful books to read and
                            enter our captivating stories. BooBook is designed as a book finder for
                            our readers. How does it work? You enter BooBook, search for your
                            favorite books, and we are waiting for you at our location in
                            Manchester.
                        </p>
                        <p className="fs-17">
                            Do not forget! Every Friday we gather for our book club right at our
                            location. We drink tea, hot chocolate and biscuits and sit down to tell
                            stories. Each person who participates can tell what they learned from
                            the last reading or even from their own experience. We are waiting for
                            you!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
