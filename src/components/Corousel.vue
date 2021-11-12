<template>
  <div>
    <img src="@/assets/macdonal1.jpg" alt="" />
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
              <!--<router-link style="text-decoration: none" :to="item.link">
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
</template>


<script>

  export default {
    name: 'Corousel',
     data () {
      return {
         items: [
            {
              id: 1,
              src: require ('@/assets/cocacola.png'),
              name: 'Bebidas',
              nameRoute: 'bebidas',
              link:'/bebidas', lugar: 'refrigerador',
              user: 1
            },

            {
              id: 2, src: require ('@/assets/cajita-feliz.png'),
              name:'Cajita Feliz',
              nameRoute: 'cajitafeliz',
              link:'/cajita-feliz',
              lugar: 'almacen',
              user: 2
            },

            {
              id: 3,src: require ('@/assets/oreo.png'),
              name:'Postres',
              nameRoute: 'postres',
              user: 3
            },

            {
              id: 4,src: require ('@/assets/desayuno.png'),
             name:'Desayuno',
             nameRoute: 'desayuno',
             user: 4
            },

            {
              id: 5,src: require ('@/assets/hamburguesa_VE2.png'),
              name:'HAMBURGUESA',
              nameRoute: 'hamburguesas',
             user: 5
            },

            {
              id: 6,src: require ('@/assets/mcpollo1.png'),
              name:'POLLO',
              nameRoute: 'pollo',
             user: 6
            },

            {
              id: 7,src: require ('@/assets/Mcpapas1.png'),
              name:'ACOMPAÑAMIENTO',
              nameRoute: 'acompañamiento',
             user: 7
            },
        ],
      }
    },
  }

    </script>