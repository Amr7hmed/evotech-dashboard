import "./scss/main.scss";
import { HashRouter, Route, Routes } from "react-router-dom";
import StaticContentHolder from "./layout/contentholder/StaticContentHolder.jsx";
import Login from "./pages/login/index.jsx";
import Navbartop from "./layout/navbar/top";
import NavbarList from "./layout/navbar/list";
import Analysis from "./pages/analysis";
import StaticNavbar from "./pages/staticcontent/navbar";

function App() {
  return (
    <>
      <HashRouter basename="/">
        <StaticContentHolder>
          <Navbartop/>
          <NavbarList/>
          <Routes>
            <Route path="/" element={<Analysis />} />
            <Route path="/login" element={<Login />} />
            <Route path="/navbar" element={<StaticNavbar />} />


          </Routes>

        </StaticContentHolder>
      </HashRouter>
    </>
  );
}

export default App;


/*
<MainNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/boardOfDirectors" element={<BoardOfDirectors />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

*/