import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WorkoutContext from './Context/WorkoutContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<WorkoutContext>
<App />
</WorkoutContext>
  
 
);


