import { pb } from "$lib/db/pocketbase";
import { ToCalendarDate } from "$lib/calendar/convert";
import type { PlannerDayProps } from "$lib/types/plannerdayprops.type";
import { extractPlannerDay } from "$lib/utils";

export const load = async function() {
    let current_date = new Date();
    let max_date = structuredClone(current_date);
    max_date.setDate(max_date.getDate() + 7);

    

    let data = await pb.collection('plannerdays').getList(1, 50, {
        filter: pb.filter("date >= {:cd} && date <= {:md}", {cd: ToCalendarDate(current_date), md: ToCalendarDate(max_date)}),
        expand: "meal"
    });

    let plannerdays :PlannerDayProps[] = [];
    
    data.items.forEach(item => {
        plannerdays.push(extractPlannerDay(item));
    });
    
    return {
        plannerdays: structuredClone(plannerdays)
    }
}