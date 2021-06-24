import React ,{useState} from 'react';
import './ArticleForm.css';


const ArticleForm = (props) => {
    const [enteredTitle, setEnteredTitle]= useState ('');
    const [enteredAmount, setEnteredAmount]= useState ('');
    const [enteredDate, setEnteredDate]= useState ('');


    const titleChangeHandler =(event) =>{
        setEnteredTitle (event.target.value);
    };

    const amountChangeHandler =(event) =>{
        setEnteredAmount (event.target.value);
    };

    const dateChangeHandler =(event) =>{
        setEnteredDate (event.target.value);
    };

    const submitHandler = (event) =>{
        event.preventDefault();
    
    
    const articleData ={
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date (enteredDate)
    };

    props.onSaveArticleData(articleData);
    setEnteredTitle ('');
    setEnteredAmount ('');
    setEnteredDate ('');
};

    return (
    <form onSubmit={submitHandler}>
        <div className='new-article__controls'>
            <div className='new-article__control'>
                <label>Titulo</label>
                <input 
                type='text' 
                value= {enteredTitle}
                onChange= {titleChangeHandler}/>
            </div>
            <div className='new-article__control'>
                <label>Precio</label>
                <input 
                type='number'
                 min= '0.01' 
                 step= '0.01'
                 value={enteredAmount}
                 onChange= {amountChangeHandler}/>
            </div>
            <div className='new-article__control'>
                <label>Fecha</label>
                <input 
                type= 'date'
                 min='2021-8-24' 
                 max= '2025-3-22'
                 value= {setEnteredDate}
                 onChange= {dateChangeHandler}
                 />
            </div>
           </div> 
           <div className= 'new-article__actions'>
               <button type= 'submit'>Agregar Articulo</button>
           </div>
    </form>
    );
};

        export default ArticleForm;