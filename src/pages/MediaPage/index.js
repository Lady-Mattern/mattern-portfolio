import Header from '../../components/Footer/index';
import Footer from '../../components/Footer';
import MediaCard from '../../components/MediaCard/index';

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