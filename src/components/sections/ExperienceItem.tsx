"use client";

import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";

interface ExperienceItemProps {
  company: string;
  role: string;
  period: string;
  description: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  company,
  role,
  period,
  description,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 ml-8 relative"
    >
      <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-foreground" />
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
        <div>
          <h3 className="text-xl font-bold">{role}</h3>
          <div className="flex items-center text-muted-foreground mt-1 gap-2">
            <Building2 className="h-4 w-4" />
            <span className="font-medium text-foreground/80">{company}</span>
          </div>
        </div>
        <div className="flex items-center text-muted-foreground text-sm gap-1">
          <Calendar className="h-4 w-4" />
          {period}
        </div>
      </div>
      <ul className="flex flex-col gap-3 mt-4">
        {description.map((desc, i) => (
          <li key={i} className="flex items-start text-muted-foreground">
            <span className="mr-3 mt-2 block h-1 w-1 shrink-0 rounded-full bg-foreground/30" />
            <span className="leading-relaxed">{desc}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExperienceItem;
