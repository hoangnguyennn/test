<script lang="ts">
export default {
  name: 'CardGame'
}
</script>

<script setup lang="ts">
import { computed, StyleValue } from 'vue'

interface PropTypes {
  backgroundImage?: string
  title: string
  description: string
}
const { backgroundImage, title, description } = defineProps<PropTypes>()

const cardGameStyles = computed<StyleValue>(() => {
  if (backgroundImage) {
    return { backgroundImage: `url(${backgroundImage})` }
  }

  return {}
})
</script>

<template>
  <div class="card-game" :style="cardGameStyles">
    <div class="content">
      <div class="title">{{ title }}</div>
      <div class="description">{{ description }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-game {
  width: 164px;
  height: 268px;
  color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));

  .content {
    padding-bottom: 11px;
    padding-left: 8px;

    .title {
      font-size: 24px;
      font-weight: 700;
      line-height: 30px;
    }

    .description {
      margin-top: 3px;
      padding-right: 18px;
      font-size: 12px;
      font-weight: 400;
      line-height: 15px;
      letter-spacing: 0.9px;
    }
  }
}
</style>
