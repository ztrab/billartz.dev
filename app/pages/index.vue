<template>
  <div class="h-full bg-stone-900 flex flex-row justify-between">
    <div class="flex justify-center py-20 px-20">
      <MyBio />
    </div>
    <div class="flex flex-col py-20 px-20 group">
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
