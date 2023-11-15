import React from 'react';
import './contact-page.css';
import { useLocation } from 'react-router-dom';

function ContactPage() {
    const location = useLocation();

    if (location.pathname === '/contact'){
    return (
        <main>
            <section class="child1">
                <div class="contact">
                    <div class="info">
                    <h1 class="header">Contact Form</h1>
                    </div>
                    
                    <form id="contact-form" action="https://api.web3forms.com/submit" method="POST">
                        <input type="hidden" name="access_key" value="c37460de-1c42-442b-86a1-c0ee68962249" />
                        <input type="hidden" name="redirect" value="http://localhost:3000/contact" />
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name"></input>
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email"></input>
                        <label for="text">Message:</label>
                        <textarea id="subject" name="subject" placeholder="I can't wait to hear from you!" />
                        <input type="submit" value="Submit" id="submit" name="submit"></input>
                    </form>
                </div>
            </section>
        </main>
    );

    }
    else {
        return null;
    }
}

export default ContactPage;
