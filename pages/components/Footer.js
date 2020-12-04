import Link from 'next/link';
import { useState } from 'react';
import styles from '../../styles/components/Footer.module.scss';
import Icon from './Icons';

const Footer = () => {
  const [actives, setActives] = useState(null);
  const toggleActives = (num) => {
    if (!actives) return setActives(`${num}`);

    if (actives.match(num)) {
      setActives(actives.replace(num, ''));
    } else {
      setActives(`${actives}${num}`);
    }
  };

  return (
    <div className={styles.Footer}>
      <div className={styles.FooterLinks}>
        <div className={styles.FooterLinksBlock}>
          <b>
            Informações
          </b>
          <button
            onClick={() => toggleActives(1)}
            className={`${actives && actives.match('1') ? styles.isActive : ''}`}
          >
            Informações
          </button>
          <div
            className={`${styles.FooterLinksContent} ${actives && actives.match('1') ? styles.isActive : ''}`}
          >
            <Link href="">
              <a>
                Quem Somos
              </a>
            </Link>
            <Link href="">
              <a>
                Prazo de Envio
              </a>
            </Link>
            <Link href="">
              <a>
                Trocas e Devoluções
              </a>
            </Link>
            <Link href="">
              <a>
                Promoções e Cupons
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.FooterLinksBlock}>
          <b>
            Minha Conta
          </b>
          <button
            onClick={() => toggleActives(2)}
            className={`${actives && actives.match('2') ? styles.isActive : ''}`}
          >
            Minha Conta
          </button>
          <div
            className={`${styles.FooterLinksContent} ${actives && actives.match('2') ? styles.isActive : ''}`}
          >
            <Link href="">
              <a>
                Minha Conta
              </a>
            </Link>
            <Link href="">
              <a>
                Meus Pedidos
              </a>
            </Link>
            <Link href="">
              <a>
                Cadastre-se
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.FooterLinksBlock}>
          <b>
            Onde nos Encontrar
          </b>
          <button
            onClick={() => toggleActives(3)}
            className={`${actives && actives.match('3') ? styles.isActive : ''}`}
          >
            Onde nos Encontrar
          </button>
          <div
            className={`${styles.FooterLinksContent} ${actives && actives.match('3') ? styles.isActive : ''}`}
          >
            <Link href="">
              <a>
                Lojas
              </a>
            </Link>
            <Link href="">
              <a>
                Endereço
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.FotterU}>
        <div className={styles.uContainer}>
          <div className={styles.FooterUBlock}>
            <Link href="">
              <a>
                <Icon name="icon-facebook" width={32} height={32} />
              </a>
            </Link>
            <Link href="">
              <a>
                <Icon name="icon-instagram" width={32} height={32} />
              </a>
            </Link>
            <Link href="">
              <a>
                <Icon name="icon-linkedin" width={32} height={32} />
              </a>
            </Link>
            <Link href="">
              <a>
                <Icon name="icon-youtube" width={32} height={32} />
              </a>
            </Link>
          </div>
          
          <div className={styles.FooterUBlock}>
            <div href="">
              <span>
                <Icon name="icon-visa" width={32} height={32} />
              </span>
            </div>
            <div href="">
              <span>
                <Icon name="icon-mastercard" width={32} height={32} />
              </span>
            </div>
            <div href="">
              <span>
                <Icon name="icon-visa" width={32} height={32} />
              </span>
            </div>
            <div href="">
              <span>
                <Icon name="icon-mastercard" width={32} height={32} />
              </span>
            </div>
          </div>

          <div className={styles.FooterUBlock}>
            <div>
              <span className={styles.FooterLogos}>
                <small>
                  Powered by:
                </small>
                <img src="images/vtex-footer.png" />
              </span>
            </div>
            <div>
              <span className={styles.FooterLogos}>
                <small>
                  Developed by:
                </small>
                <img src="images/maestra-footer.png" />
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
