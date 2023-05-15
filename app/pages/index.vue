<template>
  <div class="h-full flex flex-col lg:flex-row justify-center md:justify-between mx-auto max-w-1440">
    <div class="flex flex-col justify-between px-10 py-10 lg:py-20 lg:pr-20 xl:pr-0 xl:pl-20 w-full lg:min-w-[400px] lg:max-w-[675px] lg:h-screen">
      <MyBio />
      <div class="mt-20 lg:mt-0 flex flex-row justify-start my-3 text-secondary">
        <a class="group inline-flex items-center transition-all duration-200 ease-in-out" href="https://www.linkedin.com/in/bill-artz-45a754b/" target="_blank">
          <TrendingUpIcon class="w-10 h-10" aria-hidden="true" />
          <span class="inline-block w-8 bg-primary h-px mx-4 group-hover:w-16 group-hover:bg-secondary transition-all duration-200" />
          <span class="tracking-widest uppercase group-hover:text-primary group-hover:font-bold transition">linkedin</span>
        </a>
      </div>
    </div>
    <div class="flex flex-col px-10 py-10 lg:py-20 lg:pr-10 xl:pl-0 xl:pr-20 group w-full lg:max-w-[675px]">
      <ContentBox
        url="https://www.coggles.com"
        sub-title="Nuxt / Tailwind / GraphQL / AWS / CYPRESS"
        title="Altitude"
        body-content="Global headless ecommerce brought to you lightning-fast. Fresh out of beta with Coggles.com"
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
import { TrendingUpIcon } from '@vue-hero-icons/outline'
import MyBio from '~/components/MyBio.vue'
import ContentBox from '~/components/ContentBox.vue'

export default {
  components: {
    MyBio,
    ContentBox,
    TrendingUpIcon
  },
  head () {
    return {
      title: 'Bill Artz - Senior Front End Engineer',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Bill Artz is a Sr Front End software engineer in Santa Monica, California.'
        }
      ],
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
