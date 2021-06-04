import ArticleItem from './ArticleItem/ArticleItem'

function ArticleList({article, title, description}){
    return
    <div>
        <h3>{title}</h3>
        <ArticleItem
           title={article[o].title}
           amount={article[0].amount} />
    </div>
}