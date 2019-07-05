<template>
  <div class="loading">
    <div class="preloader-wrapper active">
      <div class="spinner-layer spinner-teal-only">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Loading extends Vue {}
</script>

<style scoped lang="scss">
</style>
