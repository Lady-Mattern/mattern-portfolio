import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="/profile">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/Media">Media</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;