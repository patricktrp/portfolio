import { Fade } from '@successtar/react-reveal';
import { FaAws, FaGithub, FaJava, FaReact } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { SiCss3, SiHtml5, SiSpring } from 'react-icons/si';
import Chess from '../assets/chess.patricktreppmann.com_.png';
import Sorting from '../assets/sorting-visualizer.patricktreppmann.com_.png';
import styles from './Projects.module.css';

const ICON_SIZE = "1.8em";

const ICON_MAPPING = {
    Java: <FaJava size={ICON_SIZE}/>,
    Spring: <SiSpring size={ICON_SIZE}/>, 
    React: <FaReact size={ICON_SIZE}/>,
    AWS: <FaAws size={ICON_SIZE}/>,
    HTML: <SiHtml5 size={ICON_SIZE}/>,
    CSS: <SiCss3 size={ICON_SIZE}/>
}

const PROJECTS = [
    {
        name: ["Online", "Chess"], 
        description: "This is an online chess app where you can choose to play against your friend or you can try to beat my Artifical Intelligence!",
        technologies: ["Java", "Spring", "React", "AWS"],
        links: {
            github: "https://github.com/patricktrp/chess",
            hosted: "https://chess.treppmann.dev"
        },
        img: Chess
    },
    {
        name: ["Sorting", "Visualizer"], 
        description: "This web application visualizes several sorting algorithms and how they operate on the data. Go and try it yourself!",
        technologies: ["React", "HTML", "CSS"],
        links: {
            github: "https://github.com/patricktrp/sorting-visualizer",
            hosted: "https://sorting-visualizer.treppmann.dev"
        },
        img: Sorting
    }
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
                                <p>{project.description}</p>
        
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