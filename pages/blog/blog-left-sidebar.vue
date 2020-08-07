<template lang="html">
    <v-app>
        <v-main>
            <header-default />
            <header-mobile />
            <div class="ps-page--blog">
                <div class="container">
                    <div class="ps-page__header">
                        <h1>Our Press</h1>
                        <bread-crumb2 :breadcrumb="breadCrumb" />
                    </div>
                    <blog-sidebar />
                </div>
            </div>
            <newsletters />
            <footer-default />
        </v-main>
    </v-app>
</template>

<script>
import BreadCrumb2 from '~/components/elements/BreadCrumb2';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newsletters from '~/components/partials/commons/Newsletters';
import BlogList from '../../components/partials/blog/BlogList';
import BlogSidebar from '../../components/partials/blog/BlogSidebar';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';
import FooterFullwidth from '~/components/shared/footers/FooterFullwidth';

export default {
    transition: 'zoom',
    components: {
        FooterFullwidth,
        HeaderMobile,
        BlogSidebar,
        BlogList,
        Newsletters,
        FooterDefault,
        HeaderDefault,
        BreadCrumb2
    },

    data: () => {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Our Press'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
