// Components
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import MediaCard from '../../components/MediaCard/index';

// Styles
import styles from './styles.css';

function MediaPage() {
    return (
        <div>
            <Header />
            <main>
                <h1>Media Page</h1>
                <MediaCard />
            </main>
            <Footer />
        </div>
    )
}

export default MediaPage;