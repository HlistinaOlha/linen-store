<template>
  <nav id="megamenu"
       class="megamenu"
       :class="isMobile? 'megamenu_mobile' : 'megamenu-desktop'"
       @click="handleMobileMenu"
       ref="nav">
    <h2 id="megamenu_mobile_toggle">
      <i class="fa fa-bars" aria-hidden="true"></i>Menu</h2>
    <div id="megamenu_mobile_close"
         ref="closeMobile">
      <div class="close_icon"></div>
    </div>
    <ul id="megamenu_level__1"
        class="level_1 list-menu list-menu--inline"
        role="list"
        ref="desktopMenuLevel1">
      <li class="level_1__item">
        <router-link
          class="level_1__link header__menu-item header__menu-item list-menu__item link link--text focus-inset"
          to="/"
          aria-current="page"
          @mousedown.prevent>Home
        </router-link>
      </li>
      <li class="level_1__item level_2__links"
          @mouseenter="handleEnterDropDownMenu"
          @mouseleave="handleLeaveDropDownMenu">
        <router-link
          class=" level_1__link  header__menu-item header__menu-item list-menu__item link--text focus-inset"
          to="/catalog"
          @mousedown.prevent>
          Catalog
          <i class="level_1__trigger megamenu_trigger"></i>
        </router-link>
        <ul id="HeaderMenu-MenuList-2"
            class="level_2 header__submenu list-menu list-menu--disclosure gradient caption-large motion-reduce global-settings-popup"
            role="list"
            tabindex="-1"
            ref="level2Menu">
          <li class="container">
            <div class="megamenu_col__item" style="grid-area: area1 ">
              <h2>Ensembles
                <i class="level_2__trigger megamenu_trigger"></i>
              </h2>
              <ul id="HeaderMenu-SubMenuList-1" class="level_3 header__submenu list-menu motion-reduce">
                <li class="level_3__item">
                  <router-link to="/catalog/bed-linen"
                               class="level_3__link header__menu-item list-menu__item link link--text focus-inset caption-large">
                    Bed Linen
                  </router-link>
                </li>
                <li class="level_3__item">
                  <router-link to="/catalog/blankets-throws"
                               class="level_3__link header__menu-item list-menu__item link link--text focus-inset caption-large">
                    Blankets + Throws
                  </router-link>
                </li>
                <li class="level_3__item">
                  <router-link to="/catalog/custom-bedding-1"
                               class="level_3__link header__menu-item list-menu__item link link--text focus-inset caption-large">
                    Custom Bedding
                  </router-link>
                </li>
                <li class="level_3__item">
                  <router-link to="/catalog/down-pillows"
                               class="level_3__link header__menu-item list-menu__item link link--text focus-inset caption-large">
                    Down Pillows
                  </router-link>
                </li>
                <li class="level_3__item">
                  <router-link to="/catalog/gift-ideas-1"
                               class="level_3__link header__menu-item list-menu__item link link--text focus-inset caption-large">
                    Gift Ideas
                  </router-link>
                </li>
                <li class="level_3__item">
                  <router-link to="/catalog/new-arrivals"
                               class="level_3__link header__menu-item list-menu__item link link--text focus-inset caption-large">
                    New Arrivals
                  </router-link>
                </li>
                <li class="level_3__item">
                  <router-link to="/catalog/pillows"
                               class="level_3__link header__menu-item list-menu__item link link--text focus-inset caption-large">
                    Pillows
                  </router-link>
                </li>
                <li class="level_3__item">
                  <router-link to="/catalog/solid"
                               class="level_3__link header__menu-item list-menu__item link link--text focus-inset caption-large">
                    Solid
                  </router-link>
                </li>
                <li class="level_3__item">
                  <router-link to="/catalog/table-linens"
                               class="level_3__link header__menu-item list-menu__item link link--text focus-inset caption-large">
                    Table Linens
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="megamenu_col__item" style="grid-area: area2 ">
              <h2>By Product Type
                <i class="level_2__trigger megamenu_trigger"></i>
              </h2>
              <ul id="HeaderMenu-SubMenuList-2" class="level_3 header__submenu list-menu motion-reduce">
                <li class="level_3__item">
                  <router-link to="/catalog/custom-bedding-1"
                               class="level_3__link header__menu-item list-menu__item link link--text focus-inset caption-large">
                    Custom Bedding
                  </router-link>
                </li>
                <li class="level_3__item">
                  <router-link to="/catalog/gift-ideas-1"
                               class="level_3__link header__menu-item list-menu__item link link--text focus-inset caption-large">
                    Gift Ideas
                  </router-link>
                </li>
                <li class="level_3__item">
                  <router-link to="/catalog/pillows"
                               class="level_3__link header__menu-item list-menu__item link link--text focus-inset caption-large">
                    Pillows
                  </router-link>
                </li>
                <li class="level_3__item">
                  <router-link to="/catalog/table-linens"
                               class="level_3__link header__menu-item list-menu__item link link--text focus-inset caption-large">
                    Table Linens
                  </router-link>
                </li>
                <li class="level_3__item">
                  <router-link to="/catalog/down-pillows"
                               class="level_3__link header__menu-item list-menu__item link link--text focus-inset caption-large">
                    Down Pillows
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="megamenu_col__item" style="grid-area: area3 ">
              <h2>By Fabric
                <i class="level_2__trigger megamenu_trigger"></i>
              </h2>
              <ul id="HeaderMenu-SubMenuList-3" class="level_3 header__submenu list-menu motion-reduce">
                <li class="level_3__item">
                  <router-link to="/catalog/blankets-throws"
                               class="level_3__link header__menu-item list-menu__item link link--text focus-inset caption-large">
                    Blankets + Throws
                  </router-link>
                </li>
                <li class="level_3__item">
                  <router-link to="/catalog/down-pillows"
                               class="level_3__link header__menu-item list-menu__item link link--text focus-inset caption-large">
                    Down Pillows
                  </router-link>
                </li>
                <li class="level_3__item">
                  <router-link to="/catalog/new-arrivals"
                               class="level_3__link header__menu-item list-menu__item link link--text focus-inset caption-large">
                    New Arrivals
                  </router-link>
                </li>
                <li class="level_3__item">
                  <router-link to="/catalog/solid"
                               class="level_3__link header__menu-item list-menu__item link link--text focus-inset caption-large">
                    Solid
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="megamenu_col__item" style="grid-area: area4 ">
              <h2>Down
                <i class="level_2__trigger megamenu_trigger"></i>
              </h2>
              <ul id="HeaderMenu-SubMenuList-4" class="level_3 header__submenu list-menu motion-reduce">
                <li class="level_3__item">
                  <router-link to="/catalog/solid"
                               class="level_3__link header__menu-item list-menu__item link link--text focus-inset caption-large">
                    Solid
                  </router-link>
                </li>
                <li class="level_3__item">
                  <router-link to="/catalog/down-pillows"
                               class="level_3__link header__menu-item list-menu__item link link--text focus-inset caption-large">
                    Down Pillows
                  </router-link>
                </li>
                <li class="level_3__item">
                  <router-link to="/catalog/custom-bedding-1"
                               class="level_3__link header__menu-item list-menu__item link link--text focus-inset caption-large">
                    Custom Bedding
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="megamenu_col__item" style="grid-area: area5 ">
              <h2>Bed Basics
                <i class="level_2__trigger megamenu_trigger"></i>
              </h2>
              <ul id="HeaderMenu-SubMenuList-5" class="level_3 header__submenu list-menu motion-reduce">
                <li class="level_3__item">
                  <router-link to="/catalog/new-arrivals"
                               class="level_3__link header__menu-item list-menu__item link link--text focus-inset caption-large">
                    New Arrivals
                  </router-link>
                </li>
                <li class="level_3__item">
                  <router-link to="/catalog/gift-ideas-1"
                               class="level_3__link header__menu-item list-menu__item link link--text focus-inset caption-large">
                    Gift Ideas
                  </router-link>
                </li>
                <li class="level_3__item">
                  <router-link to="/catalog/blankets-throws"
                               class="level_3__link header__menu-item list-menu__item link link--text focus-inset caption-large">
                    Blankets + Throws
                  </router-link>
                </li>
                <li class="level_3__item">
                  <router-link to="/catalog/bed-linen"
                               class="level_3__link header__menu-item list-menu__item link link--text focus-inset caption-large">
                    Bed Linen
                  </router-link>
                </li>
                <li class="level_3__item">
                  <router-link to="/catalog/table-linens"
                               class="level_3__link header__menu-item list-menu__item link link--text focus-inset caption-large">
                    Table Linens
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </li>
      <li class="level_1__item level_2__small"
          @mouseenter="handleEnterDropDownMenu"
          @mouseleave="handleLeaveDropDownMenu">
        <a href="https://olha-hlistina-development.myshopify.com/pages/about-us"
           class=" level_1__link  header__menu-item header__menu-item list-menu__item link--text focus-inset">
          About us
          <i class="level_1__trigger megamenu_trigger"></i>
        </a>
        <ul id="HeaderMenu-MenuList-3"
            class="level_2 header__submenu list-menu list-menu--disclosure gradient caption-large motion-reduce global-settings-popup"
            role="list">
          <li>
            <div>
              <ul class="level_3">
                <li class="level_3__item">
                  <router-link to="/"
                               class="level_3__link header__menu-item list-menu__item link link--text focus-inset caption-large"
                               aria-current="page">
                    Home
                  </router-link>
                </li>
                <li class="level_3__item">
                  <router-link to="/catalog"
                               class="level_3__link header__menu-item list-menu__item link link--text focus-inset caption-large">
                    Catalog
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </li>
      <li class="level_1__item level_2__blog"
          @mouseenter="handleEnterDropDownMenu"
          @mouseleave="handleLeaveDropDownMenu">
        <a href="https://olha-hlistina-development.myshopify.com/blogs/news"
           class=" level_1__link  header__menu-item header__menu-item list-menu__item link--text focus-inset"
           @mousedown.prevent>
          Blog
          <i class="level_1__trigger megamenu_trigger"></i>
        </a>
        <ul id="HeaderMenu-MenuList-4"
            class="level_2 header__submenu list-menu list-menu--disclosure gradient caption-large motion-reduce global-settings-popup"
            role="list" tabindex="-1">
          <li class="container">
            <shop-nav-bar-article-card/>
          </li>
        </ul>
      </li>
      <li class="level_1__item level_2__products"
          @mouseenter="handleEnterDropDownMenu"
          @mouseleave="handleLeaveDropDownMenu">
        <router-link to="/catalog/bed-linen"
                     class=" level_1__link  header__menu-item header__menu-item list-menu__item link--text focus-inset"
                     @mousedown.prevent>
          Sale
          <i class="level_1__trigger megamenu_trigger"></i>
        </router-link>
        <ul id="HeaderMenu-MenuList-5"
            class="level_2 header__submenu list-menu list-menu--disclosure gradient caption-large motion-reduce global-settings-popup"
            role="list" tabindex="-1">
          <li class="container">
            <shop-nav-bar-sales-card/>
          </li>
        </ul>
      </li>
      <li class="level_1__item">
        <a href="https://olha-hlistina-development.myshopify.com/pages/contact"
           class=" level_1__link header__menu-item header__menu-item list-menu__item link link--text focus-inset"
           @mousedown.prevent>
          Contacts
        </a></li>
    </ul>
  </nav>
