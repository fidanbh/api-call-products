import { useContext, useState } from "react";
import { ThemeContext } from "../Menu/Menu";
import styles from "./buttons.module.scss";
import Button from "../Button/Button";

const Buttons = () => {
  const theme = useContext(ThemeContext);
  const { state,getMen,getJewelery,getElectronics,getWomen} = theme;

  return (
    <div className={styles.btns}>
      {/* <Button className={styles.btns_button} /> */}
      <Button name="Men's clothing" getCategory={() => getMen("men's clothing")} />
      <Button name="Jewelery" getCategory={() => getJewelery("Jewelery")} />
      <Button
        name="Electronics"
        getCategory={() => getElectronics("Electronics")}
      />
      <Button name="Women's clothing" getCategory={() => getWomen("Women")} />
    </div>
  );
};

export default Buttons;
