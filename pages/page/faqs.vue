<template lang="html">
    <v-app>
        <v-main>
            <header-default />
            <header-mobile />
            <div class="ps-page--single">
                <bread-crumb :breadcrumb="breadCrumb" />
                <div class="container">
                    <faqs />
                </div>
            </div>
            <newsletters />
            <footer-default />
        </v-main>
    </v-app>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Faqs from '~/components/partials/page/Faqs';
import Newsletters from '~/components/partials/commons/Newsletters';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';

export default {
    components: {
        HeaderMobile,
        Newsletters,
        Faqs,
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
                    text: 'Frequently Asked Questions'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
