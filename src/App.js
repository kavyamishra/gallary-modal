import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import volunteer from "./organising_trustee/volunteer.jpeg";
import volunteer2 from "./organising_trustee/volunteer2.jpeg";
import volunteer3 from "./organising_trustee/volunteer3.jpeg";
import volunteer4 from "./organising_trustee/volunteer4.jpeg";
import volunteer5 from "./organising_trustee/volunteer5.jpeg";
import volunteer6 from "./organising_trustee/volunteer6.jpeg";
import arrow_round from "./organising_trustee/arrow-round.png";
import decoration from "./organising_trustee/heading_decorator.png";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery_grid_area" className="section_padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="section_heading">
              <h3>Gallery</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-3 col-md-12 col-sm-12 col-12">
            <div className="section_heading" >
              <h2>
                Explore our
                <span className="color_big_heading">gallery</span> to know how we work
              </h2>
              <span>
                <img className="headingSpan" src={decoration} alt="decor" />
              </span>
            </div>
          </div>
        </div>
        <div className="row popup-gallery">
          <div className="col-lg-4 co-md-6 col-sm-12 col-12">
            <div className="gallery_item">
              <img src={volunteer} alt="img" />
              <div className="gallery_overlay">
                <img src={arrow_round} alt="icon" onClick={() => openImageModal(volunteer)} />
              </div>
            </div>
          </div>
          <div className="col-lg-4 co-md-6 col-sm-12 col-12">
            <div className="gallery_item">
              <img src={volunteer2} alt="img" />
              <div className="gallery_overlay">
                <img src={arrow_round} alt="icon" onClick={() => openImageModal(volunteer2)} />
              </div>
            </div>
          </div>
          <div className="col-lg-4 co-md-6 col-sm-12 col-12">
            <div className="gallery_item">
              <img src={volunteer3} alt="img" />
              <div className="gallery_overlay">
                <img src={arrow_round} alt="icon" onClick={() => openImageModal(volunteer3)} />
              </div>
            </div>
          </div>
          <div className="col-lg-4 co-md-6 col-sm-12 col-12">
            <div className="gallery_item">
              <img src={volunteer4} alt="img" />
              <div className="gallery_overlay">
                <img src={arrow_round} alt="icon" onClick={() => openImageModal(volunteer4)} />
              </div>
            </div>
          </div>
          <div className="col-lg-4 co-md-6 col-sm-12 col-12">
            <div className="gallery_item">
              <img src={volunteer5} alt="img" />
              <div className="gallery_overlay">
                <img src={arrow_round} alt="icon" onClick={() => openImageModal(volunteer5)} />
              </div>
            </div>
          </div>
          <div className="col-lg-4 co-md-6 col-sm-12 col-12">
            <div className="gallery_item">
              <img src={volunteer6} alt="img" />
              <div className="gallery_overlay">
                <img src={arrow_round} alt="icon" onClick={() => openImageModal(volunteer6)} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeImageModal}>
          <div className="modal-container">
            <img src={selectedImage} alt="modal-img" className="modal-image" />
          </div>
        </div>
      )}
    </section>
  );
}

export default App;
