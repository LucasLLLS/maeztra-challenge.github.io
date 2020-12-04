import styles from '../../styles/components/Modal.module.scss';

const Modal = ({
  children,
  onModalClose
}) => {
  return (
    <div className={styles.ModalWrapper}>
      <button className={styles.ModalShadow} onClick={() => onModalClose()} />
      <div className={styles.Modal}>
        <button
          onClick={() => onModalClose()}
          className={styles.ModalClose}
        >
          Fechar
        </button>
        {children}
      </div>
    </div>
  )
};

export default Modal;
