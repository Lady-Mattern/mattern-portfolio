// Components
import Layout from '../../components/Layout/index';
import Resume from '../../components/Resume/index';

// Styles
import styles from './styles.css';

export default (props) => (
    <Layout>
        <h1>Hello! I'm Leah</h1>
        <p id='sub-title'>
            I'm a New Jersey-based Visually Impaired Software Engineer and Web Accessibility Specialist
        </p>

        <h2>About Me</h2>
        <p>
            I didn't start out in life believing that I could build websites and applications. I was born with a moderate visual impairment that impacted my everyday life. I believed that I did not have the skills and abilities needed to have a successful career as a developer. Instead, I originally pursued a career as a music teacher and I worked in the public school system for about five years. I thought that I had found my true calling, but as it turns out, life had other plans for me.
        </p>
        <p>
            I was first introduced to code back in 2018. A friend suggested I check out some courses in HTML, CSS, and JavaScript to see if I might like to consider coding as viable a career option. I thought, well, what have I got to lose? Turns out, all it took was seeing the words "Hello World" appear on the browser viewport to hook me for like! I instantly set out to learn as much as I could. The more I learned, the more I realized that I needed to get serious and check out more formal avenues for learning.
        </p>

        <h2>Check Out My Resume</h2>
        <Resume />

        <h3>Download as a PDF</h3>
        <p>PDF component here</p>
    </Layout>
)