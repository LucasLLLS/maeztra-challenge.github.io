import styles from '../../styles/components/Product.module.scss';
import Carousel from './Carousel';

const ProductsCarousel = () => {
  const products = [
    {
      name: 'Faux Suede Mini Skirt',
      description: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
      price: 'R$ 500,00',
      thumb: 'images/308x381-1.png',
      skus: [
        {
          type: 'color',
          name: 'blue',
          value: '#DEAC71',
        },
        {
          type: 'color',
          name: 'red',
          value: '#D37164',
        },
        {
          type: 'color',
          name: 'yellow',
          value: '#6497D3',
        },
        {
          type: 'color',
          name: 'blue',
          value: '#3C3B79',
        },
      ]
    },
    {
      name: 'Ruched Rose Print Mini Skirt',
      description: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
      price: 'R$ 399,00',
      thumb: 'images/308x381.png',
      skus: [
        {
          type: 'color',
          name: 'blue',
          value: '#1C1A19',
        },
        {
          type: 'color',
          name: 'red',
          value: '#D84E4B',
        },
        {
          type: 'color',
          name: 'yellow',
          value: '#CFC9B0',
        },
        {
          type: 'color',
          name: 'blue',
          value: '#EAE9E5',
        },
      ]
    },
    {
      name: 'Faux Suede Mini Skirt',
      description: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
      price: 'R$ 500,00',
      thumb: 'images/308x381-1.png',
      skus: [
        {
          type: 'color',
          name: 'blue',
          value: '#DEAC71',
        },
        {
          type: 'color',
          name: 'red',
          value: '#D37164',
        },
        {
          type: 'color',
          name: 'yellow',
          value: '#6497D3',
        },
        {
          type: 'color',
          name: 'blue',
          value: '#3C3B79',
        },
      ]
    },
    {
      name: 'Ruched Rose Print Mini Skirt',
      description: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
      price: 'R$ 399,00',
      thumb: 'images/308x381.png',
      skus: [
        {
          type: 'color',
          name: 'blue',
          value: '#1C1A19',
        },
        {
          type: 'color',
          name: 'red',
          value: '#D84E4B',
        },
        {
          type: 'color',
          name: 'yellow',
          value: '#CFC9B0',
        },
        {
          type: 'color',
          name: 'blue',
          value: '#EAE9E5',
        },
      ]
    },
    {
      name: 'Faux Suede Mini Skirt',
      description: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
      price: 'R$ 500,00',
      thumb: 'images/308x381-1.png',
      skus: [
        {
          type: 'color',
          name: 'blue',
          value: '#DEAC71',
        },
        {
          type: 'color',
          name: 'red',
          value: '#D37164',
        },
        {
          type: 'color',
          name: 'yellow',
          value: '#6497D3',
        },
        {
          type: 'color',
          name: 'blue',
          value: '#3C3B79',
        },
      ]
    },
    {
      name: 'Faux Suede Mini Skirt',
      description: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
      price: 'R$ 500,00',
      thumb: 'images/308x381-1.png',
      skus: [
        {
          type: 'color',
          name: 'blue',
          value: '#DEAC71',
        },
        {
          type: 'color',
          name: 'red',
          value: '#D37164',
        },
        {
          type: 'color',
          name: 'yellow',
          value: '#6497D3',
        },
        {
          type: 'color',
          name: 'blue',
          value: '#3C3B79',
        },
      ]
    },
    {
      name: 'Faux Suede Mini Skirt',
      description: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
      price: 'R$ 500,00',
      thumb: 'images/308x381-1.png',
      skus: [
        {
          type: 'color',
          name: 'blue',
          value: '#DEAC71',
        },
        {
          type: 'color',
          name: 'red',
          value: '#D37164',
        },
        {
          type: 'color',
          name: 'yellow',
          value: '#6497D3',
        },
        {
          type: 'color',
          name: 'blue',
          value: '#3C3B79',
        },
      ]
    },
  ];
  return (
    <>
      <div className={styles.ProductCarousel}>
        <Carousel itemsPerPage={5}>
          {
            products.map((product, key) => (
              <div className={styles.Product} key={key}>
                <img src={product.thumb} className={styles.ProductThumb} />
                <div className={styles.ProductSkusBox}>
                  {
                    product.skus.map((sku) => (
                      <>
                        {
                          sku.type === 'color' && (
                            <button className={styles.ProductSkuColor} style={{background: sku.value}} />
                          )
                        }
                      </>
                    ))
                  }
                </div>
                <div className={styles.ProductPrice}>
                  {product.price}
                </div>
                <p className={styles.ProductName}>
                  {product.name}
                </p>
                <p className={styles.ProductDescription}>
                  {product.description}
                </p>
                <button className={`${styles.uButtonPrimary} ${styles.ProductAddToCart}`}>
                  Adicionar
                </button>
              </div>
            ))
          }
        </Carousel>
      </div>
      <div className={styles.ProductCarouselMobile}>
        <Carousel itemsPerPage={1}>
          {
            products.map((product) => (
              <div className={styles.Product}>
                <img src={product.thumb} className={styles.ProductThumb} />
                <div className={styles.ProductSkusBox}>
                  {
                    product.skus.map((sku) => (
                      <>
                        {
                          sku.type === 'color' && (
                            <button className={styles.ProductSkuColor} style={{background: sku.value}} />
                          )
                        }
                      </>
                    ))
                  }
                </div>
                <div className={styles.ProductPrice}>
                  {product.price}
                </div>
                <p className={styles.ProductName}>
                  {product.name}
                </p>
                <p className={styles.ProductDescription}>
                  {product.description}
                </p>
                <button className={`${styles.uButtonPrimary} ${styles.ProductAddToCart}`}>
                  Adicionar
                </button>
              </div>
            ))
          }
        </Carousel>
      </div>
    </>
  );
};

export default ProductsCarousel;
