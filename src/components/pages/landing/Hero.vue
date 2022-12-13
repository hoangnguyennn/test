<script lang="ts">
export default {
  name: 'Hero'
}
</script>

<script setup lang="ts">
import { ref, watch } from 'vue'

import logoImg from '~/assets/images/logo_mobile.svg'
import menuIcon from '~/assets/images/menu.svg'
import closeIcon from '~/assets/images/close.svg'
import arrowRightIcon from '~/assets/images/arrow_right.svg'
import ongTienImg from '~/assets/images/ong_tien_1.png'

const menuItems = [
  {
    label: 'About us',
    link: '#about-us'
  },
  {
    label: 'Games',
    link: '#games'
  },
  {
    label: 'Partners',
    link: '#partners'
  },
  {
    label: 'Contact us',
    link: '#contact-us'
  }
]

const isShow = ref(false)

watch(isShow, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'visible'
  }
})
</script>

<template>
  <div class="hero">
    <div class="background"></div>
    <div class="hero-navbar">
      <div class="logo-mobile">
        <img :src="logoImg" alt="" />
      </div>

      <div class="menu-mobile">
        <img :src="menuIcon" alt="" @click="isShow = true" />

        <div v-if="isShow" class="menu">
          <div class="menu-top">
            <div class="languages"></div>
            <div class="menu-close">
              <img :src="closeIcon" alt="" @click="isShow = false" />
            </div>
          </div>
          <div class="menu-content">
            <a
              v-for="(menuItem, index) in menuItems"
              :key="index"
              :href="menuItem.link"
              class="menu-item"
            >
              {{ menuItem.label }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-wrap">
      <div class="hero-title">
        We're <br />
        Getting Ready
      </div>

      <div class="hero-countdown">
        <div class="time days">
          <span>30</span>
          <span>Days</span>
        </div>

        <span class="time-divider">:</span>

        <div class="time hours">
          <span>18</span>
          <span>Hours</span>
        </div>

        <span class="time-divider">:</span>

        <div class="time minutes">
          <span>20</span>
          <span>Minutes</span>
        </div>

        <span class="time-divider">:</span>

        <div class="time seconds">
          <span>11</span>
          <span>Seconds</span>
        </div>
      </div>

      <div class="hero-content">
        <p class="news-letter-text">
          We will back to something amazing. Getting the latest updates about
          our games. Please sign up to our newsletter.
        </p>
        <div class="news-letter-input">
          <input type="email" placeholder="Enter your email" />
          <img :src="arrowRightIcon" alt="" />
        </div>
      </div>
    </div>

    <div class="hero-fairy">
      <img :src="ongTienImg" alt="" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero {
  height: 824px;
  position: relative;

  .background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 608px;
    background-color: purple;
    z-index: -1;
  }

  &-navbar {
    padding: 24px 16px;
    height: 112px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) -25%,
      rgba(0, 0, 0, 0) 100%
    );

    .logo-mobile {
      height: 40px;
    }

    .menu {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #fff;
      z-index: 999;

      &-top {
        padding: 24px 16px;
        height: 112px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
      }

      &-content {
        display: flex;
        flex-direction: column;
        padding: 0 16px;
      }

      &-item {
        height: 66px;
        display: flex;
        justify-content: center;
        align-items: center;

        color: #000;

        font-size: 14px;
        font-weight: bold;
        line-height: 18px;
        text-transform: uppercase;
        text-decoration: none;

        &:not(:last-child) {
          border-bottom: 1px solid #eee;
        }
      }
    }
  }

  &-wrap {
    padding: 24px 16px;
  }

  &-title {
    color: #fff;
    font-family: 'Playfair Display', serif;
    font-size: 40px;
    font-weight: 900;
    line-height: 50px;
    text-align: center;
    letter-spacing: 0.6px;
  }

  &-countdown {
    margin-top: 38px;
    height: 118px;
    background-color: #fff;
    border-radius: 21px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

    display: flex;
    justify-content: center;
    align-items: center;

    .time {
      width: 54px;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #000;

      span:nth-child(1) {
        font-family: 'Playfair Display';
        font-size: 36px;
        font-weight: 900;
        line-height: 45px;
        text-align: center;
      }

      span:nth-child(2) {
        font-size: 12px;
        font-weight: 700;
        line-height: 15px;
        letter-spacing: -0.651724px;
      }

      &-divider {
        width: 16px;
        font-size: 40px;
        line-height: 49px;
        letter-spacing: -0.651724px;
      }
    }
  }

  &-content {
    margin-top: 40px;

    .news-letter-text {
      color: #fff;
      font-size: 12px;

      line-height: 15px;
      letter-spacing: 0.9px;
      text-align: center;
    }

    .news-letter-input {
      position: relative;

      input {
        padding: 18px 38px 18px 14px;
        width: 100%;
        height: 56px;
        background-color: #fff;
        color: #545454;
        border: none;
        border-radius: 8px;
      }

      img {
        position: absolute;
        right: 14px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }

  &-fairy {
    margin-top: 11px;
    margin-left: 17px;
    margin-right: 16px;
    position: relative;
    text-align: right;
  }
}
</style>