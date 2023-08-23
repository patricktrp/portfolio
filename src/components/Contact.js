import { FaLinkedin } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <section id="contact" className={styles['contact']}>
            <h1 className={styles["section-heading"]}>Contact</h1>
            <div style={{display: 'flex', width: '420px',marginBottom: '5px', alignItems: 'center'}}>
                <FaLinkedin size="1.4em" style={{marginRight: '15px'}}/>
                <span className={styles['blu']}>linkedin.com/in/patrick-treppmann</span>
            </div>
            <div style={{display: 'flex', width: '420px',marginBottom: '5px', alignItems: 'center'}} >
                <MdMail size="1.4em" style={{marginRight: '15px'}}/>
                <span className={styles['blu']}>patrick.treppmann97@gmail.com</span>
            </div>
            {/* <div style={{display: 'flex', width: '420px',marginBottom: '5px', alignItems: 'center'}} >
                <MdSmartphone size="1.4em" style={{marginRight: '15px'}}/>
                <span className={styles['blu']}>phone number</span>
            </div> */}
        </section >
    );
}

export default Contact;