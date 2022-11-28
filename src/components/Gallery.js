import React from "react";
import Image from "./Image";
const Gallery = props => {
  const results = props.data;
  let images;
  if (results.length > 0) {
    images = results.map(image => {
      let farm = image.farm;
      let server = image.server;
      let id = image.id;
      let secret = image.secret;
      let title = image.title;
      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      return <Image url={url} key={id} alt={title} />;
    });
  } else {
    <h2>No Images Found</h2>
  }
  return (
    <div>
      <ul>{images}</ul>
    </div>
  );
};

export default Gallery;