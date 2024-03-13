
export function GeneralSection({editing, generalInfo, onGenInfoChange, onEditGenChange}){

    function onNameSecChange(newName){
        onGenInfoChange({
            ...generalInfo,
            contact:{
                ...generalInfo.contact
            },
            name: newName
        })
    }

    function onContactSecChange(newContact){
        onGenInfoChange({
            ...generalInfo,
            name:{
                ...generalInfo.name
            },
            contact: newContact
        })
    }

    return(
    <div className="inputSection">
        <div className="inputSectionHeader">
            <h2>General Info</h2>
            <button
                onClick={() => onEditGenChange(!editing)}
            >
                {editing ? "Submit" : "Edit"}
            </button>
        </div>
        {editing &&
        <>
            <NameSubSection 
                name={generalInfo.name}
                onNameSecChange={onNameSecChange}
            />
            <ContactSubSection 
                contact={generalInfo.contact}
                onContactSecChange={onContactSecChange}
            />
        </>
        }
    </div>
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

function ContactSubSection({contact, onContactSecChange}){

    function onContactChange(e, identifier){
        const newContact = {
            ...contact
        }
        switch(identifier){
        case "email":
            newContact.email = e.target.value
            break;
        case "phoneNumber":
            newContact.phoneNumber = e.target.value
            break;
        default:
            console.log("identifier not recognized inside onContactChange");
        }
        onContactSecChange(newContact)
    }

    return(
        <div>
            <Field 
                identifier={"email"}
                label={"email: "}
                onValChange={onContactChange}
                value={contact.email}
            />
            <Field 
                identifier={"phoneNumber"}
                label={"phone number: "}
                onValChange={onContactChange}
                value={contact.phoneNumber}
            />
        </div>
    );
}

export function Field({identifier, label, onValChange, value}){
    return(
    <div className="field">
        <span className="fieldLabel">{label}</span>
        <input 
            type="text"
            value={value}
            onChange={(e) => onValChange(e, identifier)}
        />
    </div>
    );
}