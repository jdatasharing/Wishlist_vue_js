<template lang="html">
    <v-app>
        <v-main>
            <header-default />
            <header-mobile />
            <div class="ps-page--blog">
                <div class="container">
                    <div class="ps-blog--sidebar reverse">
                        <div class="ps-blog__left">
                            <post-detail-sidebar />
                        </div>
                        <div class="ps-blog__right">
                            <sidebar-post />
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
import Newsletters from '~/components/partials/commons/Newsletters';
import PostComments from '../../components/partials/post/PostComments';
import RelatedPosts from '../../components/partials/post/RelatedPosts';
import PostDetailDefault from '~/components/partials/post/PostDetailDefault';
import PostDetailSidebar from '~/components/partials/post/PostDetailSidebar';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';

export default {
    name: 'post-detail-4',
    components: {
        HeaderMobile,
        PostDetailSidebar,
        PostDetailDefault,
        RelatedPosts,
        PostComments,
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
                    text: 'Blog Detail'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
