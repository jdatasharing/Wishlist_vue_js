<template lang="html">
    <div class="_content">
        <header-default />
        <header-mobile />
        <div class="ps-page--single ps-page--vendor">
            <bread-crumb :breadcrumb="breadCrumb" />
            <vendor-store />
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
import VendorStore from '~/components/partials/vendor/VendorStore';
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';

export default {
    components: {
        HeaderMobile,
        Newsletters,
        FooterDefault,
        HeaderDefault,
        BreadCrumb,
        VendorStore
    },

    data: () => {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Vendor store'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
