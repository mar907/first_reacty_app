import React from "react";

import ArticleForm from "./ArticleForm";
import './NewArticle.css';

const NewArticle =(props) => {
    const saveArticleDataHandler = (enteredArticleData) => {
        const articleData = {
        ...enteredArticleData,
        id: Math.random().toString()
        };
        props.onAddArticle(articleData);
    };
    return (
    <div className ="new-article" >
        <ArticleForm onSaveArticleData = {saveArticleDataHandler}/>

    </div>
    );
}
    



export default NewArticle;