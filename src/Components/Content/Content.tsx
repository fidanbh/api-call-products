
import { useContext } from "react";
import { ThemeContext } from "../Menu/Menu";

import styles from "./content.module.scss";

const Content = () => {
  const theme = useContext(ThemeContext)
  const { state } = theme;

  return (
    <div className={styles.contentMenu}>
      <div className={styles.content}>
        {state.map((item, index) => (
          <div key={index} className={styles.index}>
            
            <img src={item.image}></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
