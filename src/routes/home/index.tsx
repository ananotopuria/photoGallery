import React, { useEffect, useState } from "react";
import { getPhotos } from "../../api/photos";
import { ImageData } from "../../api/model";
import "./index.scss";

const Home = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [inputKeyword, setInputKeyword] = useState("");
  const [photos, setPhotos] = useState<ImageData[]>([]);

  const SearchKeyword = (keyword: string) => {
        if (keyword === "") {
          return;
        }
        // Get photos from local storage by input keyword key
        const localData = localStorage.getItem(keyword);
        console.log("🚀 ~ useEffect ~ localData:", localData);
        if (localData) {
          setPhotos(JSON.parse(localData));
          return;
        }
        getPhotos(keyword, true).then((res) => {
          setPhotos(res.results);
          // Save it to local storage by input keyword key
          localStorage.setItem(keyword, JSON.stringify(res.results));
        });
  };

  // useEffect(() => {

  // }, [searchKeyword]);

  return (
    <div className="home">
      <div className="search">
        <h1>Home</h1>
        <p>Welcome to the photo gallery</p>
        <input
          type="text"
          placeholder="Search for photos..."
          value={inputKeyword}
          onChange={(e) => setInputKeyword(e.target.value)}
        />
        <button onClick={() => SearchKeyword(inputKeyword)}>Search</button>
      </div>
      <div className="photos">
        {photos.map((photo) => (
          <img
            className="photo"
            key={photo.id}
            src={photo.urls.self}
            alt={photo.alt_description}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
