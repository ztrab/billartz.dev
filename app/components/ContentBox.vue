<template>
  <article class="text-secondary bg-highlight transition md:hover:!opacity-100 md:group-hover:opacity-50 md:hover:scale-125 mb-1 min-w-full lg:min-w-[600px]">
    <a :href="url" target="_blank" class="no-underline block p-10">
      <div>
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
    }
  }
}
</script>
