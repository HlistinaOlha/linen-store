<template>
  <div v-for="article in articles" class="megamenu_col__item">
    <div class="blog_img"
         :style="{ backgroundImage: `url(${article.node.image.url})` }">
    </div>
    <div class="blog_info">
      <p class="blog_title">
        <a :href="article.node.onlineStoreUrl">{{article.node.title}}</a>
      </p>
      <div class="blog_content"><span>{{ article.node.shortContent }}</span>
      </div>
      <a class="blog_btn link"
         :href="article.node.onlineStoreUrl">Read
        more</a>
    </div>
  </div>
</template>

<script>

import blogArticlesMixin from "@/mixins/blogArticlesMixin";
import {mapActions} from "vuex";

export default {
  name: "ShopNavBarArticleCard",
  mixins: [blogArticlesMixin],
  methods: {
    ...mapActions({
      fetchBlogArticles: 'home/fetchBlogArticles'
    })
  },
  created() {
    this.fetchBlogArticles();
  }
}
</script>

<style scoped>

</style>
