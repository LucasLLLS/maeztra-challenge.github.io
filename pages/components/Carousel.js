import { useState, useEffect } from 'react';
import Swipe from 'react-easy-swipe';
import styles from '../../styles/components/Carousel.module.scss';
import Icon from './Icons';

const Carousel = ({
  children,
  itemsPerPage,
  showBullets,
  arrowSpace
}) => {
  const [position, setPosition] = useState(0);
  const [bullets, setBullets] = useState(null);
  let touchStore;
  const slideWidth = (100 / (itemsPerPage || 1));
  const carouselWidth = (children.length * slideWidth);
  const movePercentage = (100 / children.length);
  const numberOfPages = (Math.ceil(children.length / (itemsPerPage || 1)));

  const goNextPosition = () => {
    if (position < (numberOfPages - 1)) {
      setPosition(position + 1);
    } else {
      setPosition(0);
    }
  };

  useEffect(() => {
    if (showBullets) {
      const bulletsArray = [];

      for (let i = 0; i < numberOfPages; i++) {
        bulletsArray.push({
          index: i,
          active: (i === 0)
        })
      }
      setBullets(bulletsArray);
    }
  }, [numberOfPages]);
  
  const goPrevPosition = () => {
    if (position !== 0) {
      setPosition(position - 1);
    } else {
      setPosition(numberOfPages - 1);
    }
  };

  return (
    <>
    {
      Array.isArray(children) ? (
        <div className={styles.CarouselWrapper}>
          <div
            className={styles.Carousel}
            style={{
              width: `${carouselWidth}%`,
              transform: `translate(-${position * movePercentage}%, 0)`
            }}
          >
            {children.map((item, key) => {
              return (
                <div
                  key={`slide--${key}`}
                  className={styles.CarouselSlide}
                  style={{
                    width: `${slideWidth}%`,
                  }}
                >
                  {item}
                </div>
              )
            })}
          </div>
          <div className={styles.CarouselBullets}>
            {
              Array.isArray(bullets) && bullets.map(({ index }) => (
                <button
                  className={(position === index) ? styles.isActive : ''}
                  onClick={() => setPosition(index)}
                />
              ))
            }
          </div>
          <button
            className={`${styles.CarouselArrow} ${styles.CarouselArrowLeft}`}
            onClick={goPrevPosition}
            style={{
              left: `${arrowSpace ? arrowSpace : 10}px`
            }}
          >
            <Icon name="icon-arrow-left" width={19} height={32} />
          </button>
          <button
            className={`${styles.CarouselArrow} ${styles.CarouselArrowRight}`}
            onClick={goNextPosition}
            style={{
              right: `${arrowSpace ? arrowSpace : 10}px`
            }}
          >
            <Icon name="icon-arrow-right" width={19} height={32} />
          </button>
          <button
            className={`${styles.CarouselArrow} ${styles.CarouselArrowLeftMobile}`}
            onClick={goPrevPosition}
          >
            <Icon name="icon-arrow-left" width={19} height={32} />
          </button>
          <button
            className={`${styles.CarouselArrow} ${styles.CarouselArrowRightMobile}`}
            onClick={goNextPosition}
          >
            <Icon name="icon-arrow-right" width={19} height={32} />
          </button>
        </div>
      ) : (
        <>
          {children}
        </>
      )
    }
    </>
  )
};

export default Carousel;
