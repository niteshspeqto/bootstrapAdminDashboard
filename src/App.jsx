import { useState } from "react";
import "./App.css";
import Header from "./components/common/header/Header.jsx";
import Sidebars from "./components/common/sidebar/Sidebars.jsx";
import Content from "./components/pages/Content.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="main-container">
      <div className="sidebar-container">
        <Sidebars />
      </div>
      <div className="app-container">
        <Header inputText={inputText} setInputText={setInputText} />
        <Content inputText={inputText} />
      </div>
    </div>
  );
}
