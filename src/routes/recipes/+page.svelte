<script lang='ts'>
    import RecipeCard from '$lib/components/RecipeCard.svelte'
    export let data;
    const recipes = data.recipes;
    
</script>


<h1>Recipes</h1>

{#each recipes as recipe}

    <RecipeCard meal={recipe}/>
    
{/each}

<a href="/">To planning</a>