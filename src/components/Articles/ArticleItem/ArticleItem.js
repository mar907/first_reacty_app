import'./ArticleItem.css';

 function ArticleItem(props){
     return(
         <div className= 'article- item'>
         <div className= 'article- item_description'>
             <h1>{props.title}</h1>
             <div className= 'article- item_price'></div>
         </div>
         </div>
     );

 }

 export default ArticleItem;