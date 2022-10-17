

import React, { Component } from "react";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";


 const CarouselData = [
    {
      image:
      "https://assets.iplt20.com/bcci/articles/1655276240__RAJ0314%20%281%29.jpg"
    },
    {
      image:

"https://cf-images.eu-west-1.prod.boltdns.net/v1/static/3588749423001/d5771d5d-a702-49f5-899e-c92cd22d7901/4be25f05-8c40-48d7-bf73-a9df85511384/1280x720/match/image.jpg"
    },
    {
      image:
"https://cf-images.eu-west-1.prod.boltdns.net/v1/static/3588749423001/13d385bb-5454-4528-81f5-ad7db9e4a389/91409203-c739-46c2-875b-25b1a0f58b03/1280x720/match/image.jpg"
    },
    {
      image:
"https://cf-images.eu-west-1.prod.boltdns.net/v1/static/3588749423001/13d385bb-5454-4528-81f5-ad7db9e4a389/91409203-c739-46c2-875b-25b1a0f58b03/1280x720/match/image.jpg"    },
    {
      image:
"https://cf-images.eu-west-1.prod.boltdns.net/v1/static/3588749423001/13d385bb-5454-4528-81f5-ad7db9e4a389/91409203-c739-46c2-875b-25b1a0f58b03/1280x720/match/image.jpg"
    },
  ];
class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      paused: false,
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.paused === false) {
        let newSlide =
          this.state.currentSlide === CarouselData.length - 1
            ? 0
            : this.state.currentSlide + 1;
        this.setState({ currentSlide: newSlide });
      }
    }, 3000);
  }

  nextSlide = () => {
    let newSlide =
      this.state.currentSlide === CarouselData.length - 1
        ? 0
        : this.state.currentSlide + 1;
    this.setState({ currentSlide: newSlide });
  };

  prevSlide = () => {
    let newSlide =
      this.state.currentSlide === 0
        ? CarouselData.length - 1
        : this.state.currentSlide - 1;
    this.setState({ currentSlide: newSlide });
  };

  setCurrentSlide = (index) => {
    this.setState({ currentSlide: index });
  };

  render() {
    return (
      <div className="p-8 ">
        <div className="w-full h-40 md:h-96 flex overflow-hidden relative">
          <AiOutlineLeft
            onClick={this.prevSlide}
            className="absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer"
          />

          <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
            {CarouselData.map((slide, index) => {
              return (
                <img
                  src={slide.image}
                  alt="This is a carousel slide"
                  key={index}
                  className={
                    index === this.state.currentSlide
                      ? "block w-screen h-auto object-cover"
                      : "hidden"
                  }
                  onMouseEnter={() => {
                    this.setState({ paused: true });
                  }}
                  onMouseLeave={() => {
                    this.setState({ paused: false });
                  }}
                />
              );
            })}
          </Swipe>

          <div className="absolute w-full flex justify-center bottom-0">
            {CarouselData.map((element, index) => {
              return (
                <div
                  className={
                    index === this.state.currentSlide
                      ? "h-2 w-2 bg-blue-700 rounded-full mx-2 mb-2 cursor-pointer"
                      : "h-2 w-2 bg-white rounded-full mx-2 mb-2 cursor-pointer"
                  }
                  key={index}
                  onClick={() => {
                    this.setCurrentSlide(index);
                  }}
                ></div>
              );
            })}
          </div>

          <AiOutlineRight
            onClick={this.nextSlide}
            className="absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer"
          />
        </div>
      </div>
    );
  }
}

export default Carousel;