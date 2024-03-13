
export default function EducationOuput({editing, education}){
    return(
        <div className="outputSection">
            { !editing &&
            <>
            <h2>Educational Background</h2>
            <p>Attended {education.schoolName}</p>
            <p>Area of study was {education.studyTitle}</p>
            <p>Began schooling on {education.studyDate}</p>
            </>
            }
        </div>
    );
}