</template>

<script>


import ShopNavBarArticleCard from "@/components/shop/header/ShopNavBarArticleCard";
import ShopNavBarSalesCard from "@/components/shop/header/ShopNavBarSalesCard";
export default {
  name: "ShopNavBar",
  components: {ShopNavBarSalesCard, ShopNavBarArticleCard},
  data() {
    return {
      isMobile: false,
      menuTimer: 0,
      prevMenuElem: undefined
    }
  },
  methods: {
    toggleMenus() {
      const mobileMenuMediaQuery = window.matchMedia("(max-width: 1008px)");
      if (mobileMenuMediaQuery.matches) {
        this.isMobile = true;
        this.$refs.desktopMenuLevel1 ? this.$refs.desktopMenuLevel1.style.visibility = "hidden" : '';
      } else {
        this.isMobile = false;
        this.$refs.desktopMenuLevel1 ? this.$refs.desktopMenuLevel1.style.visibility = "visible" : '';
      }
    },
    handleMobileMenu(e) {
      if (e.target.matches('h2') || e.target.matches('i.fa')) {
        this.$refs.desktopMenuLevel1.style.visibility = "visible"
        this.$refs.desktopMenuLevel1.classList.add('on');
        this.$refs.closeMobile.classList.add('on');
        document.documentElement.style.overflow = 'hidden';
      }
      if (e.target.matches('#megamenu_mobile_close') || e.target.matches('.close_icon') || e.target.matches('.level_1__link') || e.target.matches('.level_3__link')) {
        this.$refs.desktopMenuLevel1.classList.remove('on');
        this.$refs.closeMobile.classList.remove('on');
        document.body.classList.remove('overflow-hidden-tablet');
        document.documentElement.style.overflow = 'auto';
      }
      if (e.target.matches('.megamenu_trigger')) {
        e.preventDefault();
        if (e.target.matches('.level_1__trigger')) {
          this.toggleMobileSubMenu(e, e.target.closest('.level_1__item'));
        } else if (e.target.matches('.level_2__trigger')) {
          this.toggleMobileSubMenu(e, e.target.closest('.megamenu_col__item'));
        }
      }
    },
    toggleMobileSubMenu(e, closestElem) {
      const subMenu = closestElem.querySelector('ul');
      const containerElem = subMenu.closest('ul.level_2');
      e.target.classList.toggle('active');

      if (!(closestElem.classList.contains('trigger-active'))) {
        closestElem.classList.add('trigger-active');
        setTimeout(() => {
          subMenu.style.height = `${subMenu.scrollHeight}px`;
          containerElem.style.height = (containerElem === subMenu) ? `${subMenu.scrollHeight}px` : `${parseInt(containerElem.style.height) + subMenu.scrollHeight}px`;
        }, 100);
      } else {
        containerElem.style.height = `${parseInt(containerElem.style.height) - subMenu.scrollHeight}px`;
        subMenu.style.height = "0px";
        setTimeout(() => closestElem.classList.remove('trigger-active'), 250);
      }
    },
    handleEnterDropDownMenu(e) {
      if (e.target.lastChild.matches('.level_2')) {
        clearTimeout(this.menuTimer);
        e.target.classList.add('trigger-enter');
        setTimeout(() => e.target.classList.contains('trigger-enter') && e.target.classList.add('trigger-enter-active'), 100);

        if (this.prevMenuElem !== undefined && this.prevMenuElem !== e.target) {
          this.prevMenuElem.classList.remove('trigger-enter', 'trigger-enter-active');
        }
      }
      this.prevMenuElem = e.target;
    },
    handleLeaveDropDownMenu(e) {
      if (e.target.lastChild.matches('.level_2')) {
        this.menuTimer = setTimeout(() => e.target.classList.remove('trigger-enter-active'), 1000);
        setTimeout(() => !(e.target.classList.contains('trigger-enter-active')) && e.target.classList.remove('trigger-enter'), 1200);
      }
    }
  },
  created() {
    window.addEventListener('resize', this.toggleMenus);
    window.addEventListener('load', this.toggleMenus)
  }
}
</script>

<style scoped>

</style>
