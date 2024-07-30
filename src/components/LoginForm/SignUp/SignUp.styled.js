import styled from 'styled-components';
import { ErrorMessage } from 'formik';

export const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
  font-size: 12px;
`;

export const StyledSpanTitle = styled.span`
  font-weight: 700;
  color: ${props => props.theme.colors.loginForm.text};
`;
