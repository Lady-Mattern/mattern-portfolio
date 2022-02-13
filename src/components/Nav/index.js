// Built-In Components
import { Link } from 'react-router-dom';

// Styles
import styles from './styles.css';

export default (props) => (
    <nav>
        <ul>
            <li>
                <Link className="link" to="/ projects">
                    Projects
                </Link>
            </li>
            <li>
                <Link className="link" to="/Media">
                    Media
                </Link>
            </li>
        </ul>
    </nav>
)