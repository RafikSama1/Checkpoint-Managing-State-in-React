// App.js
import React from 'react';
import TaskList from './TaskList';
import './App.css'; // Import your CSS file for styling

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List Application</h1>
      </header>
      <main>
        <TaskList />
      </main>
    </div>
  );
};

export default App;
