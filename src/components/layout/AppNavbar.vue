<template>
		  
		  <div class="hero-head">
		    <nav class="navbar">
		      <div class="container">
		        <div class="navbar-brand">
					<a>
						<img src="@/assets/img/logo.png" class="responsive">
					</a>
		          <span role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarMenuHeroA" @click="isOpen = !isOpen" v-bind:class="{'is-active': isOpen}">
		            <span></span>
		            <span></span>
		            <span></span>
		          </span>
		        </div>
		        <div id="navbarMenuHeroA" class="navbar-menu"  :class="{'is-active': isOpen}">
		          <div class="navbar-end">
 					<a class="navbar-item" v-scroll-to="{ el: '#app' }">HOME</a>
		            <a class="navbar-item" v-scroll-to="{ el: '#features' }">FEATURES</a>
		            <a class="navbar-item" v-scroll-to="{ el: '#download' }">DOWNLOAD</a>           
		            <a class="navbar-item" v-scroll-to="{ el: '#pricing' }" >PRICING</a>
		            <a class="navbar-item" v-scroll-to="{ el: '#reviews' }" >REVIEWS</a>
		          </div>
		        </div>
		      </div>
		    </nav>
		  </div>
</template>

<script>
	export default{

		data: function() { /* responsive navbar icon when webpage will small */
        return {
            isOpen: false,
        }
    }
	}
</script>

<style>
	.navbar-brand{
		margin-left: 100px;
	}
</style>