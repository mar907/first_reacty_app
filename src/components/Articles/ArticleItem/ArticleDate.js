import './ArticleDate.css';

const ArticleDate = (props) => {
    const month = props.date.toLocaleString ('en-US',{month : 'long'});
    const day = props.date.toLocaleString ('en-US',{day: '2-digit'});
    const year = props.date.getFullYear();
    return(
        <div className ="article-date">
            <div className="article-date__month"> {month} </div>
            <div className="article-date__day"> {day} </div>
            <div className="article-date__year"> {year} </div>
        </div>
    );
}

export default ArticleDate;