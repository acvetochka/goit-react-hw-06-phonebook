// import { useState } from 'react';
// import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';
import { Form, FormLabel, FormInput, FormButton } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import Notiflix from 'notiflix';
import { addContact } from 'redux/contactsSlice';

// export function ContactForm({ handleSubmit }) {
export function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  // const handleSubmit = contactItem => {
  //   const { name } = contactItem;
  //   if (contacts.some(contact => contact.name === name)) {
  //     Notiflix.Report.warning('Warning', `${name} is already in contacts.`);
  //   } else {
  //     setContacts(prevState => [contactItem, ...prevState]);
  //   }
  // };

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const { name, number } = form.elements;
    // const contactItem = {
    //   id: nanoid(),
    //   name: name,
    //   number: number,
    // };
    // const { name } = contactItem;
    console.log(name);
    if (contacts.some(contact => contact.name === name.value)) {
      Notiflix.Report.warning(
        'Warning',
        `${name.value} is already in contacts.`
      );
    } else {
      dispatch(addContact(name.value, number.value));
      // setContacts(prevState => [contactItem, ...prevState]);
    }
    form.reset();
    // handleSubmit(contactItem);
  };
  // const onFormSubmit = evt => {
  //   evt.preventDefault();
  //   const contactItem = {
  //     id: nanoid(),
  //     name: name,
  //     number: number,
  //   };
  //   evt.currentTarget.reset();
  //   handleSubmit(contactItem);
  //   // resetState();
  // };

  // const handleChange = evt => {
  //   const { name, value } = evt.currentTarget;
  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;

  //     case 'number':
  //       setNumber(value);
  //       break;

  //     default:
  //       break;
  //   }
  // };

  // const resetState = () => {
  //   setName('');
  //   setNumber('');
  // };

  return (
    // <Form onSubmit={onFormSubmit}>
    <Form onSubmit={handleSubmit}>
      <FormLabel>
        Name
        <FormInput
          // onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я\s]+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>
      <FormLabel>
        Number
        <FormInput
          // onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?[0-9\s\-\(\)]+"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      <FormButton type="submit">Add contact</FormButton>
    </Form>
  );
}

// ContactForm.propTypes = {
//   handleSubmit: PropTypes.func,
// };

// Notiflix.Report.init({
//   svgSize: '50px',
//   messageFontSize: '20px',
//   warning: {
//     svgColor: '#44728f',

//     buttonBackground: '#44728f',
//     backOverlayColor: 'rgba(0,0, 0,0.2)',
//   },
// });
