import React from 'react';
import './home-page.css';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function HomePage() {
    const location = useLocation();

    if (location.pathname === '/ldhlong.github.io'){
    return (
        <main>
            <section class="homepage"> 
                <div class="homepage-intro">
                    <h1 class="greeting">Hello, My name is La'Taja Long</h1>
                    <p class="greeting-paragraph">I'm a full-stack developer based in Pittburgh, PA</p>
                </div>
                <div class="links">
                    <a href="https://www.instagram.com"><FontAwesomeIcon icon="fa-brands fa-instagram" className="icon"/></a>
                    <a href="https://www.twitter.com"><FontAwesomeIcon icon="fa-brands fa-twitter" className="icon"/></a>
                    <a href="https://www.linkedin.com/in/lataja-long"><FontAwesomeIcon icon="fa-brands fa-linkedin-in" className="icon"/></a>
                    <a href="mailto:ldlong@alumni.iu.edu"><FontAwesomeIcon icon="fa-solid fa-envelope" className="icon"/></a>
                </div>
                <img class="avatar" src="img\pfp.jpg" alt="avatar"></img>
            </section>    
        </main>
    );
    }
    else {
        return null;
    }
}

export default HomePage;
