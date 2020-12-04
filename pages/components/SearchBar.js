import styles from '../../styles/components/Search.module.scss';

const SearchBar = () => {
  return (
    <div className={styles.SearchBarWrapper}>
      <input
        type="text"
        className={styles.SearchBar}
        placeholder="O que você busca?"
      />
      <button className={`${styles.SearchBarBtn} ${styles.uButtonPrimary}`}>
        Buscar
      </button>
    </div>
  )
};

export default SearchBar;
