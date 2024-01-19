import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

import Education from "../components/Resume/Education";
import Courses from "../components/Resume/Courses";
import Experience from "../components/Resume/Experience";
import Skills from "../components/Resume/Skills";
import References from "../components/Resume/References";

import degrees from "../data/resume/degrees";
import work from "../data/resume/work";
import courses from "../data/resume/courses";
import { skills, categories } from "../data/resume/skills";
import { skillsTable } from "../data/resume/skillsTable";

const sections = {
  Certifications: () => <Courses data={courses} />,
  Experience: () => <Experience data={work} />,
  Skills: () => (
    <Skills skills={skills} categories={categories} skillsTable={skillsTable} />
  ),
  Education: () => <Education data={degrees} />,
  References: () => <References />,
};

const Resume = () => (
  <Main title="Resume" description="Chandra Shekar's Resume">
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2>
            <Link to="resume">Resume</Link>
          </h2>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Resume;
