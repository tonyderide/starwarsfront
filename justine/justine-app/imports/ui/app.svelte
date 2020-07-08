<script>
    import Issue from './Issue.svelte';
    function getIssues() {
        return [
            {
                title:'First Issue Title',
                description:'First Issue description',
                dueDate: '2021-01-01',
                priority:'Low'
            },
            {
                title:'Second Issue Title',
                description:'Second Issue description',
                dueDate: '2021-01-02',
                priority:'Medium'
            },
            {
                title:'Third Issue Title',
                description:'Third Issue description',
                dueDate: '2021-01-03',
                priority:'High'
            }
        ]
    }
</script>

<div class="container">
    <header>
        <h1>Issues:</h1>
    </header>
    <ul>
        {#each getIssues() as issue}
            <Issue
                issue = {issue}
            />
        {/each}
    </ul>
</div>
