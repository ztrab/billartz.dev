<template>
  <article class="text-secondary bg-highlight transition md:hover:!opacity-100 md:group-hover:opacity-50 md:hover:scale-125 mb-1 min-w-full lg:min-w-[600px]">
    <a :href="url" target="_blank" class="no-underline block p-10">
      <div>
        <p class="mt-2 text-xs tracking-widest font-bold uppercase">
          {{ subTitle }}
        </p>
        <h2 class="mt-2 text-lg text-primary font-bold">
          {{ title }}
        </h2>
        <p class="my-2 text-xs">
          {{ bodyContent }}
        </p>
        <slot />
      </div>
    </a>
  </article>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: '#'
    },
    subTitle: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    bodyContent: {
      type: String,
      default: ''
    }
  }
}
</script>
