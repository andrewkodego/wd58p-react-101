import { useState, useEffect } from "react";
import DateUtils from "./DateUtils";
import InvoiceLines from "./InvoiceLines";

function Invoice({details, lines}){

    const [invoiceLines, setInvoiceLines] = useState(lines);

    const {invoiceTo, date, address1, address2, invoiceNumber, paymentMode} = details;

    let totalAmount = 0;
    lines.map((item)=>{
        totalAmount += item.Qty* item.unitPrice;
    });

    const addLineFields = (index) => {
        //setInvoiceLines((items) => [...items, {description: "", Qty: 0, unitPrice: 0}]);        

        const updatedItems = [...invoiceLines];
        let startList = updatedItems.slice(0,index+1);
        let endList = updatedItems.slice(index+1);
        let newList = [...startList, {description: "", Qty: 0, unitPrice: 0}, ...endList];

        //const newList = [, , ];
        setInvoiceLines(newList); 
    }

    const removeLineFields = (index) =>{   
        console.log(index);   
        const updatedItems = [...invoiceLines];
        updatedItems.splice(index, 1);
        setInvoiceLines(updatedItems);        
    }

    useEffect(()=>{
        setInvoiceLines(invoiceLines);
        console.log(invoiceLines);
    },[invoiceLines])

    return (
        <>
            <div className="card">
                <div className="card-header bg-success">
                    <h4>Invoice # {invoiceNumber.padStart(10, "0")}</h4>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-8">
                            <label className="field-label">Invoice To:</label>
                            <label>{invoiceTo}</label>
                        </div>
                        <div className="col-sm-4">
                            <label className="field-label">Date:</label>
                            <label>{DateUtils(new Date(date), 'dd/mm/yyyy')}</label>
                        </div>
                    </div>                 
                    <div className="row">
                        <div className="col-sm-8">
                            <label className="field-label">Address: </label>
                            <label>{address1 +", " + address2} </label>
                        </div>                
                        <div className="col-sm-4">
                            <label className="field-label">Payment Mode:</label>
                            <label>{paymentMode} </label>
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
                                        onRemoveHandler={removeLineFields}
                                        onAddHandler={addLineFields}/>
                                    )
                                })}
                                <InvoiceLines data={{description: "", Qty: 0, unitPrice: 0}}
                                    onRemoveHandler={removeLineFields}
                                    onAddHandler={addLineFields}/>
                                <tr>
                                    <td colSpan={4}>Total</td>
                                    <td className="numeric">{totalAmount.toFixed(2)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Invoice;