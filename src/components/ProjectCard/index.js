// Built-In Components
import { Link } from 'react-router-dom';

// Styles
import styles from './styles.css';

export default (props) => (
    <div className="project-card">
        <h2>{props.title}</h2>
        <Link to={props.title}>
            <img id="" src={props.image} alt={props.title} />
        </Link>
        <a href={props.link}>
            Visit Project Here!
        </a>
    </div>
)