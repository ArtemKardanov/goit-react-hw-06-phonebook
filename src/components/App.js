import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import popTransition from '../transitions/pop.module.css';
import titleSlide from '../transitions/titleSlide.module.css';
import styles from './App.module.css';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import Form from './Form/Form';
import Title from './Title/Title';

const App = ({ contacts }) => {
  const isFilterOpen = contacts.length >= 2 ? true : false;
  const isListOpen = contacts.length > 0 ? true : false;

  return (
    <div className={styles.wrapper}>
      <CSSTransition in appear timeout={500} classNames={titleSlide}>
        <Title />
      </CSSTransition>

      <Form />

      <CSSTransition
        in={isFilterOpen}
        timeout={250}
        unmountOnExit
        classNames={popTransition}
      >
        <Filter />
      </CSSTransition>

      <CSSTransition
        in={isListOpen}
        timeout={250}
        unmountOnExit
        classNames={popTransition}
      >
        <ContactsList />
      </CSSTransition>
    </div>
  );
};

App.propTypes = {
  contacts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  contacts: state.phonebook.contacts,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
