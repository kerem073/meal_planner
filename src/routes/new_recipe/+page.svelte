<script lang="ts">
    import type { Ingredient } from "$lib/types/ingredient.type";
    import type { Meal } from "$lib/types/meal.type";
    import { pb } from "$lib/db/pocketbase";

    let name_recipe = "";
    let ingredients :Ingredient[] = [];

    function addIngredient(){
        ingredients = [...ingredients, {name:"", unit:1, amount:0}];
        console.dir(ingredients);
    }

    async function saveNewRecipe(){
        let data :Meal = {
            name: name_recipe,
            ingredients:ingredients
        }

        const record = await pb.collection('meals').create(data);

        window.location.href="/recipes";
    }

</script>

<!-- HTML -->
<h1>new recipe</h1>

<form on:submit|preventDefault>
    <label for="name_recipe">Name</label>
    <input name="name_recipe" type="text" bind:value={name_recipe} required/>

    <label for="ingredients">Ingredients:</label>
    {#each ingredients as ingredient, i }
        <input name="name_ingredient{i}" bind:value={ingredient.name} type="text" required>

        <input name="amount_ingredient{i}" bind:value={ingredient.amount} type="text" required>

        <select name="unit_ingredient{i}" bind:value={ingredient.unit} required>
            <option value="st">st</option>
            <option value="kg">kg</option>
            <option value="ml">ml</option>
        </select>
    {/each}

    <button on:click={addIngredient}>+</button>

    <input type="submit" on:click={saveNewRecipe}>

</form>

<!-- STYLE -->
<style>
    * {
        display: block;
    }
</style>