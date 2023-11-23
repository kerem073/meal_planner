<script lang="ts">
    import type { Meal } from "$lib/types/meal.type";
    import { Unit } from "$lib/types/unit.enum";

    export let meal :Meal = {
        name: "Lazanja",
        ingredients: [
            {
                name: "deeg",
                unit: Unit.kg,
                amount: 2
            },
            {
                name: "sous",
                unit: Unit.piece,
                amount: 99
            },
            {
                name: "kaze",
                unit: Unit.ml,
                amount: 456
            }
        ]
    };
</script>

<div>
    <h3>{meal.name}</h3>
    <p>
    {#each meal.ingredients as ingredient}
        {ingredient.name}&nbsp;
    {/each}
    </p>

    <!-- Hier komt nog een edit button -->

</div>

<style>
    div{
        border: 1px black solid;
        width:200px;
        height:120px;
    }
</style>