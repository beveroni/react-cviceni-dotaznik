import React from 'react';
import { createRoot } from 'react-dom/client';
import Question from './Question/index';
import './style.css';

const App = () => {
  return (
    <div className="container">
      <Question text="Kdo jinému jámu kopá, sám do ní padá." />
    </div>
  );
};
  

createRoot(document.querySelector('#app')).render(<App />);
