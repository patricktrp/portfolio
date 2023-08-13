import { FaAws, FaJava, FaNodeJs, FaReact, FaStripe } from "react-icons/fa";
import { SiApachecassandra, SiAuth0, SiCss3, SiDocker, SiFlask, SiHtml5, SiJavascript, SiMongodb, SiOpenai, SiPostgresql, SiPython, SiRedis, SiSpring } from "react-icons/si";
import { TbBrandGolang } from 'react-icons/tb';

const ICON_SIZE = "1.8em";

const TechIcon = (props) => {
    const size = props.size || ICON_SIZE;

    const ICON_MAPPING = {
        java: <FaJava size={size} />,
        spring: <SiSpring size={size} />,
        react: <FaReact size={size} />,
        aws: <FaAws size={size} />,
        html: <SiHtml5 size={size} />,
        css: <SiCss3 size={size} />,
        javascript: <SiJavascript size={size} />,
        auth0: <SiAuth0 size={size} />,
        docker: <SiDocker size={size} />,
        redis: <SiRedis size={size} />,
        postgres: <SiPostgresql size={size} />,
        cassandra: <SiApachecassandra size={size} />,
        mongodb: <SiMongodb size={size} />,
        go: <TbBrandGolang size={size} />,
        stripe: <FaStripe size={size}/>,
        nodejs: <FaNodeJs size={size} />,
        openai: <SiOpenai size={size} />,
        python: <SiPython size={size} />,
        flask: <SiFlask size={size} />
    }

    return (
        <>{ICON_MAPPING[props.tech.toLowerCase()]}</>
    );
}

export default TechIcon;