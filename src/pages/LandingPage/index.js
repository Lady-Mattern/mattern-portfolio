// Built-In Components
import { Link } from 'react-router-dom';

// Styles
import styles from './styles.css';

export default (props) => (
    <main>
        <p className="left">Welcome to the home of...</p>
        <h1>Leah Mattern</h1>
        <p className="left">A reasonably tame Software Engineer</p>
        <Link to="/profile" id="enter-link"><span>Touch to Enter</span></Link>
    </main>
);
