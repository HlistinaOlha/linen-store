<template>
  <div class="section_template__product section_single-product" v-if="product && (product.handle === productHandle)">
    <div class="row">
      <div class="single_product__img col-xs-6">
        <swiper
          :modules="[Thumbs, Navigation]"
          :thumbs="{ swiper: thumbsSwiper }"
          :slides-per-view="1"
          :touchRatio="0.2"
          navigation
        >
          <swiper-slide v-for="image in product.images.edges" :key="image.node.url">
            <img :src="image.node.url"
                 :alt="product.title">
          </swiper-slide>
        </swiper>
        <swiper
          :modules="[Thumbs]"
          :slides-per-view="3"
          :space-between="20"
          :centeredSlides="true"
          :slideToClickedSlide="true"
          :touchRatio="0.2"
          :breakpoints="swiperOptions.breakpoints"
          watch-slides-progress
          @swiper="setThumbsSwiper">
          <swiper-slide v-for="image in product.images.edges" :key="image.node.url">
            <img :src="image.node.url"
                 :alt="product.title">
          </swiper-slide>
        </swiper>
      </div>
      <div class="single_product__info col-xs-6 medium">
        <h2 class="single_product__title">{{ product.title }}</h2>
        <div class="single_product__details">
          <form action="/cart"
                method="post"
                @submit.prevent="addProductToCart({quantity: quantity, productId: product.variantBySelectedOptions.id})">
            <div v-if=" product.variants.edges.length > 1"
                 class="single_product__options">
              <template v-for="(option, index) in product.options"
                        :key="option.name">
                <div class="selector-wrapper">
                  <label v-if="this.selectedOptions.length > 1"
                         :for="'product_select_template-product-option-'+index">{{ option.name }}</label>
                  <select
                    @change="updateSelectedOption($event, option.name)"
                    class="single-option-selector"
                    :id="'product_select_template-product-option-'+ index">
                    <option v-for="optionValue in option.values" :key="optionValue" :value="optionValue">
                      {{ optionValue }}
                    </option>
                  </select>
                </div>
              </template>
              <select name="id" style="display: none;">
                <option>{{ product.variants.edges[0].node.title }}</option>
              </select>
            </div>
            <div class="details_separator"></div>
            <div class="details_wrapper clearfix">
              <div class="details_left">
                <p class="single_product__weight">
                  <b>Weight: </b>
                  <span
                    v-if="product.variantBySelectedOptions.requiresShipping && product.variantBySelectedOptions.weight === 0">0.0</span>
                  <span
                    v-else-if="product.variantBySelectedOptions.requiresShipping && product.variantBySelectedOptions.weightUnit !== 'GRAMS'">{{
                      Number(product.variantBySelectedOptions.weight).toFixed(1)
                    }}</span>
                  <span
                    v-else-if="product.variantBySelectedOptions.requiresShipping && product.variantBySelectedOptions.weightUnit === 'GRAMS'">{{
                      Number(product.variantBySelectedOptions.weight)
                    }}</span>
                  <span v-else-if="!product.variantBySelectedOptions.availableForSale"></span>
                  <span v-else>—</span>
                  <template
                    v-if="product.variantBySelectedOptions.requiresShipping && product.variantBySelectedOptions.availableForSale">
                    <span v-if="product.variantBySelectedOptions.weightUnit === 'KILOGRAMS'"> kg</span>
                    <span v-if="product.variantBySelectedOptions.weightUnit === 'GRAMS'"> g</span>
                    <span v-if="product.variantBySelectedOptions.weightUnit === 'OUNCES'"> oz</span>
                    <span v-if="product.variantBySelectedOptions.weightUnit === 'POUNDS'"> lb</span>
                  </template>
                </p>
                <p class="single_product__sku">
                  <b>SKU: </b>
                  <span
                    v-if="product.variantBySelectedOptions.availableForSale && product.variantBySelectedOptions.sku === ''">—</span>
                  <span v-else>{{ product.variantBySelectedOptions.sku }}</span>
                </p>
                <p class="single_product__barcode">
                  <b>Barcode: </b>
                  <span>{{ product.variantBySelectedOptions.barcode }}</span>
                </p>
                <p class="single_product__collections">
                  <b>Collections: </b>
                  <span v-for="collection in product.collections.edges" :key="collection.id">
                  <router-link :to="{
                         name: 'catalogCard',
                         params: {handle: collection.node.handle}
                         }">
                    {{ collection.node.title }}
                     </router-link>,
                  </span>
                </p>
                <p class="single_product__type">
                  <b>Product type: </b>
                  <span>{{ product.productType }}</span>
                </p>
                <p class="single_product__vendor">
                  <b>Vendor: </b>
                  <span>{{ product.vendor }}</span>
                </p>
                <p class="single_product__tags">
                  <b>Tags: </b>
                  <span v-for="tag in product.tags" :key="tag">
                    <span>{{ tag }}</span>
                  </span>
                </p>

              </div>
              <div class="details_right">
                <p class="single_product__availability">
                  <b>Availability: </b>
                  <span
                    v-if="product.variantBySelectedOptions.availableForSale && product.variantBySelectedOptions.quantityAvailable === 0"
                    class="notify_success">
                     Available
                  </span>
                  <span v-else-if="product.variantBySelectedOptions.availableForSale"
                        class="notify_success">{{ product.variantBySelectedOptions.quantityAvailable }} items</span>
                  <span v-else class="notify_danger">Unavailable</span>
                </p>
                <p class="single_product__price">
                  <span id="single_product__price-template-product">
                    <span class="money">${{
                        Number(product.variantBySelectedOptions.priceV2.amount).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      }}</span>
                  <template v-if="product.variantBySelectedOptions.compareAtPriceV2">
                    <span class="money money_sale">${{
                        Number(product.variantBySelectedOptions.compareAtPriceV2.amount).toFixed(2)
                      }}</span>
                    <span class="money_sale_percent">– {{
                        ((product.variantBySelectedOptions.compareAtPriceV2.amount - product.variantBySelectedOptions.priceV2.amount) * 100 / product.variantBySelectedOptions.compareAtPriceV2.amount).toFixed()
                      }}%</span>
                  </template>
                </span>
                </p>
                <div class="single_product__quantity">
                  <label for="single_product__quantity-template-product">Quantity: </label>
                  <div class="quantity_box">
                    <input id="single_product__quantity-template-product" class="quantity_input" type="text"
                           min="1" name="quantity" v-model="quantity">
                    <span @click="quantityDown" class="quantity_down">
                      <i class="fa fa-minus" aria-hidden="true"></i>
                    </span>
                    <span @click="quantityUp" class="quantity_up">
                      <i class="fa fa-plus" aria-hidden="true"></i>
                    </span>
                    <button
                      type="submit"
                      name="add"
                      class="btn"
                      :disabled="disabled = !this.product.variantBySelectedOptions.availableForSale">Add To Cart
                    </button>
                  </div>
                </div>
                <div class="social_sharing_block">
                  <a target="_blank"
                     href="//www.facebook.com/sharer.php?u=https://theme321-linen.myshopify.com/products/luxuer-solid-silk-bedding-collections-machine-washable"
                     title="Share">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a target="_blank"
                     href="//twitter.com/share?text=Luxuer%20Solid%20Silk%20Bedding%20Collections%20Machine%20Washable&amp;url=https://theme321-linen.myshopify.com/products/luxuer-solid-silk-bedding-collections-machine-washable"
                     title="Share">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a target="_blank"
                     href="//plus.google.com/share?url=https://theme321-linen.myshopify.com/products/luxuer-solid-silk-bedding-collections-machine-washable"
                     title="Share">
                    <i class="fa fa-google-plus" aria-hidden="true"></i>
                  </a>
                  <a target="_blank"
                     href="//pinterest.com/pin/create/button/?url=https://theme321-linen.myshopify.com/products/luxuer-solid-silk-bedding-collections-machine-washable&amp;media=//cdn.shopify.com/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_1024x1024.gif&amp;description=Luxuer%20Solid%20Silk%20Bedding%20Collections%20Machine%20Washable"
                     title="Share">
                    <i class="fa fa-pinterest" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="product_description rte">
      <div v-html="product.descriptionHtml"></div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";
