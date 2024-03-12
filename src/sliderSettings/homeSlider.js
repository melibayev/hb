import { GoArrowRight, GoArrowLeft } from "react-icons/go";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`nextArrow ${className}`}
      onClick={onClick}
    >
      <GoArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`prevArrow ${className}`}
      onClick={onClick}
    >
      <GoArrowLeft />
    </div>
  );
}
export const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
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