<script lang="ts">
export default {
  name: 'OurPartners'
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

import partner1 from '~/assets/images/partner1.png'
import partner2 from '~/assets/images/partner2.png'
import partner3 from '~/assets/images/partner3.png'
import partner4 from '~/assets/images/partner4.png'
import partner5 from '~/assets/images/partner5.png'
import partner6 from '~/assets/images/partner6.png'
import partner7 from '~/assets/images/partner7.png'
import arrowSquare from '~/assets/images/arrow_square_left.png'

import TitleAndDescription from '~/components/common/TitleAndDescription.vue'
import useMobile from '~/hooks/useMobile'

const partners = [
  { logo: partner1 },
  { logo: partner2 },
  { logo: partner3 },
  { logo: partner4 },
  { logo: partner5 },
  { logo: partner6 },
  { logo: partner7 }
]

const modules = [Navigation]

const { isMobile } = useMobile()
const slidePerView = computed(() => (isMobile.value ? 2 : 5))
const spaceBetween = computed(() => (isMobile.value ? 12 : 40))
</script>

<template>
  <div id="partners" class="our-partners spacer">
    <TitleAndDescription
      :title="$t('our_partners.title')"
      class="text-center"
    />

    <div class="partner__container">
      <div class="partner__list">
        <swiper
          :modules="modules"
          :slides-per-view="slidePerView"
          :space-between="spaceBetween"
          :navigation="{
            prevEl: '.partner__control--prev',
            nextEl: '.partner__control--next'
          }"
          centeredSlides
          :pagination="{ clickable: true }"
          :initial-slide="2"
        >
          <swiper-slide v-for="(partner, index) in partners" :key="index">
            <div class="partner__item">
              <img :src="partner.logo" alt="" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="partner__control partner__control--prev">
        <div class="icon-wrap">
          <img :src="arrowSquare" alt="" />
        </div>
      </div>
      <div class="partner__control partner__control--next">
        <div class="icon-wrap">
          <img :src="arrowSquare" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.our-partners {
  padding: 40px 16px;
  background-color: #f6f6f6;
}

.partner {
  &__container {
    margin-top: 40px;
    width: 100%;
    position: relative;
  }

  &__container &__control {
    display: flex;
    position: absolute;
    top: 50%;
    z-index: 99;
    cursor: pointer;

    &--prev {
      left: 0;
      transform: translateY(-50%);
    }

    &--next {
      right: 0;
      transform: translateY(-50%) rotate(0.5turn);
    }
  }

  &__list {
    width: 100%;
    overflow: auto;
  }

  &__list &__item {
    width: 188px;
    height: 72px;
    display: flex;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
    }
  }
}

@media (min-width: 768px) {
  .our-partners {
    padding: 120px 230px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title-and-description {
      .title {
        height: 58px;
        font-size: 60px;
        line-height: 80px;
        letter-spacing: 3.6px;
        display: flex;
        align-items: center;
        text-align: center;
      }
    }

    .partners {
      margin-top: 80px;

      &-list {
        > *:not(:last-child) {
          margin-right: 40px;
        }
      }

      .partner-item {
        width: 260px;
        height: 100px;
        display: flex;
        justify-content: center;

        img {
          height: 100%;
        }
      }
    }
  }
}
</style>
