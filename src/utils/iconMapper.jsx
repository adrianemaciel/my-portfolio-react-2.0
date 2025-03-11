import {
  FaReact,
  FaGithub,
  FaGitAlt,
  FaFigma,
  FaCss3,
  FaHtml5,
} from "react-icons/fa";
import { TbBrandSupabase, TbBrandVite } from "react-icons/tb";
import {
  SiStyledcomponents,
  SiNetlify,
  SiExpress,
  SiFramer,
  SiMui,
  SiPostman,
  SiTypescript,
} from "react-icons/si";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { TbBrandMysql } from "react-icons/tb";

export const getTechnologyIcon = (tech, theme) => {
  const iconProps = { color: theme.palette.secondary.main, size: 24 };
  switch (tech) {
    case "React":
      return <FaReact {...iconProps} />;
    case "Node":
      return <IoLogoNodejs {...iconProps} />;
    case "GitHub":
      return <FaGithub {...iconProps} />;
    case "Supabase":
      return <TbBrandSupabase {...iconProps} />;
    case "Git":
      return <FaGitAlt {...iconProps} />;
    case "Vite":
      return <TbBrandVite {...iconProps} />;
    case "Figma":
      return <FaFigma {...iconProps} />;
    case "Styled Components":
      return <SiStyledcomponents {...iconProps} />;
    case "Netlify":
      return <SiNetlify {...iconProps} />;
    case "Express":
      return <SiExpress {...iconProps} />;
    case "CSS3":
      return <FaCss3 {...iconProps} />;
    case "Framer Motion":
      return <SiFramer {...iconProps} />;
    case "HTML5":
      return <FaHtml5 {...iconProps} />;
    case "JavaScript":
      return <IoLogoJavascript {...iconProps} />;
    case "Material UI":
      return <SiMui {...iconProps} />;
    case "TailwindCSS":
      return <RiTailwindCssFill {...iconProps} />;
    case "Postman":
      return <SiPostman {...iconProps} />;
    case "SQL":
      return <AiOutlineConsoleSql {...iconProps} />;
    case "MySQL":
      return <TbBrandMysql {...iconProps} />;
    case "TypeScript":
      return <SiTypescript {...iconProps} />;
    default:
      return null;
  }
};
