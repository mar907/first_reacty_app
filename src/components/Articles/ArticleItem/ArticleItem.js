import React, {useState} from 'react';
import './ArticleItem.css';
import ArticleDate from './ArticleDate';

const ArticleItem = (props)=> {
    const [title, setTitle] = useState(props.title);
    console.log('ArticleItem evaluated by React')

    const clickHandler =() =>{
        setTitle('Updated!');
        console.log (title);
    };
    return (
       
        <div className='article-item'>
            <ArticleDate date= {props.date} />
            <div className='article-item__description'>
                <h1>{title}</h1>
                <div className='article-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </div>
    );

}

export default ArticleItem;