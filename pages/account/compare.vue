<template lang="html">
    <v-app>
        <v-main>
            <header-default />
            <header-mobile />
            <section class="ps-page--my-account">
                <bread-crumb :breadcrumb="breadCrumb" />
                <compare />
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
import Compare from '~/components/partials/account/Compare';
import { getListOfProductId } from '~/utilities/product-helper';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';

export default {
    components: {
        HeaderMobile,
        Compare,
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
                    text: 'Compare'
                }
            ]
        };
    },
    async created() {
        const compareItems = this.$cookies.get('compare', {
            parseJSON: true
        });

        if (compareItems) {
            const queries = getListOfProductId(compareItems.items);
            if (queries.length >= 0) {
                const products = await this.$store.dispatch(
                    'product/getCompareProducts',
                    queries
                );
                console.log(products);
            }
        }
    }
};
</script>

<style lang="scss" scoped></style>
