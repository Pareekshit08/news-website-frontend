import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginModal from "./LoginModal";

function List(){
    const navigate = useNavigate();
    const [articles,setArticles] = useState([]);

    useEffect(()=>{
        const fetchit = async () =>{
            const url = `https://news-web-backend-7lre.onrender.com/news/search`;
            const response = await axios.get(url,{withCredentials:true,validateStatus:false});
            if(response.status == 200){
              console.log("Data fetched successfully");
              const ListAll = response.data.articles;
              console.log("set");
              setArticles(ListAll);
            }else{
              console.log("Error fetching data");
              return;
            }
        }
        fetchit();
    },[]);  
    
    
  
    return (
      // <div className="news-container">
      //   {!articles?(<p>Loading....</p>):(articles.map(function(obj){
      //    return ( <p>{obj.title}</p> )
      //   }))}
      // </div>
      
      <div className="news-container">
      <h1 className="news-header">Latest News</h1>
      <div className="articles">
        {articles.map((article, index) => (
          <div className="article-card" key={index}>
            <img
              src={article.urlToImage}
              alt="Article"
              className="article-image"
            />
            <div className="article-content">
              <h2 className="article-title">{article.title}</h2>
              <p className="article-description">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="read-more"
              > w
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>

    );
  };

export default List;
