<template>
  <div class="home">
    <div class="container" id="blog">
      <form>
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
      <div id="detect-btn" v-if="file">
        <a class="waves-effect waves-light btn" @click="detect">
          <i class="material-icons right">photo_library</i>
          execute
        </a>
      </div>

      <div class="row valign-wrapper" v-if="img">
        <div class="col s6">
          <div class="card-panel">
            <img :src="img" id="preview">
          </div>
        </div>

        <div class="col s6">
          <Loading v-if="isLoading" class="center-align"/>
          <div class="card-panel teal" v-if="isResult">
            <ul class="collection">
              <li class="collection-item" v-for="item in labelData" :key="item.data">
                <span class="badge teal" id="result">{{ item.score }}</span>
                {{ item.description }}
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Loading from '@/components/Loading.vue';
import LabelDetectionService from '@/ts/services/LabelDetectionService';
import LabelData from '@/ts/responses/LabelData';

@Component({
  components: {
    Loading,
  },
})
export default class Home extends Vue {
  public img: any = null;
  public file: any = null;
  public isResult = false;
  public isLoading = false;
  public labelData: LabelData[] = [];

  private service = new LabelDetectionService();

  public getImage(srcImage: any) {
    this.isResult = false;
    this.file = srcImage.target.files[0];
    if (this.file) {
      this.img = URL.createObjectURL(this.file);
    }
  }

  public async detect() {
    this.isLoading = true;
    const response = await this.service.labelDetect(this.file);
    this.labelData = response.data;
    this.isLoading = false;
    this.isResult = true;
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

  #result {
    color: white;
  }
</style>
