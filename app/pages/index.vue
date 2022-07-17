<template>
  <div class="h-full flex flex-row justify-between">
    <!-- TODO: Fix mobile alignment between main and content sections -->
    <div class="flex justify-center py-20 px-20">
      <MyBio />
    </div>
    <div class="flex flex-col py-20 px-20 group">
      <ContentBox />
      <ContentBox />
      <ContentBox />
    </div>
  </div>
</template>

<script>
import MyBio from '~/components/MyBio.vue'
import ContentBox from '~/components/ContentBox.vue'

export default {
  components: {
    MyBio,
    ContentBox
  },
  head () {
    return {
      title: 'Bill Artz - Front End Engineer',
      script: [
        {
          json: {
            '@context': 'http://schema.org',
            '@type': 'Website',
            url: 'https://www.billartz.dev.'
          },
          type: 'application/ld+json'
        },
        {
          json: {
            '@context': 'http://schema.org',
            '@type': 'Organization',
            name: 'UltraLab'
          },
          type: 'application/json'
        }
      ]
    }
  }
}
</script>
