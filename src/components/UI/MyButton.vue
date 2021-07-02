<template>
  <button class="my-button"> 
      <slot></slot>
  </button>
</template>

<script>
export default {
 name: 'my-button'
}
</script>

<style scoped>
.my-button {
    @apply text-sm font-semibold uppercase
    py-2 rounded-lg shadow-lg px-4
   text-white tracking-wider md:text-xs lg:text-sm xl:text-xl  ml-4 flex
}
</style>