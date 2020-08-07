<template lang="html">
    <v-app>
        <v-main>
            <header-default />
            <header-mobile />
            <div class="ps-page--blog">
                <bread-crumb :breadcrumb="breadCrumb" />
                <div class="container">
                    <div class="ps-blog--sidebar reverse pt-20">
                        <div class="ps-blog__left">
                            <div
                                class="embed-responsive embed-responsive-16by9 mb-90"
                            >
                                <iframe
                                    scrolling="no"
                                    frameborder="no"
                                    src="https://w.soundcloud.com/player/?visual=true&amp;amp;url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F323674116&amp;amp;show_artwork=true&amp;amp;maxwidth=840&amp;amp;maxheight=1000&amp;amp;dnt=1"
                                    id="fitvid0"
                                >
                                </iframe>
                            </div>
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
import SidebarPost from '~/components/partials/post/modules/SidebarPost';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';
import PostDetailSidebar from '~/components/partials/post/PostDetailSidebar';

export default {
    name: 'page-post-detail-3',
    components: {
        PostDetailSidebar,
        HeaderMobile,
        SidebarPost,
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
