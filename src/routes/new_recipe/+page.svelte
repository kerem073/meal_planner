<script lang="ts">
    import type { Ingredient } from "$lib/types/ingredient.type";
    import { Unit } from "$lib/types/unit.enum";
    import type { Meal } from "$lib/types/meal.type";
    
    let len_ingredients = 0;

    let name_recipe = "";
    let ingredients :Ingredient[] = [];

</script>

<!-- HTML -->
<h1>new recipe</h1>

<form method="POST">
    <label for="name_recipe">Name</label>
    <input name="name_recipe" type="text" bind:value={name_recipe} required/>

    <label for="ingredients">Ingredients:</label>
    {#each Array(len_ingredients) as _, i}
        <input name="name_ingredient{i}" type="text" required>

        <input name="amount_ingredient{i}"  type="text" required>

        <select name="unit_ingredient{i}" required>
            <option value="st">st</option>
            <option value="kg">kg</option>
            <option value="ml">ml</option>
        </select>
    {/each}

    <button on:click={() => len_ingredients++}>+</button>


    <input type="submit">

</form>

<!-- STYLE -->
<style>
    * {
        display: block;
    }
</style>