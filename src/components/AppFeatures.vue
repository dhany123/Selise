<template>
	<div class="columns">
		<div class="column is-1st is-3">
			<div class="feature">
				<i class="fas fa-bell fa-2x" style="color: orange;"></i>
				<p class="iconName">Smart Notification</p>
				<p class="iconCaption">It notifies you automatically when something changes.</p>
			</div>

			<div class="feature">
				<i class="fas fa-tachometer-alt fa-2x" style="color: pink;"></i>
				<p class="iconName">Clean UI Design</p>
				<p class="iconCaption">It has minimal design that will not hurt your eyes.</p>
			</div>
		</div>

		<div class="column is-2nd is-3">

			<div class="feature">
				<i class="fas fa-battery-full fa-2x" style="color: blue;"></i>
				<p class="iconName">Battery Saver</p>
				<p class="iconCaption">Have a long lasting life of battery.</p>
			</div>

			<div class="feature">
				<i class="fas fa-paper-plane fa-2x" style="color: green;"></i>
				<p class="iconName">Fast Performance</p>
				<p class="iconCaption">It loads faster.</p>
			</div>					
					
		</div>

		<div class="column is-4">
	          <img class="ipad" src="../assets/img/2-iphone-right.png">
	    </div>

	</div>
</template>

<script>
	
	export default{
		name: "Features"
	}
	
</script>

<style>
	h1.features{
		color: #676767;
		text-align: center;
		padding-top: 90px;
		font-size: 30px;
	}
	.columns.is-feature{
		padding-bottom: 80px;
	}

	.column.is-1st{
		margin-left: 120px;
		display: flex;
		flex-direction:column;
		justify-content: center;
		align-items: left;
	}
	.column.is-2nd{
		display: flex;
		flex-direction:column;
		justify-content: center;
		align-items: left;
	}

	.feature{
		padding-top: 40px;
		margin-left: 20px;
	}

	p.iconName{
		color: #676767;
		font-weight: bold;
		font-size: 14px;
	}
	p.iconCaption{
		color: #676767;
		font-size: 14px;
		width: 250px;
		line-height: 2;
		text-align: justify;
	}
	img.ipad{
		height: 500px;
		width: 420px;
		display: block;
		margin-right: auto;
		margin-left: auto;
	}
	
</style>