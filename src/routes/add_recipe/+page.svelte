<script lang='ts'>

    export let data;

    $: ({recipes} = data)

</script>


<h1>Add add recipe</h1>

{#each recipes as recipe}
    <p>{recipe.name_recipe}</p>

    {#each recipe.ingredients as ingredient}
        <p>{ingredient.name_ingredient}</p>
    {/each}
    <hr>
    
{/each}