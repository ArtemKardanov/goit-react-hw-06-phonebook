import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Form.module.css';
import * as phonebookActions from '../../redux/phonebookActions';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleNumberChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddContact({ ...this.state });

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <p className={styles.name}>name:</p>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleNameChange}
          autoComplete="off"
          className={styles.input}
        />
        <p className={styles.name}>number:</p>
        <input
          type="text"
          name="number"
          value={number}
          onChange={this.handleNumberChange}
          autoComplete="off"
          className={styles.input}
        />
        <button
          className={styles.button}
          disabled={name && number ? false : true}
          type="submit"
        >
          Add contact
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  onAddContact: contact => dispatch(phonebookActions.addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
