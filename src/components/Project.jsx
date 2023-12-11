import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

const Project = ({ title, description, images, links }) => {
  return (
    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)', paddingBottom: '5rem'}}>
      {/* MDBReact UI Kit Carousel */}
      <MDBCarousel showIndicators>
        {images.map((image, index) => (
          <MDBCarouselItem key={index} itemId={index + 1} interval={4000}>
            <div className='carousel-styling'>
            <a href={links[index]} target="_blank" rel="noopener noreferrer">
              <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
            </a>
            </div>
            <MDBCarouselCaption>
              <div className='carousel-textbox'>
              <h4 className='mb-3'>{title[index]}</h4>
              <p>{description[index]}</p>
              </div>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        ))}
      </MDBCarousel>
    </div>
  );
};

export default Project;