import ArticleItem from './ArticleItem/ArticleItem';
import ArticleFilter from './NewArticleFilter/ArticleFilter';
import { useState } from 'react';

const ArticleList = (props) =>{
    const [filteredYear, setFilteredYear]= useState ('2020');

const filterChangeHandler = (selectedYear) => {
    setFilteredYear (selectedYear);
};
const filteredArticles= props.items.filter (article=> {
    return article.date.getFullYear().toString()=== filteredYear;
} );


    return (
        /*    React.createElement('div', null, [
               React.createElement('h3', null, [title])
           ]) */
        <div style={{width: '50rem', margin: '0 auto' }}>
            <div>
                <ArticleFilter
                    selected= {FilteredYear}
                    onChangeFilter={filterChangeHandler}
                />
            
            {articlesContent}
            </div>
         </div>   
    );
 };
 
 export default ArticleList;


