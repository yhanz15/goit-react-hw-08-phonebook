import { FiLogIn } from 'react-icons/fi';
import { StyledLink } from './LoginBtn.style';

export const LoginBtn = () => {
  return (
    <>
      <StyledLink to="/login">
        <span>Login</span>
        <FiLogIn size={21} value={{ className: 'log-in-btn' }} />
      </StyledLink>
    </>
  );
};
