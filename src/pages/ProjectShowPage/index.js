// Components
import Layout from '../../components/Layout/index';
import Image from '../../components/Image';

// Styles
import styles from './styles.css';

export default (props) => (
    <Layout>
        <h1>{props.heading}</h1>

        <Image />
    </Layout>
)