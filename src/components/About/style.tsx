import styled from "styled-components";
import { theme } from "../../theme";

export const StyledLiSocial = styled.li`
  margin-top: 44px;

  ul.nav-soc {
    display: flex;
    height: 35px;
    position: relative;
    top: 0;
    left: 0;

    li {
      margin-top: 0;

      a {
        &:hover {
          padding: 0;
        }
      }
    }
  }
`;

export const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  margin-top: 6rem;
`;

export const ButtonDownload = styled.button`
  color: ${theme.colors.primary};
  font-size: 16px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 20px 13px;
  outline: 0;
  border: 1px solid black;
  border-color: ${theme.colors.primary};
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}
&:after {
  content: "";
  background-color: ${theme.colors.tertiary};
  width: 100%;
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 7px;
  left: 7px;
  transition: 0.2s;
}

&:hover:after {
  top: 0px;
  left: 0px;
}

@media (min-width: 768px) {
    padding: 13px 50px 13px;
}

`;
