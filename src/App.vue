<template>
  <v-app>
      <v-toolbar
      flat
      height="72"
    >
      <v-switch
        v-model="$vuetify.theme.dark"
        label="LIGTH/DARK"
        persistent-hint
      ></v-switch>
    </v-toolbar>
<div>
    <v-toolbar
      color="warning"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>AGfast-food</v-toolbar-title>

      <v-spacer></v-spacer>


    </v-toolbar>
  </div>

  <v-sheet>
        <v-navigation-drawer
        dark
        v-model="drawer"
        absolute
        temporary
      >
     <router-link to="/">

        <v-list-item-avatar>
          <v-img src="@/assets/macdonal-logo.png" justify="center"></v-img>
        </v-list-item-avatar>
           <p class="white--text mt-3 headline" align="center">AGfast-food</p>
              <v-btn color="info" block :to="{name:'menu'}" class=ml-1>Menu</v-btn>
              <v-btn color="info" block :to="{name:'restaurante'}" class=ml-1>Restaurante</v-btn>
              <v-btn color="info" block :to="{name:'familia'}" class=ml-1>Familia</v-btn>
              <v-btn color="info" block :to="{name:'nosotros'}" class=ml-1>Nosotros</v-btn>
              <v-btn color="info" block :to="{name:'novedades'}" class=ml-1>Novedades</v-btn>
      </router-link>
        <v-divider></v-divider>
    </v-navigation-drawer>
  </v-sheet>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  import Menu from '@/views/Menu'
  export default {
    name: "App",
    data () {
      return {
        drawer: true,
      };
    },
     props: {
      attrs: {
        type: Object,
        default: () => ({}),
      },
    },

  }

</script>