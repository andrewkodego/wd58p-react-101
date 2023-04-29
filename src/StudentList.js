import { useEffect, useState } from "react";
import StudentInfo from "./StudentInfo";
import ApiService from "./ApiService";
import StudentInfoEdit from "./StudentInfoEdit";

function StudentList(){
    
    const [list, setList] = useState([]);
    const [count, setCount] = useState(0);

    const getStudetList = () =>{
        ApiService('/students', null, (data)=>{
            setList(data);
        });

        ApiService('/students/count/all', null, (data)=>{
            setCount(data.total)
        });
    }

    useEffect(()=>{
        getStudetList();
    },[]);

    const [keyword, setKeyword] = useState('');
    const onKeywordChangeHandler = (e) =>{
        setKeyword(e.target.value);
        ApiService('/students/name/' + e.target.value, null, (data)=>{
            setList(data);
        });
    }

    const [studentDetails, setStudentDetails] = useState({});

    const onEditHandler = (data) =>{
        ApiService('/students/' + data.id, null, (data)=>{
            setStudentDetails(data);
        });
    }

    const onStudentSaveHandler = (formData) =>{
        ApiService('/students/' + formData.id, formData, (data)=>{
            getStudetList();
        }, formData.id === 0 ? "POST" : "PUT");
    }

    const onClickAddHandler = () =>{
        setStudentDetails({id:0});
    }

    const onDeleteHandler = (formData) =>{
        setStudentDetails(formData);
        setConfirmStatus('show');
        console.log(confirmStatus);
    }

    const [confirmStatus, setConfirmStatus] = useState("hide");

    const doConfirmedDeleteHandler = () =>{
        setConfirmStatus('hide');
        ApiService('/students/' + studentDetails.id, studentDetails, (data)=>{
            console.log(data);
            getStudetList();
        }, "DELETE");
    }

    return (
        <>
            <h3>Student List ({count})</h3>
            <button className="btn btn-primary" onClick={onClickAddHandler} data-bs-toggle="modal" data-bs-target="#myPopupWin">Add Student</button>
            <form className="mb-3">
                <div className="row">
                    <div className="col-sm-4">
                    <input className="form-control" name="keyword" value={keyword} onChange={onKeywordChangeHandler} placeholder="Search by Name"/> 
                    </div>
                </div>               
            </form>
            <div className="row">
             {list.map((studentData) => <StudentInfo data={studentData} onEditHandler={onEditHandler} onDeleteHandler={onDeleteHandler}/>)}
            </div>

            <div id="myPopupWin" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4>Student Info</h4>
                            <button type="button" className="btn-close btn-sm" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            <StudentInfoEdit data={studentDetails} onSaveHandler={onStudentSaveHandler}/>
                        </div>
                    </div>
                </div>
            </div>

            <div id="confirmWin" className={ confirmStatus + " modal fade"} data-bs-backdrop="static" data-bs-keyboard="false">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close btn-sm" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <h4>Are you sure you want to DELETE this record</h4>
                            <div>
                                <button className="btn btn-primary" data-bs-dismiss="modal">No</button>
                                <button className="btn btn-primary" onClick={doConfirmedDeleteHandler}>Yes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default StudentList;