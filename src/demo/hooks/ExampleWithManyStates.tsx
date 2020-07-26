import React, { useState } from 'react';

function ExampleWithManyStates() {
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

  return (
    <div>
      <div id="age">
        <p>Your age {age}</p>
        <button onClick={() => setAge(age + 1)}>Add age</button>
      </div>
      <div id="fruit">
        <p>Your fruit {fruit}</p>
        <button
          onClick={() => setFruit(fruit === 'banana' ? 'apple' : 'banana')}
        >
          Change fruit
        </button>
      </div>
      <div id="todos">
        <p>Your todos {`${todos.map(todo => todo.text)} `}</p>
        <button
          onClick={() =>
            setTodos(
              todos.concat({
                text: `Learn Hooks${Math.floor(Math.random() * 10)}`
              })
            )
          }
        >
          Add todos
        </button>
      </div>
    </div>
  );
}

export default ExampleWithManyStates;
