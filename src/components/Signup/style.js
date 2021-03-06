import styled from 'styled-components';

const Wrapper = styled.div`
  .login-container {
    height: 100vh;
    width: 100%;
  }

  .login-first-col {
    width: 60%;
    height: 80%;
    float: left;
  }

  .login-first-col img {
    height: auto;
    width: 100%;
    background-color: white;
    margin-top: 5%;
    height: 100%;
  }

  .login-second-col {
    width: 30%;
    float: left;
    margin-top: 8%;
  }

  .login-second-col h1 {
    font-family: 'Lato', 'Arial', sans-serif;
    text-align: center;
    padding: 1%;
    font-size: 150%;
    font-weight: 700;
    word-spacing: 1px;
    letter-spacing: 1px;
    margin-bottom: 5%;
  }

  .login-second-col span {
    color: #6c63ff;
    margin-left: 10%;
    font-size: 180%;
  }

  #login-contactnumber,
  #login-password,
  #login-firstname,
  #login-lastname,
  #login-city,
  #login-emailid,
  #login-state,
  #login-grade,
  #login-board {
    text-align: center;
    width: 70%;
    height: 60px;
    border-radius: 10px;
    margin-left: 17%;
    margin-bottom: 30px;
    border-color: rgb(109, 109, 109);
    font-size: 20px;
    z-index: 100;
  }

  #login-submit {
    width: 150px;
    height: 45px;
    color: #fff;
    background-color: #6c63ff;
    border-radius: 100px;
    border: none;
    margin-left: 40%;
    margin-bottom: 5%;
    display: block;
    font-size: 110%;
    cursor: pointer;
  }

  .login-text {
    display: block;
    text-align: center;
    margin-top: 1%;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.698);
    margin-left: 8%;
    font-size: 90%;
  }

  .login-nav-link {
    display: block;
    text-align: center;
    margin-top: 1%;
    text-decoration: none;
    color: #6c63ff;
    margin-left: 10%;
    font-size: 110%;
    cursor: pointer;
  }

  .login-nav-link:hover {
    text-decoration: underline;
  }
`;

export default Wrapper;
