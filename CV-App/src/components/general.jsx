
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

    function onFirstNameChange(e){
        const newFirst = e.target.value
        onNameSecChange({
            ...name,
            firstName: newFirst
        })
    }

    function onMiddleNameChange(e){
        const newMiddle = e.target.value
        onNameSecChange({
            ...name,
            middleName: newMiddle
        })
    }

    function onLastNameChange(e){
        const newLast = e.target.value
        onNameSecChange({
            ...name,
            lastName: newLast
        })
    }
    return(
    <div>
        <Field 
            label={"first name: "}
            onChange={onFirstNameChange}
            value={name.firstName}
        />    
        <Field 
            label={"middle name: "}
            onChange={onMiddleNameChange}
            value={name.middleName}
        />
        <Field 
            label={"last name: "}
            onChange={onLastNameChange}
            value={name.lastName}
        />
    </div>
    );
}

function Field({label, onChange, value}){
    return(
    <div>
        <span>{label}</span>
        <input 
            type="text"
            value={value}
            onChange={onChange}
        />
    </div>
    );
}