<template>

	<footer class="footer">
		<div class="container">
			<!-- Footer -->
		<div class="columns is-footer">

			<!-- 1st column of footer -->
			<div class="column">
				<img src="@/assets/img/footer-logo.png" class="responsive">
				<p class="contact">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor</p>
			</div>
			<!-- End of 1st column -->

			<!-- 2nd column of footer -->
			<div class="column is-5 is-centered">
				<div class="img">
					<a href="">
						<img class="store" src="@/assets/img/app-store-gradient.png">
					</a>
					<a href="">
						<img class="store" src="@/assets/img/play-store-gradient.png">
					</a>
				</div>
				<div class="icon is-responsive">
					<a href="" class="social">
						<i class="fab fa-facebook-square fa-2x" style="margin: 10px"></i>
					</a>
					<a href="" class="social">
						<i class="fab fa-twitter-square fa-2x"style="margin: 10px"></i>
					</a>
					<a href="" class="social">
						<i class="fab fa-google-plus-g fa-2x"style="margin: 10px"></i>
					</a>
					<a href="" class="social">
						<i class="fab fa-instagram fa-2x"style="margin: 10px"></i>
					</a>
					<a href="" class="social">
						<i class="fab fa-linkedin fa-2x"style="margin: 10px"></i>
					</a>
				</div>
				<div>
					<p class="copyright">Copyright &copy; <span>Selise</span> | 2019</p>
				</div>
			</div>
			<!-- End of 2nd column -->

			<!-- 3rd column -->
			<div class="column">
				<a href="" class="info">About ME</a>
				<a href="" class="info">Contact ME</a>
				<a href="" class="info">Privacy Policy</a>
				<a href="" class="info">FAQ</a>
			</div>
			<!-- end -->
		</div>
	
		</div>
	</footer>
</template>
<script>
	
</script>

<style>

	/*3rd column*/
	a.info{
		display: flex;
		flex-direction:row;
		justify-content: right;
		align-items: right;
		color: #676767;
		line-height: 2;
	}
	
	/*1st column*/
	p.contact{
		width: 250px;
		color: #676767;
	}

	/*2nd column*/
	.column.is-5{
  text-align: center;
  vertical-align: middle;
	}
	.img{
	  display:flex;
	  align-items: center;
	  justify-content: center;
	}
	img.store{
		margin: 10px;
	}
	
	p.copyright{
		text-align: center;
		color: #676767;
	}
	a.social{
		color: #676767;
	}

</style>