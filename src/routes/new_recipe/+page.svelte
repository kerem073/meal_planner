<script>

    let len_ingredients = 0;
    function add_new_recipe(form) {
        // gooi het gelijk in een db. dan hebben we dat ook geleerd
    }

</script>

<!-- HTML -->
<h1>new recipe</h1>

<form name="new_recipe" id="new_recipe">
    <label for="name_recipe">Name</label>
    <input name="name_recipe" id="name_recipe" type="text" required/>
    <label for="ingredients">Ingredients</label>
    {#each Array(len_ingredients) as _, i}
        <input name="name_ingredient{i}" id="name_ingredient{i}" type="text" required>
        <input name="amount_ingredient{i}" id="amount_ingredient{i}" type="text" required>
        <select name="unit_ingredient{i}" id="unit_ingredient{i}" required>
            <option value=""></option>
            <option value="st">st</option>
            <option value="kg">kg</option>
            <option value="ml">ml</option>
        </select>
    {/each}

    <button on:click={() => len_ingredients++}>+</button>

    <input type="button" name="button" value="Add recipe" on:click={add_new_recipe(this.form)}>

</form>

<!-- STYLE -->
<style>
    * {
        display: block;
    }
</style>