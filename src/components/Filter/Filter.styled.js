import styled from 'styled-components';
import { InputBase } from '@mui/material';

export const PaperStyledSearch = styled(InputBase)`
  border: 1px solid ${props => props.theme.colors.header.border};
  transition: background-color 250ms ease-in, box-shadow 250ms ease-in;
  width: 100%;

  &:focus-within {
    background-color: transparent;
    box-shadow: 0px 4px 8px 2px
      ${props => props.theme.colors.header.boxShadowHover};
  }

  @media screen and (min-width: ${props => props.theme.media.m}) {
    width: 300px;
  }
`;

export const SearchStyled = styled(InputBase)`
  background-color: inherit;

  &::placeholder {
    color: red;
  }

  &:focus-within {
    color: ${props => props.theme.colors.header.text};
  }
`;
