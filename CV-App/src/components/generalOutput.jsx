
export default function GeneralOuput({editing, generalInfo}){
    return(
        <div className="outputSection">
            { !editing &&
            <>
                <h2>General Info</h2>
                <p>
                    My name is {
                    generalInfo.name.firstName + " " 
                    + generalInfo.name.middleName + " "
                    + generalInfo.name.lastName + "."
                    }
                </p>
                <h4>Contact Information</h4>
                <p>email: {generalInfo.contact.email}</p>
                <p>phone number: {generalInfo.contact.phoneNumber}</p>
            </>   
            }
        </div>
    );
}