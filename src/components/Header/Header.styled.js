import styled from 'styled-components';
import FormControlLabel from '@mui/material/FormControlLabel';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 10px;
  z-index: 10;
  top: 0;
  position: sticky;
  background-color: rgba(255, 255, 255, 1);
  padding: 0 16px;
  visibility: visible;
  color: ${props => props.theme.colors.header.text};
  background-color: ${props => props.theme.colors.header.bg};

  .LoginBtnsWrapperDesk {
    visibility: hidden;
    display: none;
  }

  @media screen and (min-width: ${props => props.theme.media.m}) {
    padding-bottom: 10px;
    padding-top: 10px;
    flex-direction: row;
    gap: 0px;
    justify-content: space-between;
    padding: 0;

    .LoginBtnsWrapper {
      display: none;
      visibility: hidden;
    }

    .LoginBtnsWrapperDesk {
      display: flex;
      visibility: visible;
    }
  }
`;

export const LogoAndBtnsWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: ${props => props.theme.media.m}) {
    width: auto;
  }
`;

export const WrapperTheme = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${props => props.theme.media.m}) {
    flex-direction: row;
    gap: 10px;
  }
`;

export const StyledSwitcher = styled(FormControlLabel)`
  .MuiSwitch-root.MuiSwitch-sizeMedium.css-lu9khh-MuiSwitch-root {
    margin-left: 0px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Title = styled.div`
  display: block;
  font-weight: 700;
  font-size: 24px;
  color: ${props => props.theme.colors.header.text};

  @media screen and (min-width: ${props => props.theme.media.m}) {
    font-size: 28px;
  }
`;

export const LoginBtnsWrapper = styled.div`
  display: flex;
  align-items: end;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 15px;
  margin-top: auto;
  margin-bottom: auto;

  @media screen and (min-width: ${props => props.theme.media.m}) {
    flex-direction: row;
    align-items: center;
    gap: 10px;
    padding-bottom: 0;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const StyledUserEmail = styled.p`
  font-size: 14px;

  @media screen and (min-width: ${props => props.theme.media.m}) {
    font-size: 18px;
  }
`;
