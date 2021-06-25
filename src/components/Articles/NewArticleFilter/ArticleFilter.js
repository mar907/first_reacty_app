import './ArticleFilter.css';

const ArticleFilter = ({enteredYear, setEnteredYear}) => {

    const YearChangeHandler = (event) => {
        setEnteredYear(event.target.value);
    };

    return (
        <div className='article-filter'>
            <div className='article-filter__control'>
                <label>Filtrar por año</label>
                <select value={enteredYear} onChange={YearChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ArticleFilter;