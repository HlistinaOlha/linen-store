<template>
  <div v-for="article in articles" :key="article.node.id" class="col-xs-4">
    <div class="article_item flexible_block flexible_block__normal ">
      <div class="layer_1">
        <div class="img_placeholder__wrap img_placeholder__small"
             :style="{ backgroundImage: `url(${article.node.image.url})` }"/>
      </div>
      <div class="layer_2">
        <div>
          <p class="article_title">
            <a :href="article.node.onlineStoreUrl">{{ article.node.title }}</a></p>
          <p class="article_content">{{ article.node.shortContent }}</p>
          <a class="link article_btn " :href="article.node.onlineStoreUrl">Read more</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/styles/article-card.css';
import blogArticlesMixin from "@/mixins/blogArticlesMixin";

export default {
  name: "BlogArticleCard",
  mixins: [blogArticlesMixin]
}
</script>

<style scoped>

</style>
