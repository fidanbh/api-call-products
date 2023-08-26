import { AiOutlineSearch } from "react-icons/ai";
import styles from "./input.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../Menu/Menu";

const InputMenu = () => {
  const theme = useContext(ThemeContext)
  const { getFilterList,text} = theme;
 
  return (
    <div className={styles.input}>
      <div >
        <input placeholder="write your search" className={styles.input_search} ref={text} ></input>
      </div>
      <div className={styles.input_btn}>
        <button onClick={()=>getFilterList(event)}>
          <AiOutlineSearch className={styles.input_btn_icon}  />
        </button>
      </div>
    </div>
  );
};

export default InputMenu;
