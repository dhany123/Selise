<template>
	<section id="pricing" class="pricing">
		<div class="container">
			<h1 class="pricing"><b>Choose</b> Your Plan Today</h1>

			<div class="columns is-pricing is-centered">
				<div class="column is-3" v-for="price in prices" :key="price.icon">
				<div class="card">
				  <header class="card-header" :style="{backgroundColor: price.color, background: price.color, color: price.iconColor}">
				  	<i :class="price.icon" ></i><br>
				    <p class="card-header-title" :style="{color: price.font}">
				      {{price.rate}}
				    </p>
				  </header>
				  <div class="card-content">
				    <div class="content">
				    	<plan-features :feature="feature"/>
							<div>
							<p class="price"><span class="price">{{price.price}}</span>/month</p>
							<button class="plan-button" :style="{backgroundImage: price.color, color: price.font }">BUY NOW</button>
							</div>
				    </div>
				  </div>
				 
				</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import PlanFeatures from './PlanFeatures.vue'
	export default{
		props:["features", "feature"],
		components:{
			'plan-features' : PlanFeatures
		},
		data(){
			return{
				prices:[
					{	
						iconColor:'#fa0087',
						font: '#757575',
						color:'#f3f3f3',
						icon: 'fas fa-gift fa-2x',
						rate:'FREE',
						price:'$0'
					},
					{	
						iconColor: 'white',
						font: 'white',
						color:'linear-gradient(to right, #6600cc 9%, #9900cc 100%)',
						icon: 'fas fa-heart fa-2x',
						rate:'MEDIUM',
						price:'$3'
					},
					{
						iconColor: '#0087fa',
						font: '#757575',
						color:'#f3f3f3',
						icon: 'far fa-gem fa-2x',
						rate:'PLATINUM',
						price:'$7'

					}
				]
			}
		}
	}
	
</script>

<style>
	.card{
		width: 290px;
		margin-bottom: 50px;
		margin-top: 40px;		
	}
	section.pricing{
		padding-top: 30px;
	}

	header.card-header{
		padding-top: 40px;
		padding-bottom: 20px;
		display: flex;
		flex-direction:column;
		justify-content: center;
		align-items: center;
		text-align: center;

	}
	.card-content{
		color: #757575;
		text-align: center;
		line-height: 2;
		margin-top: 15px;
	}
	h1.pricing{
		color: #676767;
		text-align: center;
		padding-top: 60px;
		font-size: 28px;
	}
	p.price{
		color: #9900cc;
		padding-top: 10px;
		text-align: center;
		
	}
	span.price{
		font-size: 50px;
	}
	button.plan-button{
		border-radius: 30px;
		border-color: #9900cc;
		background-color: white;
		width: 200px;
		padding: 20px;
		color: #9900cc;
		margin-bottom: 20px;
	}

	
</style>