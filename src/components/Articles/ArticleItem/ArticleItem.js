import './ArticleItem.css';

function ArticleItem(props) {
    return (
        <div className='article-item'>
            <div className='article-item__description'>
                <h1>{props.title}</h1>
                <div className='article-item__price'>${props.amount}</div>
            </div>
        </div>
    );

}

export default ArticleItem;