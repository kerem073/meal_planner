<script lang="ts">
    import type { PlannerDayProps } from '$lib/types/plannerdayprops.type';

    
    let names_of_days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    export let plannerday:PlannerDayProps;
    
</script>

<p>{names_of_days[plannerday.date.getDay()]} - {`${plannerday.date.getDate()} - ${plannerday.date.getMonth() + 1} - ${plannerday.date.getFullYear()}`}</p>

{#if plannerday.meal}
    <p>{plannerday.meal.name}</p> <!-- Hier komt nog een edit button om the plannerday aan te passen -->
{:else}
    <a href="/add_recipe_to/{plannerday.date.getDate()}-{plannerday.date.getMonth() + 1}-{plannerday.date.getFullYear()}">+</a>
{/if}