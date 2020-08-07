<template lang="html">
    <v-app>
        <v-main>
            <header-furniture />
            <header-mobile-furniture />
            <main id="homepage-8">
                <furniture-banner />
                <furniture-site-features />
                <furniture-promotions />
                <furniture-best-seller
                    v-if="collections !== null"
                    collection-slug="funiture_best_sellers"
                />
                <furniture-categories />
                <furniture-promotions2 />
                <furniture-shop-by-room />
                <furniture-trending-products
                    v-if="collections !== null"
                    collection-slug="funiture_best_sellers"
                />
                <furniture-best-sale-brands />
            </main>
        </v-main>
    </v-app>
</template>

<script>
import { mapState } from 'vuex';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import FurnitureBanner from '~/components/partials/homepage/furniture/FurnitureBanner';
import FurnitureSiteFeatures from '~/components/partials/homepage/furniture/FurnitureSiteFeatures';
import FurniturePromotions from '~/components/partials/homepage/furniture/FurniturePromotions';
import FurnitureCategories from '~/components/partials/homepage/furniture/FurnitureCategories';
import FurniturePromotions2 from '~/components/partials/homepage/furniture/FurniturePromotions2';
import FurnitureShopByRoom from '~/components/partials/homepage/furniture/FurnitureShopByRoom';
import FurnitureBestSaleBrands from '~/components/partials/homepage/furniture/FurnitureBestSaleBrands';
import FurnitureBestSeller from '~/components/partials/homepage/furniture/FurnitureBestSeller';
import FurnitureTrendingProducts from '~/components/partials/homepage/furniture/FurnitureTrendingProducts';
import HeaderFurniture from '~/components/shared/headers/HeaderFurniture';
import HeaderMobileFurniture from '~/components/shared/mobile/HeaderMobileFurniture';

export default {
    transition: 'zoom',
    components: {
        HeaderMobileFurniture,
        HeaderFurniture,
        FurnitureTrendingProducts,
        FurnitureBestSeller,
        FurnitureBestSaleBrands,
        FurnitureShopByRoom,
        FurniturePromotions2,
        FurnitureCategories,
        FurniturePromotions,
        FurnitureSiteFeatures,
        FurnitureBanner,
        FooterDefault
    },
    computed: {
        ...mapState({
            collections: state => state.collection.collections,
            categories: state => state.collection.categories
        })
    },
    async created() {
        const collectionsSlug = [
            'funiture_best_sellers',
            'furniture_trending_products'
        ];

        const collections = await this.$store.dispatch(
            'collection/getCollectionsBySlugs',
            collectionsSlug
        );
    }
};
</script>

<style lang="scss">
@import '~/assets/scss/furniture.scss';
</style>
