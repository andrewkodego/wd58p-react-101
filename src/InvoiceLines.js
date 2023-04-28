import { useEffect, useState } from "react";

const InvoiceLines = ({data, index, onRemoveHandler, onAddHandler, onUpdateData}) => {

    const [defaultData, setDefaultData] = useState(({...data}));
    const computeAmount = (data)=>{
        let amount = data.Qty * data.unitPrice;
        if(amount === undefined){
            amount = 0;
        }
        return amount;
    }

    const onChangeHandler = (e) =>{
        let fieldName = e.target.name;
        let fieldValue = e.target.value;

        if(e.target.type === 'number'){
            fieldValue = parseInt(fieldValue);
        }

        let newData = {...defaultData, [fieldName]: fieldValue};
        setDefaultData(newData);
        onUpdateData(index, newData);
    }

    useEffect(()=>{
        setDefaultData(data);
    },[data])
    
    return (
        <>
        <tr>
            <td>
                <button className="btn btn-primary" onClick={()=> onAddHandler(index)}>+</button>
                <button className="btn btn-danger" onClick={() => onRemoveHandler(index)}>-</button>
            </td>
            <td>
                <input name="description" value={defaultData != null ? defaultData.description : ''}
                    onChange={onChangeHandler}/>
            </td>
            <td className="numeric">
                <input type="number" name="Qty" value={defaultData != null ? defaultData.Qty : 0}
                    onChange={onChangeHandler}/>
            </td>
            <td className="numeric">
                <input type="number" name="unitPrice" value={defaultData != null && defaultData.unitPrice != null ? defaultData.unitPrice : 0}
                    onChange={onChangeHandler}/>
            </td>
            <td className="numeric">
                <input value={defaultData != null ? computeAmount(defaultData).toFixed(2) : 0} readOnly/>
            </td>
        </tr>
        </>
    )
}

export default InvoiceLines;