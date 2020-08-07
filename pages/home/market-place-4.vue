<template lang="html">
    <v-app>
        <v-main>
            <header-market-place4 />
            <header-mobile />
            <main id="homepage-6">
                <market-place4-banner />
                <martket-place4-site-features />
                <martket-place4-promotions />
                <martket-place4-dealhot
                    v-if="collections !== null"
                    collection-slug="deal_of_the_day"
                />
                <martket-place4-top-categories />
                <div class="ps-categories-box">
                    <div class="container">
                        <categories-box-consumer-electronics />
                        <categories-box-clothings />
                        <categories-box-garden-and-kitchen />
                    </div>
                </div>
            </main>
            <footer-default />
        </v-main>
    </v-app>
</template>

<script>
import { mapState } from 'vuex';
import MarketPlace4Banner from '~/components/partials/homepage/marketplace-4/MarketPlace4Banner';
import MartketPlace4SiteFeatures from '~/components/partials/homepage/marketplace-4/MartketPlace4SiteFeatures';
import MartketPlace4Promotions from '~/components/partials/homepage/marketplace-4/MartketPlace4Promotions';
import MartketPlace4TopCategories from '~/components/partials/homepage/marketplace-4/MartketPlace4TopCategories';
import CategoryBoxConsummerElectronics from '~/components/partials/shop/sections/CategoryBoxConsummerElectronics';
import CategoriesBoxConsumerElectronics from '~/components/partials/homepage/marketplace-4/CategoriesBoxConsumerElectronics';
import CategoriesBoxClothings from '~/components/partials/homepage/marketplace-4/CategoriesBoxClothings';
import CategoriesBoxGardenAndKitchen from '~/components/partials/homepage/marketplace-4/CategoriesBoxGardenAndKitchen';
import HeaderMarketPlace4 from '~/components/shared/headers/HeaderMarketPlace4';
import MartketPlace4Dealhot from '~/components/partials/homepage/marketplace-4/MartketPlace4Dealhot';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';
export default {
    transition: 'zoom',
    components: {
        HeaderMobile,
        FooterDefault,
        MartketPlace4Dealhot,
        HeaderMarketPlace4,
        CategoriesBoxGardenAndKitchen,
        CategoriesBoxClothings,
        CategoriesBoxConsumerElectronics,
        CategoryBoxConsummerElectronics,
        MartketPlace4TopCategories,
        MartketPlace4Promotions,
        MartketPlace4SiteFeatures,
        MarketPlace4Banner
    },
    computed: {
        ...mapState({
            collections: state => state.collection.collections,
            categories: state => state.collection.categories
        })
    },
    async created() {
        const collectionsSlug = ['deal_of_the_day'];
        const categoriesSlug = [
            'clothing-and-parel',
            'consumer-electrics',
            'computers-and-technologies',
            'garden-and-kitchen',
            'health-and-beauty'
        ];

        const categories = await this.$store.dispatch(
            'collection/getCategoriesBySlugs',
            categoriesSlug
        );
        const collections = await this.$store.dispatch(
            'collection/getCollectionsBySlugs',
            collectionsSlug
        );
    }
};
</script>
<style lang="scss">
@import '~/assets/scss/market-place-4.scss';
</style>
