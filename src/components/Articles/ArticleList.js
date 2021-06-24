import React from 'react'
import ArticleItem from './ArticleItem/ArticleItem'

const ArticleList =(props) => {
    return (
        /*    React.createElement('div', null, [
               React.createElement('h3', null, [title])
           ]) */
        < div >
            <ArticleItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />
            <ArticleItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            />
            <ArticleItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            />
            <ArticleItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
            />
        </div >
    );
};

export default ArticleList;


