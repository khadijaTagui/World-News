import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import NewsItem from "./NewsItem";

const NewsBoard = () => {
    const [articles, setArticles] = useState([]);

    const { category } = useParams();

    
    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=608f71cd6a384269bbbed5ea2a5d73b2`;

        fetch(url).then(response => response.json()).then(data => setArticles(data.articles));
    }, [category]);


    return (
        <div>
            <h2 className="text-center">World <span className=" badge bg-danger">News</span></h2>

            {articles.map((news, index) => {
                return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
            })}
        </div>
    );
};

// Exportation du composant NewsBoard
export default NewsBoard;