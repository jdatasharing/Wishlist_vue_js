<template lang="html">
    <v-app>
        <v-main>
            <header-default />
            <header-mobile />
            <div class="ps-page--single">
                <bread-crumb :breadcrumb="breadCrumb" />
                <contact-map />
                <contact-info />
                <contact-form />
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
import ContactMap from '~/components/partials/page/ContactMap';
import ContactInfo from '~/components/partials/page/ContactInfo';
import ContactForm from '~/components/partials/page/ContactForm';
import Newsletters from '~/components/partials/commons/Newsletters';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';

export default {
    components: {
        HeaderMobile,
        Newsletters,
        ContactForm,
        ContactInfo,
        ContactMap,
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
                    text: 'Contact Us'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
