import styles from './Hero.module.css';
import { FaGithubSquare, FaLinkedin, FaAws, FaJava } from 'react-icons/fa';
import { SiReact, SiDocker, SiSpring, SiPython, SiJavascript, SiPostgresql } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import Waving from '../waving.png';

const Hero = () => {
    return (
        <section className={styles["hero"]}>
            <div className={styles["hero-inner-layout"]}>
                <div className={styles["hero-main"]}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div className={styles["hero-main-heading"]}>
                            <h1>Hi I'm Patrick!</h1>
                            <img alt="" src={Waving} />
                        </div>
                        <p>I'm a computer science student and full stack developer based in Aachen, Germany. 📍</p>
                        <ul className={styles["hero-main-icons"]}>
                            <li><FaGithubSquare size="45" /></li>
                            <li><FaLinkedin size="45" /></li>
                            <li><MdEmail size="45" /></li>
                        </ul>
                    </div>
                    <div className={styles["hero-main-img-wrapper"]}>
                        <div className={styles["hero-main-img"]}></div>
                    </div>
                </div>
                <div className={styles.skills}>
                    <p>Tech Stack</p>
                    <ul>
                        <li><div title="React" className={styles["logo-background"]}><SiReact title="React" size={30} /></div></li>
                        <li><div title="JavaScript" className={styles["logo-background"]}><SiJavascript title="JavaScript" size={30} /></div></li>
                        <li><div title="Java" className={styles["logo-background"]}><FaJava title="Java" size={30} /></div></li>
                        <li><div title="Spring" className={styles["logo-background"]}><SiSpring title="Spring" size={30} /></div></li>
                        <li><div title="Python" className={styles["logo-background"]}><SiPython title="Python" size={30} /></div></li>
                        <li><div title="PostgreSQL" className={styles["logo-background"]}><SiPostgresql title="PostgreSQL" size={30} /></div></li>
                        <li><div title="Docker" className={styles["logo-background"]}><SiDocker title="Docker" size={30} /></div></li>
                        <li><div title="AWS" className={styles["logo-background"]}><FaAws title="AWS" size={30} /></div></li>
                    </ul>
                </div>
            </div>
        </section >
    );
}

export default Hero;