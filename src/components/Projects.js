import styles from './Projects.module.css';
import { HiOutlineExternalLink } from 'react-icons/hi'
import { FaGithub, FaJava, FaAws, FaReact } from 'react-icons/fa';
import { SiSpring } from 'react-icons/si';
import Chess from '../chess.patricktreppmann.com_.png';
import Sorting from '../sorting-visualizer.patricktreppmann.com_.png';

const Projects = () => {
    return (
        <section className={styles["projects"]} id="projects">
            <div className={styles["projects-inner-layout"]}>

                <div className={styles["projects-card"]}>
                    <h1>Online Chess</h1>
                    <p style={{ maxWidth: '450px' }}>This is an online chess app where you can choose to play against your friend or you can try to beat my Artifical Intelligence!</p>

                    <img src={Chess} className={styles["project-demo-img"]} />
                    <div className={styles["project-links"]}>
                        <ul>
                            <li><FaGithub size="1.8em" /></li>
                            <li><HiOutlineExternalLink size="1.8em" /></li>
                        </ul>
                    </div>


                    <div className={styles["project-tech"]}>
                        <p>Java, Spring, React, AWS</p>
                        <ul>
                            <li><FaJava size="1.8em" /></li>
                            <li><SiSpring size="1.8em" /></li>
                            <li><FaReact size="1.8em" /></li>
                            <li><FaAws size="1.8em" /></li>
                        </ul>
                    </div>
                </div>
                <div className={styles["projects-card"]}>
                    <h1>Sorting <span className={styles["project-heading-highlight"]}>Visualizer</span></h1>

                    <img src={Sorting} className={styles["project-demo-img"]} />
                    <div className={styles["project-links"]}>
                        <ul>
                            <li><FaGithub size="1.8em" /></li>
                            <li><HiOutlineExternalLink size="1.8em" /></li>
                        </ul>
                    </div>


                    <div className={styles["project-tech"]}>
                        <p>Java, Spring, React, AWS</p>
                        <ul>
                            <li><FaJava size="1.8em" /></li>
                            <li><SiSpring size="1.8em" /></li>
                            <li><FaReact size="1.8em" /></li>
                            <li><FaAws size="1.8em" /></li>
                        </ul>
                    </div>
                </div>

                <div className={styles["projects-card"]}>
                    <h1>Leetcode  <span className={styles["project-heading-highlight"]}>Clone</span></h1>
                    <div className={styles["project-links"]}>
                        <ul>
                            <li><FaGithub size="1.8em" /></li>
                            <li><HiOutlineExternalLink size="1.8em" /></li>
                        </ul>
                    </div>


                    <div className={styles["project-tech"]}>
                        <p>Java, Spring, React, AWS</p>
                        <ul>
                            <li><FaJava size="1.8em" /></li>
                            <li><SiSpring size="1.8em" /></li>
                            <li><FaReact size="1.8em" /></li>
                            <li><FaAws size="1.8em" /></li>
                        </ul>
                    </div>
                </div>
                <div className={styles["projects-card"]}>
                    <h1>Distributed <span className={styles["project-heading-highlight"]}>Cache</span></h1>
                    <div className={styles["project-links"]}>
                        <ul>
                            <li><FaGithub size="1.8em" /></li>
                            <li><HiOutlineExternalLink size="1.8em" /></li>
                        </ul>
                    </div>


                    <div className={styles["project-tech"]}>
                        <p>Java, Spring, React, AWS</p>
                        <ul>
                            <li><FaJava size="1.8em" /></li>
                            <li><SiSpring size="1.8em" /></li>
                            <li><FaReact size="1.8em" /></li>
                            <li><FaAws size="1.8em" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;