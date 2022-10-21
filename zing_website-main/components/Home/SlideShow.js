/* eslint-disable @next/next/no-img-element */
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";

const fadeImages = [
  {
    url: "assets/slideImages/31.jpg",
    caption: "Slide Image",
  },
  {
    url: "assets/slideImages/23.jpg",
    caption: "Slide Image",
  },
  {
    url: "assets/slideImages/24.jpg",
    caption: "Slide Image",
  },
  {
    url: "assets/slideImages/25.jpg",
    caption: "Slide Image",
  },
  {
    url: "assets/slideImages/26.jpg",
    caption: "Slide Image",
  },
  {
    url: "assets/slideImages/27.jpg",
    caption: "Slide Image",
  },
  {
    url: "assets/slideImages/28.jpg",
    caption: "Slide Image",
  },
  {
    url: "assets/slideImages/29.jpg",
    caption: "Slide Image",
  },
  {
    url: "assets/slideImages/30.jpg",
    caption: "Slide Image",
  },
  {
    url: "assets/slideImages/31.jpg",
    caption: "Slide Image",
  },
  {
    url: "assets/slideImages/32.jpg",
    caption: "Slide Image",
  },
  {
    url: "assets/slideImages/33.jpg",
    caption: "Slide Image",
  },
  {
    url: "assets/slideImages/34.jpg",
    caption: "Slide Image",
  },
  {
    url: "assets/slideImages/35.jpg",
    caption: "Slide Image",
  },
];

function SlideShow() {
  const properties = {
    duration: 2000,
    autoplay: true,
    transitionDuration: 500,
    pauseOnHover: false,
    arrows: false,
    indicators: false,
    infinite: true,
    easing: "ease",
  };
  return (
    <div className="max-w-[350px] md:max-w-[400px] m-auto ">
      <Fade {...properties}>
        {fadeImages.map((fadeImage, index) => (
          <div
            className="each-fade flex justify-center items-center bg-cover brightness-75 "
            key={index}
          >
            <div className="">
              <img
                src={fadeImage.url}
                alt={fadeImage.caption}
                className="object-cover w-[300] h-[400px] md:h-[500px] border-[6px] md:border-[12px] border-zing-offWhite border-opacity-30 "
              />
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
}

export default SlideShow;
