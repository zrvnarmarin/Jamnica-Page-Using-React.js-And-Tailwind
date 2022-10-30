import { useState } from "react";

const slideStyles = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end'
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center"
};

const dotStyle = {
  margin: "0 10px",
  cursor: "pointer",
  fontSize: "50px",
  color: 'red'
};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div style={sliderStyles}>
      <div style={slideStylesWidthBackground}>
        <div style={dotsContainerStyles}>
            {slides.map((slide, slideIndex) => (
            <div
                style={dotStyle}
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
            >
                &#x2022;
            </div>
            ))}
        </div>
      </div>
      
    </div>
  );
};

export default ImageSlider;