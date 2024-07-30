import styled from 'styled-components';

export const StyledBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 25px;
  padding: 12px 10px 12px 10px;
  border: 1px solid ${props => props.theme.colors.header.border};
  background-color: ${props => props.theme.colors.header.btnBg};
  cursor: pointer;

  color: ${props => props.theme.colors.header.text};
  font-size: 18px;
  font-weight: 500;

  transition: box-shadow 250ms ease-in-out;

  &:hover {
    box-shadow: 0px 2px 14px -1px ${props => props.theme.colors.header.boxShadowHover};
  }
`;
