import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./mainComponent/Home";
import Blog from "./mainComponent/Blog";
import MainLink from "./AllNavLink/AppLink/MainLink";
import GeneralTheam from "./blogComponent/General Theme/GeneralTheam";
import Tech from "./blogComponent/TECH/Programming/Tech";
import Travel from "./blogComponent/Travel/Travel";
import Lifestyle from "./blogComponent/Lifestyle/Lifestyle";
import PersonalDevelopment from "./blogComponent/PersonalDevelopment/PersonalDevelopment";
import CreativeWriting from "./blogComponent/Creative Writing/CreativeWriting";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <MainLink />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/general_theme" element={<GeneralTheam />} />
          <Route path="/blog/tech_&_Program" element={<Tech />} />
          <Route path="/blog/travel" element={<Travel />} />
          <Route path="/blog/lifestyle" element={<Lifestyle />} />
          <Route
            path="/blog/personal_Development"
            element={<PersonalDevelopment />}
          />
          <Route path="/blog/creative_Writing" element={<CreativeWriting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
