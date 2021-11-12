<template>
  <div>
    <v-row>
      <v-col cols="12" md="6">
        <img src="@/assets/macdonal1.jpg" alt="" max-width="300" />
        <h1 align="center">QUIÉNES SOMOS</h1>
      </v-col>
    </v-row>
    <v-container>
    <v-row>
      <v-col  cols="12" md="6">
             <router-link to="/gente">
              <center>
              <img src="@/assets/unete/imagen-1.jpg" width="300"></img>
              </center>
              <h3 align="center">CONOCE NUESTRA GENTE</h3>
             </router-link>
             <p align="center">Para McDonald's sus empleados son el activo más importante.</p>
             <v-progress-linear
                 class="mx-auto"
                 height="10"
                 max-width="350px"
                 color="yellow darken-2"
                 rounded
                 value="100"
              >

              </v-progress-linear>

      </v-col>

      <v-col  cols="12" md="6">
             <router-link to="/trabajo">
              <center>
              <img src="@/assets/unete/imagen-3.jpg" width="300"></img>
              </center>
              <h3 align="center">TRABAJO EN RESTAURANTES</h3>
            </router-link>
             <p align="center">¿Quieres unirte al equipo de trabajo en nuestros locales?</p>
             <v-progress-linear
                 class="mx-auto"
                 height="10"
                 width="350"
                 color="yellow darken-2"
                 rounded
                 value="100"
              >

               </v-progress-linear>
      </v-col>
    </v-row>

    <v-row>
      <v-col  cols="12" md="6">
             <router-link to="/oficina">
              <center>
              <img src="@/assets/unete/imagen-4.jpg" width="300"></img>
              </center>
              <h3 align="center">TRABAJO EN LA OFICINA</h3>
            </router-link>
             <p align="center">Un gran lugar para trabajar</p>
             <v-progress-linear
                 class="mx-auto"
                 height="10"
                 max-width="350"
                 color="yellow darken-2"
                 rounded
                 value="100"
              >

               </v-progress-linear>
      </v-col>

      <v-col  cols="12" md="6">
      </v-col>
    </v-row>
    </v-container>
  </div>
</template>