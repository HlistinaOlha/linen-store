<template>
  <div v-if="pageInfo.hasNextPage || pageInfo.hasPreviousPage" class="pagination">
    <paginate
      v-model=pageNum
      :page-count="totalPages"
      :prev-text="'Previous'"
      :next-text="'Next'"
      :prev-class="pageInfo.hasPreviousPage? '' : 'disabled'"
      :next-class="pageInfo.hasNextPage? '' : 'disabled'"
      :prev-link-class="'pagination_prev'"
      :next-link-class="'pagination_next'"
      :click-handler.prevent="setPageParams"
      :container-class="''"
      :page-class="'pageNum'"
      :page-link-class="'pagination_current'"
      @mousedown.prevent
    />
  </div>
</template>

<script>
import Paginate from "vuejs-paginate-next";
import {mapState} from "vuex";
import '@/assets/styles/catalog-pagination.css';
import collectionCardMixin from "@/mixins/collectionCardMixin";
import pageMixin from "@/mixins/pageMixin";

export default {
  name: "CatalogPagination",
  mixins: [collectionCardMixin, pageMixin],
  components: {
    paginate: Paginate
  },
  props: {
    handle: {
      type: String,
      required: true
    },
    pageInfo: {
      type: Object,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapState({
      page: state => state.products.page,
    }),
    pageNum: {
      get() {
        return this.page;
      },
      set(value) {
        if (this.page < value) {
          this.setPageDirection('forwards');
        }
        if (this.page > value) {
          this.setPageDirection('backwards');
        }
        this.updatePageNumber(value);
      }
    }
  },
  methods: {
    setPageParams(pageNum) {
      this.updatePageNumber(pageNum);
    }
  },
  watch: {
    page() {
      this.fetchCollectionCard(this.handle);
    }
  },
}
</script>

<style scoped>

</style>
