import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import styles from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <nav className={styles["navbar"]}>
            <div className={styles["navbar-inner"]}>
                <span className={styles["navbar-inner-heading"]}>treppmann.dev</span>
                <ul className={styles["navbar-inner-list"]}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{props.isDarkMode ? <BsFillMoonFill onClick={props.toggleDarkMode}/> : <BsFillSunFill onClick={props.toggleDarkMode}/>}</li>
                </ul>
                {/* <FaBars className={styles['responsive-navbar-icon']}/> */}
            </div>
        </nav >
    );
}

export default Navbar;