import React from 'react';
import PropTypes from 'prop-types';
import Label from '../Label';
import styles from './textInputCSSModules.module.css';

/** Text input styled via CSS Modules approach. */
const TextInputCSSModules = ({
  htmlId,
  name,
  label,
  type = 'text',
  required = false,
  onChange,
  placeholder,
  value,
  error,
  children,
  ...rest
}) => {
  return (
    <div className={styles.fieldset}>
      <Label htmlFor="htmlId" label={label} required={required} />
      <input
        id={htmlId}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={error && styles.inputError}
        {...rest}
      />
      {children}
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

TextInputCSSModules.propTypes = {
  /** Unique HTML Id. Used for tying label to HTML input. Handy hook for automated testing */
  htmlId: PropTypes.string.isRequired,

  /** Input name. Is set to match object's property so a single change handler can be used */
  name: PropTypes.string.isRequired,

  /** Input label */
  label: PropTypes.string.isRequired,

  /** Input type */
  type: PropTypes.oneOf(['text', 'number', 'password']),

  /** Mark label with asterisk if set to true */
  required: PropTypes.bool,

  /** Function to call onChange */
  onChange: PropTypes.func.isRequired,

  /** Placeholder to display when empty */
  placeholder: PropTypes.string,

  /** Value  */
  value: PropTypes.any,

  /** String to display when error occurs */
  error: PropTypes.string,

  /** Child component to display next to the input */
  children: PropTypes.node,
};

export default TextInputCSSModules;
