import styled from "styled-components";
import { theme } from "../../theme";

export const FooterWrap = styled.section`
  padding-bottom: 20px !important;

  p{
    text-align: center;
    margin-bottom: 10px;
    color: ${theme.colors.primary};

    span{
      color: ${theme.colors.primary};
      cursor: pointer;
      transition: 0.2s;

      &:hover{
        color: ${theme.colors.tertiary};
        text-decoration: underline;
      }
    }
  }
`;
