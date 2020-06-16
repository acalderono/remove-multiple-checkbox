import React, { useState } from "react";

export const App = () => {
  const [state, setState] = useState([
    { id: 1, value: false },
    { id: 2, value: false },
    { id: 3, value: false },
    { id: 4, value: true }
  ]);

  const handleChange = e => {
    const id = e.target.id;
    const list = [...state];
    const rows = list.map(li =>
      li.id === +id ? { ...li, value: !li.value } : li
    );
    setState(rows);
  };

  const handleClick = () => {
    const list = [...state];
    const rows = list.filter(li => !li.value);
    setState(rows);
  };

  return (
    <div className="App">
      {state.map((item, index) => (
        <div key={index}>
          <input
            type="checkbox"
            id={item.id}
            checked={item.value}
            onChange={handleChange}
          />
        </div>
      ))}
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};

export default App;
