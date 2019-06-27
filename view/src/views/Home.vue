<template>
  <div class="home">
    <div class="container" id="blog">
      <form action="#">
        <div class="file-field input-field">
          <div class="btn">
            <span>File</span>
            <input type="file" @change="getImage">
          </div>
          <div class="file-path-wrapper">
            <input class="file-path validate" type="text" placeholder="Upload one image file">
          </div>
        </div>
      </form>
      <div class="row" v-if="img">
        <div class="col s6">
          <div id="detect-btn">
              <a class="waves-effect waves-light btn">
                <i class="material-icons right">photo_library</i>
                execute
              </a>
          </div>
          <div class="card-panel">
            <img :src="img" id="preview">
          </div>
        </div>

        <div class="col s6">
          
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Home extends Vue {
  public img: any = null;

  public getImage(srcImage: any) {
    const file = srcImage.target.files[0];
    this.img = URL.createObjectURL(file);
  }
}
</script>

<style lang="scss">
  #blog {
    margin-top: 40px;
  }

  #preview {
    width: 100%;
    height: 100%;
  }

  #detect-btn {
    margin-bottom: 2%;
  }
</style>
