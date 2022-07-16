<script>
    export let label ='Some link';
    export let path='';
    export let selected=false;

    let background=''
    $:{
      background= selected===true ? 'dark:bg-gray-700':'dark:bg-gray-800';
    //  console.log({background});
    }
</script>
 
  <a
	class={`flex items-center px-4 py-2 text-gray-700 bg-gray-200 ${background}  dark:text-gray-200`}
	href={path}>
 

	<span class="capitalize mx-4 font-medium">{label}</span>
</a>
