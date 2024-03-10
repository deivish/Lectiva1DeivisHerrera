import { useState } from 'react';
import './App.css';
import { AddCategory } from './Components/AddCategory';

function App() {

  const [category, setCategory] = useState("");


  return (
    <div className="App">
      
      <h2>Main component</h2>

      <AddCategory setCategory={setCategory}/>
    </div>
  );
}

export default App;
