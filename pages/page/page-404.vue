<template lang="html">
    <v-app>
        <v-main>
            <header-default />
            <header-mobile />
            <div class="ps-page--single">
                <bread-crumb :breadcrumb="breadCrumb" />
                <div class="ps-page--404">
                    <div class="container">
                        <div class="ps-section__content">
                            <figure>
                                <img src="~/static/img/404.jpg" alt="" />
                                <h3>Ohh! Page not found</h3>
                                <p>
                                    It seems we can't find what you're looking
                                    for. Perhaps searching can help or go back
                                    to
                                    <nuxt-link to="/">
                                        Homepage
                                    </nuxt-link>
                                </p>
                            </figure>
                        </div>
                    </div>
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
import Newsletters from '../../components/partials/commons/Newsletters';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';

export default {
    name: 'page-404',
    components: {
        HeaderMobile,
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
                    text: 'Page 404'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
