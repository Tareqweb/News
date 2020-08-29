import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import News from './components/News/News';

function App() {
  const [articles,setArticles]=useState([]);
  useEffect(()=>{
    const url=('https://newsapi.org/v2/top-headlines?country=us&apiKey=2136f28c5ecc4eeb83581668bb1f9574');
    fetch(url)
    .then(res=>res.json())
    .then(data=>setArticles(data.articles))
  },[])
  return (
    <div>
   <h2>Headlines:{articles.length}</h2>
   {
     articles.map(articles=><News article={articles}></News>)
   }

    </div>
  );
}

export default App;
