"use client";

import { motion } from "framer-motion";

interface ExpertiseItemProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  index: number;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const ExpertiseItem: React.FC<ExpertiseItemProps> = ({ title, icon, skills, index }) => {
  return (
    <motion.div
      custom={index}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="group relative flex flex-col rounded-2xl border border-border bg-background p-6 shadow-sm transition-all hover:shadow-md hover:border-foreground/20"
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
        {icon}
      </div>
      <h3 className="mb-4 text-xl font-semibold tracking-tight">{title}</h3>
      <ul className="flex flex-col gap-2">
        {skills.map((skill) => (
          <li key={skill} className="flex items-start text-muted-foreground text-sm">
            <span className="mr-2 mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExpertiseItem;
