import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`nextArrow-women ${className}`}
      onClick={onClick}
    >
      <MdKeyboardArrowRight  />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`prevArrow-women ${className}`}
      onClick={onClick}
    >
      <MdKeyboardArrowLeft  />
    </div>
  );
}
export const womenSliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    touchThreshold: 5, 
    pauseOnHover: true,
    pauseOnFocus: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };