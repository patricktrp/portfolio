import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles['footer']}>
            {/* <div style={{width: '80%', height: '.2px', backgroundColor: '#767676', marginBottom: '12px'}}></div> */}
            <div>Built and designed by Patrick Treppmann.</div>
            <div>All rights reserved. ©</div>
        </footer>
    )
    }
    
export default Footer
