import * as React from 'react';
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { SearchStyled, PaperStyledSearch } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { contactsFilter } from 'redux/contacts/filterSlice';
import { selectFilteredContact } from 'redux/contacts/selectors';
import { selectTheme } from 'redux/userTheme/slice';
import { useLocation } from 'react-router-dom';

export const Filter = () => {
  const nameFromFilter = useSelector(selectFilteredContact);
  const userTheme = useSelector(selectTheme);
  const location = useLocation();

  const dispatch = useDispatch();

  const userColorIcon =
    userTheme === 'dark' ? 'rgb(99,230,120)' : 'rgb(105, 105, 105)';
  const userColorPlaceholder =
    userTheme === 'dark' ? '#c1c1c1' : 'rgb(105, 105, 105)';

  return (
    location.pathname === '/' && (
      <PaperStyledSearch
        as={Paper}
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          bgcolor: 'transparent',
          boxShadow: '0px 2px 5px -1px rgba(0, 0, 0, 0.65)',
          borderRadius: '8px',
          transition:
            'background-color 250ms ease-in, box-shadow 250ms ease-in',
        }}
      >
        <IconButton
          type="button"
          sx={{ p: '10px', color: userColorIcon }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        <SearchStyled
          sx={{ ml: 1, flex: 1, color: userColorPlaceholder }}
          placeholder="Search..."
          inputProps={{ 'aria-label': 'filter' }}
          name="filter"
          value={nameFromFilter}
          onChange={e => dispatch(contactsFilter(e.currentTarget.value))}
        />
      </PaperStyledSearch>
    )
  );
};
