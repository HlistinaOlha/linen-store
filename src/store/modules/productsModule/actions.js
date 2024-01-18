const productByHandleQuery = (handle, options) => {
  return JSON.stringify({
    query: `
  query ProductByHandle($handle: String!, $options: [SelectedOptionInput!]!) {
  product(handle: $handle) {
    variantBySelectedOptions(selectedOptions: $options){
      id
      availableForSale
      quantityAvailable
      requiresShipping
      sku
      barcode
      weight
      weightUnit
      priceV2{
        amount
      }
      compareAtPriceV2{
        amount
      }
      image{
        url
      }
    }
    productType
    id
    handle
    title
    tags
    descriptionHtml
    description(truncateAt: 494)
    shortDescription: description(truncateAt: 200)
    superShortDescription: description(truncateAt: 95)
    availableForSale
    totalInventory
    productType
    vendor
    tags
    options{
      name
      values
    }
    images(first: 5) {
      edges {
        node {
          url
        }
      }
    }
    collections(first: 9) {
      edges {
        node {
          title
          id
          handle
        }
      }
    }
    priceRange {
      minVariantPrice {
        amount
      }
      maxVariantPrice {
        amount
      }
    }
    featuredImage {
      url
    }
    variants(first: 36) {
      edges {
        node {
         selectedOptions{
            name
            value
          }
          quantityAvailable
          id
          title
          sku
          barcode
          weight
          weightUnit
          priceV2 {
            amount
          }
          compareAtPriceV2 {
            amount
          }
        }
      }
    }
  }
}
`,
    variables: {
      handle: handle,
      options: options
    }
  })
}

const productsByTagQuery = (tag) => {
  return JSON.stringify({
    query: `
  query ProductsByTag($query: String) {
  products(first:20, query: $query) {
    pageInfo {
      endCursor
      startCursor
      hasNextPage
      hasPreviousPage
    }
    edges {
      node {
        productType
        id
        handle
        title
        tags
        description(truncateAt: 494)
        availableForSale
        collections(first: 9){
           edges{
             node{
               title
             }
           }
        }
        priceRange {
          minVariantPrice {
                      amount
          }
          maxVariantPrice {
            amount
          }
        }
        featuredImage {
          url
        }
        variants(first: 4) {
          edges {
            node {
              title
              id
            }
          }
        }
      }
    }
  }
}
`,
    variables: {
      query: `tag:${tag}`
    }
  })
}

const productsByTitleQuery = (title) => {
  return JSON.stringify({
    query: `
  query ProductsByTag($query: String) {
  products(first:20, query:$query) {
    edges {
      node {
        id
        handle
        title
        description(truncateAt: 442)
        priceRange {
          minVariantPrice {
                      amount
          }
          maxVariantPrice {
            amount
          }
        }
        featuredImage {
          url
        }
      }
    }
  }
}
`,
    variables: {
      query: `title:${title}*`
    }
  })
}

const collectionNextCardQuery = (handle, numProducts, cursor, sortOption, isReversed) => {
  return JSON.stringify({
    query: `
        query CollectionCard($cardHandle: String!, $numProducts: Int!, $cursor: String, $sortOption: ProductCollectionSortKeys, $isReversed: Boolean) {
  collections(first: 9, query: $cardHandle) {
    edges {
      node {
        id
        handle
        title
        description
        products(first: $numProducts, after: $cursor, sortKey: $sortOption, reverse: $isReversed) {
          pageInfo {
            endCursor
            startCursor
            hasNextPage
            hasPreviousPage
          }
          edges {
            node {
              id
              handle
              title
              tags
              descriptionHtml
              description(truncateAt: 494)
              shortDescription: description(truncateAt: 100)
              availableForSale
              totalInventory
              productType
              vendor
              tags
              images(first: 5){
                edges{
                  node{
                    url
                  }
                }
              }
              collections(first: 9){
                edges{
                  node{
                    title
                    id
                    handle
                  }
                }
              }
              priceRange {
                minVariantPrice {
                  amount
                }
                maxVariantPrice {
                  amount
                }
              }
              featuredImage {
                url
              }
              variants(first: 4) {
                edges {
                  node {
                    selectedOptions {
                      name
                      value
                    }
                    id
                    title
                    sku
                    barcode
                    weight
                    weightUnit
                    priceV2{
                     amount
                    }
                    compareAtPriceV2{
                     amount
                    }
                  }
                }
              }
            }
          }
        }
        image {
          url
        }
      }
    }
  }
}
`,
    variables: {
      cardHandle: handle,
      numProducts: numProducts,
      cursor: cursor,
      sortOption: sortOption,
      isReversed: isReversed
    }
  })
}

const collectionPrevCardQuery = (handle, numProducts, cursor, sortOption, isReversed) => {
  return JSON.stringify({
    query: `
        query CollectionCard($cardHandle: String!, $numProducts: Int!, $cursor: String, $sortOption: ProductCollectionSortKeys, $isReversed: Boolean) {
  collections(first: 9, query: $cardHandle) {
    edges {
      node {
        id
        handle
        title
        description
        products(last: $numProducts, before: $cursor, sortKey: $sortOption, reverse: $isReversed) {
          pageInfo {
            endCursor
            startCursor
            hasNextPage
            hasPreviousPage
          }
          edges {
            node {
              id
              handle
              title
              tags
              descriptionHtml
              description(truncateAt: 494)
              shortDescription: description(truncateAt: 100)
              availableForSale
              totalInventory
              productType
              vendor
              tags
              images(first: 5){
                edges{
                  node{
                    url
                  }
                }
              }
              collections(first: 9){
                edges{
                  node{
                    title
                    id
                    handle
                  }
                }
              }
              priceRange {
                minVariantPrice {
                  amount
                }
                maxVariantPrice {
                  amount
                }
              }
              featuredImage {
                url
              }
              variants(first: 4) {
                edges {
                  node {
                  selectedOptions {
                      name
                      value
                    }
                    id
                    title
                    sku
                    barcode
                    weight
                    weightUnit
                     priceV2{
                     amount
                    }
                    compareAtPriceV2{
                     amount
                    }
                  }
                }
              }
            }
          }
        }
        image {
          url
        }
      }
    }
  }
}
`,
    variables: {
      cardHandle: handle,
      numProducts: numProducts,
      cursor: cursor,
      sortOption: sortOption,
      isReversed: isReversed
    }
  })
}

