import Backendless from "backendless";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Article({ articles, setArticles, setSelectedArticle }) {
  const navigate=useNavigate()
  useEffect(() => {
    Backendless.Data.of("article")  //here is the name of your table
      .find()
      .then((res) => {
        console.log(res);
        setArticles(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function navigateHandle (param){ // store in App.jsx useState, navigate to singlArticle
    setSelectedArticle (param)
    navigate ("/singlArticle")
  }

  return <div>
    {articles && articles.map((articleOfArrayMap)=> {return<h1 onClick={ ()=> navigateHandle(articleOfArrayMap)}>{articleOfArrayMap.title} </h1>}) }
  </div>;
}

export default Article;
