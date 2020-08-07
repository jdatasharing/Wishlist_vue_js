<template lang="html">
    <div class="_content">
        <header-default />
        <header-mobile />
        <div class="ps-page--single ps-page--vendor">
            <bread-crumb :breadcrumb="breadCrumb" />
            <store-list-2 />
        </div>
        <newsletters />
        <footer-default />
    </div>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newsletters from '../../components/partials/commons/Newsletters';
import StoreList2 from '../../components/partials/vendor/StoreList2';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';

export default {
    components: {
        HeaderMobile,
        StoreList2,
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
                    text: 'Store List'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
