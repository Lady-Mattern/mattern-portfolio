// Built-In Components
import { Link } from 'react-router-dom';

// Components
// Components
import Nav from '../Nav/index';

// Styles
import styles from './styles.css';

function Header() {
    return (
        <header>
            <Link id="logo" to="/profile">LM</Link>
            <Nav />
        </header>
    )
}

export default Header;