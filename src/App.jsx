import { Routes, Route } from "react-router-dom";

import Page1 from "./pages/page1/Page1"
import Page2 from "./pages/page2/Page2"
import Page3 from "./pages/page3/Page3"

function App() {
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
          path = "/1"
          element = {
            <Page2/>
          }
        />
        <Route
          path = "/2"
          element = {
            <Page3/>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
