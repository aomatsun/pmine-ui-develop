import { createGlobalStyle } from 'styled-components';
import backImage from "./images/vdc-background.jpg";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: #150f1e;
    background-image: url(${backImage});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;    
  }

  body.fontLoaded {
    font-family: 'Poppins','Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100vh;
    min-width: 300px;
    width: 100%;
  }

  @media only screen and (max-width: 1200px) {
    #app {
      width: 100%;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
      padding: 0;
      margin-bottom: 2em;
      margin-top: 0;
      padding-top: 0;
      line-height: 1.25;
      font-family: 'Exo 2', sans-serif;
      font-weight: 600;
      color: #746981;
  }
  // h1 {
  //   font-family: 'Poppins','Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  //   font-size: 28px;
  // }

  // h2 {
  //   color: white;
  //   font-family: 'Poppins','Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  //   font-size: 22px;
  // }

  p,
  label {
    // font-family: 'Poppins', Georgia, Times, 'Times New Roman', serif;
  }


  .soon {
    animation: glitch 1s linear infinite;
  }

  @keyframes glitch{
    2%,64%{
      transform: translate(2px,0) skew(0deg);
    }
    4%,60%{
      transform: translate(-2px,0) skew(0deg);
    }
    62%{
      transform: translate(0,0) skew(5deg);
    }
  }

  .soon:before,
  .soon:after{
    content: attr(title);
    position: absolute;
    left: 0;
  }

  div:before{
    animation: glitchTop 1s linear infinite;
    clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  }

  @keyframes glitchTop{
    2%,64%{
      transform: translate(2px,-2px);
    }
    4%,60%{
      transform: translate(-2px,2px);
    }
    62%{
      transform: translate(13px,-1px) skew(-13deg);
    }
  }

  .soon:after{
    animation: glitchBotom 1.5s linear infinite;
    clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
    -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  }

  @keyframes glitchBotom{
    2%,64%{
      transform: translate(-2px,0);
    }
    4%,60%{
      transform: translate(-2px,0);
    }
    62%{
      transform: translate(-22px,5px) skew(21deg);
    }
  }


  .livenow {
    padding: 2px;
    height: 20px;
    width: 20px;
  }
  .livenow > div {
    vertical-align: middle;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    position: absolute;
    margin: 0 auto;
    border:3px solid rgba(0,211,149,1);
    -webkit-animation: live 1.4s infinite ease-in-out;
    animation: live 1.4s infinite ease-in-out;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    &:nth-child(1) {
      background-color:rgba(0,211,149,0.3);
      background-color:rgba(0,211,149,1);
      -webkit-animation-delay: -0.1s;
      animation-delay: -0.1s;
    }
    &:nth-child(2) {
      -webkit-animation-delay: 0.16s;
      animation-delay: 0.16s;
    }
    &:nth-child(3) {
      -webkit-animation-delay: 0.42s;
      animation-delay: 0.42s;
      border:3px solid rgba(0,211,149,0.5);
    }
    &:nth-child(4) {
      border:3px solid rgba(0,211,149,1);
      -webkit-animation-delay: -0.42s;
      animation-delay: -0.42s;
    }
  }

  @-webkit-keyframes live {
    0%, 80%, 100% { -webkit-transform: scale(0.6) }
    40% { -webkit-transform: scale(1.0) }
  }
  @keyframes live {
    0%, 80%, 100% {
      transform: scale(0.6);
      -webkit-transform: scale(0.6);
    } 40% {
      transform: scale(1.0);
      -webkit-transform: scale(1.0);
    }
  }

  .styledDropdown {
    background-color: red;
  }
`;

export default GlobalStyle;
