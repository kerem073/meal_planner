<script lang="ts">
    import Day from "./Day.svelte";
    import * as fs from "fs";
    let names_of_days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    
    // const data = JSON.stringify(user);
    // fs.writeFile("data.json", data, (error) => {
    //     if (error) {
    //         console.error(error);
    //         throw error;
    //     }
    //     console.log("data.json written correctly");
    // });
</script>

{#each names_of_days as day}
    <Day day_name={day}/>
{/each}
