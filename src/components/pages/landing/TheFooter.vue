<script lang="ts">
export default {
  name: 'TheFooter'
}
</script>

<script setup lang="ts">
import logoImg from '~/assets/images/logo_mobile.png'
import footerImg from '~/assets/images/footer_bg.png'
import TwitterIcon from '~/assets/images/twitter_logo.svg?component'
import FacebookIcon from '~/assets/images/facebook_logo.svg?component'
import LinkedinIcon from '~/assets/images/linkedin_logo.svg?component'
import LocationIcon from '~/assets/images/location.svg?component'
import MobileIcon from '~/assets/images/mobile.svg?component'
import Email from '~/components/common/Email.vue'
</script>

<template>
  <div id="contact-us" class="footer">
    <div class="content" :style="{ backgroundImage: `url(${footerImg})` }">
      <div class="logo-and-social-media">
        <div class="logo">
          <img :src="logoImg" alt="" />
        </div>
        <div class="social-media-list">
          <div class="social-media">
            <TwitterIcon />
          </div>

          <div class="social-media">
            <FacebookIcon />
          </div>

          <div class="social-media">
            <LinkedinIcon />
          </div>
        </div>
      </div>

      <div class="address">
        <div class="title">Address</div>

        <div class="block location-block">
          <div class="icon">
            <LocationIcon />
          </div>
          <div class="text">
            <p>
              Valletta Buildings, South Street, Valletta - VLT 1103 Malta, US
            </p>
            <p>
              20 Phan Dang Luu street, Hai Chau District, Danang city, Vietnam
            </p>
          </div>
        </div>

        <div class="block address-block">
          <div class="icon">
            <MobileIcon />
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
            Subscribe to our newsletter and be the first to know about our
            updates
          </div>
        </div>

        <Email class="news-letter-input" variant="outline" />
      </div>
    </div>

    <div class="info">
      <p>2017 Copyright. Policy.</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  .content {
    background-size: auto 100%;
    background-position: center;
    background-repeat: no-repeat;
    padding-top: 40px;
    padding-bottom: 62px;
  }

  .logo-and-social-media {
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

      .social-media {
        display: flex;
      }
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
      margin-top: 20px;
      display: flex;

      .icon {
        margin-right: 8px;
        display: flex;
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

      :deep(svg) {
        position: absolute;
        right: 14px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }

  .info {
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

@media (min-width: 568px) {
  .footer {
    .content {
      background-size: 100% 100%;
      padding: 104px 230px 100px 230px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      .logo-and-social-media {
        padding-top: 0;
      }

      .address,
      .subscribe {
        margin-top: 0;
        padding: 0;
        width: 410px;

        .block {
          margin-top: 40px;
        }
      }

      .address {
        margin-left: auto;
      }

      .subscribe {
        margin-left: 40px;
      }
    }

    .info {
      height: 80px;
    }
  }
}
</style>
