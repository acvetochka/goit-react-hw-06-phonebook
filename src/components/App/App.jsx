// import { useEffect, useState } from 'react';
// import Notiflix from 'notiflix';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
// import { Notification } from '../Notification/Notification';
import { Section } from 'components/Section/Section';
import { Container } from './App.styled';

export function App() {
  // const contactArray = [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ];
  // const storage = () => JSON.parse(window.localStorage.getItem('contacts'));
  // const [contacts, setContacts] = useState(storage ?? contactArray);
  // const [filter, setFilter] = useState('');

  // const handleSubmit = contactItem => {
  //   const { name } = contactItem;
  //   if (contacts.some(contact => contact.name === name)) {
  //     Notiflix.Report.warning('Warning', `${name} is already in contacts.`);
  //   } else {
  //     setContacts(prevState => [contactItem, ...prevState]);
  //   }
  // };

  // const deleteContact = id => {
  //   setContacts(contacts => contacts.filter(contact => contact.id !== id));
  // };

  // const onChangeFilter = evt => {
  //   setFilter(evt.currentTarget.value);
  // };

  // const getFilterContact = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const visibleContacts = getFilterContact();
  return (
    <Container>
      <Section title={'Phonebook'}>
        <ContactForm />
        {/* <ContactForm handleSubmit={handleSubmit} /> */}
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        {/* <Filter onChangeFilter={onChangeFilter} /> */}
        <ContactList />
        {/* {contacts.length ? (
          <ContactList
            onVisibleContacts={visibleContacts}
            onDeleteContact={deleteContact}
          />
        ) : (
          <Notification />
        )} */}
      </Section>
    </Container>
  );
}


