import DateUtils from "./DateUtils";

function Invoice({details, lines}){

    const {invoiceTo, date, address1, address2, invoiceNumber, paymentMode} = details;

    let totalAmount = 0;
    const computeAmount = (item)=>{
        let amount = item.Qty * item.unitPrice;
        totalAmount += amount;
        return amount;
    }

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
                                    <th>Description </th>
                                    <th>Qty</th>
                                    <th>Unit Price</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {lines.map((item)=>{ 
                                return (<tr>
                                    <td>{item.description}</td>
                                    <td className="numeric">{item.Qty}</td>
                                    <td className="numeric">{item.unitPrice.toFixed(2)}</td>
                                    <td className="numeric">{computeAmount(item).toFixed(2)}</td>
                                </tr>)
                                })}
                                <tr>
                                    <td colSpan={3}>Total</td>
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