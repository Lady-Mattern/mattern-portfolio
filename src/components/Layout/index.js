// Components
import Header from '../Header/index';
import Footer from '../Footer/index';
import Aside from '../Aside/index';

// Styles
import styles from './styles.css';

export default (props) => (
    <div className={styles.container}>
        <Header />
        <Aside />
        <main>
            {props.children}
        </main>
        <Footer />
    </div>
)