import styles from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <nav className={styles["navbar"]}>
            <div className={styles["navbar-inner"]}>
                <span className={styles["navbar-inner-heading"]}>patrick.dev</span>
                <div>
                    <button onClick={props.toggleDarkMode}>light</button>
                    <div>
                        <label class="switch">
                            <input type="checkbox" />
                            <span class="slider round"></span>
                        </label>
                    </div>
                </div>
                <ul className={styles["navbar-inner-list"]}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    {/* <li>Contact</li> */}
                </ul>
            </div>
        </nav >
    );
}

export default Navbar;