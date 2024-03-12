
export default function GeneralOuput({editing, generalInfo}){
    return(
        <div className="outputSection">
            <h2>General Info</h2>
            { !editing &&
                <p>
                    My name is {
                    generalInfo.name.firstName + " " 
                    + generalInfo.name.middleName + " "
                    + generalInfo.name.lastName + "."
                    }
                </p>
                
            }
        </div>
    );
}