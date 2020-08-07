<template lang="html">
    <v-app>
        <v-main>
            <header-default />
            <header-mobile />
            <div class="ps-page--shop">
                <bread-crumb :breadcrumb="breadCrumb" layout="fullwidth" />
                <div class="ps-layout--shop" id="shop-categories">
                    <div class="container">
                        <catalog-top />
                        <categories-best-seller
                            v-if="collections !== null"
                            collection-slug="shop_best_sale_items"
                        />
                        <categories-recommend-items
                            v-if="collections !== null"
                            collection-slug="shop-recommend-items"
                        />
                        <category-box-consummer-electronics />
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
import CatalogTop from '~/components/partials/shop/sections/CatalogTop';
import CategoriesBestSeller from '~/components/partials/shop/sections/CategoriesBestSeller';
import CategoriesRecommendItems from '~/components/partials/shop/sections/CategoriesRecommendItems';
import CategoryBoxConsummerElectronics from '~/components/partials/shop/sections/CategoryBoxConsummerElectronics';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';

export default {
    name: 'shop-categories',
    components: {
        HeaderMobile,
        CategoryBoxConsummerElectronics,
        CategoriesRecommendItems,
        CategoriesBestSeller,
        CatalogTop,
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
        const collectionsSlug = [
            'shop_best_sale_items',
            'shop-recommend-items'
        ];
        const collections = await this.$store.dispatch(
            'collection/getCollectionsBySlugs',
            collectionsSlug
        );
    }
};
</script>

<style lang="scss" scoped></style>
