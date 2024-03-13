import { useState } from 'react'
import { GeneralSection } from './components/general';
import EducationSection from './components/education'
import ExperienceSection from './components/experience';
import GeneralOuput from './components/generalOutput';
import EducationOuput from './components/educationOutput';
import ExperienceOutput from './components/experienceOutput';
import './styles/other.css'
import './styles/inputSide.css'
import './styles/outputSide.css'

function App() {
  const [editingGeneral, setEditingGeneral] = useState(true);
  const [editingEducation, setEditingEducation] = useState(true);
  const [editingExperience, setEditingExperience] = useState(true);

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

  function onEditGenChange(editing){
    setEditingGeneral(editing)
  }

  function onEditEduChange(editing){
    setEditingEducation(editing)
  }

  function onEditExpChange(editing){
    setEditingExperience(editing)
  }

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
  <div className="page">
    <div className="pageColumn">
      <div className='inputSide'>
        <GeneralSection 
          editing={editingGeneral}
          generalInfo={generalInfo}
          onGenInfoChange={onGenInfoChange}
          onEditGenChange={onEditGenChange}
        />
        <EducationSection 
          editing={editingEducation}
          education={education}
          onEducationChange={onEducationChange}
          onEditEduChange={onEditEduChange}
        />
        <ExperienceSection 
          editing={editingExperience}
          experience={experience}
          onExperienceChange={onExperienceChange}
          onEditExpChange={onEditExpChange}
        />
      </div>
      <div className="outputSide">
        <h1 className="outputTitle">Output</h1>
        <GeneralOuput 
          editing={editingGeneral}
          generalInfo={generalInfo}
        />
        <EducationOuput 
          editing={editingEducation}
          education={education}
        />
        <ExperienceOutput
          editing={editingExperience}
          experience={experience}
        />
      </div>
    </div>
  </div>
  )
}

export default App
