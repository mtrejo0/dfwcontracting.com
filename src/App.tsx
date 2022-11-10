import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import RandomNumbers from "./components/RandomNumbers";
import WordFrequency from "./components/WordFrequency";
import Blog from "./containers/blog";
import Contact from "./containers/contact";
import Home from "./containers/home";
import Porfolio from "./containers/portfolio";
import Press from "./containers/press";
import Resume from "./containers/resume";
import ResumePlusPlus from "./containers/resume++";

import p5jsProjects from "./information/p5jsProjects.json";

import links from "./information/links.json";

import "./styles.css";
import ErrorPage from "./containers/errorPage";

const GoTo = ({ link }: { link: string }) => {
  window.location.href = link;
  return <>Loading ...</>;
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/resume" element={<Resume />} />
          <Route path="/resume++" element={<ResumePlusPlus />} />
          <Route path="/portfolio" element={<Porfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/press" element={<Press />} />
          {links.map((link) =>
            link.ids.map((id) => {
              return (
                <Route path={`/${id}`} element={<GoTo link={link.link} />} />
              );
            })
          )}
          {p5jsProjects.map((webapp) => {
            return (
              <Route
                path={`/${webapp.id}`}
                element={
                  <GoTo
                    link={`https://moisesp5js.s3.us-east-2.amazonaws.com/${webapp.id}/index.html`}
                  />
                }
              />
            );
          })}
          {p5jsProjects.map((webapp) => {
            return (
              <Route
                path={`/${webapp.id}`}
                element={
                  <GoTo
                    link={`https://moisesp5js.s3.us-east-2.amazonaws.com/${webapp.id}/index.html`}
                  />
                }
              />
            );
          })}
          <Route path="/randomNumbers" element={<RandomNumbers />} />
          <Route path="/wordFrequency" element={<WordFrequency />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;