import React from 'react';
import { choice, remove } from './helpers.js'
import foods from './foods.js'
import './App.css';


function App() {
  let selectedFood = choice(foods)
  remove(foods, selectedFood)
  return (
    <div>
      <p>I'd like one {selectedFood}, please</p>
      <p>Here you go: {selectedFood}</p>
      <p>Delicious! May I have another?</p>
      <p>I'm sorry, we're all out. We have {foods.length} left.</p>
    </div>
  )
}

export default App;
