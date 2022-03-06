// Components
import Layout from '../../components/Layout/index';
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
        <p>Here is some media stuff</p>
        <h2>Videos</h2>
        <MediaCard 
            title={`On Learning to Code as a Visually Impaired Human`} 
            description={"This is some placeholder text"} 
            id={'vide-sample'} 
            image={sample} 
            alt={'this is pusheen eating a cookie'}
            link={'www.google.com'}
            text={"View the video here"}
        />
        <h2>Blog</h2>
        <MediaCard 
            title={`On Learning to Code as a Visually Impaired Human`} 
            description={"This is a sample card"} 
            id={'visually-impaired-human'} 
            image={blindcode} 
            alt={'An open Macbook Pro showing two panels of VSCode open. The handle of a white cane is laid across the keyboard.'}
            link={'https://levelup.gitconnected.com/on-learning-to-code-as-a-visually-impaired-human-1e1ea5a56be4'}
            text={"check out the article here"}
        />
        <MediaCard 
            title={"Heroku and You"}
            description={"description of the thing"}
            id={"heroku"}
            image={heroku}
            alt={"Heroku logo"}
            link={"https://medium.com/@ladyleahmattern/heroku-and-you-5b5ffd759c26"}
            text={"check out the article here"}
        />
        <MediaCard 
            title={'How the Words "Hello World" Changed My Life Forever'}
            description={"description of this article"}
            id={"changed-forever"}
            image={helloworld}
            alt={"Hello world written in HTML code"}
            link={"https://medium.com/@ladyleahmattern/how-the-words-hello-world-changed-my-life-forever-ac2bd8432159"}
            text={"check out the article here"}
        />
    </Layout>
)
