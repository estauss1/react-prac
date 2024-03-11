
export default function GeneralSection({generalInfo, onGenInfoChange}){

    function onNameSecChange(newName){
        onGenInfoChange({
            ...generalInfo,
            name: newName
        })
    }

    return(
    <NameSubSection 
        name={generalInfo.name}
        onNameSecChange={onNameSecChange}
    />
    );
}

function NameSubSection({name, onNameSecChange}){
    function onNameChange(e, identifier){
        const newName = {
            ...name
        }
        switch(identifier){
        case "firstChild":
            newName.firstName = e.target.value
            break;
        case "middleChild":
            newName.middleName = e.target.value
            break;
        case "lastChild":
            newName.lastName = e.target.value
            break;
        default:
            console.log("identifer passed to onNameChange not recognized");
        }
        onNameSecChange(newName);
    }

    return(
    <div>
        <Field 
            identifier={"firstChild"}
            label={"first name: "}
            onValChange={onNameChange}
            value={name.firstName}
        />    
        <Field 
            identifier={"middleChild"}
            label={"middle name: "}
            onValChange={onNameChange}
            value={name.middleName}
        />
        <Field 
            identifier={"lastChild"}
            label={"last name: "}
            onValChange={onNameChange}
            value={name.lastName}
        />
    </div>
    );
}

function Field({identifier, label, onValChange, value}){
    return(
    <div>
        <span>{label}</span>
        <input 
            type="text"
            value={value}
            onChange={(e) => onValChange(e, identifier)}
        />
    </div>
    );
}