<template>
  <div class="breadcrumbs">
    <div class="container">
      <ul>
        <li
          v-for="(breadcrumb, idx) in breadcrumbList"
          :key="idx"
          @click="routeTo(idx)">
          <router-link v-if="breadcrumb.link"
                       :to="breadcrumb.link.endsWith(':handle') ? `/catalog/${this.$route.params.handle}` : breadcrumb.link">
            {{
              breadcrumb.name === '' ? this.$route.params.handle.replace(/-/g, ' ').replace(/[0-9]/g, ' ') : breadcrumb.name
            }}
          </router-link>
          <span v-else>{{
              breadcrumb.name === 'Search' ?
                this.$route.query.q === undefined ? breadcrumb.name : 'Search: ' + this.$route.query.q :
                breadcrumb.name === '' ? this.$route.params.product_handle?
                    this.$route.params.product_handle.replace(/-/g, ' ') : this.$route.params.handle ?
                      this.$route.params.handle.replace(/-/g, ' ').replace(/[0-9]/g, ' ') : breadcrumb.name
                  : breadcrumb.name
            }}
            </span>
          {{this.$route.params.product_handle}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import '@/assets/styles/breadcrumbs.css';

export default {
  name: "Breadcrumbs",
  data() {
    return {
      breadcrumbList: []
    }
  },
  methods: {
    routeTo(pRouteTo) {
      if (this.breadcrumbList[pRouteTo].link) this.$router.push(this.breadcrumbList[pRouteTo].link)
    },
    updateList() {
      this.breadcrumbList = this.$route.meta.breadcrumb
    }
  },
  watch: {
    '$route'() {
      this.updateList();
    }
  },
  mounted() {
    this.updateList();
  }
}

</script>

<style scoped>

</style>
