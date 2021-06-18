import { Component } from 'react';
import styles from './Filter.module.scss';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { value, onFilter } = this.props;
    return (
      <div className={styles['input-layout']}>
        <label className={styles.title}>
          Find contacts by name
          <input
            className={styles.input}
            type="text"
            value={value}
            onChange={onFilter}
          />
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
