import styles from '../../styles/components/Newsletter.module.scss';

const Newsletter = () => {
  return (
    <div className={styles.Newsletter}>
      <input type="text" placeholder="Digite o seu E-mail" />
      <button className={styles.uButtonPrimary}>
        Enviar
      </button>
    </div>
  );
}

export default Newsletter;
