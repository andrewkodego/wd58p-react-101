import { useEffect, useState } from "react";
import StudentInfo from "./StudentInfo";
import Connection from "./Connection";
import ApiService from "./ApiService";

const connection = Connection();

function StudentList(){
    
    const [list, setList] = useState([]);
    const [count, setCount] = useState(0);
    
    useEffect(()=>{
        ApiService('/students', null, (data)=>{
            setList(data);
        });

        ApiService('/students/count/all', null, (data)=>{
            setCount(data.total)
        });
       

    },[]);

    return (
        <>
            <h3>Student List ({count})</h3>
            <div className="row">
             {list.map((studentData) => <StudentInfo data={studentData}/>)}
            </div>
        </>
    )
}

export default StudentList;