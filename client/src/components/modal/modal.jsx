import React from "react";
import styles from "./modal.module.css";
const Modal = ({children, isOpen, setIsOpen}) => {
  const handleContainerClick = e => {
    e.stopPropagation();
  };
  return (
    <div
      className={`${styles.modal} ${isOpen && styles.flex}`}
      onClick={() => setIsOpen(prev => !prev)}
    >
      <div className={styles["modal-content"]} onClick={handleContainerClick}>
        <button
          onClick={() => setIsOpen(prev => !prev)}
          className={styles.button}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};
export default Modal;
