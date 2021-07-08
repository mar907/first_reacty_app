import React, { useState } from 'react';

import NewArticle from '../NewArticle/NewArticle.js';
import ArticleList from '../Articles/ArticleList.js';



    const DUMMY_ARTICLE = [
        {
            id: 'a1',
            title: 'Diario de mascaras',
            amount: 990,
            date: new Date(2021, 3, 11),
        },
        {
            id: 'a2',
            title: 'El Nuevo Congreso Argentino',
            amount: 1092,
            date: new Date(2021, 10, 12),
        },
        {
            id: 'a3',
            title: 'Perfiles de Rosario',
            amount: 780,
            date: new Date(2022, 11, 1),
        },
        {
            id: 'a4',
            title: 'Diarios del capital Hipolito Parrilla ',
            amount: 840,
            date: new Date(2021, 8, 7),
        },
        {
            id: 'a5',
            title: 'Archivo del crimen',
            amount: 590,
            date: new Date(3, 11, 2021)
        },

    ];

    const AppCapital = () =>{
        const [articles, setArticles] = useState (DUMMY_ARTICLE);
    
    const addArticleHandler = (article) => {
        setArticles ((prevArticles) =>{
            return [article,... prevArticles];
        });

    };
    
    return (
        <div>
            <NewArticle onAddArticle={addArticleHandler} />
            <ArticleList items={articles} />
        </div>
    );
}

export default AppCapital;