<template>
  <div class="h-full flex flex-col lg:flex-row justify-between">
    <!-- TODO: Fix mobile alignment text-squeeze between main and content sections for mobile-->
    <div class="flex justify-center py-20 px-20">
      <MyBio />
    </div>
    <div class="flex flex-col py-20 px-20 group">
      <ContentBox url="https://beta.www.coggles.com">
        <p class="mt-2 text-xs tracking-widest font-bold uppercase">
          Nuxt / Tailwind / GraphQL / AWS / CYPRESS
        </p>
        <h3 class="mt-2 text-lg text-primary font-bold">
          Storefront
        </h3>
        <p class="my-2 text-xs">
          Global headless ecommerce brought to you lightning-fast. In beta with Coggles.com
        </p>
      </ContentBox>
      <ContentBox>
        <p class="mt-2 text-xs tracking-widest font-bold uppercase">
          TBD
        </p>
        <h3 class="mt-2 text-lg text-primary font-bold">
          Coming Soon
        </h3>
        <p class="my-2 text-xs">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </p>
      </ContentBox>
      <ContentBox>
        <p class="mt-2 text-xs tracking-widest font-bold uppercase">
          TBD
        </p>
        <h3 class="mt-2 text-lg text-primary font-bold">
          Coming Soon
        </h3>
        <p class="my-2 text-xs">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </p>
      </ContentBox>
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
      title: 'Bill Artz - Senior Front End Engineer',
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
