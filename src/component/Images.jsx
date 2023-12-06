import axios from "axios";
import React, { useState } from "react";

function Images() {
  const [selectedImage, setSelectedImage] = useState("");
  const data = new FormData();   //we use FormDAta to convert img

  function uploadHandel() {
    data.append("image", selectedImage);
    axios
      .post(
        `https://eu.backendlessappcontent.com/${process.env.REACT_APP_BACKENDLESS_ID}/${process.env.REACT_APP_BACKENDLESS_KEY}/files/myImages`,
        data
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <input
        type="file"
        onChange={(e) => setSelectedImage(e.target.files[0])}
      ></input>
      <button onClick={uploadHandel}> upload</button>
    </div>
  );
}

export default Images;