import '@/assets/styles/component-rte.css';
import '@/assets/styles/product.css';
import {Swiper, SwiperSlide} from "swiper/vue";
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/thumbs';
import {ref} from "@vue/reactivity";
import {Thumbs, Navigation} from "swiper";
import productMixin from "@/mixins/productMixin";

export default {
  name: "ProductItem",
  mixins: [productMixin],
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      collectionHandle: this.$route.params.handle,
      productHandle: this.$route.params.product_handle,
      quantity: 1
    }
  },
  setup() {
    const thumbsSwiper = ref(null);
    const swiperOptions = {
      breakpoints: {
        991: {
          slidesPerView: 5
        }
      }
    }
    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };
    return {
      Thumbs,
      Navigation,
      thumbsSwiper,
      swiperOptions,
      setThumbsSwiper
    };
  },
  computed: {
    ...mapState({
      products: state => state.products.products,
      product: state => state.products.productItem,
      selectedOptions: state => state.products.selectedOptions,
      isLoaded: state => state.products.isLoaded
    })
  },
  methods: {
    ...mapActions({
      fetchProductVariant: 'products/fetchProductVariant'
    }),
    quantityUp() {
      this.quantity += 1
    },
    quantityDown() {
      if (this.quantity === 1) return;
      this.quantity -= 1
    },
    updateSelectedOption(e, name) {
      const options = JSON.parse(JSON.stringify(this.selectedOptions));
      options.map(option => {
        if (option.name === name) {
          option.value = e.target.value;
        }
        return option;
      })
      this.setSelectedOptions(options);
      this.fetchProductVariant(this.productHandle);
    }
  },
  created() {
    this.fetchProductItem(this.productHandle);
  }

}
</script>

<style scoped>

</style>
