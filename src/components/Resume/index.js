// Styles
import styles from './styles.css';

export default (props) => (
    <div id="interactive-resume">
        <h3>Leah R. Mattern, CPACC</h3>
        <p>
            Full Stack Software Engineer & Web Accessibility Specialist
        </p>
        <hr/>
        <div id='contact-wrapper'>
            <span className='contact'>(208-608-6762)</span>
            <span className='pipe'>|</span>
            <span className='contact'><a href="mailto: ladyleahmattern.com">ladyleahmattern.com</a></span>
            <span className='pipe'>|</span>
            <span className='contact'><a href="https://www.linkedin.com/in/lady-leah-mattern/" target="_blank">Linkedin</a></span>
            <span className='pipe'>|</span>
            <span className='contact'><a href="https://github.com/Lady-Mattern" target="_blank">GitHub</a></span>
        </div>
        <h4>SUMMARY</h4>
        <p>
            Web Developer, Web Accessibility Specialist, life-long learner, and educator, dedicated to crafting high quality user interface designs that are universally operable regardless of background or ability.
        </p>
        <h4>SKILLS</h4>
        <h5>Client-Side</h5>
        <p id='frontend-skills-wrapper'>
            HTML5<span className='pipe'>|</span>CSS<span className='pipe'>|</span>JavaScript<span className='pipe'>|</span>ReactJS<span className='pipe'>|</span>Gatsby<span className='pipe'>|</span>SASS<span className='pipe'>|</span>BootStrap<span className='pipe'>|</span>Materialize<span className='pipe'>|</span>jQuery   
        </p>
        <h5>Server-Side</h5>
        <p id='backend-skills-wrapper'>
            NodeJS<span className='pipe'>|</span>MongoDB<span className='pipe'>|</span>Express<span className='pipe'>|</span>Mongoose<span className='pipe'>|</span>JWT<span className='pipe'>|</span>SQL<span className='pipe'>|</span>PostgreSQL<span className='pipe'>|</span>Python<span className='pipe'>|</span>Django
        </p>
        <h5>Industry Skills and Methodologies</h5>
        <p id='industry-skills-wrapper'>
            WCAG 2.1<span className='pipe'>|</span>Chrome Developer Tools<span className='pipe'>|</span>VoiceOver<span className='pipe'>|</span>AJAX<span className='pipe'>|</span>OOP<span className='pipe'>|</span>JSX<span className='pipe'>|</span>EJS<span className='pipe'>|</span>GitHub<span className='pipe'>|</span>REST API Development <span className='pipe'>|</span>GraphQL<span className='pipe'>|</span>Netflify<span className='pipe'>|</span>Heroku<span className='pipe'>|</span>Contentful
        </p>
        <h4>PROJECTS</h4>
        <h5><a href="https://myballot.netlify.app/" target="_blank">myBallotWA</a></h5>
        <ul className='project-list'>
            <li className='project-list-item'>
                Created a web based personalized ballot template generator for the residents of the State of Washington to use when filling out their in-person or mail-in ballots for local, state, and federal elections
            </li>
            <li className='project-list-item'>
                Earned first place in General Assembly’s Alumni Social Impact Hackathon
            </li>
            <li className='project-list-item'>
                Collaborated with a team of three UX/UI Designers and for Software Engineers in a three day sprint to create a fully functional mobile web application using technologies such as HTML5, CSS3, SCSS, JavaScript, Hook based React, React PDF Print, and Axios
            </li>
        </ul>
        <h4>EXPERIENCE</h4>
        <h5>Web Accessibility Auditor</h5>
        <p>Accessible Web</p>
        <p>Remote (May 2021 - Present)</p>
        <ul className='employment-list'>
            <li>
                Carefully review the user interface and code of client websites and applications to identify and define WCAG conformance failures
            </li>
            <li>
                Document all WCAG conformance failures using proprietary auditing tools
            </li>
            <li>
                Effectively communicate remediation actions the client can take to correct each WCAG failure
            </li>
            <li>
                Collaborate with web developers and staff to create universally operable user interface solutions verbally and through text
            </li>
            <li>
                Construct, review, and deliver Web Accessibility training materials to aid web developers in creating accessible components and applications
            </li>
        </ul>
        <h5>Software Engineering Instructional Assistant</h5>
        <p>General Assembly</p>
        <p>Remote (August 2020 - Present)</p>
        <ul className='employment-list'>
            <li>
                Empower up to 30 students to acquire the knowledge and skills to enter the work force as competent Software Engineers by introducing them to technologies such as HTML, CSS, JavaScript, React, Node JS, Express, MongoDB, Mongoose, Python, Django, SQL, PostgreSQL and concepts such as OOP, Functional Programing, Big O Notation, and Data Structures
            </li>
            <li>
                Coach students in one to one environments to walk through, debug and assure that their code adheres to industry best practices
            </li>
        </ul>
        <h5>Software Engineering Fellow</h5>
        <p>General Assembly</p>
        <p>Remote (February 2020 - August 2020)</p>
        <ul className='employment-list'>
            <li>
                Participated in 500+ hours of rigorous and intensive remote instruction which resulted in the created of 20+ applications making use of JavaScript, React, jQuery, and Ruby on Rails
            </li>
            <li>
                Collaborated with a team of four engineers to create and design apps from the ground up using Agile methodologies, while coordinating version control using Git and Github
            </li>
        </ul>
        <h4>CERTIFICATIONS</h4>
            <h5> CPWA - Certified Professional in Web Accessibility (In Progress, Anticipated June 2022)</h5>
            <ul className='certification-list'>
                <li className='certification-list-item'>
                    <p>International Association of Accessibility Professionals</p>
                    <p>Renewal Date: TBD</p>
                    <p>Certificate Number: TBD</p>
                </li>
            </ul>
            <h5>CPACC - Certified Professional in Accessibility Core Competency</h5>
            <ul className='certification-list'>
                <li className='certification-list-item'>
                    <p>International Association of Accessibility Professionals</p>
                    <p>Renewal Date: July 13th, 2024</p>
                    <p>Certificate Number: 21MJCLM069</p>
                </li>
            </ul>
        <h4>EDUCATION</h4>
        <h5>General Assembly</h5>
            <ul className='education-list'>
                <li className='education-list-item'>Remote Flex (August 2020)</li>
                <li className='education-list-item'>Software Engineering Immersive Program</li>
            </ul>
        <h5>NuCamp Coding Bootcamp</h5>
            <ul className='education-list'>
                <li className='education-list-item'>Remote (January 2020)</li>
                <li className='education-list-item'>HTML, CSS, and JavaScript Certificate of Completion</li>
            </ul>
        <h5>edX Coursework</h5>
            <ul className='education-list'>
                <li className='education-list-item'>Remote (December 2018)</li>
                <li className='education-list-item'>HTML, & CSS Fundamentals Certificate of Completion</li>
            </ul>
        <h5>Boise State University</h5>
            <ul className='education-list'>
                <li className='education-list-item'>Boise Idaho (May 2009 and August 2014)</li>
                <li className='education-list-item'>Bachelor and Master of Music in Music Education</li>
            </ul>
    </div>
)