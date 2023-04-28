import { useEffect, useState } from "react";
import Invoice from "./Invoice";
import InvoiceLines from "./InvoiceLines";
import Connection from "./Connection";

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
            <div className="card">
                <div className="card-header bg-success">
                    <h4>Invoice # {invoiceRecord.invoiceNumber.padStart(10, "0")}</h4>
                </div>
                <div className="card-body">
                <form className="form">
                    <div className="row">
                        <div className="col-sm-8">
                            <label className="field-label">Invoice To:</label>
                            <input name="invoiceTo" value={invoiceRecord.invoiceTo}
                           />
                        </div>
                        <div className="col-sm-4">
                            <label className="field-label">Date:</label>
                            <input type="date" name="date" value={invoiceRecord.date}
                            />
                        </div>
                    </div>                 
                    <div className="row">
                        <div className="col-sm-8">
                            <label className="field-label">Address: </label>
                            <div>
                                <textarea name="address1" cols={50} rows={1} 
                                value={invoiceRecord.address1}/>
                            </div>
                            <div>
                                <textarea name="address2" cols={50} rows={1} 
                                value={invoiceRecord.address2}/>
                            </div>
                            
                        </div>                
                        <div className="col-sm-4">
                            <label className="field-label">Payment Mode:</label>
                            <input name="paymentMode" value={invoiceRecord.paymentMode}
                            />
                        </div> 
                    </div>

                    <div className="table-responsive mt-3">
                        <table className="table table-striped table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Description </th>
                                    <th>Qty</th>
                                    <th>Unit Price</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {invoiceLines.map((item, index)=>{ 
                                return (
                                    <InvoiceLines data={item} index={index} 
                                        onRemoveHandler={null}
                                        onAddHandler={null}
                                        onUpdateData={null}/>
                                    )
                                })}
                                <InvoiceLines data={{description: "", Qty: 0, unitPrice: 0}}
                                    index={invoiceLines.length}
                                    onRemoveHandler={null}
                                    onAddHandler={null}
                                    onUpdateData={null}/>
                                <tr>
                                    <td colSpan={4}>Total</td>
                                    <td className="numeric"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <input className="btn btn-primary" type="submit"/>
                </form>
                </div>
            </div>
        </>
    )
}

export default InvoiceList;