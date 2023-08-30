import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
        <h1>Welcome to My Home Page</h1>
        <ul>
          <li><Link to="tutorial">Tutorial</Link></li>
          <li><Link to="task-1">Task 1</Link></li>
          <li><Link to="task-2">Task 2</Link></li>
          <li><Link to="task-3">Task 3</Link></li>
          <li><Link to="task-4">Task 4</Link></li>
        </ul>
        </div>
    );
}

export default Home;