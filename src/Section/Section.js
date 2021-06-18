import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.scss';

const Section = ({ title, children, main }) => (
  <section className={styles.section}>
    {main ? (
      <h1 className={styles['main-title']}>{title}</h1>
    ) : (
      <h2 className={styles.title}>{title}</h2>
    )}
    {children}
  </section>
);

Section.defaultProps = {
  title: '',
  main: false,
};

Section.propTypes = {
  title: PropTypes.string,
  main: PropTypes.bool,
};

export default Section;
