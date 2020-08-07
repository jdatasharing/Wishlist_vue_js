<template lang="html">
    <v-app>
        <v-main>
            <header-default />
            <section class="ps-page--my-account">
                <bread-crumb :breadcrumb="breadCrumb" />
                <shopping-cart />
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
import ShoppingCart from '~/components/partials/account/ShoppingCart';

export default {
    name: 'checkout-page',
    transition: 'zoom',
    components: {
        ShoppingCart,
        Checkout,
        EditAddress,
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
                    text: 'Shopping Cart'
                }
            ]
        };
    },
    methods: {
        async loadCartProducts() {
            const cartItemsOnCookie = this.$cookies.get('cart', {
                parseJSON: true
            });
            let queries = [];
            cartItemsOnCookie.cartItems.forEach(item => {
                queries.push(item.id);
            });
            if (queries.length > 0) {
                await this.$store.dispatch('product/getCartProducts', queries);
            }
        }
    }
};
</script>

<style lang="scss" scoped></style>
