import { PropTypes } from 'prop-types';
import css from './Button.module.css'

export default function Button({ onClick }) {
    return (
      <button type="button" className={css.Button} onClick={onClick}>
        Load More
      </button>
    );
  }

  Button.propType = {
    onClick: PropTypes.func,    
  }