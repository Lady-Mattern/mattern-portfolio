// Built-In Components
import { Link } from 'react-router-dom';

// Components
import Image from '../Image';

// Styles
import styles from './styles.css';

export default (props) => (
    <div className="project-card">
        <h2>{props.heading}</h2>
        <Link to={props.heading}>
            <Image id={props.id} image={props.image} alt={props.alt} />
        </Link>
        <a href={props.link}>
            Visit Project Here!
        </a>
    </div>
)