// Components
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import Image from '../../components/Image/index';
import Resume from '../../components/Resume/index';

// Static Assets
import leah from '../../assets/images/profile-photo.jpg';

// Styles
import styles from './styles.css';

function ProfilePage() {
    return (
        <div>
            <Header />
            <main>
                <h1>Profile Page</h1>
                <Image id="profile-image" image={leah} alt="Leah Mattern's profile picture" />
                <div id="contact-info">
                    <div className='flex-row'>
                        <p>Linkedin Logo Here Soon</p>
                        <a href='https://www.linkedin.com/in/lady-leah-mattern/'>Linkedin</a>
                    </div>
                    <div className='flex-row'>
                        <p>GitHub Logo Coming Soon</p>
                        <a href='https://github.com/Lady-Mattern'>GitHub</a>
                    </div>
                    <div className='flex-row'>
                        <p>Email Logo Coming Soon</p>
                        <a href="mailto: ladyleahmattern@gmail.com">Email</a>
                    </div>
                </div>
                <Resume />
            </main>
            <Footer />
        </div>
    )
}

export default ProfilePage;