<script>
    import people from '$lib/data.json';
  
</script>

<!-- The "item" variable can be treated like a parsed object: -->

<section>
		<h2>Our Many People Component</h2>
		<div>
			<!-- We can access the people default import which is an array directly in the code -->
			{#each people as { firstName, lastName, jobTitle, email }}
				
					<h2>{firstName} {lastName}</h2> 
					<p><strong>{jobTitle}</strong></p>
					<p>{email}</p>
			
			{/each}
		</div>
</section>