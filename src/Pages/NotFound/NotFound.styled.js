import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 40px 20px;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #eac0a7 0, #9ea4c6 50%, #335cd0 100%);
  color: #ffffff;
  box-sizing: border-box;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-left: auto;
  margin-right: auto;
`;

export const Text = styled.div`
  position: relative;
  font-size: 120px;

  span {
    display: flex;
    width: 100%;
    font-size: 60px;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  margin-right: auto;
`;

export const ListItem = styled.li`
  margin: 5px;
`;

export const StyledLink = styled(Link)`
  position: relative;
  display: inline-flex;
  font-family: 'Roboto', sans-serif;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  padding: 0 4px;
  font-size: 16px;
  font-weight: 700;
  color: inherit;
  text-decoration: none;

  &:before {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    right: 100%;
    height: 1px;
    background: #1227aa;
    transition: 0.3s ease all;
  }

  &:hover:before {
    right: 0;
  }
`;
