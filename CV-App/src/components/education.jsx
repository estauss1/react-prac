import { Field } from "./general";

export default function EducationSection({
    editing, 
    education, 
    onEducationChange, 
    onEditEduChange
}){
   function onEduSecChange(e, identifier){
        const newEducation = {
            ...education
        }

        switch (identifier){
        case "schoolName":
            newEducation.schoolName = e.target.value
            break;
        case "studyTitle":
            newEducation.studyTitle = e.target.value
            break;
        case "studyDate":
            newEducation.studyDate = e.target.value
            break;
        default:
            console.log("Invalid identifier in onEduSecChange")
        }

        onEducationChange(newEducation);
   }

   return(
    <div className="inputSection">
        <div className="inputSectionHeader">
            <h2>Education</h2>
            <button 
                onClick={() => onEditEduChange(!editing)}
            >
                {editing ? "Submit" : "Edit"}
            </button>
        </div>
        {editing &&
        <>
            <Field 
                identifier={"schoolName"}
                label={"Name of school: "}
                onValChange={onEduSecChange}
                value={education.schoolName}
            />
            <Field 
                identifier={"studyTitle"}
                label={"Title of Study: "}
                onValChange={onEduSecChange}
                value={education.studyTitle}
            />
            <Field 
                identifier={"studyDate"}
                label={"Date of study: "}
                onValChange={onEduSecChange}
                value={education.studyDate}
            />
        </>
        }
    </div>
   );
}