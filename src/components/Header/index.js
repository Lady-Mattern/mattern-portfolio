// Built-In Components
import { Link } from 'react-router-dom';

// Components
import Nav from '../Nav/index';

function Header() {
    return (
        <header>
            <Link id="logo" to="/profile">LM</Link>
            <Nav />
        </header>
    )
}

export default Header;