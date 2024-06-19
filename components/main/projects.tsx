"use client";

import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/lib/motion";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>

      <motion.a
        variants={slideInFromLeft(1)}
        href="https://pabitrabanerjee.me/All-My-Projects/" // Add the URL here
        target="_blank" // Open the link in a new tab
        rel="noopener noreferrer" // Security measure to prevent the new page from accessing the window object
        className="py-2 px-6 mt-10 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]" // Added px-6 for horizontal padding and mt-10 for margin-top
      >
        See All Projects
      </motion.a>
    </section>
  );
};