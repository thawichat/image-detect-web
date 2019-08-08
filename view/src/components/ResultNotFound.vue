<template>
  <div>
    <h3 id="not-found">result not found</h3>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ResultNotFound extends Vue {}
</script>

<style scoped lang="scss">
#not-found {
  color: #009688;
}
</style>
