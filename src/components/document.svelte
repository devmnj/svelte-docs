<script>
	import SvelteMarkdown from 'svelte-markdown';
	export let title = '## Some title';
	export let body; 
	let source = '';
	$:{
		source=body
	}
</script>
 
  ## We are good @ developing *apps*
 
<!-- {body} -->
<!-- 
<div class="bg-white py-6 sm:py-8 lg:py-12 h-full">
	<div class="max-w-screen-md px-4 md:px-8 mx-auto">
		<h1 class="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6">{title}</h1>

		<p class="text-gray-500 sm:text-lg mb-6 md:mb-8 "  > -->
     <div class="m-3 prose1 prose-purple">
	  <SvelteMarkdown source={title}   />
	  <SvelteMarkdown source={body}  />
	  
	</div>
   

     # We are good @ developing *apps*
    <!-- { md} -->
	<!-- </p>
	</div>
	## Hi
</div> -->


<style>
 h1,h2{
	color:red;
	font-size:22px;
 }
  
</style>