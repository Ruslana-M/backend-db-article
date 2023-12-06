import Backendless from 'backendless';
import React, { useEffect, useState } from 'react'

function Article() {
const [articles, setArticles] =useState ([])
  useEffect(() => {
    Backendless.Data.of( "articles" ).find()
 .then( res=>{console.log(res)
  setArticles(res)
  })
 .catch( err =>{console.log(err)
  });
  }, [])

  


  return (
    <div>Article</div>
  )
}

export default Article