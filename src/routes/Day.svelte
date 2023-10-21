<script lang="ts">
    import type { Ingredient } from '$lib/types/ingredient.type';
    import { Unit } from '$lib/types/unit.enum';
    import type { Meal } from '$lib/types/meal.type';

    export let day_name:string;

    let meal:Meal;
    


</script>

<p>{day_name}</p>

{#if meal}
    <p>{meal.name}</p>
{:else}
    <a href="/add_recipe">+</a>
{/if}