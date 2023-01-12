
const convert = (number)=>{

    let amount = number.toFixed(2).split(".")

    const res = "RS.  "+
            (amount[0].split("")[0]==="-"?"-":"")+
            amount[0]
            .split("")
            .reverse()
            .reduce((prev,cur,index)=>{
                return cur==="-"?prev:cur + (index && !(index%3)?",":"")+prev
            },"")+
             "."+
             amount[1]
    

    return res
    }

export default convert