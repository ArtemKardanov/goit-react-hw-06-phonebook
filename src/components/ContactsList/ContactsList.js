import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as phonebookActions from "../../redux/phonebookActions";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "./ContactsList.module.css";
import Contact from "../Contact/Contact";
import popTransition from "../../transitions/pop.module.css";

const filterContactsByQuery = (filter, contacts) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

const ContactsList = ({ contacts, onDeleteNumber, filter }) => {
  const filteredContacts = filterContactsByQuery(filter, contacts);

  return (
    <TransitionGroup component="ul" className={styles.itemsList}>
      {filteredContacts.map((contact) => (
        <CSSTransition
          key={contact.id}
          timeout={200}
          classNames={popTransition}
          unmountOnExit
        >
          <li className={styles.item}>
            <Contact
              {...contact}
              onDeleteNumber={() => onDeleteNumber(contact.id)}
            />
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  filter: PropTypes.string.isRequired,
  onDeleteNumber: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: state.phonebook.contacts,
  filter: state.phonebook.filter,
});
const mapDispatchToProps = (dispatch) => ({
  onDeleteNumber: (id) => dispatch(phonebookActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
