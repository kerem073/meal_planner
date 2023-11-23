<script lang="ts">
    import { ToCalendarDate } from '$lib/calendar/convert.js';
    import { pb } from '$lib/db/pocketbase.js';
    import { DateToIso } from '$lib/utils.js';

    export let data;
    console.dir(DateToIso(data.input_date));

    async function addMealToDay(mealid :string|null){ 
        const post = {
            date: DateToIso(ToCalendarDate(data.input_date)),
            meal: mealid
        }
        const reponse = await pb.collection("plannerdays").create(post);
        console.dir(reponse);
        window.location.href="/";
    }

</script>

<h1>Add recipe to day {data.input_date}</h1>

{#each data.meals as meal }
    <button on:click={() => {addMealToDay(meal.id)}}>{meal.name}</button>
{/each}