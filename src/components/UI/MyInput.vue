<template>
  <input
  :value="modelValue"
  @input="updateInput"
    type="text" class="my-input" 
    />
</template>

<script>
export default {
name: 'my-input',
props:{
    modelValue:[String, Number]
},
methods:{
    updateInput(event) {
        this.$emit('update:modelValue', event.target.value)
}
}
}
</script>

<style>
.my-input {
  @apply appearance-none w-full bg-gray-200 text-gray-700 border border-red-500 rounded 
                py-3 px-4 mb-3 leading-tight focus:outline-none 
              focus:bg-white
}

</style>