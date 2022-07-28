<template>
  <div class="h-full flex flex-col lg:flex-row justify-center md:justify-between mx-auto max-w-1440">
    <div class="flex justify-center px-10 py-20 lg:pr-20 xl:pr-0 xl:pl-20 w-full lg:min-w-[400px] lg:max-w-[675px]">
      <MyBio />
    </div>
    <div class="flex flex-col px-10 py-20 lg:pr-10 xl:pl-0 xl:pr-20 group w-full lg:max-w-[675px]">
      <ContentBox
        url="https://beta.www.coggles.com"
        sub-title="Nuxt / Tailwind / GraphQL / AWS / CYPRESS"
        title="Storefront"
        body-content="Global headless ecommerce brought to you lightning-fast. In beta with Coggles.com"
      />
      <ContentBox
        sub-title="TBD"
        title="Coming Soon"
        body-content="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
      />
      <ContentBox
        sub-title="TBD"
        title="Coming Soon"
        body-content="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
      />
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
