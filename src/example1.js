
import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function Hello(){
  useEffect(function(){
    console.log("hi :)");
    return function(){
      console.log("bye :(");
    }
  },[]);
  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false);
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev+1);
  const onShowingClick = () => setShowing(prev => !prev);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() =>{
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    if(keyword !=="" && keyword.length>6){
      console.log("Search for", keyword);
    }
  },[keyword]);
  useEffect(() => {
    console.log("I run when counter changes");
  },[counter]);
  useEffect(() => {
    console.log("I run when keyword & counter change");
  },[keyword,counter]); 
  return (
    <div>
      <input 
        value = {keyword} 
        onChange = {onChange} 
        type="text" 
        placeholder="Search here..." 
      />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click me</button>
      {showing ? <Hello/> : null}
      <button onClick={onShowingClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;