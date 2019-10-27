<template>
	<div  class="plan-feature">
		<div v-for="feature in features">
			<p>{{feature.name}}</p>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				features:[
					{name:'Easy Install'},
					{name:'Unlimited Support'},
					{name: 'Unique Elements'},
					{name:'Limited Features'}
					]
			}
		}
	}
</script>
<style></style>