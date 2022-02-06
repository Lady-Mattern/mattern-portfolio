// Static Assets
import leah from '../../assets/images/profile-photo.jpg';

// Components
import Image from '../Image/index';

function LeftPanel () {
    return (
        <div id="content-left">
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
        </div>
    )
}

export default LeftPanel;