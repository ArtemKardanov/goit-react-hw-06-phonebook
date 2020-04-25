import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import { connect } from 'react-redux';
import * as phonebookActions from '../../redux/phonebookActions';

class Filter extends Component {
  state = {};

  handleChange = e => {
    this.props.onChangeFilter(e.target.value);
  };

  render() {
    const { value } = this.props;
    return (
      <form className={styles.form}>
        <p className={styles.name}>find contacts by name:</p>
        <input
          autoComplete="off"
          type="text"
          value={value}
          name="name"
          onChange={this.handleChange}
          required
          className={styles.input}
        />
      </form>
    );
  }
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.phonebook.filter,
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: value => dispatch(phonebookActions.filter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
