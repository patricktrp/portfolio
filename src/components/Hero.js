import { Fade } from "@successtar/react-reveal";
import { FaAws, FaGithubSquare, FaJava, FaLinkedin } from 'react-icons/fa';
import { IoIosPaper } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { SiDocker, SiJavascript, SiMongodb, SiPostgresql, SiPython, SiReact, SiSpring } from 'react-icons/si';
import CV from '../assets/cv.pdf';
import Waving from '../assets/waving.png';
import styles from './Hero.module.css';

const Hero = () => {
    return (

        <section className={styles["hero"]} id="about">
            <div className={styles["hero-inner-layout"]}>
                <Fade bottom distance="20%" >
                    <div className={styles["hero-main"]}>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div className={styles["hero-main-heading"]}>
                                <h1>Hi I'm Patrick!</h1>
                                <img alt="" src={Waving} />
                            </div>
                            {/* <p>I'm a computer science student and full stack developer based in Aachen, Germany. 📍</p> */}
                            <p style={{ maxWidth: '750px' }}>I am a m.sc. computer science student at <span><a href="https://www.rwth-aachen.de/cms/~a/root/?lidx=1">RWTH Aachen</a></span> where i specialize in software engineering, distributed systems & artificial intelligence. </p>
                            <p style={{ maxWidth: '750px' }}></p>
                            <ul className={styles["hero-main-icons"]}>
                                <li><a target="_blank" rel="noreferrer" href="https://github.com/patricktrp"><FaGithubSquare /></a></li>
                                <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/patrick-treppmann/"><FaLinkedin /></a></li>
                                <li><a target="_blank" rel="noreferrer" href={CV}><IoIosPaper title="view resume" /></a></li>
                                <li><a target="_blank" rel="noreferrer" href="mailto:patrick.treppmann97@gmail.com"><MdEmail /></a></li>
                            </ul>
                        </div>
                        <div className={styles["hero-main-img-wrapper"]}>
                            <div className={styles["hero-main-img"]}></div>
                        </div>
                    </div>
                    <div className={styles.skills}>
                        <p>Tech Stack</p>
                        <ul>
                            <li><div title="React" className={styles["logo-background"]}><SiReact title="React" /></div></li>
                            <li><div title="JavaScript" className={styles["logo-background"]}><SiJavascript title="JavaScript" /></div></li>
                            <li><div title="Java" className={styles["logo-background"]}><FaJava title="Java" /></div></li>
                            <li><div title="Spring" className={styles["logo-background"]}><SiSpring title="Spring" /></div></li>
                            <li><div title="Python" className={styles["logo-background"]}><SiPython title="Python" /></div></li>
                            <li><div title="PostgreSQL" className={styles["logo-background"]}><SiPostgresql title="PostgreSQL" /></div></li>
                            <li><div title="MongoDB" className={styles["logo-background"]}><SiMongodb title="MongoDB" /></div></li>
                            {/* <li><div title="Cassandra" className={styles["logo-background"]}><SiApachecassandra title="Cassandra" /></div></li> */}
                            {/* <li><div title="Redis" className={styles["logo-background"]}><SiRedis title="Redis" /></div></li> */}
                            <li><div title="Docker" className={styles["logo-background"]}><SiDocker title="Docker" /></div></li>
                            <li><div title="Amazon Web Services" className={styles["logo-background"]}><FaAws title="Amazon Web Services" /></div></li>
                        </ul>
                    </div>
                </Fade>
            </div>
        </section >
    );
}

export default Hero;