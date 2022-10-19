import './App.css';
import React,{useState} from 'react';

function App() {

const [input, setInput] = useState('')


const handleChange = event => {
  setInput(event.target.value);

  console.log('value is:', event.target.value);
};

  return (
    <div className="App">
     
     <div className="all">

      <div className="in">

<h3 className='head'>User Input User Output</h3>

<h4 className='text'>Hello User!!</h4>

<div className="input">
<input type="text" 
onChange={handleChange}
placeholder="input here"
/>
</div>

<div className="output">
UserName: {input}

</div>

      </div>

</div>
    </div>
  );
}

export default App;
