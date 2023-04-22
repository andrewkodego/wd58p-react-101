function StudentInfo({data, title="Student Details"}){

    const {firstName, lastName, id, age, gender, course, birthdate} = data;

    return (
    <>
        <div className="col-sm-3 mb-3">
            <div className="card">
                <div className="card-body">
                    <div className="card-title">
                        <h4>{firstName + " " + lastName}</h4>
                    </div>
                    <div>
                        <label>Course: {course}</label>
                    </div>
                    <div>
                        <label>ID: {id} </label>
                    </div>
                    <div>
                        <label>Age: {age} </label>
                    </div>                
                    <div>
                        <label>Birtdate: {birthdate} </label>
                    </div>
                    <div>
                        <label>Gender: {gender} </label>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default StudentInfo;