import React from 'react';
import './App.css';
import ShowTimer from './show-timer/ShowTimer';
import Counter from './counter/Counter';
import LikeButton from './like-button/LikeButton';

function App() {
  return (
    <div>
      <ShowTimer />
      <hr />
      <Counter />
      <hr />
      <LikeButton />
      <hr />
    </div>
  );
}

export default App;
