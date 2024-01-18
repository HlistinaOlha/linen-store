<template>
  <div class="shopify-section section section_homepage section_image-with-text-overlay">
    <div class="section_wrap flexible_block__medium parallax_block">
      <div class="img_placeholder__wrap img_placeholder__medium parallax_layer"
           :class="imageClass"/>
      <div v-if="collageText" class="section_txt">
        <div class="container">
          <div>
            <h2>{{ collageText.text1 }}</h2>
            <h2 class="title1">{{ collageText.title }}</h2>
            <p>{{ collageText.text2 }}</p>
            <router-link class="btn"
                         :to="{
              name: 'singleProduct',
              params: {product_handle: collageProductHandle}
            }">Shop now
            </router-link>
          </div>
        </div>
      </div>
      <div v-else-if="isLoaded"
           class="section_productinfo section section_homepage section_single-product section_product">
        <div class="container">
          <div class="flexbox">
            <div class="product_left">
              <h2 class="single_product__title title3">
                <router-link
                  :to="{
              name: 'singleProduct',
              params: {product_handle: collageProductHandle}
            }">{{ collageItem.title }}
                </router-link>
              </h2>
              <div class="product_description">
                <div>{{ collageItem.superShortDescription }}
                </div>
              </div>
            </div>
            <div class="product_right">
              <p class="product_price">
                <span
                  v-if="collageItem.variantBySelectedOptions.compareAtPriceV2.amount > collageItem.variantBySelectedOptions.priceV2.amount"
                  class="money money_sale">${{
                    Number(collageItem.variantBySelectedOptions.compareAtPriceV2.amount).toFixed(2)
                  }}</span>
                <span class="money">${{ Number(collageItem.variantBySelectedOptions.priceV2.amount).toFixed(2) }}</span>
              </p>
              <div class="product_links">
                <form
                  @submit.prevent="addProductToCart({quantity: 1, productId: collageItem.variantBySelectedOptions.id})"
                  method="post"
                  action="/cart">
                  <input type="hidden" name="id">
                  <button class="btn btn-cart"
                          type="submit">Add to cart
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/styles/collage.css';
import {mapGetters} from "vuex";
import productMixin from "@/mixins/productMixin";

export default {
  name: "Collage",
  mixins: [productMixin],
  data() {
    return {
      isLoaded: false,
      collageItem: null
    }
  },
  props: {
    collageText: {
      required: false,
      type: Object
    },
    collageProductHandle: {
      required: false,
      type: String
    },
    imageClass: {
      required: true,
      type: String
    },
  },
  computed: {
    ...mapGetters({
      productItem: 'products/productItem'
    })
  },
  created() {
    if (!this.collageText) {
      (async () => {
        await this.fetchProductItem(this.collageProductHandle);
        this.collageItem = this.productItem;
        this.isLoaded = true;
      })();
    }

  }
}
</script>

<style scoped>

</style>
