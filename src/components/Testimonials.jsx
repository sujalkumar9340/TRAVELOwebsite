import React from "react";
import styled from "styled-components";
import avatarImage from "../assets/avatarimage.jpg";
export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
            If I could paint a picture of the perfect getaway, it would
            undoubtedly mirror my recent trip to [Destination]. From the moment
            I arrived, I was enveloped in an experience that transcended the
            ordinary. Here's why [Destination] has left an indelible mark on my
            heart:
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>sujal kumar</h4>
              <span>web developer</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            What truly sets [Destination] apart is the warmth of its people. The
            genuine smiles, friendly greetings, and willingness to share their
            stories created an atmosphere that felt like a home away from home.
            The locals' passion for their community was infectious.
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>sujal kumar</h4>
              <span>web developer</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            Exploring the rich cultural heritage of [Destination] was like
            taking a journey through time. The vibrant festivals, traditional
            art, and warm hospitality of the locals made me feel not just like a
            traveler, but a welcomed guest. Each encounter left me with a deeper
            appreciation for the community.
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>sujal kuamr</h4>
              <span>web developer</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
