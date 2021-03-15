// Components
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import ProjectCard from '../../components/ProjectCard/index';

// Styles
import styles from './styles.css';

function ProjectsPage() {
    return (
        <div>
            <Header />
            <main>
                <h1>Projects Page</h1>
                <ProjectCard />
            </main>
            <Footer />
        </div>
    )
}

export default ProjectsPage;