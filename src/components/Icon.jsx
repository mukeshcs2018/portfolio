import {
  Layout,
  Server,
  Database,
  Wrench,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  Filter,
} from "lucide-react";

const iconMap = {
  Layout,
  Server,
  Database,
  Wrench,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  Filter,
};

const Icon = ({ name, ...props }) => {
  const LucideIcon = iconMap[name] || Sparkles;
  return <LucideIcon {...props} />;
};

export default Icon;


