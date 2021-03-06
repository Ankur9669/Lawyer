import React from "react";
import "./reviews.css";
import { useState } from "react";
import { RatingView } from "react-simple-star-rating";
import Carousel, { autoplayPlugin, Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { slidesToShowPlugin } from "@brainhubeu/react-carousel";
function Reviews() {
  const [value, setValue] = useState(0);
  function onChange(value) {
    setValue(value);
  }

  //This would Highlight the dot in the caraousel
  const highlightActiveDot = (index) => {
    if (value < 0) {
      return Math.abs(value % 4 === 0 ? 0 : (value % 4) + 3) === index
        ? "#df9a2a"
        : "rgba(45, 48, 146, 0.3)";
    }

    return value % 4 === index ? "#df9a2a" : "rgba(45, 48, 146, 0.3)";
  };

  //This would style the dots
  const renderThumbnails = () => {
    return Array(4)
      .fill()
      .map((_, index) => (
        <div
          style={{
            width: "15px",
            height: "15px",
            borderRadius: "200px",
            marginTop: "20px",
            marginBottom: "10px",
            backgroundColor: highlightActiveDot(index),
          }}
        />
      ));
  };
  return (
    <div className="french-section-5">
      <h3 className="french-section-5-heading">
        What our <span style={{ color: "#2D3092" }}>Clients</span> Say
      </h3>
      <div className="french-section-5-carausel-container">
        <Carousel
          value={value}
          onChange={onChange}
          plugins={[
            "centered",
            "infinite",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
            {
              resolve: autoplayPlugin,
              options: {
                interval: 30000,
              },
            },
          ]}
          breakpoints={{
            1080: {
              plugins: [
                "infinite",
                "centered",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                    interval: 5000,
                  },
                },
                {
                  resolve: autoplayPlugin,
                  options: {
                    interval: 5000,
                  },
                },
              ],
            },
            480: {
              plugins: [
                "infinite",

                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1.5,
                    interval: 5000,
                  },
                },
                {
                  resolve: autoplayPlugin,
                  options: {
                    interval: 5000,
                  },
                },
              ],
            },
          }}
        >
          <div className="review-container">
            <div className="reviewer-rating">
              <RatingView ratingValue={5} size="20px" fillColor="#FFB300" />
            </div>
            <div className="reviewer-review">
              Eros nulla mollis nec tortor. Eu class ante accumsan habitant
              morbi neque hac purus magnis varius pulvinar hac pede magnis.
            </div>
            <div className="reviewer-info">
              <img
                src="/avatar1.svg"
                alt="asd"
                className="reviewer-image"
              ></img>
              <div className="reviewer-name-lvl">
                <span className="reviewer-name">Tina</span>
                <br />
                Intermidiate
              </div>
            </div>
          </div>
          <div className="review-container">
            <div className="reviewer-rating">
              <RatingView ratingValue={5} size="20px" fillColor="#FFB300" />
            </div>
            <div className="reviewer-review">
              Eros nulla mollis nec tortor. Eu class ante accumsan habitant
              morbi neque hac purus magnis varius pulvinar hac pede magnis.
            </div>
            <div className="reviewer-info">
              <img src="/avatar.svg" alt="asd" className="reviewer-image"></img>
              <div className="reviewer-name-lvl">
                <span className="reviewer-name">Tina</span>
                <br />
                Intermidiate
              </div>
            </div>
          </div>
          <div className="review-container">
            <div className="reviewer-rating">
              <RatingView ratingValue={5} size="20px" fillColor="#FFB300" />
            </div>
            <div className="reviewer-review">
              Eros nulla mollis nec tortor. Eu class ante accumsan habitant
              morbi neque hac purus magnis varius pulvinar hac pede magnis.
            </div>
            <div className="reviewer-info">
              <img src="/avatar.svg" alt="asd" className="reviewer-image"></img>
              <div className="reviewer-name-lvl">
                <span className="reviewer-name">Tina</span>
                <br />
                Intermidiate
              </div>
            </div>
          </div>
          <div className="review-container">
            <div className="reviewer-rating">
              <RatingView ratingValue={5} size="20px" fillColor="#FFB300" />
            </div>
            <div className="reviewer-review">
              Eros nulla mollis nec tortor. Eu class ante accumsan habitant
              morbi neque hac purus magnis varius pulvinar hac pede magnis.
            </div>
            <div className="reviewer-info">
              <img src="/avatar.svg" alt="asd" className="reviewer-image"></img>
              <div className="reviewer-name-lvl">
                <span className="reviewer-name">Tina</span>
                <br />
                Intermidiate
              </div>
            </div>
          </div>
          <div className="review-container">
            <div className="reviewer-rating">
              <RatingView ratingValue={5} size="20px" fillColor="#FFB300" />
            </div>
            <div className="reviewer-review">
              Eros nulla mollis nec tortor. Eu class ante accumsan habitant
              morbi neque hac purus magnis varius pulvinar hac pede magnis.
            </div>
            <div className="reviewer-info">
              <img src="/avatar.svg" alt="asd" className="reviewer-image"></img>
              <div className="reviewer-name-lvl">
                <span className="reviewer-name">Tina</span>
                <br />
                Intermidiate
              </div>
            </div>
          </div>
          <div className="review-container">
            <div className="reviewer-rating">
              <RatingView ratingValue={5} size="20px" fillColor="#FFB300" />
            </div>
            <div className="reviewer-review">
              Eros nulla mollis nec tortor. Eu class ante accumsan habitant
              morbi neque hac purus magnis varius pulvinar hac pede magnis.
            </div>
            <div className="reviewer-info">
              <img src="/avatar.svg" alt="asd" className="reviewer-image"></img>
              <div className="reviewer-name-lvl">
                <span className="reviewer-name">Tina</span>
                <br />
                Intermidiate
              </div>
            </div>
          </div>
        </Carousel>
        <Dots
          number={4}
          value={value}
          onChange={onChange}
          thumbnails={renderThumbnails()}
        ></Dots>
      </div>
    </div>
  );
}

export default Reviews;
