import router from "@/router";

const createCartQuery = () => `
mutation CreateCart {
  cartCreate(input: {lines: []}) {
    cart {
      id
    }
  }
}`;

const getCartQuery = (id) => {
  return JSON.stringify({
    query: `
query getCart($id: ID!) {
  cart(id: $id) {
    id
    totalQuantity
    lines(first: 100) {
      edges {
        node {
          id
          quantity
          merchandise {
            ... on ProductVariant {
              image{
                url
              }
              weight
              weightUnit
              priceV2 {
                amount
              }
              selectedOptions{
                name
                value
              }
              product {
                title
                handle
                vendor
                productType
              }
            }
          }
        }
      }
    }
    cost {
      totalAmount {
        amount
        currencyCode
      }
      subtotalAmount {
        amount
        currencyCode
      }
      totalTaxAmount {
        amount
        currencyCode
      }
      totalDutyAmount {
        amount
        currencyCode
      }
    }
  }
}
`,
    variables: {
      id: id
    }
  })
}

const updateCartQuery = (cartId, linesId, quantity) => {
  return JSON.stringify({
    query: `
mutation updateCart($cartId: ID!, $linesId: ID!, $quantity: Int!) {
  cartLinesUpdate(cartId: $cartId, lines: {id: $linesId, quantity: $quantity}) {
    cart {
      id
      totalQuantity
      lines(first: 100) {
        edges {
          node {
            id
            quantity
            merchandise {
              ... on ProductVariant {
                image{
                  url
                }
                weight
                weightUnit
                priceV2 {
                  amount
                }
                selectedOptions {
                  name
                  value
                }
                product {
                  title
                  handle
                  vendor
                  productType
                }
              }
            }
          }
        }
      }
      cost {
        totalAmount {
          amount
        }
        subtotalAmount {
          amount
        }
        totalTaxAmount {
          amount
        }
        totalDutyAmount {
          amount
        }
      }
    }
  }
}

`,
    variables: {
      cartId: cartId,
      linesId: linesId,
      quantity: quantity
    }
  })
}

const addToCartQuery = (cartId, quantity, productId) => {
  return JSON.stringify({
    query: `
mutation AddToCart($cartId: ID!, $productId: ID!, $quantity: Int!) {
  cartLinesAdd(cartId: $cartId, lines: [{quantity: $quantity, merchandiseId: $productId}]) {
    cart {
      id
      totalQuantity
      lines(first: 100) {
        edges {
          node {
            id
            quantity
            merchandise {
              ... on ProductVariant {
                image{
                  url
                }
                weight
                weightUnit
                priceV2 {
                  amount
                }
                selectedOptions {
                  name
                  value
                }
                product {
                  title
                  handle
                  vendor
                  productType
                }
              }
            }
          }
        }
      }
      cost {
        totalAmount {
          amount
        }
        subtotalAmount {
          amount
        }
        totalTaxAmount {
          amount
        }
        totalDutyAmount {
          amount
        }
      }
    }
  }
}
`,
    variables: {
      cartId: cartId,
      productId: productId,
      quantity: quantity
    }
  })
}

const removeFromCartQuery = (cartId, linesId) => {
  return JSON.stringify({
    query: `
mutation cartLinesRemove($cartId: ID!, $linesId: [ID!]!) {
  cartLinesRemove(cartId: $cartId, lineIds: $linesId) {
    cart {
      id
      totalQuantity
      lines(first: 100) {
        edges {
          node {
            id
            quantity
            merchandise {
              ... on ProductVariant {
                image{
                  url
                }
                weight
                weightUnit
                priceV2 {
                  amount
                }
                selectedOptions {
                  name
                  value
                }
                product {
                  title
                  handle
                  vendor
                  productType
                }
              }
            }
          }
        }
      }
      cost {
        totalAmount {
          amount
        }
        subtotalAmount {
          amount
        }
        totalTaxAmount {
          amount
        }
        totalDutyAmount {
          amount
        }
      }
    }
  }
}
`,
    variables: {
      cartId: cartId,
      linesId: linesId
    }
  })
}

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
  async createCart({commit, dispatch}) {
    try {
      await fetch(GRAPHQL_URL, GRAPHQL_BODY(createCartQuery, 'graphql'))
        .then(res => res.json())
        .then(data => {
          commit('setCartId', data.data.cartCreate.cart.id);
        })
      dispatch('getCart');
    } catch (e) {
      alert(e);
    }
  },
  async getCart({commit, state}) {
    try {
      await fetch(GRAPHQL_URL, GRAPHQL_BODY(getCartQuery.bind(null, state.cartId), 'json'))
        .then(res => res.json())
        .then(data => {
          commit('setCart', data.data.cart.lines.edges);
        })
    } catch (e) {
      alert(e);
    }
  },
  async updateCart({commit, state}, {linesId, quantity}) {
    try {
      await fetch(GRAPHQL_URL, GRAPHQL_BODY(updateCartQuery.bind(null, state.cartId, linesId, quantity), 'json'))
        .then(res => res.json())
        .then(data => {
          commit('setCart', data.data.cartLinesUpdate.cart.lines.edges);
          commit('setTotalQuantity', data.data.cartLinesUpdate.cart.totalQuantity);
          commit('setTotalPrice', data.data.cartLinesUpdate.cart.cost.totalAmount.amount);
        })
    } catch (e) {
      alert(e);
    }
  },
  async addProductToCart({commit, dispatch, state}, {quantity, productId}) {
    if (!state.cartId) await dispatch('createCart');
    try {
      await fetch(GRAPHQL_URL, GRAPHQL_BODY(addToCartQuery.bind(null, state.cartId, quantity, productId), 'json'))
        .then(res => res.json())
        .then(data => {
          commit('setCart', data.data.cartLinesAdd.cart.lines.edges);
          commit('setTotalQuantity', data.data.cartLinesAdd.cart.totalQuantity);
          commit('setTotalPrice', data.data.cartLinesAdd.cart.cost.totalAmount.amount);
          router.push({name: 'cart'})
        })
    } catch (e) {
      alert(e);
    }
  },
  async removeProductFromCart({commit, state}, linesId) {
    try {
      await fetch(GRAPHQL_URL, GRAPHQL_BODY(removeFromCartQuery.bind(null, state.cartId, linesId), 'json'))
        .then(res => res.json())
        .then(data => {
          commit('setCart', data.data.cartLinesRemove.cart.lines.edges);
          commit('setTotalQuantity', data.data.cartLinesRemove.cart.totalQuantity);
          commit('setTotalPrice', data.data.cartLinesRemove.cart.cost.totalAmount.amount);
        })
    } catch (e) {
      alert(e);
    }
  }
}
