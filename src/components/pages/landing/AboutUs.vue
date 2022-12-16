<script lang="ts">
export default {
  name: 'AboutUs'
}
</script>

<script setup lang="ts">
import CalendarTickIcon from '~/assets/images/calendar_tick.svg?component'
import PenToolIcon from '~/assets/images/pen_tool.svg?component'
import PeopleIcon from '~/assets/images/people.svg?component'
import witchImg from '~/assets/images/witch.png'
import mapImg from '~/assets/images/pin_map.png'
</script>

<template>
  <div id="about-us" class="about-us spacer">
    <div class="statistics-and-benefit-box">
      <div class="statistics-box">
        <div class="title-and-description">
          <h3 class="title">About Us</h3>
          <p class="description">
            Browse our selection of free online games and have a great time
            without leaving the site! Our Kids Games option also includes game
            reviews, extensive game cheats and walkthroughs, and much more. We
            have exclusive free downloads, videos, and articles as well. Etech
            reviews the most popular kids games from all the most popular video
            gaming platforms, so you don’t need to search around for fun
            anywhere else on the Internet. Explore a whole new world of gaming
            on Etech.
          </p>
        </div>

        <div class="statistics">
          <div class="statistic">
            <div class="title">
              <span>600</span>
              <span>M</span>
              <span>+</span>
            </div>
            <div class="description">Users</div>
          </div>
          <div class="statistic">
            <div class="title">
              <span>135</span>
              <span>+</span>
            </div>
            <div class="description">Games</div>
          </div>
        </div>
      </div>

      <div class="benefits-box">
        <div class="benefits">
          <div class="benefit">
            <div class="icon">
              <div class="wrap">
                <CalendarTickIcon />
              </div>
            </div>
            <div class="text">
              <div class="title">24 - Hour</div>
              <div class="content">
                24/7 access ensures operators' businesses runs smoothly all year
                long.
              </div>
            </div>
          </div>

          <div class="benefit">
            <div class="icon">
              <div class="wrap">
                <PenToolIcon />
              </div>
            </div>
            <div class="text">
              <div class="title">Design</div>
              <div class="content">
                Combining imaginative universes, play dynamics, and
                unprecedented gameplay, our games transcend the boundaries of
                the virtual world by weaving innovative gameplay.
              </div>
            </div>
          </div>

          <div class="benefit">
            <div class="icon">
              <div class="wrap">
                <PeopleIcon />
              </div>
            </div>
            <div class="text">
              <div class="title">Team</div>
              <div class="content">
                Etech is an award-winning, international studio of designers,
                artists, animators and producers that create content for the
                biggest names in film and video games.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="witch-and-map">
      <div class="witch">
        <img :src="witchImg" alt="" />
      </div>
      <div class="map">
        <img :src="mapImg" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about-us {
  .title-and-description {
    padding-left: 16px;
    padding-right: 16px;

    .title {
      height: 59px;
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

  .statistics {
    display: flex;
    margin-top: 40px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 40px;

    .statistic {
      .title {
        font-weight: 700;
        letter-spacing: -1px;
        color: #079bee;

        span:nth-child(1) {
          font-size: 44px;
          line-height: 54px;
        }

        span:nth-child(2) {
          font-size: 20px;
          line-height: 24px;
        }

        span:last-child {
          font-size: 36px;
          line-height: 44px;
        }
      }

      .description {
        margin-top: 4px;
        color: #000;
        font-size: 24px;
        font-weight: 700;
        line-height: 30px;
        width: 164px;
      }

      &:not(:first-child) {
        margin-left: 16px;
      }
    }
  }

  .benefits-box {
    background-color: #eee;

    .benefits {
      padding: 40px 16px;

      .benefit {
        display: flex;

        .icon {
          width: 60px;

          .wrap {
            width: 40px;
            height: 40px;
            background-color: #e3fcff;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }

        .text {
          flex: 1;

          .title {
            height: 36px;
            font-size: 24px;
            font-weight: 700;
            line-height: 30px;
          }

          .content {
            margin-top: 12px;
            color: #757575;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
          }
        }

        &:not(:first-child) {
          margin-top: 40px;
        }
      }
    }
  }

  .witch-and-map {
    padding-top: 40px;

    .witch {
      display: flex;
      padding-left: 42px;
      padding-right: 33px;
      z-index: 1;

      img {
        width: 100%;
      }
    }

    .map {
      margin-top: -31px;
      display: flex;

      img {
        width: 100%;
      }
    }
  }
}

@media (min-width: 568px) {
  .about-us {
    width: 1160px;
    margin-left: auto;
    margin-right: auto;

    .statistics-and-benefit-box {
      display: flex;
      justify-content: space-between;

      .statistics-box,
      .benefits-box {
        width: 560px;
      }

      .title-and-description {
        padding: 0;

        .title {
          color: #000;
          font-family: 'Playfair Display';
          font-size: 60px;
          font-weight: 900;
          line-height: 60px;
          letter-spacing: 3.6px;
        }

        .description {
          margin-top: 40px;
        }
      }

      .statistics {
        margin-top: 79px;
        padding: 0;

        flex-direction: column;

        .statistic {
          .title {
            span:nth-child(2n) {
              font-size: 40px;
              line-height: 49px;
            }

            span:first-child,
            span:last-child {
              font-size: 80px;
              line-height: 98px;
            }
          }

          &:not(:first-child) {
            margin-left: 0;
            margin-top: 39px;
          }
        }
      }

      .benefits-box {
        display: flex;
        justify-content: center;
        align-items: center;

        .benefits {
          width: 410px;
          padding: 0;

          .benefit {
            .icon {
              width: 74px;

              .wrap {
                width: 50px;
                height: 50px;
              }
            }

            .text {
              flex: 1;

              .title {
                height: 29px;
              }

              .content {
                margin-top: 8px;
              }
            }

            &:not(:first-child) {
              margin-top: 42px;
            }
          }
        }
      }
    }

    .witch-and-map {
      padding-top: 68px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .witch {
        margin-left: 29px;
        padding-left: 0;
        padding-right: 0;
        width: 533px;
        height: 437px;
      }

      .map {
        margin-top: -101px;
        display: flex;
        width: 100%;
      }
    }
  }
}
</style>
