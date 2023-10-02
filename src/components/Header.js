import React from 'react';
import './Header.css'

const header = () => {

    const handleNameChange = () => {
        const names = ['Allan', 'Peter', 'John', 'Adam', 'Alexander']
        const int = Math.floor(Math.random() * 5);
        return names[int]
      }

  return (
    <header>
        <p> Hello {handleNameChange()}</p>
    </header>
  );
}

export default header;


