import { Fade } from '@successtar/react-reveal';
import { FaAws, FaGithub, FaJava, FaReact } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { SiAuth0, SiCss3, SiDocker, SiGo, SiHtml5, SiMongodb, SiReact, SiRedis, SiSpring, SiTypescript } from 'react-icons/si';
import Chess from '../assets/chess.patricktreppmann.com_.png';
import Sorting from '../assets/sorting-visualizer.patricktreppmann.com_.png';
import styles from './Projects.module.css';

const Projects = () => {
    return (
        <section className={styles["projects"]} id="projects">

            <div className={styles["projects-inner-layout"]}>
                <h1 className={styles["section-heading"]}>Projects</h1>

                <Fade left distance="30%">
                    <div className={styles["projects-card"]}>
                        <h1>Online Chess</h1>
                        <p style={{ maxWidth: '50%' }}>This is an online chess app where you can choose to play against your friend or you can try to beat my Artifical Intelligence!</p>

                        <img alt="" src={Chess} className={styles["project-demo-img"]} />
                        <div className={styles["project-links"]}>
                            <ul>
                                <li><a target="_blank" rel="noreferrer" href="https://github.com/patricktrp/chess"><FaGithub size="1.8em" title="view source code" /></a></li>
                                <li><a target="_blank" rel="noreferrer" href="https://chess.patricktreppmann.com"><HiOutlineExternalLink size="1.8em" title="view live demo" /></a></li>
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
                </Fade>

                <Fade right distance="30%">
                    <div className={styles["projects-card"]}>
                        <h1>Sorting <span className={styles["project-heading-highlight"]}>Visualizer</span></h1>
                        <p style={{ maxWidth: '50%' }}>This web application visualizes several sorting algorithms and how they operate on the data. Go and try it yourself!</p>

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
                </Fade>

                <Fade left distance="30%">
                    <div className={styles["projects-card"]}>
                        <h1>Leetcode  <span className={styles["project-heading-highlight"]}>Clone</span></h1>
                        <p style={{ maxWidth: '50%' }}>This full-stack web application is a clone of the popular website Leetcode.</p>
                        <p style={{ maxWidth: '50%' }}>It supports authentication, an integration of the stripe api for payments and most importantly a remote code execution engine.</p>
                        <div className={styles["project-links"]}>
                            <ul>
                                <li><a target="_blank" rel="noreferrer" href="https://github.com/patricktrp"><FaGithub size="1.8em" title="view source code" /></a></li>
                                <li><a target="_blank" rel="noreferrer" href="https://github.com/patricktrp"><HiOutlineExternalLink title="view live demo" size="1.8em" /></a></li>
                            </ul>
                        </div>


                        <div className={styles["project-tech"]}>
                            <p>Java, Spring, React, TypeScript, MongoDB, Redis, Auth0, AWS</p>
                            <ul>
                                <li><FaJava size="1.8em" /></li>
                                <li><SiSpring size="1.8em" /></li>
                                <li><FaReact size="1.8em" /></li>
                                <li><SiTypescript size="1.8em" /></li>
                                <li><SiMongodb size="1.8em" /></li>
                                <li><SiRedis size="1.8em" /></li>
                                <li><SiAuth0 size="1.8em" /></li>
                                <li><FaAws size="1.8em" /></li>
                            </ul>
                        </div>
                    </div>
                </Fade>

                <Fade right distance="30%">

                    <div className={styles["projects-card"]}>
                        <h1>Distributed <span className={styles["project-heading-highlight"]}>Cache</span></h1>
                        <p style={{ maxWidth: '50%' }}>This is a lightweight version of a distributed caching system like Memcached. It supports storage and deletion of files on different nodes.</p>
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
                </Fade>
            </div>
        </section>
    );
}

export default Projects;