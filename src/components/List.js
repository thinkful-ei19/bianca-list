import React from 'react';
import './List.css';

export default function List(props) {
    const groceries = props.items.map((groceries, index) => {
       return (
       <div key={index}>
       <li>{groceries}</li>
       <button onClick={() => props.deleteItem(index)}>Done</button>
        </div>
       )
    })
   
    return (
         <ol>
             {groceries}
            
        </ol>
    )
} 