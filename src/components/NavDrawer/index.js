// Styles
import styles from './styles.css';

export default (props) => (
    <nav id='mobile-nav' >
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

// NOTE: add this only if more nav links are needed