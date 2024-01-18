const articlesQuery = () => `{
articles(first: 3, reverse: true) {
 edges{
   node{
     id
     title
     shortContent: content(truncateAt: 102)
     onlineStoreUrl
     image {
          url
        }
     }
   }
 }
}`;

const STOREFRONT_ACCESS_TOKEN = 'b1973641696e1395323d38f670f3325d';
const GRAPHQL_URL = 'https://olha-hlistina-development.myshopify.com/api/2022-07/graphql.json';

const GRAPHQL_BODY = (query, type) => {
  return {
    'async': true,
    'crossDomain': true,
    'method': 'POST',
    'headers': {
      'X-Shopify-Storefront-Access-Token': STOREFRONT_ACCESS_TOKEN,
      'Content-Type': `application/${type}`,
    },
    'body': query()
  };
}

export default {
  async fetchBlogArticles({commit}) {
    try {
      await fetch(GRAPHQL_URL, GRAPHQL_BODY(articlesQuery, 'graphql'))
        .then(res => res.json())
        .then(articles => {
          commit('setArticles', articles.data.articles.edges);
        })
    } catch (e) {
      alert(e);
    }
  }
}
