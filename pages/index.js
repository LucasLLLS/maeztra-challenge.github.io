import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Header from './components/Header';
import Highlights from './components/Highlights';
import Icon from './components/Icons';
import ProductsCarousel from './components/ProductsCarousel';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Modal from './components/Modal';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const brands = [
    {
      logo: 'cHLLxR4.png@2x.png',
      name: 'Melissa'
    },
    {
      logo: 'PN0nOAY.png@2x.png',
      name: 'Zara'
    },
    {
      logo: 'JOTNQgl.png@2x.png',
      name: 'Forever 21'
    },
    {
      logo: 'Qoc0YF7.png@2x.png',
      name: 'Comma'
    },
    {
      logo: 'qZ1WvYA.png@2x.png',
      name: 'Ann Taylor'
    },
  ];
  return (
    <>
      {
        isModalOpen && (
          <Modal onModalClose={() => setIsModalOpen(false)}>
            <div className={styles.HomeModal}>
              <img src="images/modal-image.png" />
              <div className={styles.HomeModalContent}>
                <Icon name="icon-envelope" width={32} height={32} />
                <p className={styles.HomeWelcomeText}>
                  Bem Vindo à MAEZTRA
                </p>
                <p className={styles.HomeModalReceiveText}>
                  Receba em Primeira mão
                  <br />
                  <b>desconto e ofertas exclusivas</b>
                </p>
                <input placeholder="Digite seu E-mail" />
                <button className={styles.uButtonPrimary}>
                  Enviar
                  <Icon name="icon-paper-airplane" width={12} height={20} />
                </button>
              </div>
            </div>
          </Modal>
        )
      }
      <div className={styles.container}>
        <Header />
        <Highlights />
        <div className={styles.uContainer}>
          <p className={styles.HomeWhy}>
            Por que comprar na Maeztra?
          </p>
          <div className={styles.HomeAdvatages}>
            <div>
              <img src="images/icon-world.png" />
              <p>
                <b>
                  Produtos importados
                </b>
                Produto de Alta Qualidade
              </p>
            </div>
            <div>
              <img src="images/icon-warehouse.png" />
              <p>
                <b>
                  Estoque no Brazil
                </b>
                Produtos mais perto de você!
              </p>
            </div>
            <div>
              <img src="images/icon-cicle.png" />
              <p>
                <b>
                  Trocas Garantidas
                </b>
                Trocas em até 48 horas.
              </p>
            </div>
            <div>
              <img src="images/icon-tag.png" />
              <p>
                <b>
                  Ganhe 5% off
                </b>
                Pagando à vista no Cartão
              </p>
            </div>
            <div>
              <img src="images/icon-truck.png" />
              <p>
                <b>
                  Frete Grátis
                </b>
                Em compras acima de R$ 499,00
              </p>
            </div>
          </div>

          <div className={styles.HomeBrands}>
            <p className={styles.uTitle}>
              Marcas Parceiras
            </p>
            <div className={styles.HomeBrandsName}>
              {
                brands.map(({ logo, name }, key) => (
                  <div key={key}>
                    <img src={`images/${logo}`} alt={name} />
                  </div>
                ))
              }
            </div>
          </div>

          <div className={styles.HomeProducts}>
            <p className={styles.uTitle}>
              As mais Pedidas
            </p>
            <ProductsCarousel />
          </div>

          <div className={styles.HomeSection}>
            <p>
              <b>
                Lorem ipsum 
              </b>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque placerat consequat. Neque arcu mi iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat aliquet. Sed sed pellentesque porttitor phasellus donec condimentum sit sapien.
            </p>
            <img src="images/1vLCv01.png" />
          </div>
        </div>
        <div className={styles.HomeNewsletter}>
          <div className={styles.HomeNewsletterWrapper}>
            <p>
              Recebe Nossa Newsletter
            </p>
            <Newsletter />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
};

export default Home;
