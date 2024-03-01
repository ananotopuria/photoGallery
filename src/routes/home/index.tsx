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
    // <div className="home">
    //   <div className="search">
    //     <h1 className="search-title">Home</h1>
    //     <p className="search-description">Welcome to the photo gallery</p>
    //     <input
    //       type="text"
    //       className="search-input"
    //       placeholder="Search for photos..."
    //       value={inputKeyword}
    //       onChange={(e) => setInputKeyword(e.target.value)}
    //     />
    //     <button className="search-button" onClick={() => SearchKeyword(inputKeyword)}>Search</button>
    //   </div>
    //   <div className="photos">
    //     {photos.map((photo) => (
    //       <img
    //         className="photo"
    //         key={photo.id}
    //         src={photo.urls.self}
    //         alt={photo.alt_description}
    //       />
    //     ))}
    //   </div>
    // </div>
    <div className="home">
      <div className="search">
        <h1 className="search-title">Photo Gallery</h1>
        <p className="search-description">Welcome to the photo gallery</p>
        <input
          type="text"
          className="search-input"
          placeholder="Search for photos..."
          value={inputKeyword}
          onChange={(e) => setInputKeyword(e.target.value)}
        />
        <button
          className="search-button"
          onClick={() => SearchKeyword(inputKeyword)}
        >
          Search
        </button>
      </div>
      <div className="gallery">
        {photos.map((photo) => (
          <figure className="gallery-item" key={photo.id}>
            <img
              className="photo"
              src={photo.urls.self}
              alt={photo.alt_description}
            />
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Home;
