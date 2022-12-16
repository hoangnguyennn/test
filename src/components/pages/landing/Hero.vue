<script lang="ts">
export default {
  name: 'Hero'
}
</script>

<script setup lang="ts">
import { ref, watch } from 'vue'

import CaretDown from '~/assets/images/caret_down.svg?component'
import CloseIcon from '~/assets/images/close.svg?component'
import Email from '~/components/common/Email.vue'
import heroImg from '~/assets/images/hero_bg.jfif'
import LogoMobileImg from '~/assets/images/logo_mobile.svg?component'
import LogoPCImg from '~/assets/images/logo.svg?component'
import MenuIcon from '~/assets/images/menu.svg?component'
import ongTienImg from '~/assets/images/ong_tien_1.png'
import TheUSFlagImg from '~/assets/images/us_flag.svg?component'
import TickIcon from '~/assets/images/tick.svg?component'
import VietnamFlagImg from '~/assets/images/vietnam_flag.svg?component'
import useMobile from '~/hooks/useMobile'

const { isMobile } = useMobile()

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

const isShowMenu = ref(false)
const isShowLanguageOptions = ref(false)

watch(isShowMenu, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'visible'
  }
})
</script>

<template>
  <div class="hero">
    <div class="background">
      <div class="box-1">
        <div class="box-2">
          <div class="box-3">
            <div
              class="box-4"
              :style="{
                backgroundImage: `linear-gradient(180deg, rgba(0, 10, 255, 0.5) 0%, rgba(0, 0, 0, 0) 41.57%), url(${heroImg})`
              }"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-navbar">
      <!-- for PC -->
      <div class="logo-pc" v-if="!isMobile">
        <LogoPCImg />
      </div>

      <div class="menu-pc" v-if="!isMobile">
        <ul class="menu-nav">
          <li
            class="menu-item"
            v-for="(menuItem, index) in menuItems"
            :key="index"
          >
            <a
              :href="menuItem.link"
              class="menu-link"
              @click="isShowMenu = false"
            >
              {{ menuItem.label }}
            </a>
          </li>
          <li class="menu-item">
            <div class="languages">
              <div class="placeholder" @click="isShowLanguageOptions = true">
                <div class="flag">
                  <TheUSFlagImg />
                </div>
                <div class="caret">
                  <CaretDown />
                </div>
              </div>
              <div class="language-options" v-if="isShowLanguageOptions">
                <div class="option" @click="isShowLanguageOptions = false">
                  <div class="checkbox">
                    <TickIcon />
                  </div>
                  <div class="flag">
                    <VietnamFlagImg />
                  </div>
                  <div class="name">Vietnamese</div>
                </div>
                <div class="option" @click="isShowLanguageOptions = false">
                  <div class="checkbox">
                    <TickIcon />
                  </div>
                  <div class="flag">
                    <TheUSFlagImg />
                  </div>
                  <div class="name">English</div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- for mobile -->
      <div class="logo-mobile" v-if="isMobile">
        <LogoMobileImg />
      </div>

      <div class="menu-mobile" v-if="isMobile">
        <MenuIcon @click="isShowMenu = true" />

        <div v-if="isShowMenu" class="menu">
          <div class="menu-top">
            <div class="languages">
              <div class="placeholder" @click="isShowLanguageOptions = true">
                <div class="flag">
                  <TheUSFlagImg />
                </div>
                <div class="caret">
                  <CaretDown />
                </div>
              </div>
              <div class="language-options" v-if="isShowLanguageOptions">
                <div class="option" @click="isShowLanguageOptions = false">
                  <div class="checkbox">
                    <TickIcon />
                  </div>
                  <div class="flag">
                    <VietnamFlagImg />
                  </div>
                  <div class="name">Vietnamese</div>
                </div>
                <div class="option" @click="isShowLanguageOptions = false">
                  <div class="checkbox">
                    <TickIcon />
                  </div>
                  <div class="flag">
                    <TheUSFlagImg />
                  </div>
                  <div class="name">English</div>
                </div>
              </div>
            </div>
            <div class="menu-close">
              <CloseIcon @click="isShowMenu = false" />
            </div>
          </div>
          <div class="menu-content">
            <a
              v-for="(menuItem, index) in menuItems"
              :key="index"
              :href="menuItem.link"
              class="menu-item"
              @click="isShowMenu = false"
            >
              {{ menuItem.label }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-wrap">
      <div class="hero-title">
        We’re&nbsp;<br v-if="isMobile" />Getting Ready
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
        <Email class="news-letter-input" />
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
    z-index: -1;
    overflow: hidden;

    .box-1 {
      .box-2 {
        width: 100%;
        height: 608px;
        overflow: hidden;
        background: radial-gradient(
          27.72% 27.79% at 50.81% 68.15%,
          #210544 0%,
          rgba(23, 5, 68, 0.71) 50.52%,
          rgba(23, 5, 68, 0) 100%
        );
        backdrop-filter: blur(5px);

        .box-3 {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 3000px;
          height: 3000px;
          border-radius: 50%;
          overflow: hidden;
          z-index: -1;

          .box-4 {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 1184px;
            height: 668px;
            background-size: cover;
            background-position: center;
          }
        }
      }
    }
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

    .menu-mobile {
      display: flex;

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

          .languages {
            position: relative;

            .placeholder {
              width: 80px;
              height: 40px;
              border: 1px solid #afafaf;
              border-radius: 8px;
              display: flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;

              .flag,
              .caret {
                display: flex;
                align-items: center;
              }
            }

            .language-options {
              position: absolute;
              top: 100%;
              padding-left: 10px;
              padding-right: 6px;
              width: 156px;
              background: #fff;
              border: 1px solid #eee;
              border-radius: 8px;

              .option {
                display: flex;
                align-items: center;
                cursor: pointer;

                .checkbox,
                .flag {
                  display: flex;
                }

                .flag {
                  margin-left: 8px;
                }

                .name {
                  margin-left: 4px;
                  font-weight: 700;
                  font-size: 10px;
                  line-height: 18px;
                }

                &:not(:first-child) {
                  border-top: 1px solid #c4c4c4;
                }
              }
            }
          }
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
  }

  &-wrap {
    padding: 24px 16px 0 16px;
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
    padding: 24px 26px;
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

      span:nth-child(1) {
        height: 46px;
        font-family: 'Playfair Display';
        font-size: 36px;
        font-weight: 900;
        line-height: 45px;
        text-align: center;
      }

      span:nth-child(2) {
        margin-top: 3px;
        height: 18px;
        font-size: 12px;
        font-weight: 700;
        line-height: 15px;
        letter-spacing: -0.65px;
      }

      &:last-child {
        margin-right: 3px;
      }

      &-divider {
        margin-left: 4px;
        margin-right: 4px;
        width: 16px;
        font-size: 40px;
        line-height: 49px;
        letter-spacing: -0.65px;
        display: flex;
        align-content: center;
        text-align: center;
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
      margin-top: 16px;
    }
  }

  &-fairy {
    margin-top: 11px;
    margin-left: 17px;
    margin-right: 16px;
    height: 258px;
    position: relative;
    display: flex;
    overflow: hidden;

    img {
      position: absolute;
      left: 39px;
      bottom: -14px;
      width: 351px;
      height: 351px;
    }
  }
}

