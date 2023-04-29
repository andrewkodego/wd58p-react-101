import { useEffect, useState } from "react";

function StudentInfoEdit({data, onSaveHandler}){

    const [studentData, setStudentData] = useState(data);

    const onChangeHandler = (e) =>{
        let fieldName = e.target.name;
        let newData = {...studentData, [fieldName]: e.target.value};
        setStudentData(newData);
    }

    useEffect(()=>{
        setStudentData(data);
    },[data]);

    const onClickSaveHandler = () => {
        onSaveHandler(studentData);
    }

    return (
    <>
        <div className="">
            <div className="card">
                <div className="card-body">
                    <input type="hidden" name="id" value={studentData.id}/>
                    <div>
                        <label>FirstName:  </label>
                        <input type="text" name="firstName" value={studentData.firstName} className="form-control"
                            onChange={onChangeHandler}/>
                    </div>
                    <div>    
                        <label>LastName:  </label>
                        <input type="text" name="lastName" value={studentData.lastName} className="form-control"
                            onChange={onChangeHandler}/>
                    </div>
                    <div>
                        <label>Course:  </label>
                        <input type="text" name="course" value={studentData.course} className="form-control"
                            onChange={onChangeHandler}/>
                    </div>                    
                    <div>
                        <label>Age: </label>
                        <input type="text" name="age" value={studentData.age} className="form-control"
                            onChange={onChangeHandler}/>
                    </div>                
                    <div>
                        <label>Birtdate:  </label>
                        <input type="date" name="birthdate" value={studentData.birthdate} className="form-control"
                            onChange={onChangeHandler}/>
                    </div>
                    <div>
                        <label>Gender:  </label>
                        <input type="text" name="gender" value={studentData.gender} className="form-control"
                            onChange={onChangeHandler}/>
                    </div>
                </div>

                <div className="card-footer">
                    <button className="btn btn-danger me-3" data-bs-dismiss="modal">Cancel</button>
                    <button className="btn btn-primary" onClick={onClickSaveHandler}>Save</button>
                </div>
                
            </div>
        </div>
    </>
    );
}

export default StudentInfoEdit;