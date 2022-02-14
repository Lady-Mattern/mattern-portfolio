// Static Assets
import leah from '../../assets/images/profile-photo.jpg';

// Styles
import styles from './styles.css';

// Components
import Image from '../Image/index';

export default (props) => (
    <aside>
        <Image id={`profile-image`} image={leah} alt={`Leah Mattern's profile picture`} />
        <div id="contact-info">
            <div className='flex-row'>
                <span>
                    <i class="fab fa-linkedin fa-2x"></i>
                </span>
                <a href='https://www.linkedin.com/in/lady-leah-mattern/'>
                    Linkedin
                </a>
            </div>
            <div className='flex-row'>
                <span>
                    <i class="fab fa-github-square fa-2x"></i>
                </span>
                <a href='https://github.com/Lady-Mattern'>
                    GitHub
                </a>
            </div>
            <div className='flex-row'>
                <span>
                    <i class="fas fa-envelope-square fa-2x"></i>
                </span>
                <a href="mailto: ladyleahmattern@gmail.com">
                    Email
                </a>
            </div>
        </div>
    </aside>
)