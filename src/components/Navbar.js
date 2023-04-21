import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles["navbar"]}>
            <div className={styles["navbar-inner"]}>
                <span className={styles["navbar-inner-heading"]}>patrick.dev</span>
                <div>
                    <button onClick={() => document.documentElement.setAttribute("data-theme", "light")}>light</button>
                    <button onClick={() => document.documentElement.setAttribute("data-theme", "dark")}>dark</button>
                </div>
                <ul className={styles["navbar-inner-list"]}>
                    <li>About</li>
                    <li><a href="#projects">Projects</a></li>
                    <li>Experience</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav >
    );
}

export default Navbar;