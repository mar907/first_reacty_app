import React, {useState} from 'react';
import './ArticleItem.css';
import ArticleDate from './ArticleDate';

const ArticleItem = (props)=> {
    return (
       <li>
        <div className='article-item'>
            <ArticleDate date= {props.date} />
            <div className='article-item__description'>
                <h1>{props.title}</h1>
                <div className='article-item__price'>${props.amount}</div>
            </div>
        </div>
        </li>
    );

};

export default ArticleItem;