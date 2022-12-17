<script lang="ts">
export default {
  name: 'OurPartners'
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import partner1 from '~/assets/images/partner1.png'
import partner2 from '~/assets/images/partner2.png'
import partner3 from '~/assets/images/partner3.png'
import partner4 from '~/assets/images/partner4.png'
import partner5 from '~/assets/images/partner5.png'
import partner6 from '~/assets/images/partner6.png'
import partner7 from '~/assets/images/partner7.png'
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

const { isMobile } = useMobile()

const partnersListWidth = computed(() => {
  if (isMobile.value) {
    return `${188 * partners.length + 12 * (partners.length - 1)}px`
  }

  return `${260 * partners.length + 40 * (partners.length - 1)}px`
})
</script>

<template>
  <div id="partners" class="our-partners spacer">
    <TitleAndDescription
      :title="$t('our_partners.title')"
      class="text-center"
    />

    <div class="partners">
      <div class="partners-wrap">
        <div
          class="partners-list"
          :style="{
            width: partnersListWidth
          }"
        >
          <div
            class="partner-item"
            v-for="(partner, index) in partners"
            :key="index"
          >
            <img :src="partner.logo" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.our-partners {
  padding: 40px 16px;
  background-color: #f6f6f6;

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
  }

  .partners {
    margin-top: 40px;
    width: 100%;

    &-wrap {
      width: 100%;
      overflow: auto;
    }

    &-list {
      display: flex;
      flex-wrap: nowrap;

      > *:not(:last-child) {
        margin-right: 12px;
      }
    }

    .partner-item {
      width: 188px;
      height: 72px;
      display: flex;
      justify-content: center;

      img {
        height: 100%;
      }
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
