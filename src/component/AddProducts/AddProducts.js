import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
const AddProducts = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "335045a2e20dfb20b2e75072ff553f1f");
    imageData.append("image", event.target.files[0]);
    axios.post("https://api.imgbb.com/1/upload", 
    imageData)
      .then(function (response) {
        console.log(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <h1>Add your awesome Event here</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="example" defaultValue="test" ref={register} />
        <br />
        <input
          name="exampleRequired"
          type="file"
          onChange={handleImageUpload}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddProducts;
