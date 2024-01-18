<template>
  <div class="footer_row__1 footer__content-top page-width">
    <div class="container">
      <div class="row">
        <div class="flexbox">
          <div class="col-sm-3 footer_block">
            <div class="footer_item footer_item__links"><h2>Information</h2>
              <ul>
                <li>
                  <router-link to="/">Home</router-link>
                </li>
                <li>
                  <router-link to="/search">Search</router-link>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
                <li>
                  <router-link to="/catalog">Collections</router-link>
                </li>
                <li>
                  <a href="https://olha-hlistina-development.myshopify.com/pages/about-us">About us</a>
                </li>
                <li>
                  <a href="https://olha-hlistina-development.myshopify.com/pages/contact">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-3 footer_block">
            <div class="footer_item footer_item__contacts">
              <div>
                <h2>Store Information</h2>
                <div>
                  <p>Linênce, Glasgow D04 89GR</p>
                  <p>Call us now: 0123-456-789</p>
                  <p>Email: info@demolink.org</p>
                </div>
                <ul class="footer_item__social">
                  <li>
                    <a href="https://www.facebook.com/TemplateMonster/">
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                      <span class="visually-hidden">Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/templatemonster">
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                      <span class="visually-hidden">Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/tm.opencart/">
                      <i class="fa fa-instagram" aria-hidden="true"></i>
                      <span class="visually-hidden">Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/templatemonster/">
                      <i class="fa fa-pinterest" aria-hidden="true"></i>
                      <span class="visually-hidden">Pinterest</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/user/TemplateMonsterCo">
                      <i class="fa fa-youtube" aria-hidden="true"></i>
                      <span class="visually-hidden">YouTube</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-3 footer_block">
            <div class="footer_item footer_item__newsletter"><h2>Newsletter</h2>
              <form method="post" action="/contact#footer_newsletter_form" id="footer_newsletter_form"
                    accept-charset="UTF-8" class="contact-form"
                    @submit.prevent>
                <input type="hidden" name="form_type" value="customer">
                <input type="hidden" name="utf8" value="✓">
                <p>Subscribe to the Linênce mailing list to receive updates on new arrivals, special offers and other
                  discount information.</p>
                <input type="hidden" name="contact[tags]" value="Newsletter subscriber">
                <div class="form_wrapper">
                  <input v-model="userEmail" type="email" name="contact[email]"
                         class="input-group__field newsletter__input"
                         placeholder="Enter your email" required="">
                  <button class="btn" type="submit">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopFooterTop",
  data() {
    return {
      userEmail: ''
    }
  }
}
</script>

<style scoped>

</style>
