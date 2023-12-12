import React from 'react';
import "./About.css"

export default function About() {
    return (
        <>            
            <div className="about-container">
                <h1>About Us</h1>

                <section className="mission">
                    <h2>Our Mission</h2>
                    <p>Welcome to Tale Together, a unique space where creativity, imagination, and collaboration come together to create captivating stories. Our mission is to provide a platform for writers of all skill levels and backgrounds to come together, share their ideas, and co-create stories that resonate and inspire.</p>
                </section>

                <section className="what-we-do">
                    <h2>What We Do</h2>
                    <p>Tale Together is more than just a story writing platform - it's a community. Here, you can:</p>
                    <ul>
                        <li>Collaborate: Work with other writers to weave tales of adventure, mystery, romance, and more.</li>
                        <li>Share Your Ideas: Every story starts with a single idea. Share yours and see it grow with the input of fellow writers.</li>
                        <li>Build Your Portfolio: Aspiring writer? Seasoned novelist? Build and showcase your writing portfolio by contributing to various stories.</li>
                    </ul>
                </section>

                <section className="our-story">
                    <h2>Our Story</h2>
                    <p> Tale Together began as a small project by a group of friends who shared a passion for storytelling. What started as a simple online form submission quickly grew into a full-fledged collaborative platform, thanks to the enthusiasm and creativity of our writers. The concept for Tale Together was born inside the walls of BocaCode, a prominent coding school, where the fusion of technical skill and creative vision brought this idea to life. Today, we're proud to host a diverse and active community of storytellers from around the globe. </p>
                </section>

                <section className="join-us">
                    <h2>Join Our Community</h2>
                    <p>Whether you’re a writer, a reader, or just someone who loves a good story, we invite you to join Tale Together. Share your stories, offer feedback, and be part of a community that celebrates the art of storytelling.</p>
                    <p>We can't wait to see the stories you'll tell.</p>
                </section>
            </div>
        </>
    );
}
