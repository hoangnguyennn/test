<script lang="ts">
export default {
  name: 'OurGames'
}
</script>

<script setup lang="ts">
import game1Img from '~/assets/images/game1.png'
import game2Img from '~/assets/images/game2.png'
import game3Img from '~/assets/images/game3.png'
import game4Img from '~/assets/images/game4.png'
import game5Img from '~/assets/images/game5.png'
import game6Img from '~/assets/images/game6.png'
import game7Img from '~/assets/images/game7.png'
import game8Img from '~/assets/images/game8.png'
import game9Img from '~/assets/images/game9.png'
import game10Img from '~/assets/images/game10.png'
import game11Img from '~/assets/images/game11.png'
import game12Img from '~/assets/images/game12.png'

import CardGame from '~/components/common/CardGame.vue'

const ourGames = [
  {
    title: 'E-Space',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    backgroundImage: game1Img
  },
  {
    title: 'E-Space',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    backgroundImage: game2Img
  },
  {
    title: 'E-Space',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    backgroundImage: game3Img
  },
  {
    title: 'E-Space',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    backgroundImage: game4Img
  },
  {
    title: 'E-Space',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    backgroundImage: game5Img
  },
  {
    title: 'E-Space',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    backgroundImage: game6Img
  },
  {
    title: 'E-Space',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    backgroundImage: game7Img
  },
  {
    title: 'E-Space',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    backgroundImage: game8Img
  },
  {
    title: 'E-Space',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    backgroundImage: game9Img
  },
  {
    title: 'E-Space',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    backgroundImage: game10Img
  },
  {
    title: 'E-Space',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    backgroundImage: game11Img
  },
  {
    title: 'E-Space',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    backgroundImage: game12Img
  }
]

const ourGames1 = ourGames.slice(0, 6)
const ourGames2 = ourGames.slice(6)
</script>

<template>
  <div id="games" class="our-games spacer-48">
    <div class="title-and-description text-center">
      <h3 class="title">Our Games</h3>
      <p class="description">
        As a pioneer of mobile app gamification, we take pride in originality
        and individuality, providing global players with state-of-the-art games
        that feature splendid storylines, sensational sound effects and
        magnificent animation that never cease to impress.
      </p>
    </div>

    <div class="games">
      <div class="column column-1">
        <CardGame
          v-for="(game, index) in ourGames1"
          :key="index"
          v-bind="game"
        />
      </div>
      <div class="column column-2">
        <CardGame
          v-for="(game, index) in ourGames2"
          :key="index"
          v-bind="game"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.our-games {
  .title-and-description {
    padding-left: 16px;
    padding-right: 16px;

    .title {
      font-family: 'Playfair Display';
      font-size: 40px;
      font-weight: 900;
      line-height: 50px;
      letter-spacing: 0.6px;
      color: #000000;
    }

    .description {
      margin-top: 16px;
      color: #757575;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
    }
  }

  .games {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;

    .column {
      flex: 1;
      display: flex;
      flex-wrap: wrap;

      &.column-1 {
        justify-content: flex-start;
        margin-left: 16px;
        margin-bottom: 36px;
      }

      &.column-2 {
        justify-content: flex-end;
        margin-right: 16px;
        margin-top: 36px;
      }

      > *:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
