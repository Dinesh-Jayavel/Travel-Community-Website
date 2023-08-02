import React from "react";
import styled from "styled-components";
import testimonial1 from "../assets/testimonial1.png";
import testimonial2 from "../assets/testimonial2.png";
import avatar from "../assets/avatar.png";

export default function Testimonial() {
  return (
    <Section id="blog">
      <div className="title">
        <h1>What our Happy Customers Say About Us</h1>
      </div>
      <div className="testimonials">
        <div className="testimonial-image-one">
          <img src={testimonial1} alt="testimonials" />
        </div>
        <div className="testimonial">
          <div className="title">
            <div className="image">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="info">
              <h3>Dinesh Jayavel</h3>
              <span>Full Stack Developer</span>
            </div>
          </div>
          <p className="desrciption">
            We had some great experience with the travel communnity agency to visit the 
            Riverfront,Japan.They provided us a best tourist guide with
            good knowledge and also suggested us the best veg restaurent
            for lunch on the way. And the stays What we got was above our
            expections and the service was great.Although we had an some
             wonderful experience.
          </p>
        </div>
        <div className="testimonial-image-two">
          <img src={testimonial2} alt="testimonials" />
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  .title {
    display: flex;
    justify-content: center;
    h1 {
      text-align: center;
      font-size: 2rem;
      width: 30%;
    }
  }
  .testimonials {
    display: flex;
    gap: 4rem;
    .testimonial {
      margin-top: 4rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      padding: 4rem 3rem;
      height: max-content;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      border-top: 0.5rem solid var(--primary-color);
      .title {
        display: flex;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        .image {
          img {
            height: 3rem;
          }
        }
        .info {
          span {
            color: var(--primary-color);
          }
        }
      }
      .desrciption {
        font-size: 1.1rem;
        line-height: 1.5rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-top: 5rem;
    .title {
      display: flex;
      justify-content: center;
      h1 {
        text-align: center;
        font-size: 1.5rem;
        width: 80%;
      }
    }
    .testimonials {
      flex-direction: column;
      overflow: hidden;
      .testimonial-image-one,
      .testimonial-image-two {
        max-inline-size: 100%;
        block-size: auto;
      }
    }
  }
`;

//Code By Dinesh Jayavel