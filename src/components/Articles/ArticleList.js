import ArticleItem from './ArticleItem/ArticleItem';
import ArticleFilter from './NewArticleFilter/ArticleFilter';
import { useState } from 'react';

const ArticleList = (props) => {
    const [enteredYear, setEnteredYear] = useState('');

    return (
        /*    React.createElement('div', null, [
               React.createElement('h3', null, [title])
           ]) */
        <div style={{width: '50rem', margin: '0 auto' }}>
            <div>
                <ArticleFilter
                    enteredYear={enteredYear}
                    setEnteredYear={setEnteredYear}
                />
            </div>
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
        </div>
    );
};

export default ArticleList;


