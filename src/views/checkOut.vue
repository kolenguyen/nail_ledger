<template>
    <checkOutComponent />
</template>

<script>
//Note to future: This is not needed to do checkOutComponent.vue because checkOut.vue is not complicated;
//This is better when have a vue component that is complicated
import checkOutComponent from '../components/checkOutComponent.vue'
export default {
    components: {
      checkOutComponent
  },
}
</script>