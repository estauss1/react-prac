
export default function ExperienceOutput({editing, experience }){
    return(
        <div>
            {!editing && 
            <>
                <h2>Job Experience</h2>
                <p>Worked at {experience.company}</p>
                <p>Position at company was {experience.position}</p>
                <p>Main responsibility at the company was {experience.responsibility}</p>
                <p>Worked at {experience.company} 
                    from {experience.date.start + " to " + experience.date.end}</p>
            </>
            }
        </div>
    );  
}