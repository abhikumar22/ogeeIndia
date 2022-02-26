import { useState } from "react";
import styles from "./NavigationComponents.module.scss";

const NavigationComponent = () => {

  const [isBurgerIconActive, setBurgerIcon] = useState(false);

  const toggleBurgerIcon = () => {
    setBurgerIcon(!isBurgerIconActive);
  }


  return (
    <div className={styles.container}>
      <div className={styles.logo__container}>
        Ogee India
      </div>
      <div className={`${styles.options__container}  ${isBurgerIconActive ? styles.active : ``}`}>
        <div>
          Home
        </div>

        <div>
          Products
        </div>

        <div>
          Testimonials
        </div>

        <div>
          Our Team
        </div>

        <div>
          Contact Us
        </div>
      </div>
      <div className={`${styles.burger__icon} ${isBurgerIconActive ? styles.active : ``}`} onClick={toggleBurgerIcon}>
        <img
          src={isBurgerIconActive ? './close_icon.png' : './burger_icon.png'}
        />
      </div>
    </div>
  );
};

export default NavigationComponent;
