import { Fade } from '@successtar/react-reveal';
import { FaAws, FaGithub, FaJava, FaReact } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { SiCss3, SiHtml5, SiSpring, SiJavascript, SiAuth0, SiDocker } from 'react-icons/si';
// import Chess from '../assets/chess.patricktreppmann.com_.png';
// import Leetcode from '../assets/leetcode-clone.png';
import Sorting from '../assets/sorting-visualizer.patricktreppmann.com_.png';
import styles from './Projects.module.css';

const ICON_SIZE = "1.8em";

const ICON_MAPPING = {
    Java: <FaJava size={ICON_SIZE} />,
    Spring: <SiSpring size={ICON_SIZE} />,
    React: <FaReact size={ICON_SIZE} />,
    AWS: <FaAws size={ICON_SIZE} />,
    HTML: <SiHtml5 size={ICON_SIZE} />,
    CSS: <SiCss3 size={ICON_SIZE} />,
    JavaScript: <SiJavascript size={ICON_SIZE} />,
    Auth0: <SiAuth0 size={ICON_SIZE} />,
    Docker: <SiDocker size={ICON_SIZE} />,
}

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
        img: Sorting
    },
    // {
    //     name: ["Online", "Chess"],
    //     description: ["This is an online chess app where you can choose to play against your friend or you can try to beat my Artifical Intelligence!"],
    //     technologies: ["Java", "Spring", "React", "AWS"],
    //     links: {
    //         github: "https://github.com/patricktrp/chess",
    //         hosted: "https://chess.treppmann.dev"
    //     },
    //     img: Chess
    // },
    // {
    //     name: ["Leetcode", "Clone"],
    //     description: [
    //         "This is a full-stack clone of the popular website Leetcode!",
    //         "It includes Authentication, Authorization and a Remote Code Execution Engine!"
    //     ],
    //     technologies: ["React", "Java", "Spring", "Docker", "AWS", "Auth0"],
    //     links: {
    //         github: "https://github.com/patricktrp/leetcode-clone",
    //         hosted: "https://leetcode.treppmann.dev"
    //     },
    //     img: Leetcode
    // }
]

const Projects = () => {
    return (
        <section className={styles["projects"]} id="projects">

            <div className={styles["projects-inner-layout"]}>
                <h1 className={styles["section-heading"]}>Projects</h1>

                {PROJECTS.map((project, idx) => {
                    return (
                        <Fade left={idx % 2 === 0} right={idx % 2 === 1} distance="30%">
                            <div className={styles["projects-card"]}>
                                <h1>{project.name[0]} <span className={styles["project-heading-highlight"]}>{project.name[1]}</span></h1>
                                {project.description.map(desc => <p>{desc}</p>)}

                                <img alt="" src={project.img} className={styles["project-demo-img"]} />
                                <div className={styles["project-links"]}>
                                    <ul>
                                        <li><a target="_blank" rel="noreferrer" href={project.links.github}><FaGithub size="1.8em" title="view source code" /></a></li>
                                        <li><a target="_blank" rel="noreferrer" href={project.links.hosted}><HiOutlineExternalLink size="1.8em" title="view live demo" /></a></li>
                                    </ul>
                                </div>

                                <div className={styles["project-tech"]}>
                                    <p>{project.technologies.join(", ")}</p>
                                    <ul>
                                        {project.technologies.map(tech => <li>{ICON_MAPPING[tech]}</li>)}
                                    </ul>
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