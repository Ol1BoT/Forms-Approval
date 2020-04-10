<template>
  <v-app>
    <v-app-bar app color="#003263" dark>
      <router-link to="/">
        <v-toolbar-title>Forms</v-toolbar-title>
      </router-link>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  })
};
</script>
<style>
a {
  text-decoration: none;
  color: white;
}
</style>