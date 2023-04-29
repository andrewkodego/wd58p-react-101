function StudentInfo({data, onEditHandler, onDeleteHandler}){

    const {firstName, lastName, id, age, gender, course, birthdate} = data;

    const onClickEditHandler = () =>{
        onEditHandler(data);
    }

    const onClickDeleteHandler =()=>{
        onDeleteHandler(data);
    }

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

                <div className="card-footer">
                    <button type="button" className="btn btn-danger me-3" onClick={onClickDeleteHandler}>Delete</button>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myPopupWin" onClick={onClickEditHandler}>Edit</button>                    
                </div>
                
            </div>
        </div>
    </>
    );
}

export default StudentInfo;