import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Contact from "./pages/Contact";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register/>}/>
        </Route>
      </Routes>
    </>
  );
}
export default App;
