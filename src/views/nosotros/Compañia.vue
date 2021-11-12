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
             <router-link to="/arcos">
              <center>
              <img src="@/assets/compañia/marcos-dorados.jpg" width="300"></img>
              </center>
              <h3 align="center">ARCOS DORADOS S.A.</h3>
             </router-link>
             <p align="center">Arcos Dorados es el mayor operador de restaurantes de McDonald's en América Latina y el Caribe y su mayor franquiciado en el mundo.</p>

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
             <router-link to="/venezuela">
              <center>
              <img src="@/assets/compañia/macdonals-venezuela.jpg" width="300"></img>
              </center>
              <h3 align="center">McDONALD'S Venezuela</h3>
            </router-link>
             <p align="center">Somos una de las principales compañías de servicio rápido de la alimentación en el país.</p>

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
             <router-link to="/franquicias">
              <center>
              <img src="@/assets/compañia/franquicias.jpg" width="300"></img>
              </center>
              <h3 align="center">FRANQUICIAS</h3>
            </router-link>
             <p align="center">Un método de negocio exitoso</p>
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
