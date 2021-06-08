import React from 'react'
import ArticleItem from './ArticleItem/ArticleItem'

function ArticleList({ articles, title }) {
    return (
        /*    React.createElement('div', null, [
               React.createElement('h3', null, [title])
           ]) */
        < div >
            <h3>{title}</h3>
            <ArticleItem
                title={articles[0].title}
                amount={articles[0].amount}
            />
            <ArticleItem
                title={articles[1].title}
                amount={articles[1].amount}
            />
            <ArticleItem
                title={articles[2].title}
                amount={articles[2].amount}
            />
            <ArticleItem
                title={articles[3].title}
                amount={articles[3].amount}
            />
        </div >
    );
}

export default ArticleList;


