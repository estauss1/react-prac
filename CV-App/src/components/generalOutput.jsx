
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
                <h3>Contact Information</h3>
                <ul>
                    <li>email: {generalInfo.contact.email}</li>
                    <li>phone number: {generalInfo.contact.phoneNumber}</li>
                </ul>
            </>   
            }
        </div>
    );
}