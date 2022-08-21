import React, { useContext } from "react";
import Card from "../components/Card";
import Cardone from "../components/Card1";
import Card2 from "../components/Cart2";
import Cardthree from "../components/Cardthree";

import { ThemeContext } from "../themeProvider";
import "./card.css"
const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>

        <div
          className="mt-8 flex items-stretch flex-wrap items-center projectcard"
          style={{ width: "80%", margin: "auto" ,justifyContent:"space-between"}}
        >
          <Card />
          <Cardone />
          <Card2/>
          <Cardthree/>
        </div>
      </div>
    </div>
  );
};

export default Projects;
//  <h4 className="mt-16 text-3xl font-semibold text-blue-600">PROJECTS</h4>;
// line 30
// <svg
//   class="ml-2 -mr-1 w-4 h-4"
//   fill="currentColor"
//   viewBox="0 0 20 20"
//   xmlns="http://www.w3.org/2000/svg"
// >
//   <path
//     fill-rule="evenodd"
//     d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
//     clip-rule="evenodd"
//   ></path>
// </svg>;