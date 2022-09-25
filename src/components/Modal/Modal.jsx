import { PropTypes } from 'prop-types'; 
import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css'

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div onClick={this.handleBackdropClick} className={css.Overlay}>
        <div className={css.Modal}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = { 
	onClose: PropTypes.func.isRequired,
}
