import { useState } from 'react'
import GeneralSection from './components/general';
import './App.css'

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name:{
      firstName:'',
      middleName:'',
      lastName:''
    },
    email:'',
    phoneNumber:''
  });

  function onGenInfoChange(updatedGenInfo){
    setGeneralInfo(updatedGenInfo)
  }

  return (
      <GeneralSection 
        generalInfo={generalInfo}
        onGenInfoChange={onGenInfoChange}
      />
  )
}

export default App
