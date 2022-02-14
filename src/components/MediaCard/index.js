// Components
import Image from '../../components/Image/index';

// Static Assets

// Styles
import styles from './styles.css';

export default (props) => (
    <div className="media-card">
        <h3>{props.title}</h3>
        <a href={props.link} target="_blank" aria-label="This link opens in a new tab">
        {props.text}
        </a>
        <Image id={props.id} image={props.image} alt={props.alt}/>
        <p>{props.description}</p>
    </div>
)