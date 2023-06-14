import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import styles from './Navbar.module.css';

const Navbar = (props) => {
    const scroll = (e, id) => {
        e.preventDefault();
        let section = document.getElementById(id);
        section && section.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <nav className={styles["navbar"]}>
            <div className={styles["navbar-inner"]}>
                <span className={styles["navbar-inner-heading"]}>treppmann.dev</span>
                <ul className={styles["navbar-inner-list"]}>
                    <li><a href="#about" onClick={e => scroll(e, 'about')}>About</a></li>
                    <li><a href="#experience" onClick={e => scroll(e, 'experience')}>Experience</a></li>
                    <li><a href="#projects" onClick={e => scroll(e, 'projects')}>Projects</a></li>
                    <li style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{!props.isDarkMode ? <BsFillMoonFill onClick={props.toggleDarkMode} /> : <BsFillSunFill onClick={props.toggleDarkMode} />}</li>
                </ul>
            </div>
        </nav >
    );
}

export default Navbar;