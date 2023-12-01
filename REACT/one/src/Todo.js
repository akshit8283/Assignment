import React, { useState, useRef } from 'react'

const Todo = () => {
    const input = useRef()
    const [Todo, setTodo] = useState([])
    const addTask = async (output) => {  

        const deleteitem =(i)=>{
            const newItem =[...Todo];
            newItem.splice(i,1);
                };
                setTodo(newItem);
                // console.log('delete item', i)
        await setTodo(prevArray => [...prevArray, input.current.value])
        input.current.value = ''
        console.log(Todo);              
    }


 
    return <>
        <div className='text-center'>
            <input className='bg-success 'style={{margin:10}} ref={input} type="text" /><br/><button className='btn btn-danger' style={{margin:10}} onClick={() => {
                addTask(Todo)
            }}>Add</button>

        </div>
        <div className='text-center ' >
            {Todo.map((output) => {
                return  (
                    <h1 className=' bg-warning' style={{fontsize: 100}}>{output}<button onClick={() =>{
                        deleteitem(i)}}> <i class="fa-solid fa-pencil"></i> </button><i class="fa-solid fa-trash"></i></h1>
                )
            })} 
        </div>


  
    </>
}

export default Todo  