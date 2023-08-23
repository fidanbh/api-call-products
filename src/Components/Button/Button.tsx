// import { useContext,useState } from "react";
// import { ThemeContext } from "../Menu/Menu";
import styles from "./button.module.scss";

const Button =({name,getCategory})=>{
  

//   const theme = useContext(ThemeContext)
//   const { state } = theme;
//  const [data, setData]= useState(state)
//  const getCategory=(item)=>{
//   const result = state.filter((curData)=>{
//     return curData.category ===item
//     console.log('Hi')
//   })
//   setData(result)
//     }
  return (
    <div>
      <button className={styles.btn} onClick={getCategory}>
      {name}
      </button>
    
    </div>
  );
}
export default Button
