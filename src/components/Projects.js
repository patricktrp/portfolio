import { Fade } from '@successtar/react-reveal';
import { FaAws, FaGithub, FaJava, FaReact } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { SiApachecassandra, SiAuth0, SiCss3, SiDocker, SiHtml5, SiJavascript, SiMongodb, SiPostgresql, SiRedis, SiSpring } from 'react-icons/si';
import { TbBrandGolang } from 'react-icons/tb';
// import Chess from '../assets/chess.patricktreppmann.com_.png';
// import Leetcode from '../assets/leetcode-clone.png';
import SavDark from '../assets/sav_dark.png';
import SavLight from '../assets/sav_light.png';
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
    Redis: <SiRedis size={ICON_SIZE} />,
    PostgreSQL: <SiPostgresql size={ICON_SIZE} />,
    Cassandra: <SiApachecassandra size={ICON_SIZE} />,
    MongoDB: <SiMongodb size={ICON_SIZE} />,
    Go: <TbBrandGolang size={ICON_SIZE} />
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
    //     img: Chess
    // },
    // {
    //     name: ["Leetcode", "Clone"],
    //     description: [
    //         "This is a full-stack clone of the popular website Leetcode!",
    //         "It includes Authentication, Authorization and a Remote Code Execution Engine!"
    //     ],
    //     technologies: ["React", "Java", "Spring", "MongoDB", "Redis", "Docker", "AWS", "Auth0"],
    //     links: {
    //         github: "https://github.com/patricktrp/leetcode-clone",
    //         hosted: "https://leetcode.treppmann.dev"
    //     },
    //     img: Leetcode
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
                                        {project.technologies.map(tech => <li>{ICON_MAPPING[tech]}</li>)}
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