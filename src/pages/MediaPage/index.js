// Components
import Layout from '../../components/Layout/index';
import VideoCard from '../../components/VideoCard';
import MediaCard from '../../components/MediaCard/index';

// Static Assets
import sample from '../../assets/images/pusheen-cookie.png';
import blindcode from '../../assets/images/blindcode.jpeg';
import heroku from '../../assets/images/heroku2.jpg';
import helloworld from '../../assets/images/helloworld.jpg';

// Styles
import styles from './styles.css';

export default (props) => (
    <Layout>
        <h1>Media Page</h1>
        <p>Coding and Web Accessibility mean everything to me. I enjoy exploring topics within these realms and sharing my ideas with others. See some things I've been involved in below!</p>

        <h2>Blog</h2>
        <MediaCard 
            heading={`On Learning to Code as a Visually Impaired Human`} 
            description={"Scratching the surface on what it is like to participate in the visual world of coding as a visual learner with a visual impairment."} 
            id={'visually-impaired-human'} 
            image={blindcode} 
            alt={'An open Macbook Pro showing two panels of VSCode open. The handle of a white cane is laid across the keyboard.'}
            link={'https://levelup.gitconnected.com/on-learning-to-code-as-a-visually-impaired-human-1e1ea5a56be4'}
            text={"Check out the article here"}
        />
        <MediaCard 
            heading={"Heroku and You"}
            description={"A step by step guide to deploying full stack Rails and React applications to Heroku."}
            id={"heroku"}
            image={heroku}
            alt={"Heroku logo"}
            link={"https://medium.com/@ladyleahmattern/heroku-and-you-5b5ffd759c26"}
            text={"Check out the article here"}
        />
        <MediaCard 
            heading={'How the Words "Hello World" Changed My Life Forever'}
            description={"The origin story of how I went from public school educator to Software Engineer and Web Accessibility Specialist."}
            id={"changed-forever"}
            image={helloworld}
            alt={"Hello world written in HTML code"}
            link={"https://medium.com/@ladyleahmattern/how-the-words-hello-world-changed-my-life-forever-ac2bd8432159"}
            text={"Check out the article here"}
        />

        <h2>Videos</h2>
        <VideoCard 
            heading={"Bringing Your Strengths and Weaknesses to Coding"} 
            description={"Leah and Martha Sharpe talk about learning to code."} 
            id={'video-leahandmartha'} 
            src={"https://www.youtube.com/embed/WlCaCL5YEfc"}
            title={"Youtube Media Player"}
        />
    </Layout>
)
