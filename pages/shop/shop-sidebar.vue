<template lang="html">
    <v-app>
        <v-main>
            <header-default />
            <header-mobile />
            <bread-crumb :breadcrumb="breadCrumb" />
            <div class="ps-page--shop" id="shop-sidebar">
                <div class="container">
                    <div class="ps-layout--shop">
                        <div class="ps-layout__left">
                            <shop-widget
                                v-if="categories !== null && brands !== null"
                            />
                        </div>

                        <div class="ps-layout__right">
                            <div class="ps-page__header">
                                <h1 class="text-uppercase">Shop Sidebar</h1>
                            </div>
                            <shop-sidebar-banner />
                            <shop-sidebar-best-seller
                                v-if="collections !== null"
                                collection-slug="shop_best_sale_items"
                            />
                            <layout-shop-sidebar v-if="collections !== null" />
                        </div>
                    </div>
                </div>
            </div>
            <newsletters />
            <footer-default />
        </v-main>
    </v-app>
</template>

<script>
import { mapState } from 'vuex';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import BreadCrumb from '~/components/elements/BreadCrumb';
import LayoutShop from '~/components/partials/shop/LayoutShop';
import ShopWidget from '~/components/partials/shop/modules/ShopWidget';
import ShopBanner from '~/components/partials/shop/sections/ShopBanner';
import ShopBrands from '~/components/partials/shop/sections/ShopBrands';
import ShopCategories from '~/components/partials/shop/sections/ShopCategories';
import ShopSidebarBestSeller from '~/components/partials/shop/sections/ShopSidebarBestSeller';
import LayoutShopSidebar from '~/components/partials/shop/LayoutShopSidebar';
import ShopSidebarBanner from '~/components/partials/shop/sections/ShopSidebarBanner';
import Newsletters from '~/components/partials/commons/Newsletters';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';

export default {
    name: 'index',
    components: {
        HeaderMobile,
        Newsletters,
        ShopSidebarBanner,
        LayoutShopSidebar,
        ShopSidebarBestSeller,
        ShopCategories,
        ShopBrands,
        ShopBanner,
        ShopWidget,
        LayoutShop,
        BreadCrumb,
        FooterDefault,
        HeaderDefault
    },
    transition() {
        return 'fadeIn';
    },
    data() {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Shop Sidebar'
                }
            ]
        };
    },
    computed: {
        ...mapState({
            collections: state => state.collection.collections,
            categories: state => state.product.categories,
            brands: state => state.product.brands
        })
    },
    async created() {
        const params = {
            _start: 1,
            _limit: 12
        };
        const collectionsParams = [
            'shop_best_sale_items',
            'shop-recommend-items'
        ];
        const collections = await this.$store.dispatch(
            'collection/getCollectionsBySlugs',
            collectionsParams
        );
        const products = await this.$store.dispatch(
            'product/getProducts',
            params
        );
        const brands = await this.$store.dispatch(
            'product/getProductBrands',
            params
        );
        const categories = await this.$store.dispatch(
            'product/getProductCategories',
            params
        );
    }
};
</script>

<style lang="scss" scoped></style>
