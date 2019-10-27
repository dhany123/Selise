<template>
	<section id="reviews" class="reviews">
		<div class="container">
		<h1 class="review"><b>Happy</b> Users</h1>
		
		<div class="carousels">
		<carousel :per-page="1" :navigation-enabled="true" :scroll-per-page="false" :mouse-drag="true" :loop="true"
            navigation-next-label="<i class='fas fa-chevron-right fa-2x' style='color: white; background-color: hsla(174, 81%, 98%, 0.01);  height: 1em; position:relative; border: 1px solid white; padding: 9px; font-size:50px; width: 1em;border-radius: 50%;margin-left: -300px;margin-right: 100px;'></i>"
            navigation-prev-label="<i class='fas fa-chevron-left fa-2x' style='color: white; background-color: hsla(174, 81%, 98%, 0.01);  height: 1em; position:relative; border: 1px solid white; padding: 9px; font-size:50px; width: 1em;border-radius: 50%;margin-right: -300px; margin-left: 100px;'></i>">

          <slide v-for="review in reviews" :key="review.id">
              <img class="image" :src="review.image" border="2 solid">                 
              <div class="box is-responsive" style="background-color: hsla(174, 81%, 98%, 0.01);border: 1px solid white;   		padding-top: 30px; margin-bottom: 50px;">
              	<span class="review">{{review.review}}</span>
              </div>

              <p>{{review.name}}</p>
              <p>{{review.work}}</p>
              
          </slide>

       </carousel>
		</div>
		</div>
		
	</section>

</template>

<script>
	export default{
		data(){
			return{
				reviews:[
					{
						id: 1,
						image: "kat.jpg",
						review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
						name: 'Jane Doe',
						work: 'Web Designer'
					},
					{
						id: 2,
						image: "kat.jpg",
						review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
						name: 'Jane Doe',
						work: 'Web Designer'
					},
					{
						id: 3,
						image: "kat.jpg",
						review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
						name: 'Jane Doe',
						work: 'Web Designer'
					}
				]
			}
		}
	}
</script>

<style>
	section.reviews{
		background-image: url("../assets/img/hero-bg.jpg");
	}
	h1.review{
		padding-top: 90px;
		text-align: center;
		padding-bottom: 30px;
		font-size: 28px;
		margin-top: 40px;
	}
	.carousels{
		position: relative;
		text-align: center;
		padding-bottom: 90px;
	}

	img.image{
		border-radius: 50%;
		width: 120px;
		height: 120px;
		border-color:#FF0066;
		display: block;
		margin-left: auto;
		margin-bottom: 40px; 
		margin-right: auto;
	}
	.box{
		width: 550px;
		height: 150px;
		display: flex;
		margin-left: auto;
  		margin-right: auto;

	}
	span.review{
		color: white;

	}

	@media only screen and (max-width: 550px){
		.box{
			width: 80%;
			clear: both;
		}
	}
</style>