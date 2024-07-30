import { FiLogOut } from 'react-icons/fi';
import { StyledBtn } from './LogoutBtn.styled';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const LogoutBtn = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logOut());

  return (
    <>
      <StyledBtn onClick={handleLogOut}>
        <span>Exit</span>
        <FiLogOut size={21} />
      </StyledBtn>
    </>
  );
};
