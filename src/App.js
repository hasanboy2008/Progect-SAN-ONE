import React, { useEffect } from "react";
import { Main } from "./components/Main/Main";
import loading2 from "./asest/Gif/loading2.gif";
import { useSelector } from "react-redux";

function App() {
  const loading = useSelector((state) => state.reLoading);
  const user = useSelector((state) => state.reUser);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

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
