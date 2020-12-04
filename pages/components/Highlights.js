import Link from 'next/link';
import styles from '../../styles/components/Highlights.module.scss';
import Carousel from './Carousel';

const Highlights = () => {

  return (
    <>
      <Carousel showBullets={true} arrowSpace={100}>
        <div className={styles.HighlightItem}>
          <img src="/images/banner.png" />
          <div className={styles.HighlightContent}>
            <p>
              <b>
                Promoções de Outono
              </b>
              Confiras os melhores looks para combinar
              <br />
              com você nesse Outono
            </p>
            <Link href="/">
              <a className={`${styles.uButtonPrimary}`}>
                Conferir
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.HighlightItem}>
          <img src="/images/banner.png" />
          <div className={styles.HighlightContent}>
            <p>
              <b>
                Promoções de Outono
              </b>
              Confiras os melhores looks para combinar
              <br />
              com você nesse Outono
            </p>
            <Link href="/">
              <a className={`${styles.uButtonPrimary}`}>
                Conferir
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.HighlightItem}>
          <img src="/images/banner.png" />
          <div className={styles.HighlightContent}>
            <p>
              <b>
                Promoções de Outono
              </b>
              Confiras os melhores looks para combinar
              <br />
              com você nesse Outono
            </p>
            <Link href="/">
              <a className={`${styles.uButtonPrimary}`}>
                Conferir
              </a>
            </Link>
          </div>
        </div>
      </Carousel>
    </>
  )
};

export default Highlights;
