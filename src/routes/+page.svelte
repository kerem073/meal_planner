<script lang='ts'>
    import { ToCalendarDate } from "$lib/calendar/convert";
    import PlannerDay from "$lib/components/PlannerDay.svelte";
    import type { PlannerDayProps } from "$lib/types/plannerdayprops.type.js";
    import { compareDate } from "$lib/utils.js";

    export let data;

    let current_date = new Date();
    let max_date = structuredClone(current_date);
    max_date.setDate(max_date.getDate() + 7);

    current_date = ToCalendarDate(current_date);
    max_date = ToCalendarDate(max_date);

    const plannerdays :PlannerDayProps[] = [];

    for (let cd = current_date; cd < max_date; cd.setDate(cd.getDate() + 1)){
        plannerdays.push({
            date: structuredClone(cd),
            meal: null
        })
    }

    for (let di = 0; di < data.plannerdays.length; di++) {
        for (let pi = 0; pi < plannerdays.length; pi++) {
            if (compareDate(plannerdays[pi].date, data.plannerdays[di].date)){
                plannerdays[pi].meal = data.plannerdays[di].meal;
            }
        }
    }

</script>

<h1>Meal planner</h1>

{#each plannerdays as plannerday (plannerday.date)}
    <PlannerDay {plannerday} />
{/each}

<a href="/new_recipe">Add new recipe</a>