import ArticleFilter from './NewArticleFilter/ArticleFilter';
import ArticleList2 from './ArticleList2';
import { useState } from 'react';

const ArticleList = (props) =>{
    const [filteredYear, setFilteredYear]= useState ('2020');

const filterChangeHandler = (selectedYear) => {
    setFilteredYear (selectedYear);
};
const filteredArticles= props.items.filter ((article)=> {
    return article.date.getFullYear().toString()=== filteredYear;
} );


    return (
        /*    React.createElement('div', null, [
               React.createElement('h3', null, [title])
           ]) */
        <div style={{width: '50rem', margin: '0 auto' }}>
            <div>
                <ArticleFilter
                    selected= {filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
            
            <ArticleList2 items ={filteredArticles}/>
            </div>
         </div>   
    );
 };
 
 export default ArticleList;


