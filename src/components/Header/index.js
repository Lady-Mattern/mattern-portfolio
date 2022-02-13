// Built-In Components
import { Link } from 'react-router-dom';

// Components
import Nav from '../Nav/index';

// Styles
import styles from './styles.css';

export default (props) => (
    <header>
        <Link id="logo" to="/profile">LM</Link>
        <Nav />
    </header>
)
