<template>
	<div align="center">
    <img src="@/assets/macdonal1.jpg" alt="" />
		<h1>{{lugar}}</h1>
		<v-row>
			<v-col>
				<div>

		  <v-carousel
    cycle
    height="auto"
    hide-delimiter-background
    show-arrows-on-hover
    align="center"
  >

    <v-carousel-item
      v-for="(item) in items"
      :key="item.id"
      :src="item.src"
      :width="500"
    >

    <v-img>
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text-h2 my-4">
              <!--  <router-link style="text-decoration: none" :to="item.link">
                {{item.name}}
              </router-link> -->
              <router-link
                style="text-decoration: none"
                :to="{ name: item.nameRoute, query: { lugar: item.lugar, user:item.user}}"
              >
                  {{item.name}}
              </router-link>
          </div>
        </v-row>
    </v-img>


    </v-carousel-item>
    </v-carousel>
	   </div>
			</v-col>

			<v-col>
				 <div>
		<div class="centrado">BEBIDA 12 OZ</div>
		<img src="@/assets/cajita-feliz/vaso_bebida.png" alt="" width="380">
	   </div>
			</v-col>
		</v-row>
	</div>
</template>

<script>
  export default {
    data () {
      return {

        items: [
            {
              id: 1,
              src: require ('@/assets/cajita-feliz/Hamburguesa_Queso.png'),
              name: 'Hamburguesa con Queso'
              },

            {
              id: 2, src: require ('@/assets/cajita-feliz/hamburguesa_VE21.png'),
              name:'Hamburguesa'
              },

            {
              id: 3, src: require ('@/assets/cajita-feliz/Nuggets_4u.png'),
              name:'Nuggets'
              }
        ],
      }
    },
  }
</script>

