<template lang="html">
    <v-app>
        <v-main>
            <header-default />
            <header-mobile />
            <div class="ps-page--shop">
                <bread-crumb :breadcrumb="breadCrumb" layout="fullwidth" />
                <div class="ps-container">
                    <shop-banner />
                    <shop-brands />
                    <shop-categories />
                    <div class="ps-layout--shop">
                        <div class="ps-layout__left">
                            <shop-widget v-if="widgetLoading === false" />
                            <loading v-else />
                        </div>
                        <div class="ps-layout__right">
                            <layout-shop v-if="collections !== null" />
                        </div>
                    </div>
                </div>
            </div>
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
import Loading from '~/components/elements/commons/Loading';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';

export default {
    name: 'shop-fullwidth',
    components: {
        HeaderMobile,
        Loading,
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
    computed: {
        ...mapState({
            collections: state => state.collection.collections,
            categories: state => state.product.categories,
            brands: state => state.product.brands
        }),
        categorySlug() {
            return this.$route.query.category;
        }
    },
    data() {
        return {
            widgetLoading: true,
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Shop Default'
                }
            ]
        };
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
        const total = await this.$store.dispatch(
            'product/getTotalRecords',
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
        if (brands && categories) {
            setTimeout(
                function() {
                    this.widgetLoading = false;
                }.bind(this),
                150
            );
        }
    }
};
</script>

<style lang="scss" scoped></style>
