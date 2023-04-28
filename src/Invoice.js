import { useState, useEffect } from "react";
import InvoiceLines from "./InvoiceLines";

function Invoice(props){

    const [invoiceLines, setInvoiceLines] = useState(props.lines);
    const [invoiceDetails, setInvoiceDetails] = useState(props.details);
    
    let newAmount = 0;
    const doComputeTotalAmount = (initialize = 0) => {
        newAmount = 0;
        props.lines.map((item) => { 
            let amount = item.Qty * item.unitPrice;
            if(amount === undefined){
                amount = 0;
            }
            newAmount += amount;
            return newAmount;
        });

        if(initialize === 0){
            setTotalAmount(newAmount);
        }
    }

    doComputeTotalAmount(1);

    const [totalAmount, setTotalAmount] = useState(newAmount);

    const addLineFields = (index) => {     
        const updatedItems = [...invoiceLines];
        let newList = [];
        if(index === 0){
            newList = [{description: "", Qty: 0, unitPrice: 0}, ...updatedItems];
        }else if(index === updatedItems.length){
            newList = [...updatedItems, {description: "", Qty: 0, unitPrice: 0}];
        }else{
            let startList = updatedItems.slice(0,index+1);
            let endList = updatedItems.slice(index+1);
            newList = [...startList, {description: "", Qty: 0, unitPrice: 0}, ...endList];
        }

        setInvoiceLines([...newList]); 
    }

    const removeLineFields = (index) =>{     
        const updatedItems = [...invoiceLines];
        updatedItems.splice(index, 1);
        setInvoiceLines([...updatedItems]);        
    }

    const updateLineList = (index, data) => {
        props.lines = [...invoiceLines];
        props.lines[index] = data;
        doComputeTotalAmount();
        setInvoiceLines([...props.lines]); 

    };

    const onChangeInvoiceDetails = (event) =>{
        let fieldName = event.target.name;
        setInvoiceDetails((invoiceDetails) => ({...invoiceDetails, [fieldName]: event.target.value}));
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        setInvoiceDetails((invoiceDetails) => ({...invoiceDetails, lines: invoiceLines, totalAmount:totalAmount}));
    }

    useEffect(()=>{
        console.log(invoiceDetails);
    },[invoiceDetails])
  

    return (
        <>
            <div className="card">
                <div className="card-header bg-success">
                    <h4>Invoice # {invoiceDetails.invoiceNumber.padStart(10, "0")}</h4>
                </div>
                <div className="card-body">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-sm-8">
                            <label className="field-label">Invoice To:</label>
                            <input name="invoiceTo" value={invoiceDetails.invoiceTo}
                            onChange={onChangeInvoiceDetails}/>
                        </div>
                        <div className="col-sm-4">
                            <label className="field-label">Date:</label>
                            <input type="date" name="date" value={invoiceDetails.date}
                            onChange={onChangeInvoiceDetails}/>
                        </div>
                    </div>                 
                    <div className="row">
                        <div className="col-sm-8">
                            <label className="field-label">Address: </label>
                            <div>
                                <textarea name="address1" cols={50} rows={1} 
                                onChange={onChangeInvoiceDetails} value={invoiceDetails.address1}/>
                            </div>
                            <div>
                                <textarea name="address2" cols={50} rows={1} 
                                onChange={onChangeInvoiceDetails} value={invoiceDetails.address2}/>
                            </div>
                            
                        </div>                
                        <div className="col-sm-4">
                            <label className="field-label">Payment Mode:</label>
                            <input name="paymentMode" value={invoiceDetails.paymentMode}
                            onChange={onChangeInvoiceDetails}/>
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
                                        onAddHandler={addLineFields}
                                        onUpdateData={updateLineList}/>
                                    )
                                })}
                                <InvoiceLines data={{description: "", Qty: 0, unitPrice: 0}}
                                    index={invoiceLines.length}
                                    onRemoveHandler={removeLineFields}
                                    onAddHandler={addLineFields}
                                    onUpdateData={updateLineList}/>
                                <tr>
                                    <td colSpan={4}>Total</td>
                                    <td className="numeric">{totalAmount.toFixed(2)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <input className="btn btn-primary" type="submit"/>
                </form>
                </div>
            </div>
        </>
    );
}

export default Invoice;