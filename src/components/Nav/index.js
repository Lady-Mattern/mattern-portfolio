// Built-In Components
import { Link } from 'react-router-dom';

// Styles
import styles from './styles.css';

export default (props) => (
    <nav>
        <ul>
            <li>
                <Link className="nav-link" to="/projects">
                    Projects
                </Link>
            </li>
            <li>
                <Link className="nav-link" to="/media">
                    Media
                </Link>
            </li>
        </ul>
    </nav>
)