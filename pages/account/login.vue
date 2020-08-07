<template lang="html">
    <v-app>
        <v-main>
            <header-default />
            <header-mobile />
            <section class="ps-page--my-account">
                <bread-crumb :breadcrumb="breadCrumb" />
                <div class="ps-my-account">
                    <div class="container">
                        <div class="ps-form--account">
                            <ul class="ps-tab-list">
                                <li class="active">
                                    <nuxt-link to="/account/login">
                                        Login
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/account/register">
                                        Register
                                    </nuxt-link>
                                </li>
                            </ul>
                            <div class="ps-tab active">
                                <login />
                            </div>
                        </div>
                    </div>
                </div>
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
import Login from '~/components/partials/account/Login';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';

export default {
    components: {
        HeaderMobile,
        Login,
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
                    text: 'Login'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.ps-tab-list {
    padding-left: 0;
}
</style>
