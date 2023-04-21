import { FaAws } from 'react-icons/fa';
import styles from './Experience.module.css';
import { SiPython, SiDocker, SiPowershell, SiC, SiClion } from 'react-icons/si';

const Experience = () => {
    return (
        <section className={styles.experience} id="experience">
            <div className={styles["container"]}>

                <div className={`${styles["timeline-block"]} ${styles["timeline-block-right"]}`}>
                    <div className={styles["marker"]}></div>
                    <div className={styles["timeline-content"]}>
                        <h3>Software Developer @ TEQYARD</h3>
                        <span>Sep 2022 - today</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad t amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adt amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adt amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adt amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adt amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <ul style={{ listStyle: 'none', display: 'flex', padding: '0px', }}>
                            <li style={{ marginRight: '8px' }}><SiPython size={26} /></li>
                            <li style={{ marginRight: '8px' }}><SiDocker size={30} /></li>
                            <li style={{ marginRight: '8px' }}><FaAws size={30} /></li>
                        </ul>
                    </div>
                </div>
                <div className={`${styles["timeline-block"]} ${styles["timeline-block-left"]}`}>
                    <div className={styles["marker"]}></div>
                    <div className={styles["timeline-content"]}>
                        <h3>Student Assistant @ University of Wuppertal</h3>
                        <span>Feb 2021 - Jan 2022</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad t amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adt amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adt amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adt amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adt amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <ul style={{ listStyle: 'none', display: 'flex', padding: '0px', }}>
                            <li style={{ marginRight: '8px' }}><SiC size={26} /></li>
                            <li style={{ marginRight: '8px' }}><SiClion size={26} /></li>
                        </ul>
                    </div>
                </div>
                <div className={`${styles["timeline-block"]} ${styles["timeline-block-right"]}`}>
                    <div className={styles["marker"]}></div>
                    <div className={styles["timeline-content"]}>
                        <h3>Working Student @ Coroplast</h3>
                        <span>July 2020 - Dec 2020</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad t amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adt amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adt amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adt amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adt amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <ul style={{ listStyle: 'none', display: 'flex', padding: '0px', }}>
                            <li style={{ marginRight: '8px' }}><SiPython size={26} /></li>
                            <li style={{ marginRight: '8px' }}><SiPowershell size={30} /></li>
                        </ul>
                    </div>
                </div>
            </div >
        </section >
    );
}

export default Experience;