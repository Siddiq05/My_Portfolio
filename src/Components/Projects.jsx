import React from "react";

function Projects() {
  const project = {
    title: "ARS Dental Clinic Website",
    description:
      "A modern, responsive website designed for ARS Dental Clinic. Features include an interactive image slider, appointment booking form, and user-friendly navigation for an enhanced patient experience.",
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
    link: "https://ars-dental-clinci-demo.netlify.app/",
  };

  return (
    <section className="projects min-h-screen py-12 bg-gray-100 flex justify-center items-center">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          My Project
        </h2>

        <div className="bg-white shadow-xl rounded-lg p-8 transition-transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="mb-4">
            <strong>Technologies Used:</strong>
            <ul className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech, index) => (
                <li
                  key={index}
                  className="bg-blue-100 text-blue-600 px-3 py-1 rounded-md text-sm"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg text-lg font-medium shadow-md hover:bg-blue-600"
          >
            View Live Project
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
