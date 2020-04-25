import React, { Fragment } from 'react';
import styles from './Contact.module.css';
import PropTypes from 'prop-types';

const Contact = ({ name, number, onDeleteNumber }) => (
  <Fragment>
    <p className={styles.info}>
      {name}
      <span className={styles.span}>{number}</span>
    </p>
    <button className={styles.button} onClick={onDeleteNumber} type="button">
      &times;
    </button>
  </Fragment>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteNumber: PropTypes.func.isRequired,
};

export default Contact;