@media (min-width: 568px) {
  .hero {
    height: 1018px;

    .background {
      height: 100%;

      .box-1 {
        .box-2 {
          height: 988px;

          .box-3 {
            width: 4895px;
            height: 4895px;

            .box-4 {
              width: 1920px;
              height: 1083px;
            }
          }
        }
      }
    }

    &-navbar {
      padding: 0 80px 0 79px;
      height: 162px;
      align-items: flex-start;

      .logo-pc {
        height: 64px;
        margin-top: 20px;
      }

      .menu-pc {
        margin-top: 40px;
        width: 710px;
        height: 40px;

        .menu-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .menu-item {
            .menu-link {
              color: #fff;
              text-decoration: none;
            }
          }

          .languages {
            position: relative;

            .placeholder {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 68px;
              height: 40px;
              color: #fff;

              .flag,
              .caret {
                display: flex;
              }
            }

            .language-options {
              position: absolute;
              top: calc(100% + 1px);
              right: 7px;
              padding-left: 10px;
              padding-right: 6px;
              background: #fff;
              border: 1px solid #eee;
              border-radius: 8px;

              .option {
                display: flex;
                align-items: center;
                cursor: pointer;

                .checkbox,
                .flag {
                  display: flex;
                }

                .flag {
                  margin-left: 8px;
                }

                .name {
                  margin-left: 4px;
                }

                &:not(:first-child) {
                  border-top: 1px solid #c4c4c4;
                }
              }
            }
          }
        }
      }
    }

    &-wrap {
      margin-top: 132px;
      padding-top: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &-title {
      width: 860px;
      font-size: 80px;
      line-height: 120px;
    }

    &-countdown {
      margin-top: 21px;
      padding: 26px 39px;
      width: 756px;
      height: 150px;

      .time {
        width: 79px;
        display: flex;
        flex-direction: column;
        align-items: center;

        span:nth-child(1) {
          height: 79px;
          font-size: 60px;
          line-height: 64px;
          letter-spacing: 4.8px;
        }

        span:nth-child(2) {
          margin-top: 0;
          height: 18.9px;
          font-size: 15.64px;
          line-height: 19px;
        }

        &:last-child {
          margin-right: 0;
        }

        &-divider {
          margin-left: 52px;
          margin-right: 52px;
          width: 16px;
          height: 94px;
          font-size: 65.17px;
          line-height: 79.45px;
        }
      }
    }

    &-content {
      margin-top: 97px;
      width: 560px;

      .news-letter-text {
        font-size: 18px;
        line-height: 23px;
        letter-spacing: normal;
      }

      .news-letter-input {
        margin-top: 32px;
      }
    }

    &-fairy {
      margin: 0;
      width: 938px;
      height: 938px;
      position: absolute;
      left: -89px;
      top: 85px;

      img {
        width: 100%;
        height: 100%;
        left: 0;
        bottom: 0;
      }
    }
  }
}
</style>
