import { useState } from 'react'
import './App.css'


function Person() {
  const [person, setPerson] = useState({ name: "John", age: 100 });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleIncreaseAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  function onFirstChange(e){
    setFirstName(e.target.value)
  }

  function onLastChange(e){
    setLastName(e.target.value)
  }

  return (
    <>
      <Input label={"first name: "}
        name={firstName}
        onNameChange={onFirstChange}
      />      
      <Input label={"last name: "}
        name={lastName}
        onNameChange={onLastChange}
      />
      <p>{firstName + " " + lastName}</p>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}

function Input({ label, name, onNameChange}){

  return(
    <div>
      <h3>{label}</h3>
      <input 
        type="text"
        value={name}
        onChange={onNameChange}
        />
    </div>
  )
}

function App() {
  return (
    <div>
      <Person />
    </div>
  );
}

export default App
