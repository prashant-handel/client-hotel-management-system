import Carousel from 'react-bootstrap/Carousel';

const ImagesCarousel = () => {
  return (
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/rooms_images/room1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Shree Hotel</h1>
          <h4>Discover the joy of your own home!</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/rooms_images/room2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1>Shree Hotel</h1>
          <h4>Discover the joy of your own home!</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/rooms_images/room3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>Shree Hotel</h1>
          <h4>
          Discover the joy of your own home!
          </h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImagesCarousel;
