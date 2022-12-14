<script lang="ts">
export default {
  name: 'App',
  components: { OurPartners }
}
</script>

<script setup lang="ts">
import Hero from '~/components/pages/landing/Hero.vue'
import AboutUs from './components/pages/landing/AboutUs.vue'
import OurGames from './components/pages/landing/OurGames.vue'
import OurPartners from './components/pages/landing/OurPartners.vue'
</script>

<template>
  <Hero />
  <AboutUs />
  <OurGames />
  <OurPartners />
</template>
