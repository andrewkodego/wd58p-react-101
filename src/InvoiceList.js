import { useEffect, useState } from "react";
import Connection from "./Connection";
import Invoice from './Invoice';

const connection = Connection();

function InvoiceList(){

    const [invoiceRecord, setInvoiceRecord] = useState({id: 0, invoiceTo:"", date:"", address1: "", address2:"", invoiceNumber:"",paymentMode:""});
    const [invoiceLines, setInvoiceLines] = useState([]);

    useEffect(()=>{
        const getinvoiceRecord = () => {
            fetch(connection + '/invoices/1')
                .then(response => response.json())
                .then(data => {
                    let record = data.record;
                    let lines = data.lines;
                    setInvoiceRecord(record); 
                    setInvoiceLines(lines);
                })
                .catch((error) =>{
                    console.log(error.message);
                });
            }

        getinvoiceRecord();
    },[]);

    return (
        <>
            <Invoice details={invoiceRecord} lines={invoiceLines}/>   
        </>
    )
}

export default InvoiceList;