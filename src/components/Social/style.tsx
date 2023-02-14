import styled from "styled-components";

export const SocialWrapper = styled.div`
  max-width: 670px;

  ul {
    position: relative;
    display: flex;
  }
  ul li {
    position: relative;
    list-style: none;
    margin: 0 20px;
    cursor: pointer;
  }
  ul li a {
    text-decoration: none;
  }
  ul li a .fa-brands {
    font-size: 6em;
    color: #222;
  }
  ul li a::before {
    font-family: "FontAwesome";
    position: absolute;
    top: 0;
    left: 0;
    font-size: 6em;
    height: 100%;
    overflow: hidden;
    transition: 0.5s ease-in-out;
  }

  ul li:nth-child(1) a::before {
    content: "\f16d";
    background-image: linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border-bottom: 4px solid #dc2743;
  }
  ul li:nth-child(2) a::before {
    content: "\f232";
    color: #25d366;
    border-bottom: 4px solid #25d366;
  }
  ul li:nth-child(3) a::before {
    content: "\f099";
    color: #1da1f2;
    border-bottom: 4px solid #1da1f2;
  }
  ul li:hover a::before {
    height: 100%;
  }
`;
