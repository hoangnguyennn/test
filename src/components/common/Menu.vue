<script lang="ts">
export default {
  name: 'Menu'
}
</script>

<script setup lang="ts">
import { ref, watch } from 'vue'

import { IMenuItem } from '~/interfaces'
import MenuIcon from '~/assets/images/menu.svg?component'
import CloseIcon from '~/assets/images/close.svg?component'

interface PropTypes {
  items: IMenuItem[]
}

const props = withDefaults(defineProps<PropTypes>(), {
  items: () => [] as IMenuItem[]
})

const isShowMenu = ref(false)

watch(isShowMenu, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'visible'
  }
})
</script>

<template>
  <div class="menu">
    <MenuIcon @click="isShowMenu = true" />

    <div class="menu__bar" v-if="isShowMenu">
      <div class="menu__actions">
        <slot name="actions">
          <slot name="language-selection"></slot>

          <slot name="menu-close">
            <div class="menu__close">
              <CloseIcon @click="isShowMenu = false" />
            </div>
          </slot>
        </slot>
      </div>

      <ul class="menu__nav">
        <li
          class="menu__item"
          v-for="(item, index) in props.items"
          :key="index"
          @click="isShowMenu = false"
        >
          <a v-if="item.link" :href="item.link" class="menu__link">
            {{ item.label }}
          </a>
          <template v-else>{{ item.label }}</template>
        </li>
      </ul>
    </div>
  </div>
</template>
