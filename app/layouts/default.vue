<template>
  <div class="h-screen bg-stone-900">
    <div class="w-full">
      <SkipToMain />
    </div>
    <div class="w-full">
      <main id="mainContent" class="focus:border-blue-600" tabindex="-1">
        <Nuxt />
      </main>
    </div>
  </div>
</template>

<script>
import SkipToMain from '~/components/SkipToMain.vue'

export default {
  components: {
    SkipToMain
  }
}
</script>
