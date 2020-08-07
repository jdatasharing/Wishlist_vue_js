<template lang="html">
    <v-app>
        <v-main>
            <header-default />
            <header-mobile />
            <section class="ps-page--my-account">
                <bread-crumb :breadcrumb="breadCrumb" />
                <user-information />
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
import UserInformation from '~/components/partials/account/UserInformation';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';

export default {
    middleware: 'authentication',
    transition: 'zoom',
    components: {
        HeaderMobile,
        UserInformation,
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
                    text: 'User Information'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
