
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

  function getData() {
    axios.get(datas).then((response) => {
      setState(response.data);
    });
  }
  useEffect(() => getData(), []);
  const text = useRef()
  const getFilterList = (event) => {
   let newText = text.current.value;
    let newData = [...state];
    newData = newData.filter((list) => {
      return list.category.indexOf(newText.toLowerCase()) !== -1;
    });
    setState(newData);
    setMessage(newText)
  };

// const [category, setCategory] = useState(state)
  const getMen = (item) => {
    let newData = [...state];
    const result = newData.filter((curData) => {
      //return curData.category.indexOf === item;
      return curData.category.indexOf(item.toLowerCase())!== -1;
      
    });
    console.log("Hi");
    setState(result);
  };
  const getJewelery = (item) => {
    let newData = [...state];
    const result = newData.filter((curData) => {
      //return curData.category.indexOf === item;
      return curData.category.indexOf(item.toLowerCase())!== -1;
    });
    console.log("Hi");
    setState(result);
  };
  const getElectronics = (item) => {
    let newData = [...state];
    const result = newData.filter((curData) => {
      //return curData.category.indexOf === item;
      return curData.category.indexOf(item.toLowerCase())!== -1;
    });
    console.log("Hi");
    setState(result);
  };
  const getWomen = (item) => {
    let newData = [...state];
    const result = newData.filter((curData) => {
      //return curData.category.indexOf === item;
      return curData.category.indexOf(item.toLowerCase())!== -1;
    });
    console.log("Hi");
    setState(result);
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
