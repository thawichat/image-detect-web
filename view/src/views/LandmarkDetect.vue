<template>
  <div class="landmarkdetect">
    <div class="container" id="blog">
      <form>
        <div class="file-field input-field">
          <div class="btn">
            <span>File</span>
            <input type="file" @change="getImage" />
          </div>
          <div class="file-path-wrapper">
            <input class="file-path validate" type="text" placeholder="Upload one image file" />
          </div>
        </div>
      </form>
      <div id="detect-btn" v-if="file">
        <a class="waves-effect waves-light btn" @click="detect">
          <i class="material-icons right">photo_library</i>
          execute
        </a>
      </div>

      <div class="row" v-if="img" v-bind:class="[isLoading || resultFail ? 'valign-wrapper' : '']">
        <div class="col s6">
          <div class="card-panel">
            <img :src="img" id="preview" />
          </div>
        </div>

        <div class="col s6">
          <Loading v-if="isLoading" class="center-align" />
          <ResultNotFound v-if="resultFail" class="center-align" />
          <div v-if="showMap" class="card-panel teal">
            <p id="description" class="orange darken-2">&nbsp;&nbsp;{{landmarkData[0].description}}</p>
            <GmapMap
              :center="{lat:landmarkData[0].locations.latitude, lng:landmarkData[0].locations.longitude}"
              :zoom="13"
              map-type-id="terrain"
              style="width: 100%; height: 430px"
            >
              <gmap-marker :position="{lat:landmarkData[0].locations.latitude, lng:landmarkData[0].locations.longitude}"></gmap-marker>
            </GmapMap>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Loading from "@/components/Loading.vue";
import ResultNotFound from "@/components/ResultNotFound.vue";

import LandmarkData from "@/ts/responses/LandmarkData";
import LandmarkDetectionService from "@/ts/services/LandmarkDetectionService";

@Component({
  components: {
    Loading,
    ResultNotFound
  }
})
export default class LandmarkDetect extends Vue {
  public img: any = null;
  public file: any = null;
  public isResult = false;
  public isLoading = false;
  public resultFail = false;
  public showMap = false;
  public landmarkData: LandmarkData = {
    description: "",
    locations: { latitude: 0, longitude: 0 }
  };

  private service = new LandmarkDetectionService();

  public getImage(srcImage: any) {
    this.img = null;
    this.isResult = false;
    this.resultFail = false;
    this.showMap = false;
    this.file = srcImage.target.files[0];
    if (this.file) {
      this.img = URL.createObjectURL(this.file);
    }
  }

  public async detect() {
    if (this.isResult) {
      return;
    }
    this.isLoading = true;
    const response = await this.service.landmarkDetect(this.file);
    this.isLoading = false;
    this.isResult = true;
    if (response.result !== 9) {
      this.showMap = true;
      this.landmarkData = response.data;
      return;
    }
    this.resultFail = true;
  }
}
</script>

<style lang="scss">
#blog {
  margin-top: 40px;
}

#detect-btn {
  margin-bottom: 2%;
}

#preview {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
}

#description {
  font-size: 20px;
  font-weight: 750;
  color: white;
  margin: 0px;
}
</style>

