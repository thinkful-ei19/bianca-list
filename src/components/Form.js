import React from 'react';

export default function Form(props) {
    
    return (
        <div>
            <h2>{props.title}</h2>

            <form onSubmit={(event) => {
                event.preventDefault()

                let inputValue = event.target.userInput.value


                props.add(inputValue)

                event.target.userInput.value=''

            }}>
            <input type="text" name="userInput" />

            <button>Submit</button>
            </form>
        </div>
    )
};