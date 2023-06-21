import { url } from '../../Constant/Url';

// admin/timesheets/get-monthly-timesheets?startDate=2023-06-01

export const getTimeshetData =async(startDate)=>{
    const response=await fetch(url+`admin/timesheets/get-monthly-timesheets?startDate=${startDate}`,{
        method:"GET",
        headers:{"Content-Type": "application/json" },
        credentials:"include"
    })

    if(!response.ok){
        throw new Error('Data could not be fetched')
    }else{
        return await response.json();
    }
}