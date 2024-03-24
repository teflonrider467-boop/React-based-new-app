import './App.css';
import News from "./News";
import { useEffect, useState } from 'react';

export default function App() {

  let [Articles, setArticles] = useState([]);
  let [Category, setCategory] = useState("india");

  useEffect(()=>{
    fetch(`https://newsapi.org/v2/everything?q=${Category}&from=2023-12-26&to=2023-12-25&apiKey=751416c4b408499e9d536de309a31f43`)
    .then((response)=>response.json())
    .then((data)=>{
      setArticles(data.articles);
      console.log(data.articles);
    })
    .catch((err)=>{
      console.log(err);
    })
  }, [Category])
  return (
    <div className="App">
      <header className='header'>
        <h1>News App</h1>
        <input type='text' onChange={(event)=>{
          if (event.target.value !== ""){
            setCategory(event.target.value);
          }
          else{
            setCategory("india");
          }
        }} placeholder='Search News'></input>
      </header>
      <section className='news-articles'>
        {
          Articles.length !== 0?
          Articles.map((article)=>
          {
            return (
            <News article = {article}/>
            ) 
          })
          :
          <h3>No News Found for searched text</h3>
        }
      </section>
    </div>
  );
}


// API key : 751416c4b408499e9d536de309a31f43
