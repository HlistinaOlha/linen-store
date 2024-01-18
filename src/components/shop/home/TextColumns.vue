<template>
  <div class="section_text-columns">
    <div
      class="container rich-text content-container color- gradient section-template--15946211557609__rich_text-padding">
      <div class="row">
        <div class="flexbox">
          <div class="col-sm-4 text_columns">
            <div class="text_columns__item">
              <div class="item_info text_center">
                <p>{{ textData.text1 }}</p>
                <h2 class="title2">{{ textData.title1 }}</h2>
                <router-link :to="{
              name: 'singleProduct',
              params: {product_handle: textData.productHandle1}
            }">More info
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-sm-4 text_columns">
            <div class="text_columns__item">
              <div class="item_info text_center">
                <p>{{ textData.text2 }}</p>
                <h2 class="title2">{{ textData.title2 }}</h2>
                <router-link :to="{
              name: 'singleProduct',
              params: {product_handle: textData.productHandle2}
            }">More info
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-sm-4 text_columns">
            <div class="text_columns__item">
              <div class="item_info text_center">
                <p>{{ textData.text3 }}</p>
                <h2 class="title2">{{ textData.title3 }}</h2>
                <router-link :to="{
              name: 'singleProduct',
              params: {product_handle: textData.productHandle3}
            }">More info
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/styles/text-columns.css';

export default {
  name: "TextColumns",
  props: {
    textData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
