import { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/components/Header.module.scss';
import SearchBar from './SearchBar';
import CategoriesNav from './CategoriesNav';
import Icon from './Icons';

const Header = () => {
  const [submenuActive, setSubmenuActive] = useState(false);
  return (
    <>
      <div className={styles.Header}>
        <div className={styles.HeaderTop}>
          Acompanhe as melhores promoções disponíveis aqui na Maeztra.
        </div>
        <div className={styles.HeaderMiddle}>
          <div className={`${styles.HeaderMiddleWrapper} ${styles.uContainer}`}>
            <button
              className={`${styles.HeaderSandwich} ${submenuActive ? styles.HeaderSandwichClose : ''}`}
              onClick={() => setSubmenuActive(!submenuActive)}
            >
              <span />
              <span />
              <span />
            </button>
            <img src="images/logo-maeztra-novo.png" className={styles.HeaderLogo} />
            <button className={styles.HeaderMobileSearchBtn}>
              <Icon name="icon-search" width={24} height={24} />
            </button>
            <button className={styles.HeaderMobileBagBtn}>
              <Icon name="icon-bag" width={24} height={24} />
            </button>
            <div className={styles.HeaderSearch}>
              <SearchBar />
            </div>
            <div className={styles.HeaderMiddleBtns}>
              <Link href="/" >
                <a className={styles.HeaderBtn}>
                  <Icon name="icon-user" width={14} height={16} />
                  Minha Conta
                </a>
              </Link>
              <Link href="/" >
                <a className={styles.HeaderBtn}>
                  <Icon name="icon-heart" width={18} height={16} />
                  Meus Favoritos
                </a>
              </Link>
              <Link href="/" >
                <a className={styles.HeaderBtn}>
                  <Icon name="icon-bag" width={16} height={16} />
                  Minha Sacola
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.HeaderCatNav}>
          <CategoriesNav />
        </div>
      </div>
      <div className={`${styles.HeaderMobileNav} ${submenuActive ? styles.Active : ''}`}>
        {/* <div className={styles.HeaderMobileNavItem}> */}
          <Link href="">
            <a>
              Minha conta
            </a>
          </Link>
          <Link href="">
            <a>
              Meus Favoritos
            </a>
          </Link>
          <CategoriesNav />
        {/* </div> */}
      </div>
    </>
  );
};

export default Header;
