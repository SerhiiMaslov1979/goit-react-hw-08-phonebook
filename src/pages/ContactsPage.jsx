import { ContactsForm } from '../components/ContactsForm/ContactsForm';
import { Filter } from '../components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../redux/Contacts/selectors';
import ContactsList from '../components/ContactsList/ContactsList';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/Contacts/operations';

export default function ContactsPage() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="App__container">
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <h3>Find contacts by name</h3>
      {contacts.length > 0 ? (
        <>
          <Filter />

          <ContactsList />
        </>
      ) : (
        <p>No contacts</p>
      )}
    </div>
  );
}
