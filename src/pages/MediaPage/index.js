// Components
import Layout from '../../components/Layout/index';
import MediaCard from '../../components/MediaCard/index';

// Static Assets
import sample from '../../assets/images/pusheen-cookie.png';

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
            id={'sample'} 
            image={sample} 
            alt={'this is pusheen eating a cookie'}
            link={'www.google.com'}
            text={"check out the article here"}
        />
    </Layout>
)
