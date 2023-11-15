import React from 'react';
import './bio-page.css';
import { useLocation } from 'react-router-dom';

function BioPage() {
    const location = useLocation();

    if (location.pathname === '/bio'){
    return (
        <main>
            <section class="resume">
                <div class="info">
                    <h1 class="resume-header">Resume</h1>
                </div>
                <section class="objective">
                    <h1 class="objective-title">Objective</h1>
                    <p class="objective-paragraph">Current Technology Development Program Analyst seeking to advance my skillset in a challenging and engaging software engineering position.</p>
                </section>
                <section class="education">
                    <h2 class="education-title">Education</h2>
                    <ol>
                        <li>
                            <div class="school-info">
                                <p class="school">B.S., Mechanical Engineering </p>
                                <time>Aug '16 – May '21</time>
                            </div>
                            <div>
                                <p class="school-name">Purdue School of Engineering and Technology</p>
                            </div>
                        </li>
                        <li>
                            <div class="school-info"> 
                                <p class="school">Full-Stack Developer Certificate</p>
                                <time>Aug '23 – Present</time>
                            </div>
                            <div>
                                <p class="school-name">OpenClassrooms</p>
                            </div>
                        </li>
                    </ol>
                </section>
                <section class="experience">
                    <h3 class="experience-title">Experience</h3>
                    <ol>
                        <li>
                            <div class="job-info">
                                <p class="job">Technology Development Program Analyst</p>
                                <time>Mar '23 – Present</time>
                            </div>
                            <p class="company-name">PNC</p>
                            <ul>
                                <li class="item">Tech Ops: Monitored Dynatrace dashboards for Corporate and Institutional Banking applications.Investigate and reported outage cause codes to team members for timely resolution.</li>
                                <li class="item">Security: Utilized Tableau to create and present security dashboards related to phishing attacks on PNC customers. Worked closely with other software engineers to improve existing applications.</li>
                                <li class="item">Software Engineering: Enhanced an existing internal application by adding new features using Java including: tasks like integrating Outlook, enhancing the filtering functionality, and more.</li>
                                <li class="item">Data Analytics: Enhanced and fixed Spark scripts that will hit production before the end of my rotation.</li>
                            </ul>
                        </li>
                        <li>
                            <div class="job-info">
                                <p class="job">Technical Advisory Analyst</p>
                                <time>June '21 – Oct '22</time>
                            </div>
                            <p class="company-name">Burns & McDonnell</p>
                            <ul>
                                <li class="item">Drafted independent engineer reviews of solar project sites across North America that included geotechnical site reviews, equipment reviews, and engineering design layout reviews.</li>
                                <li class="item">Utilized RatedPower to calculate net capacity factor calculations to present buildable solar array areas to the client within provided parameters.</li>
                                <li class="item">Created solar site production simulations in CAD and calculated electrical losses due to multiple factors, including shading, transformer losses, and line losses.</li>
                            </ul>
                        </li>
                    </ol>
                </section>
            </section>       
        </main>
    );
    }
    else {
        return null;
    }
}

export default BioPage;