const collectionsQuery = () => `
query Collections{
  collections(first: 9, sortKey: TITLE){
    edges{
      node{
        handle
        title
        description
        products(first: 19){
          edges{
            node{
            handle
            }
          }
        }
        image{
          url
        }
      }
    }
  }
}
`;

const collectionCardQuery = (handle, numProducts) => {
  return JSON.stringify({
    query: `
        query CollectionCard($cardHandle: String!, $numProducts: Int!) {
  collections(first: 9, query: $cardHandle) {
    edges {
      node {
        id
        handle
        title
        products(first: $numProducts) {
          edges {
            node {
              id
              handle
              title
              description(truncateAt: 494)
              shortDescription: description(truncateAt: 100)
              availableForSale
              priceRange {
                minVariantPrice {
                  amount
                }
                maxVariantPrice {
                  amount
                }
              }
              featuredImage {
                url
              }
              variants(first: 4) {
                edges {
                  node {
                    id
                    selectedOptions {
                      name
                      value
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`,
    variables: {
      cardHandle: handle,
      numProducts: numProducts
    }
  })
};

const STOREFRONT_ACCESS_TOKEN = 'b1973641696e1395323d38f670f3325d'
const GRAPHQL_URL = 'https://olha-hlistina-development.myshopify.com/api/2022-07/graphql.json'

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
  async fetchProductItem({commit, state, dispatch}, handle) {
    try {
      await fetch(GRAPHQL_URL, GRAPHQL_BODY(productByHandleQuery.bind(null, handle, state.selectedOptions), 'json'))
        .then(res => res.json())
        .then(product => {
          commit('setSelectedOptions', product.data.product.variants.edges[0].node.selectedOptions);
        })
      await dispatch('fetchProductVariant', handle);
    } catch (e) {
      alert(e);
    }
  },
  async fetchProductVariant({commit, state}, handle) {
    try {
      await fetch(GRAPHQL_URL, GRAPHQL_BODY(productByHandleQuery.bind(null, handle, state.selectedOptions), 'json'))
        .then(res => res.json())
        .then(product => {
          commit('setProductItem', product.data.product);
        })
    } catch (e) {
      alert(e);
    }
  },
  async fetchProducts({commit, state}, tag) {
    try {
      await fetch(GRAPHQL_URL, GRAPHQL_BODY(productsByTagQuery.bind(null, tag), 'json'))
        .then(res => res.json())
        .then(products => {
          commit('setProducts', products.data.products.edges);
          commit('setPageInfo', products.data.products.pageInfo);
          let filteredProducts = JSON.parse(JSON.stringify(state.products));
          filteredProducts.filter(product => {
            product.node.collections.edges.filter(collection => collection.node.title === state.collectionTitle)
            return product;
          })
          commit("setFilteredProducts", filteredProducts);
        })
    } catch (e) {
      alert(e);
    }
  },
  async searchProducts({commit, state}, title) {
    try {
      await fetch(GRAPHQL_URL, GRAPHQL_BODY(productsByTitleQuery.bind(null, title), 'json'))
        .then(res => res.json())
        .then(products => {
          commit('setSearchedProducts', products.data.products.edges);
        })
    } catch (e) {
      alert(e);
    }
  },
  async fetchCollections({commit}) {
    try {
      await fetch(GRAPHQL_URL, GRAPHQL_BODY(collectionsQuery, 'graphql'))
        .then(res => res.json())
        .then(collections => {
          commit('setCollections', collections.data.collections.edges);
          commit('setEndCursor', null);
          commit('setStartCursor', null);
          commit('setPageDirection', 'forwards');
        })
    } catch (e) {
      alert(e);
    }
  },
  async fetchCollectionCard({commit, state}, handle) {
    let query;
    if (state.pageDirection === 'forwards') {
      query = collectionNextCardQuery.bind(null, handle, state.numProducts, state.endCursor, state.sortOption, state.isReversed);
    }
    if (state.pageDirection === 'backwards') {
      query = collectionPrevCardQuery.bind(null, handle, state.numProducts, state.startCursor, state.sortOption, state.isReversed);
    }
    try {
      await fetch(GRAPHQL_URL, GRAPHQL_BODY(query, 'json'))
        .then(res => res.json())
        .then(collectionCard => {
          commit('setProducts', collectionCard.data.collections.edges[0].node.products.edges);
          commit("setFilteredProducts", state.products);
          commit('setCollectionTitle', collectionCard.data.collections.edges[0].node.title);
          commit('setCollectionCard', collectionCard.data.collections.edges);
          commit('setPageInfo', collectionCard.data.collections.edges[0].node.products.pageInfo)
        })
    } catch (e) {
      alert(e);
    }
  },
  async fetchFeaturedProducts({commit, state}, {collectionHandle, numProducts}) {
    await fetch(GRAPHQL_URL, GRAPHQL_BODY(collectionCardQuery.bind(null, collectionHandle, numProducts), 'json'))
      .then(res => res.json())
      .then(collectionCard => {
        commit('setFilteredProducts', collectionCard.data.collections.edges[0].node.products.edges);
      })
  }
}
