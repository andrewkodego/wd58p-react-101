import Button from 'react-bootstrap/Button';
import StudentInfo from './StudentInfo';
import TicTacToe from './TicTacToe';
import StudentList from './StudentList';
import InvoiceList from './InvoiceList';

const students = [
  "Emelloyd Rodriguez",
  "Gildo Omandam",
  "Arjohn Lopez",
  "Ronnie Estillero",
  "Revelyn Resolo",
  "Angelo Nhel Acibar",
  "Lyka May Saavedra",
  "David Fajardo",
  "Joshua  Tobongbanua",
  "Carlo Pisico",
  "Ralph Arcos",
  "Rommel Jay Ocon",
  "Jerold Cuico",
  "Rolando Castro",
  "Nicole Magallanes",
  "Paul Luzong",
  ];


const menus = ["Home","About","Contact Us","Login","Settings"];
const studentInfo = {firstName:"Juan", lastName:"Dela Cruz", id:"001", age: 24,gender: "male", course: "Manager",birthdate:"1990-01-01"};


let invoiceItems = [{description: "Mouse", Qty: 3, unitPrice: 200}, 
                {description: "Keyboard", Qty: 3, unitPrice: 400},
                {description: "Monitor", Qty: 6, unitPrice: 5400},
                {description: "CPU Tower Case", Qty: 3, unitPrice: 1200},
                {description: "Headset", Qty: 3, unitPrice: 500},
                {description: "UPS", Qty: 1, unitPrice: 4000},];

const studentList = students.map((item) => <li>{item}</li>);

const vehicles = ['mustang', 'f-150', 'expedition'];
//const [car, truck, suv] = vehicles;
const [car,, suv] = vehicles;

const [inv1,,,,inv5] = invoiceItems;

const numberSet1 = [23,34,56,34,51,8,11,43];
const numberSet2 = [28,34,56,34,51,8,11,48];
let combinedNumberSet = [...numberSet1, ...numberSet2];

let [first, second, third, ...remaining] = numberSet1;
let [line1, line2, ...restOfline ] = invoiceItems;

let locked = 0;
//if(locked != 1){return true;}else{return false;}
let canChange = locked != 1 ? 'true' : 'false';

const callHell = () =>{
  return 'Highway to Hell';
}

let speed = 230;
// if(speed >= 120{return 'Too Fast'}elseif(speed >= 80){return 'Fast'}else{return 'OK'})
let message = speed >= 120 ? (speed >= 200 ? callHell() : 'Too Fast') : speed >= 80 ? 'Fast' : 'OK';


function Home() {
  return ( 
    <div className="App">
      

      <StudentList/>

      <hr/>



      <InvoiceList/>

      <TicTacToe/>

      <div>{car}</div>
      <div>{suv}</div>

      <div>{inv1.description}</div>
      <div>{inv5.description}</div>

      <div>{combinedNumberSet.join(", ")}</div>
      <div>{first}</div>
      <div>{second}</div>
      <div>{third}</div>
      <div>{remaining.join(" * ")}</div>

      <div>{line1.description}</div>
      <div>{line2.description}</div>
      <div>{restOfline.length}</div>

      <div>{canChange}</div>
      <div>{locked != 1 ? 'true' : 'false'}</div>

      <div>{message}</div>

      

      <div className="main-content">
        <h1>Hello React</h1>
        <button className="btn btn-primary">Test</button>
        <Button className="m-3">Primary Button</Button>
        <ul>
          {studentList}
        </ul>

        <StudentInfo data={studentInfo}/>

        
        
      </div>

      <ul>
        {studentList}
      </ul>
    </div>
  );
}

export default Home;
