import styled from 'styled-components';

const HomeWrapper = styled.div`
  .h-outer-wrapper {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #f4f3ef;
    overflow-y: scroll;
  }

  .h-upper-modal {
    display: inline-block;
    flex: 0 0 80%;
    background-image: linear-gradient(
        rgba(16, 29, 44, 0.82),
        rgba(16, 29, 44, 0.82)
      ),
      url(./images/avt1.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    clip-path: polygon(100% 0, 100% 59%, 57% 100%, 0 100%, 0 0);
    display: flex;
    flex-direction: column;
  }

  .h-heading-wrapper {
    margin-top: 5rem;
    height: 40%;
    width: 90%;
    display: flex;
    margin-left: 4rem;
  }

  .h-text-container {
    color: #fff;
    font-size: 5rem;
    font-weight: 300;
    letter-spacing: 0.8rem;
    margin-right: auto;
  }

  .h-button-group {
    display: flex;
  }

  .h-button1 {
    margin-left: 4rem;
  }

  .h-button2 {
    margin-left: 4rem;
  }

  .h-btn {
    background-color: #c69963;
    color: #fff;
    border: none;
    border-radius: 0;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1rem;
    text-transform: uppercase;
    padding: 1.2rem 2rem;
    cursor: pointer;
    transition: all 0.2s;
  }
  .h-btn:hover {
    background-color: #b28451;
  }

  .h-header__btn {
    align-self: start;
    justify-self: start;
  }

  .h-lower-modal {
    background-color: #f4f3ef;
    width: 100%;
    // height: 800%;
    padding: 5%;
  }

  .u-center-text {
    text-align: center !important;
  }

  .heading-secondary {
    font-size: 3.5rem;
    text-transform: uppercase;
    font-weight: 400;
    display: inline-block;
    background-image: linear-gradient(to right, #7ed56f, #28b485);
    background-clip: text;
    color: transparent;
    letter-spacing: 0.2rem;
    transition: all 0.2s;
  }

  .heading-secondary:hover {
    transform: skewY(2deg) skewX(15deg) scale(1.1);
    text-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.2);
  }

  .h-row {
    width: 100%;
    height: 15%;
    margin-top: 5%;
    margin-bottom: 3%;
  }

  .h-story {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 3px;
    padding: 2rem;
    padding-left: 9rem;
    font-size: 0.8rem;
    transform: skewX(-12deg);
  }

  .h-story__shape {
    width: 7rem;
    height: 7rem;
    float: left;
    transform: translateX(-5rem) skewX(12deg);
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    margin-top: 4%;
  }

  .h-story__text {
    transform: skewX(12deg);
    height: 100%;
  }

  .h-story__img {
    height: 100%;
    transform: translateX(0rem) scale(1.4);
    backface-visibility: hidden;
    transition: all 0.5s;
  }

  .h-story__caption {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 20%);
    color: #fff;
    text-transform: uppercase;
    font-size: 1.2rem;
    text-align: center;
    opacity: 0;
    transition: all 0.5s;
    backface-visibility: hidden;
  }

  .h-story:hover .h-story__caption {
    opacity: 1;
    transform: translate(-50%, -50%);
  }

  .h-story:hover .h-story__img {
    transform: translateX(-1rem) scale(1);
    filter: blur(3px) brightness(80%);
  }

  .h-heading-tertiary {
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .linkedin {
    margin-top: 10px;
    width: 2%;
    float: left;
  }

  .linkedin-text {
    margin-top: 10px;
    margin-left: 20px;
    margin-right: 80px;
    float: left;
    text-decoration: none;
  }

  a {
    text-decoration: none;
  }

  .personal-info {
    height: 10%;
    margin-bottom: 10px;
  }
`;

export default HomeWrapper;
