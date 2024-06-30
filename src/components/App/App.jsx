import { useState, useEffect } from "react";
import { ContactsForm } from '../ContactsForm/ContactsForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactsList/ContactsList';
import { AppWrapper,Title, SearchWrapper, StyledTitles, CloseBtn, OpenPhonebook } from './app.styled';


const localStorageKey = 'contacts'

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem(localStorageKey);
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return [];
  });
  const [filter, setFilter] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(( ) => {
      localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  }, [contacts]);
  



    const addContact = (newContact) => {
    if (contacts.find(contact => contact.name === newContact.name)) {
      return alert(`${newContact.name} is already in contacts`);
    }
      
    if (contacts.find(contact => contact.number === newContact.number)) {
      return alert(`${newContact.number} is already in contacts`);
    }
      setContacts(prevState => [...prevState, newContact]);
  };


  const getContact = evt => {
    const searchQuerry = evt.currentTarget.value;
    setFilter(searchQuerry)
    
  }
  
  const removeContact = contactId => {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactId));
  };

  const showPhonebook = () => {
    setIsOpen(true)
  };

  const hidePhonebook = () => {
      setIsOpen(false)
  };

    const filteredContacts = contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLocaleLowerCase()));
    return (
      <>
        {!isOpen && <OpenPhonebook onClick={showPhonebook} className="phoneBook">Open Phonebook</OpenPhonebook>}
        {isOpen &&
          <AppWrapper>
            <CloseBtn onClick={hidePhonebook}/>
            <ContactsForm onAdd={ addContact } />
            <SearchWrapper>
              <StyledTitles>
                <Title>Contacts</Title>
                <p>Find contacts by name</p>
              </StyledTitles>
              <Filter filter={ filter } getContact={getContact}  />
              <ContactList filteredContacts={filteredContacts} removeContact={ removeContact} />
            </SearchWrapper>
        </AppWrapper>
        }
        </>
    )
}