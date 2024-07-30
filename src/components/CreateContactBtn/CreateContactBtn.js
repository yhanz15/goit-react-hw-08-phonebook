import { useLocation } from 'react-router-dom';
import {
  PaperStyled,
  StyledLink,
  BtnText,
  MobStyledLink,
  AddIcontStyled,
} from './CreateContactBtn.styled';

export const CreateContact = () => {
  const location = useLocation();

  const pathParts = location.pathname.split('/');

  const addContact = pathParts[pathParts.length - 1];

  return (
    <>
      <StyledLink to="/addContact" style={{ textDecoration: 'none' }}>
        <PaperStyled
          elevation={3}
          sx={{
            borderRadius: '25px',
            alignItems: 'center',
            display: 'flex',
            gap: '5px',
            backgroundColor: 'transparent',
          }}
        >
          <AddIcontStyled type="button" sx={{ ml: 'auto', mr: 'auto' }} />
          <BtnText>Create contact</BtnText>
        </PaperStyled>
      </StyledLink>

      {/* Mob */}
      <MobStyledLink to="/addContact" style={{ textDecoration: 'none' }}>
        {addContact !== 'addContact' && (
          <PaperStyled
            elevation={3}
            sx={{
              borderRadius: '50%',
              p: '20px',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            {' '}
            <AddIcontStyled type="button" sx={{ ml: 'auto', mr: 'auto' }} />
          </PaperStyled>
        )}
      </MobStyledLink>
    </>
  );
};
