// Components
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import LeftPanel from '../../components/LeftPanel';
import Resume from '../../components/Resume/index';

// Styles
import styles from './styles.css';

function ProfilePage() {
    return (
        <div className='page-layout'>
            <Header />
            <div id='flex-content'>
                <aside>
                    <LeftPanel />
                </aside>
                <main>
                    <h1>Profile Page</h1>
                    <Resume />
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default ProfilePage;