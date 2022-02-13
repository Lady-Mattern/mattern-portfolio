// Components
import Layout from '../../components/Layout/index';
import ProjectCard from '../../components/ProjectCard/index';

// Styles
import styles from './styles.css';

export default (props) => (
    <Layout>
        <h1>Projects Page</h1>
            <ProjectCard 
                title="MyBallot-Wa"
                image=""
                link=""
            />
            <ProjectCard 
                title="Oxygen"
                image=""
                link=""
            />
            <ProjectCard 
                title="Crazy Cat Survey"
                image=""
                link=""
            />
    </Layout>
)