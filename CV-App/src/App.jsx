import { useState } from 'react'
import { GeneralSection } from './components/general';
import EducationSection from './components/education'
import ExperienceSection from './components/experience';
import './App.css'

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name:{
      firstName:'',
      middleName:'',
      lastName:''
    },
    contact:{
      email:'',
      phoneNumber:''
    }
  });

  const [education, setEducation] = useState({
    schoolName:'',
    studyTitle:'',
    studyDate:''
  });

  const [experience, setExperience] = useState({
    company:'',
    position:'',
    responsibility:'',
    date:{
      start:'',
      end:''
    }
  })

  function onGenInfoChange(updatedGenInfo){
    setGeneralInfo(updatedGenInfo);
  }

  function onEducationChange(newEducation){
    setEducation(newEducation);
  }

  function onExperienceChange(newExperience){
    setExperience(newExperience);
  }

  return (
    <div>
      <GeneralSection 
        generalInfo={generalInfo}
        onGenInfoChange={onGenInfoChange}
      />
      <EducationSection 
        education={education}
        onEducationChange={onEducationChange}
      />
      <ExperienceSection 
        experience={experience}
        onExperienceChange={onExperienceChange}
      />
    </div>
  )
}

export default App
