import NavigationComponent from "../../components/NavigationComponent";
import styles from './HomePageTemplate.module.scss';

const HomePageTemplate = () => {
    return (
        <div className={styles.container}>
           <NavigationComponent/>
        </div>
    )
};

export default HomePageTemplate;