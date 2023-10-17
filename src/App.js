import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import Categories from "./pages/Categories";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Categories category="general" />} />
          {/* <Route path="/general" element={<Categories category="general" />} /> */}
          <Route
            path="/business"
            element={<Categories category="business" />}
          />
          <Route
            path="/entertainment"
            element={<Categories category="entertainment" />}
          />
          <Route path="/health" element={<Categories category="health" />} />
          <Route path="/science" element={<Categories category="science" />} />
          <Route path="/Sport" element={<Categories category="Sports" />} />
          <Route
            path="/technology"
            element={<Categories category="technology" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
