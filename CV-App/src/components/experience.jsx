import { Field } from "./general";

export default function ExperienceSection({
    editing, 
    experience, 
    onExperienceChange, 
    onEditExpChange
}){
    function onExpSecChanged(e, identifer){
        const newExperience = {
            ...experience
        }

        switch (identifer){
        case "company":
            newExperience.company = e.target.value
            break;
        case "position":
            newExperience.position = e.target.value
            break;
        case "responsibility":
            newExperience.responsibility = e.target.value
            break;
        case "dateStart":
            newExperience.date.start = e.target.value
            break;
        case "dateEnd":
            newExperience.date.end = e.target.value
            break;
        default:
            console.log("Invalid identifier passed to onExpSecChanged.")
        }

        onExperienceChange(newExperience);
    }

    return(
    <div className="inputSection expSection">
        <div className="inputSectionHeader">
            <h2>Job Experience</h2>
            <button
                onClick={() => onEditExpChange(!editing)}
            >
                {editing ? "Submit" : "Edit"}
            </button>
        </div>
        {editing &&
        <>
            <Field 
                identifier={"company"}
                label={"Company name: "}
                onValChange={onExpSecChanged}
                value={experience.company}
            />
            <Field 
                identifier={"position"}
                label={"Job title: "}
                onValChange={onExpSecChanged}
                value={experience.position}
            />
            <Field 
                identifier={"responsibility"}
                label={"Responsibilities: "}
                onValChange={onExpSecChanged}
                value={experience.responsibility}
            />
            <Field 
                identifier={"dateStart"}
                label={"Started job date: "}
                onValChange={onExpSecChanged}
                value={experience.date.start}
            />
            <Field 
                identifier={"dateEnd"}
                label={"Stopped job date : "}
                onValChange={onExpSecChanged}
                value={experience.date.end}
            />
        </>
        }
    </div>
    );
}