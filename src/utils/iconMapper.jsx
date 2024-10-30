import {
  FaReact,
  FaNode,
  FaGithub,
  FaGitAlt,
  FaFigma,
  FaCss3,
} from "react-icons/fa";
import { TbBrandSupabase, TbBrandVite } from "react-icons/tb";
import {
  SiStyledcomponents,
  SiNetlify,
  SiExpress,
  SiFramer,
} from "react-icons/si";

export const getTechnologyIcon = (tech, theme) => {
  const iconProps = { color: theme.palette.secondary.main, size: 24 };
  switch (tech) {
    case "React":
      return <FaReact {...iconProps} />;
    case "Node.js":
      return <FaNode {...iconProps} />;
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
    case "Css3":
      return <FaCss3 {...iconProps} />;
    case "Framer Motion":
      return <SiFramer {...iconProps} />;
    default:
      return null;
  }
};
