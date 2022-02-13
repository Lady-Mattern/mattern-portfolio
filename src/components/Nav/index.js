// Built-In Components
import { Link } from 'react-router-dom';

// Styles
import styles from './styles.css';

export default (props) => (
    <nav>
                <Link id="logo" to="/profile">LM</Link>
        <ul className='nav-list'>
            <li className='nav-list-item'>
                <Link className="nav-link" to="/projects">
                    Projects
                </Link>
            </li>
            <li className='nav-list-item'>
                <Link className="nav-link" to="/media">
                    Media
                </Link>
            </li>
        </ul>
    </nav>
)