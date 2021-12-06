import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { addItem, deleteItem, updateItem, removeTodo } from '../actions/index';
import "./style.css";

const Todo = () => {
  const [inputData, setInputData] = useState('');
  const list = useSelector((state) => state.reducer.list);
  const dispatch = useDispatch();
    return (
        <>
          <div className="main-div">
              <div className="child-div">
                  <h1>TODO APP</h1>
                  <div className="additem">
                      <input type="text" placeholder="Add item..."
                      value= {inputData} 
                      onChange= {(event) => setInputData(event.target.value)}
                      />
                      <i className="fa fa-plus add-btn" onClick={() => dispatch(addItem(inputData), setInputData(''))}></i>
                  </div>
                  <div className="showItems">
                      {
                          list.map((elem) =>{
                              return (
                                <div className="eachItem" key={elem.id}>
                                   <h3>{elem.data}</h3>
                                   <div className="todo-btn">
                                      <i className="far fa-edit add-btn" onClick={() => dispatch(updateItem(elem.id), setInputData(''))}></i>
                                      <i className="far fa-trash-alt add-btn" onClick={() => dispatch(deleteItem(elem.id))}></i>
                                   </div>
                               </div>
                              )

                          })
                      }

                  </div>
                  <div className="showItem">
                      <button className="btn effect04" data-sm-link-text="Remove All"  onClick={() => dispatch(removeTodo())}><span>Check List</span></button>
                  </div>
              </div>
          </div>
        </>
    )
}

export default Todo

