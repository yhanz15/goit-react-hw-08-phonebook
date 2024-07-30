import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 25px;
  border: 1px solid ${props => props.theme.colors.header.border};
  padding: 12px 10px 12px 10px;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: ${props => props.theme.colors.header.text};
  background-color: ${props => props.theme.colors.header.btnBg};
  margin-bottom: -15px;

  transition: box-shadow 250ms ease-in-out, color 250ms ease-in-out;

  &:hover {
    box-shadow: 0px 2px 14px -1px ${props => props.theme.colors.header.boxShadowHover};
    color: rgb(71, 167, 106);
  }

  @media screen and (min-width: ${props => props.theme.media.m}) {
    margin-bottom: 0px;
  }
`;
