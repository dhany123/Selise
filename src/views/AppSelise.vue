<template>
	<div class="app">
		<div class="hero is-link is-medium">
			<!-- Hero head: will stick at the top -->
			<app-navbar/>
			  <!-- Hero content: will be in the middle -->
			<div class="hero-body">
			    <div class="container">
			     <div class="columns">
					<div class="column is-title">
						<img class="responsive is-logo" src="../assets/img/hero-logo.png">
						<h1 class="mainTitle">CREATE YOUR APP LANDING PAGE WITH <b>SELISE</b></h1>

						<div class="buttons">
							
								<button class="button is-download">DOWNLOAD NOW</button>					
								<button class="button is-rounded">WATCH VIDEO</button>
						
						</div>

					</div>

					<div class="column">
						<img class="responsive is-phone" src="../assets/img/hero-app-screen.png">	
					</div>   			
				</div>
			    </div>
			</div>
		</div>

			    <!-- 2nd section -->
	    <div id="features">
	      <h1 class="header"><b>Amazing</b> features that quickly 
	        <p>build your landing page</p>
	      </h1>     
	      		<!-- Features -->
	      	<app-features/>

	    </div>
	    
	    <!-- 3rd section -->
	    <div id="download" style="background: linear-gradient(to right, #6600cc 9%, #9900cc 100%); color: white;">
	      <h1 class="header">
	        <p><b>Download Selise.</b> landing page</p>
	        <p>for make your life easy</p>
	      </h1>
	        <div class="store" >
	          <a href="">
	            <img class="app" src="../assets/img/app-store-white.png">
	          </a>
	          <a href="">
	            <img class="app" src="../assets/img/play-store-white.png">
	          </a>
	        </div>
	    </div>

	  <!-- 4th section -->
	    <div id="pricing">
	      <h1 class="header"><b>Choose</b> Your Plan Today</h1>
	      <!-- Pricing cards -->
	      	<price-cards/>
	    </div>
	  
	  <!-- 5th section -->
	    <div id="reviews" style="background-image: url('hero-bg.jpg'); color: white;">
	      <h1 class="header"><b>Happy</b> Users</h1>
	      <!-- Carousel -->
	     	 <user-reviews/>
	    </div>

      <app-footer/>
    	
	</div>
</template>

<script>
	import AppNavbar from '@/components/layout/AppNavbar.vue'
	import AppFooter from '@/components/layout/AppFooter.vue'
	import AppFeatures from '@/components/AppFeatures.vue'
	import UserReviews from '@/components/UserReviews.vue'
	import PriceCards from '@/components/PriceCards.vue'

	export default{
		name: "AppSelise",
		components:{
			'app-navbar' : AppNavbar,
			'app-footer' : AppFooter,
			'app-features' : AppFeatures,
			'user-reviews' : UserReviews,
			'price-cards' : PriceCards
			
		}
	}
</script>
	
<style>

	.hero{
		background-image: url("../assets/img/hero-bg.jpg");
	}
	nav.navbar{
		background-image: url("../assets/img/hero-bg.jpg") !important;
  		padding: 10px; /* Large padding which will shrink on scroll (using JS) */
  		position: fixed; /* Sticky/fixed navbar */
 		width: 100%;
	}

	.navbar-item{
		color: white !important;
		font-size: 15px;
	}
	a.icon{
		 display: none;
	}
	.column.is-title{
		display: flex;
		flex-direction:column;
		justify-content: center;
		align-items: left;
	}
	img.responsive.is-logo{
		width: 100px;
	}
	img.responsive.is-phone{
		height: 480px;
		width: 300px;
		display: block;
		margin-left: auto;
  		margin-right: auto;
	}

	.button.is-download{
		background-image: linear-gradient(to right, red , yellow);
		border-radius: 40px;
		color: white;
		width: 180px;
		padding: 25px;
		margin-top: 40px;
		border: 1px;
	}

	.button.is-rounded{
		width: 150px;
		margin-top: 40px;
		padding: 25px;
		color: #676767;
		border: 1px;
	}

	h1.mainTitle{
		color: white;
		line-height: 1.3;
		display: block;
		margin-left: auto;
		margin-right: auto;
		padding-top: 30px;
		font-size: 33px;
	}
	.column.is-buttons{
		flex-direction:row;
		justify-content: center;
	}
	
	.header{
	    padding-top: 90px;
	    text-align: center;
	    padding-bottom: 30px;
	    font-size: 28px;
	    margin-top: 40px;
	}

  	.store{
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  padding-bottom: 50px;
	}

	img.app{
		margin: 10px;
	}

</style>