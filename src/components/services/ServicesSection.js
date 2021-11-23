import React from 'react';
import styled from 'styled-components';
import { RiImageEditLine, RiHeartsFill } from 'react-icons/ri';
import { MdPhotoCamera } from 'react-icons/md';
import SectionTitle from '../titles/SectionTitle';
import ServiceItem from './ServiceItem';

const ServicesSectionStyles = styled.div`
  padding: 10rem 0;
  text-align: center;
  .services__title {
    margin-bottom: 3rem;
  }
  .services__items {
    display: flex;
    gap: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .services__items {
      flex-direction: column;
      max-width: 300px;
      margin: 0 auto;
    }
  }
`;

function ServicesSection() {
  return (
    <ServicesSectionStyles id="services">
      <div className="container">
        <SectionTitle className="services__title">Our Services</SectionTitle>
        <div className="services__items">
          <ServiceItem
            icon={<RiImageEditLine />}
            title="Professional Editing"
            desc="We do professional photo editing. Let us help you to take your photo next level."
          />
          <ServiceItem
            icon={<MdPhotoCamera />}
            title="Casual Photography"
            desc="You can hire us for any kind of casual Photography. Book us for your next events. "
          />
          <ServiceItem
            icon={<RiHeartsFill />}
            title="Wedding Photography"
            desc="Wedding is the most memorable events of our life. Let us help you to capture it."
          />
        </div>
      </div>
    </ServicesSectionStyles>
  );
}

export default ServicesSection;
