import { Fade } from '@successtar/react-reveal';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
// import Chess from '../assets/chess.patricktreppmann.com_.png';
// import Leetcode from '../assets/leetcode-clone.png';
import SavDark from '../assets/sav_dark.png';
import SavLight from '../assets/sav_light.png';
import styles from './Projects.module.css';
import TechIcon from './TechIcon';

const PROJECTS = [
    {
        name: ["Sorting", "Visualizer"],
        description: [
            "This web application visualizes several sorting algorithms and how they operate on the data. Go and try it yourself!",
            "Implemented Bubblesort, Insertion Sort, Selection Sort, Quicksort, Mergesort & Heapsort!"
        ],
        technologies: ["React", "JavaScript", "HTML", "CSS"],
        links: {
            github: "https://github.com/patricktrp/sorting-algorithm-visualizer",
            hosted: "https://sorting-algorithms.treppmann.dev"
        },
        img: {
            light: SavLight,
            dark: SavDark
        }
    },
    // {
    //     name: ["Online", "Chess"],
    //     description: ["This is an online chess app where you can choose to play against your friend or you can try to beat my Artifical Intelligence!"],
    //     technologies: ["React", "Java", "Spring", "AWS"],
    //     links: {
    //         github: "https://github.com/patricktrp/chess",
    //         hosted: "https://chess.treppmann.dev"
    //     },
    //     img: {
    //         light: Chess,
    //         dark: Chess
    //     }
    // },
    // {
    //     name: ["Leetcode", "Clone"],
    //     description: [
    //         "This is a full-stack clone of the popular website Leetcode!",
    //         "It features 20 questions that can be worked on in JavaScript or Golang.",
    //         "The project includes Authentication, Authorization, a Remote Code Execution Engine and Payment Integration with Stripe!"            
    //     ],
    //     technologies: ["React", "Java", "Spring", "MongoDB", "Redis", "Docker", "AWS", "Auth0", "Stripe", "NodeJS"],
    //     links: {
    //         github: "https://github.com/patricktrp/leetcode-clone",
    //         hosted: "https://leetcode.treppmann.dev"
    //     },
    //     img: {
    //         light: Leetcode,
    //         dark: Leetcode
    //     }
    // }
]

const Projects = (props) => {
    return (
        <section className={styles["projects"]} id="projects">

            <div className={styles["projects-inner-layout"]}>
                <h1 className={styles["section-heading"]}>Projects</h1>

                {PROJECTS.map((project, idx) => {
                    return (
                        <Fade left={idx % 2 === 0} right={idx % 2 === 1} distance="30%">
                            <div className={styles["projects-card"]}>
                                <div>

                                    <h1>{project.name[0]} <span className={styles["project-heading-highlight"]}>{project.name[1]}</span></h1>
                                    {project.description.map(desc => <p>{desc}</p>)}

                                    <img alt="" src={props.isDarkMode ? project.img.dark : project.img.light} className={styles["project-demo-img"]} />
                                    <div className={styles["project-links"]}>
                                        <ul>
                                            <li><a target="_blank" rel="noreferrer" href={project.links.github}><FaGithub size="1.8em" title="view source code" /></a></li>
                                            <li><a target="_blank" rel="noreferrer" href={project.links.hosted}><HiOutlineExternalLink size="1.8em" title="view live demo" /></a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <div className={styles["project-tech"]} >
                                    <p>{project.technologies.join(", ")}</p>
                                    <ul>
                                        {project.technologies.map(tech => <li><TechIcon tech={tech}/></li>)}
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    )
                })}
            </div>
        </section>
    );
}

export default Projects;