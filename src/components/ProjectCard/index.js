// Styles
import { Link } from 'react-router-dom';
import styles from './styles.css';

function ProjectCard(props) {
    return (
        <div className="project-card">
            <h2>{props.title}</h2>
            <Link to={props.title}>
                <img id="" src={props.image} alt={props.title} />
            </Link>
            <a href={props.link}>Visit Project Here!</a>
        </div>
    )
}

export default ProjectCard;