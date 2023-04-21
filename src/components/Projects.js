import styles from './Projects.module.css';
import { HiOutlineExternalLink } from 'react-icons/hi'
import { FaGithub, FaJava, FaAws, FaReact } from 'react-icons/fa';
import { SiMongodb, SiSpring, SiGo, SiDocker, SiHtml5, SiCss3, SiReact, SiTypescript } from 'react-icons/si';
import Chess from '../chess.patricktreppmann.com_.png';
import Sorting from '../sorting-visualizer.patricktreppmann.com_.png';

const Projects = () => {
    return (
        <section className={styles["projects"]} id="projects">
            <div className={styles["projects-inner-layout"]}>

                <div className={styles["projects-card"]}>
                    <h1>Online Chess</h1>
                    <p style={{ maxWidth: '450px' }}>This is an online chess app where you can choose to play against your friend or you can try to beat my Artifical Intelligence!</p>

                    <img alt="" src={Chess} className={styles["project-demo-img"]} />
                    <div className={styles["project-links"]}>
                        <ul>
                            <li><a target="_blank" rel="noreferrer" href="https://github.com/patricktrp/chess"><FaGithub size="1.8em" title="view source code" /></a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://chess.patricktreppmann.com"><HiOutlineExternalLink size="1.8em" title="view live demo" /></a></li>
                        </ul>
                    </div>


                    <div className={styles["project-tech"]}>
                        <p>Java, Spring, React, TypeScript, AWS</p>
                        <ul>
                            <li><FaJava size="1.8em" /></li>
                            <li><SiSpring size="1.8em" /></li>
                            <li><FaReact size="1.8em" /></li>
                            <li><SiTypescript size="1.8em" /></li>
                            <li><FaAws size="1.8em" /></li>
                        </ul>
                    </div>
                </div>
                <div className={styles["projects-card"]}>
                    <h1>Sorting <span className={styles["project-heading-highlight"]}>Visualizer</span></h1>

                    <img alt="" src={Sorting} className={styles["project-demo-img"]} />
                    <div className={styles["project-links"]}>
                        <ul>
                            <li><a target="_blank" rel="noreferrer" href="https://github.com/patricktrp"><FaGithub size="1.8em" title="view source code" /></a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://github.com/patricktrp"><HiOutlineExternalLink title="view live demo" size="1.8em" /></a></li>
                        </ul>
                    </div>


                    <div className={styles["project-tech"]}>
                        <p>React, HTML, CSS</p>
                        <ul>
                            <li><SiReact size="1.8em" /></li>
                            <li><SiHtml5 size="1.8em" /></li>
                            <li><SiCss3 size="1.8em" /></li>
                        </ul>
                    </div>
                </div>

                <div className={styles["projects-card"]}>
                    <h1>Leetcode  <span className={styles["project-heading-highlight"]}>Clone</span></h1>
                    <div className={styles["project-links"]}>
                        <ul>
                            <li><a target="_blank" rel="noreferrer" href="https://github.com/patricktrp"><FaGithub size="1.8em" title="view source code" /></a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://github.com/patricktrp"><HiOutlineExternalLink title="view live demo" size="1.8em" /></a></li>
                        </ul>
                    </div>


                    <div className={styles["project-tech"]}>
                        <p>Java, Spring, React, MongoDB, AWS</p>
                        <ul>
                            <li><FaJava size="1.8em" /></li>
                            <li><SiSpring size="1.8em" /></li>
                            <li><FaReact size="1.8em" /></li>
                            <li><SiMongodb size="1.8em" /></li>
                            <li><FaAws size="1.8em" /></li>
                        </ul>
                    </div>
                </div>
                <div className={styles["projects-card"]}>
                    <h1>Distributed <span className={styles["project-heading-highlight"]}>Cache</span></h1>
                    <div className={styles["project-links"]}>
                        <ul>
                            <li><a target="_blank" rel="noreferrer" href="https://github.com/patricktrp"><FaGithub size="1.8em" title="view source code" /></a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://github.com/patricktrp"><HiOutlineExternalLink title="view live demo" size="1.8em" /></a></li>
                        </ul>
                    </div>


                    <div className={styles["project-tech"]}>
                        <p>Go, Docker</p>
                        <ul>
                            <li><SiGo size="1.8em" /></li>
                            <li><SiDocker size="1.8em" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;