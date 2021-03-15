// Components
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import Image from '../../components/Image/index';

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
                <Image id="profile-image" image={leah} alt="This is a photograph of Leah Mattern" />
            </main>
            <Footer />
        </div>
    )
}

export default ProfilePage;