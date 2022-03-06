// Components
import Iframe from '../../components/Iframe/index';

// Styles
import styles from './styles.css';

export default (props) => (
    <div className="media-card">
        <h3>{props.heading}</h3>
        <a href={props.link} target="_blank" aria-label="This link opens in a new tab">
        {props.text}
        </a>
        <Iframe src={props.src} title={props.title} />
        <p>{props.description}</p>
    </div>
)