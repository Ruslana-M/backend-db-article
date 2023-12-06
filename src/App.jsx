import Backendless from "backendless";
import "./App.css";
import Articles from "./component/Articles";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import SinglArticle from "./component/SinglArticle";
import Images from "./component/Images";

function App() {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] =useState ("")

  Backendless.serverURL = "https://eu-api.backendless.com";
  Backendless.initApp(
    process.env.REACT_APP_BACKENDLESS_ID,
    process.env.REACT_APP_BACKENDLESS_KEY
  );
  return (
    <div className="App">
      <Routes>
        <Route
          path="/articles"
          element={<Articles articles={articles} setArticles={setArticles} setSelectedArticle={setSelectedArticle} />}
        />
        <Route path="/singlArticle" element={<SinglArticle selectedArticle={selectedArticle} />} ></Route>
        <Route path="/image" element={<Images/>} ></Route>

      </Routes>
    </div>
  );
}

export default App;
