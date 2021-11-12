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
</template>


<script>

  export default {
    name: 'Nosotroscarrusel',
     data () {
      return {
         items: [
            {
              id: 1,
              src: require ('@/assets/nosotros/compañia-mc.png'),
              name: 'Compañia',
              nameRoute: 'compañia',
              link:'/compañia', lugar: 'compañia',
              user: 1
            },

            {
              id: 2, src: require ('@/assets/nosotros/puertas-abiertas.png'),
              name:'Puertas',
              nameRoute: 'puertas',
              link:'/puertas',
              lugar: 'puertas',
              user: 2
            },

            {
              id: 3,src: require ('@/assets/nosotros/unete-mc.png'),
              name:'Unete',
              nameRoute: 'unete',
              user: 3
            },

        ],
      }
    },
  }

    </script>