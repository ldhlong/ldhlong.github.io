import React from 'react';
import './project-page.css';
import { useLocation } from 'react-router-dom';

function ProjectPage() {
    const location = useLocation();

    if (location.pathname === '/projects'){
    return (
        <main>
            <section class="projects">
                <div class="intro">
                    <h1 class="project-title">Projects</h1>
                    <p class="project-paragraph">I'm currently focused on compoleting projects to enhance my full-stack developer skills. Take a look below!</p>
                </div>

                <div class="project-list">
                    <div class="project-item1">
                    <img id="screenshot" src="\img\chalets.png" alt="Caviar and Chalets 1" />
                    <h2 class="project-list-description"><a href="https://dev-integrate-a-wordpress-site.pantheonsite.io/">Integrate a WordPress theme for a client</a></h2>
                    <p class="project-list-paragraph">Integrate an existing wordpress theme for a client and make CSS modifications to the theme.</p>
                    </div>

                    <div class="project-item2">
                    <img class="screenshot" src="\img\watchitoutside2.png" alt="Watch It Outside 2"/>
                    <h2 class="project-list-description"><a href="https://github.com/ldhlong/film-festival-webpage">Analyze a client's needs for their film festival</a></h2>
                    <p class="project-list-paragraph">Analyze a client's needs for their film festival and create a website prototype using HTML and CSS.</p>
                    </div>
                </div>
            </section>
        </main>
    );
    }
    else {
        return null;
    }
}

export default ProjectPage;