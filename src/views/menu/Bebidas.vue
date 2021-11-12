<template>
	<div align="center">
		<img src="@/assets/macdonal1.jpg" alt="" />
		<h1>{{lugar}}</h1>
		<v-row>
			<v-col>
		      <div>
				  <div class="cocacola">COCACOLA</div>
				  <img src="@/assets/bebidas/cocacola1.png" alt="">
			  </div>
			</v-col>

			<v-col>
				 <div>
		<div class="centrado">TE FRIO</div>
		<img src="@/assets/bebidas/Te-frio -mediano1.png" alt="" width="380">
	   </div>
			</v-col>
		</v-row>

	   <div v-if="loading">cargando...</div>
	   <div v-else>{{placeholder.title}}</div>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				lugar: '',
				loading: false,
				placeholder: {},
				userId:'',
			}
		},
		created(){
			this.lugar = this.$route.query.lugar;
			this.userId = this.$route.query.user;
		},
		mounted() {
			this.initialfetch()
		},
		methods: {
		  async initialfetch () {
		  	this.loading = true
		   	let response = await fetch('https://jsonplaceholder.typicode.com/todos/2')
			this.placeholder = await response.json();
			console.log(this.placeholder)
			this.loading = false;
		  }
		}
	}
</script>