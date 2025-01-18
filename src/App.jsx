import About from "./ui/About";

import Banner from "./ui/Banner";
import Contact from "./ui/Contact";
import Experience from "./ui/Experience";
import Stack from "./ui/Stack";
import Header from "./ui/Header";
import LeftSide from "./ui/LeftSide";
import Project from "./ui/Project";
import Education from "./ui/Education";
import RightSide from "./ui/RightSide";
import ScrollBtn from "./ui/ScrollBtn";
import { motion } from "framer-motion";
import Project1vid from "./pages/Project1vid";
import Project2vid from "./pages/Project2vid";
import Project3vid from "./pages/Project3vid";
import Project4vid from "./pages/Project4vid";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="font-bodyFont min-h-screen bg-primaryColor text-lightText">
      {/* The header is always shown in every page */}
      <Header />

      {/* Routes */}
      <Routes>
        {/* Home page route */}
        <Route
          path="/"
          element={
            <>
              <Banner />
              <About />
              <Stack />
              <Experience />
              <Education />
              <Project />
              {/* <Archive /> */}
              <Contact />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="hidden lg:inline-flex w-32 h-full fixed left-0 bottom-0"
              >
                <LeftSide />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="hidden lg:inline-flex w-32 h-full fixed right-0 bottom-0"
              >
                <RightSide />
              </motion.div>
              <ScrollBtn />
            </>
          }
        />

        {/* Project1vid page route */}
        <Route path="/project1vid" element={<Project1vid />} />
        <Route path="/project2vid" element={<Project2vid />} />
        <Route path="/project3vid" element={<Project3vid />} />
        <Route path="/project4vid" element={<Project4vid />} />
      </Routes>
    </main>
  );
}

export default App;
