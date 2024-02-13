import { Fade } from "@successtar/react-reveal";
import { SiC, SiClion, SiDocker, SiPowershell, SiPython, SiReact, SiSpring, SiJavascript, SiMongodb } from 'react-icons/si';
import styles from './Experience.module.css';
import { FaAws, FaJava } from 'react-icons/fa';

// const EXPERIENCES = [
//     {
//         position: "Software Developer @ TEQYARD",
//         duration: "Sep 2022 - Present",
//         description: [
//             "implemented a data-driven approach to detect pauses in vehicle data using Python",
//             "achieved the automated analysis of 200.000+ vehicles each month by implementing a machine learning pipeline on AWS"
//         ],
//         tech: [<SiPython size={26} />, <SiDocker size={30} />, <FaAws size={30} />]
//     }
// ]

const Experience = () => {
    return (
        <section className={styles.experience} id="experience">
            <div className={styles["experience-inner-layout"]}>
                <h1 className={styles["section-heading"]}>Experience</h1>
                <div className={styles["container"]}>

                    {/* {EXPERIENCES.map(experience =>
                        <div className={`${styles["timeline-block"]} ${styles["timeline-block-right"]}`}>
                            <div className={styles["marker"]}></div>
                            <Fade right distance="50%">
                                <div className={styles["timeline-content"]}>
                                    <h3>{experience.position}</h3>
                                    <span>{experience.duration}</span>
                                    <ul className={styles["experience-list"]}>
                                        {experience.description.map(paragraph => <li>{paragraph}</li>)}
                                    </ul>
                                    <ul style={{ listStyle: 'none', display: 'flex', padding: '0px', }}>
                                        {experience.tech.map(icon => <li style={{ marginRight: '8px' }}>{icon}</li>)}
                                    </ul>
                                </div>
                            </Fade>
                        </div>
                    )} */}



                    <div className={`${styles["timeline-block"]} ${styles["timeline-block-right"]}`}>
                        <div className={styles["marker"]}></div>
                        <Fade right distance="50%">
                            <div className={styles["timeline-content"]}>
                                <h3>Software Developer @ <a className={styles['company-link']} href="https://www.teqyard.de/" target="_blank" rel="noreferrer">TEQYARD</a></h3>
                                <span>Sep 2022 - Present</span>
                                <ul className={styles["experience-list"]}>
                                    <li>implemented a data-driven approach to detect pauses in vehicle data using Python</li>
                                    <li>achieved the automated analysis of 200.000+ vehicles each month by implementing a machine learning pipeline on AWS</li>
                                </ul>
                                <ul style={{ listStyle: 'none', display: 'flex', padding: '0px', }}>
                                    <li style={{ marginRight: '8px' }}><SiPython size={26} /></li>
                                    <li style={{ marginRight: '8px' }}><SiDocker size={30} /></li>
                                    <li style={{ marginRight: '8px' }}><FaAws size={30} /></li>
                                    <li style={{ marginRight: '8px' }}><SiReact size={30} /></li>
                                    <li style={{ marginRight: '8px' }}><SiSpring size={30} /></li>
                                    <li style={{ marginRight: '8px' }}><FaJava size={30} /></li>
                                </ul>
                            </div>
                        </Fade>
                    </div>
                    <div className={`${styles["timeline-block"]} ${styles["timeline-block-left"]}`}>
                        <div className={styles["marker"]}></div>
                        <Fade left distance="50%">
                            <div className={styles["timeline-content"]}>
                                <h3>Student Assistant @ <a className={styles['company-link']} href="https://www.uni-wuppertal.de/de/" target="_blank" rel="noreferrer">University of Wuppertal</a></h3>
                                <span>Feb 2021 - Jan 2022</span>
                                <ul className={styles["experience-list"]}>
                                    <li style={{ textAlign: 'left' }}>assisted the researchers with the extension of an OpenSSL fork to prevent replay attacks on 0-RTT sessions when using TLS</li>
                                </ul>
                                <ul style={{ listStyle: 'none', display: 'flex', padding: '0px' }}>
                                    <li style={{ marginRight: '8px' }}><SiC size={26} /></li>
                                    <li style={{ marginRight: '8px' }}><SiClion size={26} /></li>
                                </ul>
                            </div>
                        </Fade>
                    </div>
                    <div className={`${styles["timeline-block"]} ${styles["timeline-block-right"]}`}>
                        <div className={styles["marker"]}></div>
                        <Fade right distance="50%">
                            <div className={styles["timeline-content"]}>
                                <h3>Working Student @ <a className={styles['company-link']} href="https://www.coroplast-group.com/de/" target="_blank" rel="noreferrer">Coroplast</a></h3>
                                <span>Jul 2020 - Dec 2020</span>
                                <ul className={styles["experience-list"]}>
                                    <li style={{ textAlign: 'left' }}>automated various business processes by writing Python and Powershell scripts</li>
                                    <li style={{ textAlign: 'left' }}>digitalized a process for in-house restaurant orders within the company by implementing an application with the low-code platform Microsoft Power Apps</li>
                                </ul>
                                <ul style={{ listStyle: 'none', display: 'flex', padding: '0px', }}>
                                    <li style={{ marginRight: '8px' }}><SiPython size={26} /></li>
                                    <li style={{ marginRight: '8px' }}><SiPowershell size={30} /></li>
                                </ul>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div >
        </section >
    );
}

export default Experience;

