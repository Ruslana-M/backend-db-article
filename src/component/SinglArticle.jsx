import Backendless from 'backendless';
import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'


function SinglArticle({selectedArticle}) {
    console.log(selectedArticle);
    Backendless.Data.of( "article").find({
relations:["CommentsID"] }  // build relation between post and comments
    )
 .then( res=>{console.log(res);
  })
 .catch( err => {console.log(err);
  });

  // I need to add a new comment from APP to Data base in BEL.
  //1. i will create this object const comments  + create a button onClick with function addCommentsHandle.
  //2.  I will save it to Table BE save
  //3. I will build relation:  .addRelation from parent to child
  function addCommentsHandle(){
    const comment={
        author_name: "Abhi",
        content: "my new comment is from Abhi.please have a look"
    }
    //save new comment
    Backendless.Data.of("comments")
    .save(comment)
    .then((res)=> { // add second BE-.addRelation with var -to add the relation to article table - parent
    var parentObject = { objectId: selectedArticle.objectId};
    var childrenObject= {objectId: res.objectId};
    console.log(res.objectId);

    Backendless.Data.of( "article" ).addRelation( parentObject, "commentsID",  [childrenObject] )
  .then( result => {
    console.log( result)
  })
  .catch( error => {
    console.log( error)
  });

  // create relation  inside comments table
  Backendless.Data.of( "comments" ).addRelation( childrenObject, "PostID",  [parentObject] )
  .then( result => {
    console.log( result)
  })
  .catch( error => {
    console.log( error)
  });

////
    }).catch( error => {
    console.log( error)
  });
  }

  return (
    <div>Single Article
        <button onClick={addCommentsHandle}>add comment</button>
    </div>
  )
}

export default SinglArticle