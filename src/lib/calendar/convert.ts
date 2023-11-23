export function ToCalendarDate(date :Date) {
    date.setHours(12);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);

    return date
}

export function getDateOfWeekday(current_date :Date, day_number :number){
    let d = new Date();
    d.setDate(current_date.getDate() - current_date.getDay() + day_number);
    d = ToCalendarDate(d);
    return d
}