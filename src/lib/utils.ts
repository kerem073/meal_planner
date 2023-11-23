import { ToCalendarDate } from "./calendar/convert";
import type { PlannerDayProps } from "./types/plannerdayprops.type";

export function extractPlannerDay(item :any):PlannerDayProps {
    return {
        meal: {
            name:item.expand.meal.name,
            ingredients: item.expand.meal.ingredients
        },
        date:new Date(item.date)
        
    }
}

export function DateToIso(date :Date){

    // Set the time to midnight
    date = ToCalendarDate(date);

    // Convert the Date object to a string in ISO format
    var isoDateString = date.toISOString();

    // Extract the date and time parts from the ISO string
    var formattedDate = isoDateString.slice(0, 10); // "2023-11-28"
    var formattedTime = isoDateString.slice(11, 23); // "00:00:00:000Z"

    // Concatenate the date and time parts
    var desiredFormat = formattedDate + " " + formattedTime + "Z";

    return desiredFormat;
}

export function compareDate(date1 :Date, date2 :Date){
    if(date1.getDate() == date2.getDate() && date1.getMonth() == date2.getMonth() && date1.getFullYear() == date2.getFullYear()){
        return true
    } else {return false}
}