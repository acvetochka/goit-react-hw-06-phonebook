// import PropTypes from 'prop-types';
// import { Contact } from 'components/Contact/Contact';
import {
  ContactListStyled,
  ContactItem,
  ContactData,
  ButtonDelete,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

export function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  // const onDeleteContact = id => {
  //   dispatch(deleteContact(id));
  // };
  // const deleteContact = id => {
  //   setContacts(contacts => contacts.filter(contact => contact.id !== id));
  // };

  const getFilterContact = () => {
    //   return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
    // };
    const normalizedFilter = filter.toLowerCase();
    // console.log(filter);
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getFilterContact();
  // console.log(visibleContacts);

  return (
    <ContactListStyled>
      {/* {onVisibleContacts.map(({ id, name, number }) => ( */}
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <ContactData>
            {name}: <span>{number}</span>
          </ContactData>
          <ButtonDelete
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </ButtonDelete>
        </ContactItem>
        // <Contact
        //   key={contact.id}
        //   id={contact.id}
        //   name={contact.name}
        //   number={contact.number}
        //   deleteContact={onDeleteContact}
        // />
      ))}
    </ContactListStyled>
  );
}

// ContactList.propTypes = {
//   onVisibleContacts: PropTypes.array.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
