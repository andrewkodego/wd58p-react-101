import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import StudentInfo from './StudentInfo';
import Invoice from './Invoice';
import TicTacToe from './TicTacToe';

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

const studentsInfo = [
	{firstName:"Juan", lastName:"Dela Cruz", id:"001", age: 24,gender: "male", course: "Manager",birthdate:"1990-01-01"},
	{firstName:"Anna", lastName:"Salvador", id:"002", age: 21, gender: "female", course: "Junior Dev",birthdate:"1991-01-01"},
	{firstName:"Mark", lastName:"Bautista", id:"003", age: 28, gender: "male", course: "Senior Fullstack Dev",birthdate:"1992-01-01"},
	{firstName:"Micheal", lastName:"Garcia", id:"004", age: 31, gender: "male", course: "CEO",birthdate:"1993-01-01"},
  {firstName:"Michelle", lastName:"Bautista", id:"005", age: 34, gender: "female", course: "CEO",birthdate:"1993-01-01"},
  {firstName:"Nicole", lastName:"Dela Cruz", id:"006", age: 30, gender: "female", course: "CEO",birthdate:"1993-01-01"},
];

let invoice = {invoiceTo:"Juan Dela Cruz", date:"2023-04-15", address1: "810 Oroquieta Street Sta Cruz 1000", address2:"Manila, Metro Manila, Philippines", invoiceNumber:"6845",paymentMode:"COD"};

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


function App() {
  return (
    <div className="App">
      <Header menuList={menus}/>

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

      <Invoice details={invoice} lines={invoiceItems}/>

      <div className="main-content">
        <h1>Hello React</h1>
        <button className="btn btn-primary">Test</button>
        <Button className="m-3">Primary Button</Button>
        <ul>
          {studentList}
        </ul>

        <StudentInfo data={studentInfo}/>

        <div className="row">
        {studentsInfo.map((studentData) => <StudentInfo data={studentData}/>)}
        </div>
        
      </div>

      <ul>
        {studentList}
      </ul>

      <Footer/>
    </div>
  );
}

export default App;
