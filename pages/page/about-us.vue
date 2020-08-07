<template lang="html">
    <v-app>
        <v-main>
            <header-default />
            <header-mobile />
            <div class="ps-page--single">
                <img src="~/static/img/bg/about-us.jpg" alt="" />
                <bread-crumb :breadcrumb="breadCrumb" />
                <our-team />
                <about-awards />
                <footer-default />
            </div>
        </v-main>
    </v-app>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import OurTeam from '~/components/partials/page/OurTeam';
import AboutAwards from '~/components/partials/page/AboutAwards';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';

export default {
    components: {
        HeaderMobile,
        AboutAwards,
        OurTeam,
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
                    text: 'About Us'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
