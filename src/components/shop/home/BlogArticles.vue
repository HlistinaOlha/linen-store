<template>
  <div class="shopify-section section section_homepage section_blog-articles">
    <div class="container">
      <h2 class="section_heading">{{ title }}</h2>
    </div>
    <div class="blocks_container">
      <div class="row">
        <blog-article-card/>
      </div>
    </div>
  </div>
</template>

<script>
import BlogArticleCard from "@/components/shop/home/BlogArticleCard";

export default {
  name: "BlogArticles",
  components: {BlogArticleCard},
  props: {
    title: {
      required: false,
      type: String
    }
  }
}
</script>

<style scoped>

</style>
