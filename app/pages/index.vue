<template>
  <div class="h-full">
    <div class="flex justify-center mx-auto">
      <MyBio />
      <Content />
    </div>
  </div>
</template>

<script>
import MyBio from '~/components/MyBio.vue'
import Content from '~/components/Content.vue'

export default {
  components: {
    MyBio,
    Content
  }
  // head () {
  //   return {
  //     title: 'Bill Artz - Front End Engineer',
  //     script: [
  //       {
  //         json: {
  //           '@context': 'http://schema.org',
  //           '@type': 'Website',
  //           url: 'https://www.billartz.dev.'
  //         },
  //         type: 'application/ld+json'
  //       },
  //       {
  //         json: {
  //           '@context': 'http://schema.org',
  //           '@type': 'Organization',
  //           name: 'UltraLab'
  //         },
  //         type: 'application/json'
  //       }
  //     ]
  //   }
  // }
}
</script>
