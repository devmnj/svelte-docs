<script>
	import Sidenav from '../components/sidenav.svelte';
	import '../app.css';
	import { docs } from '../store/docstore';
	import Catloader from '../components/catloader.svelte';
	export /**
* @type {any[]}
*/
 
	 let slugs = [];
	$: {
		slugs = $docs?.map((d)=>d.slug) ;
		  console.log(slugs);
		 
	}
   let brand = import.meta.env.VITE_ENV_BRAND;
   let desc =  import.meta.env.VITE_ENV_SUBTITLE;
   let url = import.meta.env.URL;
   console.log(brand);

</script>


 
<div class="   bg-gray-800  h-full">
	<!-- <Nav /> -->
 
	<div class="flex bg-purple-50  ">
		
		<div class="w-80 bg-gray-800 pt-3">
		<a href="/">	<h2 class="text-2xl font-semibold text-center text-gray-800 dark:text-white">{brand}</h2></a>

			<div class="flex flex-col items-center mt-6 -mx-2">
				<!-- <img
					class="object-cover w-24 h-24 mx-2 rounded-full"
					src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
					alt="avatar" /> -->
				<h4 class="mx-2   font-medium text-gray-800 dark:text-gray-200 hover:underline">
					{desc ||" Description"}
				</h4>
				<p class="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline">
					{url || "john@example.com"}
				</p>
			</div>

			<div class="flex text-lg flex-col justify-between flex-1 mt-6">
				<nav>
					<!-- <Sidenav selected={true} label="Home" path="/" /> -->
				 
					{#each slugs as slug}
						<Sidenav label={slug} path={`/docs/${slug}`} />
					{/each}
				</nav>
			</div>

		</div>

		<div class=" w-full">
			<div class=" h-screen m-3 ">
				{#if !slugs}
					<Catloader />
				{:else}
				
					<slot />
				{/if}
			</div>
		</div>
	</div>
</div>
