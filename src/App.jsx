import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="App">
        <Sidebar />
        <h1>あ</h1>
        <Main />
      </div>
    </>
  );
}

export default App;
