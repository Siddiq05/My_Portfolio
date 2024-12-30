import React, { useEffect, useState } from "react";
import ProfileImg from "../assets/Profile-img.png";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

const Home = () => {
  const titles = ["Front End Developer", "Web Developer"];
  const [currentTitle, setCurrentTitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0); // To loop through the titles

  useEffect(() => {
    const handleTyping = () => {
      const fullTitle = titles[loopIndex % titles.length];
      // const fullTitle = titles[loopIndex >= titles.length ? 0 : loopIndex];

      if (!isDeleting) {
        // Typing
        setCurrentTitle(fullTitle.slice(0, currentTitle.length + 1));
        if (currentTitle === fullTitle) {
          setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        }
      } else {
        // Deleting
        setCurrentTitle(fullTitle.slice(0, currentTitle.length - 1));
        if (currentTitle === "") {
          setIsDeleting(false);
          setLoopIndex((prev) => prev + 1); // Move to the next title
        }
      }
    };

    const timer = setTimeout(handleTyping, 250);

    return () => clearTimeout(timer); // Cleanup timeout
  }, [currentTitle, isDeleting, loopIndex]);

  return (
    <div className="lg:flex lg:w-full lg:justify-around lg:items-center ">
      <img
        src={ProfileImg}
        alt=""
        className="mx-auto w-[50%] rounded-[50%] my-5 md:w-[35%] lg:w-[23%] "
      />
      <div className="px-10 py-6 md:px-16 md:py-10 lg:w-[60%]">
        <h1 className="text-4xl py-3 md:text-5xl md:my-5">
          Hey, <br /> I'm <b>Mohamed Siddiq</b>
        </h1>
        <h3 className="text-2xl md:text-3xl md:my-5">
          A creative{" "}
          <b className="text-orange-900">
            {currentTitle}
            <span className="blinking-cursor">|</span>
          </b>{" "}
          crafting intuitive and dynamic interfaces using{" "}
          <b>React, Tailwind CSS, and JavaScript </b>.
        </h3>
        <div className="flex my-8  justify-between text-4xl w-[50%] md:text-5xl md:my-10 md:w-[35%]">
          <a
            href="https://github.com/Siddiq05"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-red-700"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-siddiq-139109206/"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-blue-700"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="/path-to-your-resume.pdf" // Replace with the actual path to your resume file
            download
            className="hover:orange-gray-700"
            title="Download Resume"
          >
            <FaDownload />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
