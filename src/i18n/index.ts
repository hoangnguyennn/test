import { createI18n } from 'vue-i18n'

import vi from './lang/vi.json'
import en from './lang/en.json'

const messages = { vi, en }

const i18n = createI18n({
  locale: 'vi',
  fallbackLocale: 'vi',
  messages
})

export default i18n
