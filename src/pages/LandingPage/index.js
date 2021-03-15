// Built-In Components
import { Link } from 'react-router-dom';

// Styles
import styles from './styles.css';

function LandingPage() {
    return (
        <div>
            <p className="left">Welcome to the home of...</p>
            <h1>Leah Mattern</h1>
            <p className="left">A reasonably tame Software Engineer</p>
            <Link to="/profile"><button>Touch to Enter</button></Link>
        </div>
    )
}

export default LandingPage;