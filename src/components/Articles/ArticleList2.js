import React from "react";

import ArticleItem from "./ArticleItem/ArticleItem";
import './ArticleList2.css';

const ArticleList2 =(props) => {
    if (props.items.length === 0) {
        return <h2 className= 'article-list2__fallback'>No se encontraron articulos</h2>;
    }
    

return (
    <ul className= 'article-list2'>
    {props.items.map((article) => (
    <ArticleItem 
    key={article.id}
    title= {article.title}
    amount= {article.amount}
    date= {article.date}
    />
    ))}
</ul>
)
};

export default ArticleList2;