<template lang="html">
    <v-app>
        <v-main>
            <header-market-place />
            <header-mobile />
            <main id="homepage-3">
                <market-place-home-banner />
                <market-place-site-features />
                <market-place-promotion />
                <market-place-deal-of-day
                    v-if="collections !== null"
                    collection-slug="deal_of_the_day"
                />
                <div class="ps-section--gray" v-if="categories !== null">
                    <div class="container">
                        <market-clothings-and-apparel
                            collection-slug="clothing-and-parel"
                        />
                        <market-consumer-electronics
                            collection-slug="consumer-electrics"
                        />
                        <market-computer-and-technology
                            collection-slug="computers-and-technologies"
                        />
                        <market-garden-and-kitchen
                            collection-slug="garden-and-kitchen"
                        />
                        <market-heathy-and-beauty
                            collection-slug="health-and-beauty"
                        />
                    </div>
                </div>
                <newsletters />
                <footer-default />
            </main>
        </v-main>
    </v-app>
</template>

<script>
import { mapState } from 'vuex';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import MarketPlaceHomeBanner from '~/components/partials/homepage/marketplace/MarketPlaceHomeBanner';
import MarketPlaceSiteFeatures from '~/components/partials/homepage/marketplace/MarketPlaceSiteFeatures';
import MarketPlacePromotion from '~/components/partials/homepage/marketplace/MarketPlacePromotion';
import MarketPlaceDealOfDay from '~/components/partials/homepage/marketplace/MarketPlaceDealOfDay';
import MarketClothingsAndApparel from '~/components/partials/homepage/marketplace/MarketClothingsAndApparel';
import MarketConsumerElectronics from '~/components/partials/homepage/marketplace/MarketConsumerElectronics';
import MarketComputerAndTechnology from '~/components/partials/homepage/marketplace/MarketComputerAndTechnology';
import MarketGardenAndKitchen from '~/components/partials/homepage/marketplace/MarketGardenAndKitchen';
import MarketHeathyAndBeauty from '~/components/partials/homepage/marketplace/MarketHeathyAndBeauty';
import Newsletters from '~/components/partials/commons/Newsletters';
import HeaderMarketPlace from '~/components/shared/headers/HeaderMarketPlace';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';

export default {
    transition: 'zoom',
    components: {
        HeaderMobile,
        HeaderMarketPlace,
        Newsletters,
        MarketHeathyAndBeauty,
        MarketGardenAndKitchen,
        MarketComputerAndTechnology,
        MarketConsumerElectronics,
        MarketClothingsAndApparel,
        MarketPlaceDealOfDay,
        MarketPlacePromotion,
        MarketPlaceSiteFeatures,
        MarketPlaceHomeBanner,
        FooterDefault
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
@import '~/assets/scss/market-place-1.scss';
</style>
