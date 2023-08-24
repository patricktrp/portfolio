import { FaLinkedin } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <section id="contact" className={styles['contact']} >
            <h1 className={styles["section-heading"]}>Contact</h1>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{display: 'flex',marginBottom: '5px', alignItems: 'center'}}>
                    <FaLinkedin size="1.4em" style={{marginRight: '15px'}}/>
                    <a  style={{textDecoration: 'none'}} target="_blank" rel="noreferrer" href="https://linkedin.com/in/patrick-treppmann" className={styles['blu']}>linkedin.com/patrick-treppmann</a>
                </div>
                <div style={{display: 'flex',marginBottom: '5px', alignItems: 'center'}} >
                    <MdMail size="1.4em" style={{marginRight: '15px'}}/>
                    <a  style={{textDecoration: 'none'}} target="_blank" rel="noreferrer" href="mailto:patrick@treppmann.dev" className={styles['blu']}>patrick@treppmann.dev</a>
                </div>
            </div>
        </section >
    );
}

export default Contact;