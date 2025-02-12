import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="mt-[10vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

// import "./App.css";
// import Header from "./Components/Header";
// import Home from "./Components/Home";
// import About from "./Components/About";
// import Contact from "./Components/Contact";
// import Projects from "./Components/Projects";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: (
//         <>
//           <Header /> <Home />
//         </>
//       ),
//     },
//     {
//       path: "/about",
//       element: (
//         <>
//           <Header /> <About />
//         </>
//       ),
//     },
//     {
//       path: "/contact",
//       element: (
//         <>
//           <Header /> <Contact />
//         </>
//       ),
//     },
//     {
//       path: "/projects",
//       element: (
//         <>
//           <Header /> <Projects />
//         </>
//       ),
//     },
//   ]);
//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// }

// export default App;
