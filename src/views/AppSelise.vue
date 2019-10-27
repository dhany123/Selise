<template>
	<div class="app">
				<!-- Navigation bar -->
			<nav class="navbar" id="navbar" role="navigation" aria-label="main navigation">
		        <div class="navbar-brand">
					<a>
						<img src="../assets/img/logo.png" class="responsive">
					</a>
						<!-- Navbar burger. It shows when webpage is zooming out -->
					<a role="button" class="navbar-burger burger has-text-white-bis" aria-label="menu" aria-expanded="false" data-target="navbarBasic" @click="isOpen = !isOpen" v-bind:class="{'is-active': isOpen}">
				      <span aria-hidden="true"></span>
				      <span aria-hidden="true"></span>
				      <span aria-hidden="true"></span>
				    </a>
				    	<!-- End of navbar burger -->

		        </div>

		        <div id="navbarBasic" class="navbar-menu" :class="{'is-active': isOpen}">
		        	<!-- Menu bar -->
		          <div class="navbar-end">   
		            <a class="navbar-item" v-scroll-to="{ el: '#app' }">HOME</a>
		            <a class="navbar-item" v-scroll-to="{ el: '#features' }">FEATURES</a>
		            <a class="navbar-item" v-scroll-to="{ el: '#download' }">DOWNLOAD</a>           
		            <a class="navbar-item" v-scroll-to="{ el: '#pricing' }" >PRICING</a>
		            <a class="navbar-item" v-scroll-to="{ el: '#reviews' }" >REVIEWS</a>
		          </div>
		          <!-- End of Menu bar -->

		        </div>
		    </nav>
		    <!-- End of Navbar -->
    <!-- Hero -->
	<section class="hero  is-fullheight-with-navbar">
		
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
    </section>
    <!-- End of hero -->

    	<features/>
    	<download/>
    	<pricing :price="price"/>
    	<reviews :review="review"/>
    	<selise-footer/>
	</div>
</template>

<script>
	import Features from '../components/Features.vue'
	import Download from '../components/Download.vue'
	import Pricing from '../components/Pricing.vue'
	import Reviews from '../components/Reviews.vue'
	import SeliseFooter from '../components/SeliseFooter.vue'

	export default{
		props:["price", "review"],
		components:{
			'features' : Features,
			'download' : Download,
			'pricing' : Pricing,
			'reviews' : Reviews,
			'selise-footer' : SeliseFooter
		},
		data: function() { /* responsive navbar icon when webpage will small */
        return {
            isOpen: false,
        }
    }
	}
</script>
	
<style>

	section.hero{
		background-image: url("../assets/img/hero-bg.jpg");
		padding-top: 30px;
	}
	nav.navbar{
		background-image: url("../assets/img/hero-bg.jpg");
  		padding: 10px; /* Large padding which will shrink on scroll (using JS) */
  		position: fixed; /* Sticky/fixed navbar */
 		width: 100%;
	}
	.navbar-brand{
		margin-left: 100px;
	}
	.navbar-end{
		margin-right: 100px;
	}
	a.navbar-item{
		color: #d2fafa;
		font-size: 14px;
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
		height: 500px;
		width: 300px;
		display: block;
		margin-left: auto;
  		margin-right: auto;
	}

	.button{
		float: left;
		display: inline-block;
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
</style>