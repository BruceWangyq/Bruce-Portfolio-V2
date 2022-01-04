import Head from "next/head";
import { motion } from "framer-motion";
import { Toolbar } from "@material-ui/core";
import Projects from "components/Projects";
import ProjectsTitle from "components/Projects/ProjectsTitle";
import BackHomeButton from "components/Projects/BackHomeButton";

import allProjects, { ProjectType } from "lib/projects";

const projects: ProjectType[] = [
  allProjects.MatrixDAO,
  allProjects.disneyClone,
  allProjects.tripAdvisor,
  allProjects.ecommerceDashboard,
  allProjects.thisWebsite,
];

function projectsPage() {
  return (
    <>
      <Head>
        <title>Bruce Wang - Projects</title>
        <meta
          name="description"
          content="Come check out projects made by Bruce Wang."
          key="description"
        />
        <meta
          property="og:description"
          content="Come check out projects made by Bruce Wang."
          key="og-description"
        />
        <meta
          property="twitter:description"
          content="Come check out projects made by Bruce Wang."
          key="twitter-description"
        />
      </Head>
      <motion.div
        key="projects"
        initial={{ opacity: 0, x: +1000 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 1, x: +1000 }}
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
      >
        <Toolbar />
        <ProjectsTitle text="Projects I Have Worked On" />
        <Projects projects={projects} />
        <BackHomeButton />
      </motion.div>
    </>
  );
}

export default projectsPage;
