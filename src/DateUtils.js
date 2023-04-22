function DateUtils(date, format){

    const dateFormatter = (date, format)=>{
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        let milSec = date.getMilliseconds();    
    
        let formatedDate = format.replace('yyyy', year);
        formatedDate = formatedDate.replace('mm', month.toString().padStart(2, '0'));
        formatedDate = formatedDate.replace('dd', day.toString().padStart(2, '0'));
        formatedDate = formatedDate.replace('hh', hour.toString().padStart(2, '0'));
        formatedDate = formatedDate.replace('MM', minute.toString().padStart(2, '0'));
        formatedDate = formatedDate.replace('ss', second.toString().padStart(2, '0'));
        formatedDate = formatedDate.replace('ms', milSec.toString().padStart(2, '0'));
    
        return formatedDate;
    }

    return dateFormatter(date, format);

}

export default DateUtils