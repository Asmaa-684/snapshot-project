import React, { useContext, useEffect } from "react";
import { PhotoContext } from "../context/PhotoContext";
import Gallery from "./Gallery";


const Container = ({ searchTerm }) => {
  const { images, loading, runSearch } = useContext(PhotoContext);
  useEffect(() => {
    runSearch(searchTerm);
   
  }, [searchTerm]);

  return (
    <div className="photo-container">
       <Gallery data={images} />
    
    </div>
  );
};

export default Container;