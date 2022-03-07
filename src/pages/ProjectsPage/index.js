// Components
import Layout from '../../components/Layout/index';
import ProjectCard from '../../components/ProjectCard/index';

// Static Assets
import sample from '../../assets/images/pusheen-cookie.png';

// Styles
import styles from './styles.css';

export default (props) => (
    <Layout>
        <h1>Projects Page</h1>
            <ProjectCard 
                heading={"MyBallot-Wa"}
                image={sample}
                link={""}
                id={""}
            />
            <ProjectCard 
                heading={"Oxygen"}
                image={sample}
                link={""}
                id={""}
            />
            <ProjectCard 
                heading={"Crazy Cat Survey"}
                image={sample}
                link={""}
                id={""}
            />
    </Layout>
)