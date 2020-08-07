<template lang="html">
    <v-app>
        <v-main>
            <header-default />
            <header-mobile />
            <div class="ps-page--shop">
                <bread-crumb :breadcrumb="breadCrumb" layout="fullwidth" />
                <div class="ps-layout--shop" id="shop-carousel">
                    <div class="container">
                        <shop-carousel-banner />
                        <shop-carousel-top-deal
                            v-if="collections !== null"
                            collection-slug="shop_top_deal_super_hot_today"
                        />
                        <shop-carousel-product-box
                            v-if="collections !== null"
                        />
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
import ShopCarouselBanner from '~/components/partials/shop/sections/ShopCarouselBanner';
import ShopCarouselTopDeal from '~/components/partials/shop/sections/ShopCarouselTopDeal';
import ShopCarouselProductBox from '~/components/partials/shop/sections/ShopCarouselProductBox';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';

export default {
    name: 'index',
    components: {
        HeaderMobile,
        ShopCarouselProductBox,
        ShopCarouselTopDeal,
        ShopCarouselBanner,
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
                    text: 'Shop carousel'
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
        const collectionsSlug = [
            'shop_top_deal_super_hot_today',
            'best_seller_products',
            'new_arrivals_products'
        ];
        const collections = await this.$store.dispatch(
            'collection/getCollectionsBySlugs',
            collectionsSlug
        );
    }
};
</script>

<style lang="scss" scoped></style>
