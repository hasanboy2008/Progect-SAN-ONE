import React from "react";
import { Main } from "./components/Main/Main";
import loading2 from "./asest/Gif/loading2.gif";
import { useSelector } from "react-redux";

function App() {
  const loading = useSelector((state) => state.reLoading);

  return (
    <div id="app">
      <Main />
      <div id="loading-contener" style={loading ? { display: "flex" } : {}}>
        <figure>
          <img src={loading2} alt="" />
        </figure>
      </div>
    </div>
  );
}

export default App;
