import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiMsqlServer,
  DiGit,
  DiReact,
  DiSass,
} from "react-icons/di";

import "../styles/components/tecnologiesContainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "sass", name: "Sass", icon: <DiSass /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "git", name: "Git", icon: <DiGit /> },
  { id: "sqlServer", name: "SqlServer", icon: <DiMsqlServer /> },
];

const TecnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TecnologiesContainer;
