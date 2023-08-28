
import InputMenu from "../InputMenu/InputMenu";
import styles from "./menu.module.scss";
import Buttons from "../Buttons/Buttons";

import Content from "../Content/Content";
import { createContext, useState, useEffect,useRef } from "react";
import axios from "axios";

export const ThemeContext = createContext(undefined);
const Menu = () => {
  const datas = "https://fakestoreapi.com/products";
  const [state, setState] = useState([]);
  const [message, setMessage] = useState('Common');
  const [originalData, setOriginalData] = useState([]);
  
  function getData() {
    axios.get(datas).then((response) => {
      setState(response.data);
      setOriginalData(response.data);
    });
  }
const text = useRef();
  const getFilterList = (event) => {
    let newText = text.current.value;
    if (newText === "") {
      setState(originalData); // Reset the data to original state
      setMessage("Common");
    } else {
      let newData = originalData.filter((list) => {
        return list.category.indexOf(newText.toLowerCase()) !== -1;
      });
      setState(newData);
      setMessage(newText);
    }
  };
  
  useEffect(() => getData(), []);
  const getMen = (item) => {
    const result = originalData.filter((curData) => {
      return curData.category.indexOf(item.toLowerCase()) !== -1;
    });
    console.log("Hi");
    setState(result);
    setMessage(item)
  };

  const getJewelery = (item) => {
    const result = originalData.filter((curData) => {
      return curData.category.indexOf(item.toLowerCase()) !== -1;
    });
    console.log("Hi");
    setState(result);
    setMessage(item)
  };

  const getElectronics = (item) => {
    const result = originalData.filter((curData) => {
      return curData.category.indexOf(item.toLowerCase()) !== -1;
    });
    console.log("Hi");
    setState(result);
    setMessage(item)
  };
  const getWomen = (item) => {
    const result = originalData.filter((curData) => {
      return curData.category.indexOf(item.toLowerCase()) !== -1;
    });
    console.log("Hi");
    setState(result);
    setMessage(item)
  };
 
  const obj = {
    state,
    getFilterList,
    getMen,
    getJewelery,
    getElectronics,
    getWomen,
    text
  };




  return (
    <div className={styles.menu}>
      <ThemeContext.Provider value={obj}>
        <InputMenu />
        {/* <Buttons /> */}
        <Buttons/>
        <h3 className={styles.menu_textMenu}>{message} Images</h3>
        <Content />
      </ThemeContext.Provider>
    </div>
  );
};

export default Menu;
