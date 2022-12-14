<script lang="ts">
export default {
  name: 'TheFooter'
}
</script>

<script setup lang="ts">
import footerImg from '~/assets/images/footer_bg.png'
import logoImg from '~/assets/images/logo_mobile.svg'
import twitterIcon from '~/assets/images/twitter_logo.svg'
import facebookIcon from '~/assets/images/facebook_logo.svg'
import linkedinIcon from '~/assets/images/linkedin_logo.svg'
import locationIcon from '~/assets/images/location.svg'
import mobileIcon from '~/assets/images/mobile.svg'
import arrowRightIcon from '~/assets/images/arrow_right.svg'
</script>

<template>
  <div
    id="contact-us"
    class="footer"
    :style="{ backgroundImage: `url(${footerImg})` }"
  >
    <div class="logo-and-social-media">
      <div class="logo">
        <img :src="logoImg" alt="" />
      </div>
      <div class="social-media-list">
        <div class="social-media">
          <img :src="twitterIcon" alt="" />
        </div>

        <div class="social-media">
          <img :src="facebookIcon" alt="" />
        </div>

        <div class="social-media">
          <img :src="linkedinIcon" alt="" />
        </div>
      </div>
    </div>

    <div class="address">
      <div class="title">Address</div>

      <div class="block location-block">
        <div class="icon">
          <img :src="locationIcon" alt="" />
        </div>
        <div class="text">
          <p>Valletta Buildings, South Street, Valletta - VLT 1103 Malta, US</p>
          <p>
            20 Phan Dang Luu street, Hai Chau District, Danang city, Vietnam
          </p>
        </div>
      </div>

      <div class="block address-block">
        <div class="icon">
          <img :src="mobileIcon" alt="" />
        </div>
        <div class="text">
          <p>(+1) 555-0108-000 or (+236) 555-0108</p>
        </div>
      </div>
    </div>

    <div class="subscribe">
      <div class="title">Subscribe</div>
      <div class="block">
        <div class="text">
          Subscribe to our newsletter and be the first to know about our updates
        </div>
      </div>

      <div class="news-letter-input">
        <input type="email" placeholder="Enter your email" />
        <img :src="arrowRightIcon" alt="" />
      </div>
    </div>

    <div class="info">
      <p>2017 Copyright. Policy.</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  background-size: 100% calc(100% - 86px);
  background-repeat: no-repeat;
  .logo-and-social-media {
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .logo {
      height: 96px;

      img {
        height: 100%;
      }
    }

    .social-media-list {
      margin-top: 40px;
      width: 168px;
      display: flex;
      justify-content: space-between;
    }
  }

  .address,
  .subscribe {
    margin-top: 68px;
    padding-left: 16px;
    padding-right: 16px;
    color: #fff;

    .title {
      font-size: 24px;
      font-weight: 700;
      line-height: 30px;
    }

    .block {
      margin-top: 12px;
      display: flex;

      .icon {
        margin-right: 8px;
      }

      .text {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;

        p:not(:first-child) {
          margin-top: 12px;
        }
      }
    }

    .address-block {
      align-items: center;
    }

    .news-letter-input {
      margin-top: 16px;
      position: relative;

      input {
        padding: 18px 38px 18px 14px;
        width: 100%;
        height: 56px;
        background-color: transparent;
        color: #545454;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        border: 1px solid #ffffff;
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

  .info {
    margin-top: 62px;
    height: 86px;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      color: #fff;
      font-size: 18px;
      line-height: 126%;
    }
  }
}
</style>
