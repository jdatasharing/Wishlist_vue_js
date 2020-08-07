<template lang="html">
    <v-app>
        <v-main>
            <header-default />
            <header-mobile />
            <section class="ps-page--my-account">
                <bread-crumb :breadcrumb="breadCrumb" />
                <shipping />
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
import EditAddress from '~/components/partials/account/EditAddress';
import Checkout from '~/components/partials/account/Checkout';
import Shipping from '~/components/partials/account/Shipping';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';

export default {
    middleware: 'authentication',
    components: {
        HeaderMobile,
        Shipping,
        Checkout,
        EditAddress,
        Newsletters,
        FooterDefault,
        HeaderDefault,
        BreadCrumb
    },
    transition: 'zoom',
    data: () => {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Shopping Cart',
                    url: '/account/shopping-cart'
                },
                {
                    text: 'Shipping'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
