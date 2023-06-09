import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Page1 from "./pages/page1/Page1"
import Page2 from "./pages/page2/Page2"
import Page3 from "./pages/page3/Page3"

function App() {

  const stage = useSelector(state => state.user.stage);

  return (
    <div className="App">
      <Routes>
        <Route
          path = "/"
          element = {
            <Page1/>
          }
        />
        <Route
          path = "/p1"
          element = {
            <Page2/>
          }
        />
        <Route
          path = "/p2"
          element = {
            <Page3/>
          }
        />
        <Route
          path = "*"
          element = {
            <Page1/>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
