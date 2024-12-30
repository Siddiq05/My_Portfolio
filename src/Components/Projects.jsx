import React from "react";

function Projects() {
  const jsProjects = [
    {
      title: "Form Validation",
      description:
        "A simple form validation project using plain JavaScript to validate user inputs and display appropriate error messages.",
      link: "https://form-validation-js-01.netlify.app/",
    },
    {
      title: "QR Code Generator",
      description:
        "A QR code generator built with JavaScript that converts any text or URL into a QR code for easy sharing and scanning.",
      link: "https://qr-code-generator-js-01.netlify.app/",
    },
    {
      title: "Weather App",
      description:
        "A weather app that provides real-time weather updates using a weather API. It displays the current weather based on user inputted location.",
      link: "https://weather-app-js-01.netlify.app/",
    },
    {
      title: "Password Generator",
      description:
        "A password generator that creates secure passwords based on user-defined length and character types (uppercase, lowercase, numbers, symbols).",
      link: "https://password-generator-js-01.netlify.app/",
    },
    {
      title: "Calculator App",
      description:
        "A functional calculator app built with JavaScript that can perform basic arithmetic operations like addition, subtraction, multiplication, and division.",
      link: "https://calculator-js-assign.netlify.app/",
    },
    {
      title: "To-Do List",
      description:
        "A simple to-do list app where users can add, edit, and delete tasks. Built using JavaScript to manage and persist tasks in local storage.",
      link: "https://to-do-list-js-assignment.netlify.app/",
    },
    {
      title: "Analog Clock",
      description:
        "A real-time analog clock built with JavaScript that displays the current time using clock hands and updates every second.",
      link: "https://js-analog-clock-01.netlify.app/",
    },
    {
      title: "E-Commerce Product Page",
      description:
        "A product page for an e-commerce website that includes features like product details, image gallery, and 'add to cart' functionality.",
      link: "https://ecommerce-product-page-js-assignment.netlify.app/",
    },
  ];

  return (
    <section className="projects py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Java Script Projects
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {jsProjects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 w-full sm:w-1/2 lg:w-1/3"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>

        {/* React JS Projects Section */}
        <div className="text-center text-gray-800 mt-12">
          <h3 className="text-xl font-semibold mb-4">React JS Projects</h3>
          <p className="text-lg">Coming soon...</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
