import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <section className="about max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">About Me</h1>
        <p className="mt-2 text-lg text-gray-500">Front-End Developer</p>
      </div>

      <p className="text-base text-gray-700 mb-6">
        Hi, I'm Mohamed Siddiq, a passionate Front-End Developer with a
        background in Electronics and Communication Engineering. I have always
        been fascinated by technology and its ability to transform ideas into
        reality, which led me to pursue a career in web development.
      </p>

      <p className="text-base text-gray-700 mb-6">
        After completing my engineering degree, I decided to dive deeper into
        the world of web development. I honed my skills through a comprehensive
        Front-End Development course at Access, where I mastered technologies
        like HTML, CSS, JavaScript, React JS, and Tailwind CSS. These tools
        allow me to craft beautiful, responsive, and interactive websites that
        provide exceptional user experiences.
      </p>

      <p className="text-base text-gray-700 mb-6">
        My journey as a developer is fueled by a desire to continuously learn
        and grow. I'm always exploring new technologies and best practices to
        stay ahead of the curve in front-end development. Whether it's building
        dynamic user interfaces with React or creating stunning layouts with
        Tailwind CSS, I aim to create seamless web experiences that delight
        users.
      </p>

      <p className="text-base text-gray-700 mb-6">
        Outside of coding, I enjoy exploring the latest trends in technology,
        and I am constantly seeking opportunities to work on innovative projects
        that challenge me and push my limits.
      </p>

      <p className="text-base text-gray-700 mb-6">
        I'm currently based in Kolar, and I'm always open to new opportunities
        and collaborations. If you’re looking for a dedicated and passionate
        developer, feel free to reach out!
      </p>

      <div className="social-links flex justify-center gap-6 mt-8">
        <a
          href="https://github.com/MohamedSiddiq"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-700 hover:text-gray-900 transition duration-300"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/mohamed-siddiq-139109206/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-gray-900 transition duration-300"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
    </section>
  );
}

export default About;
