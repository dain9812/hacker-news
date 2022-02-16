import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Show from "./pages/Show";
import Ask from "./pages/Ask";
import Jobs from "./pages/Jobs";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Nav from "./components/Nav";

export default function App() {
  return (
    <BrowserRouter>
      <div class="wrap">
        <div>
          <Nav />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/:id" element={<Main />} />
            <Route path="/show" element={<Show />} />
            <Route path="/ask" element={<Ask />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
