import React, { useEffect, useState } from "react";

const Photos = () => {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    (() => {
      fetch("https://jsonplaceholder.typicode.com/photos/1")
        .then((response) => response.json())
        .then((json) => setPhotos(json));
    })();
  }, []);

  return (
    <div className="foto">
      {photos && <img alt="suspense" src={photos.url} />}
    </div>
  );
};

export default Photos;
