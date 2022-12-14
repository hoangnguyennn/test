import { onMounted, onUnmounted, ref } from 'vue'

const useMobile = () => {
  const isMobile = ref(false)

  const handleResize = () => {
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    )

    isMobile.value = vw < 568
  }

  onMounted(() => {
    handleResize()
    document.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    document.removeEventListener('resize', handleResize)
  })

  return { isMobile }
}

export default useMobile
