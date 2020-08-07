<template lang="html">
    <v-app>
        <v-main>
            <header-default />
            <header-mobile />
            <section class="ps-page--my-account">
                <bread-crumb :breadcrumb="breadCrumb" />
                <wishlist />
            </section>
            <newsletters />
            <footer-default />
        </v-main>
    </v-app>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newsletters from '~/components/partials/commons/Newsletters';
import { getListOfProductId } from '~/utilities/product-helper';
import Wishlist from '~/components/partials/account/Wishlist';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';

export default {
    transition: 'zoom',
    components: {
        HeaderMobile,
        Wishlist,
        Newsletters,
        FooterDefault,
        HeaderDefault,
        BreadCrumb
    },

    data: () => {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Wishlist'
                }
            ]
        };
    },
    async created() {
        const wishlistItemsOnCookie = this.$cookies.get('wishlist', {
            parseJSON: true
        });
        if (wishlistItemsOnCookie) {
            const queries = getListOfProductId(wishlistItemsOnCookie.items);
            if (queries.length > 0) {
                const response = await this.$store.dispatch(
                    'product/getWishlishtProducts',
                    queries
                );
            }
        }
    }
};
</script>

<style lang="scss" scoped></style>
