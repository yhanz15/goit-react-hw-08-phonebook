import axios from 'axios';

export const fetchContacts = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

export const postContacts = async ({ name, number }) => {
  const response = await axios.post('/contacts', { name, number });
  return response.data;
};

export const deleteContacts = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};

export const updateContacts = async (id, { name, number }) => {
  const response = await axios.patch(`/contacts/${id}`, { name, number });
  return response.data;
};
