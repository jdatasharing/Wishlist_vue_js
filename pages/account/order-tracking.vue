<template lang="html">
    <v-app>
        <v-main>
            <header-default />
            <header-mobile />
            <section class="ps-page--simple">
                <bread-crumb :breadcrumb="breadCrumb" />
                <div class="ps-order-tracking">
                    <div class="container">
                        <div class="ps-section__header">
                            <h3>Order Tracking</h3>
                            <p>
                                To track your order please enter your Order ID
                                in the box below and press the "Track" button.
                                This was given to youon your receipt and in the
                                confirmation email you should have received.
                            </p>
                        </div>
                        <div class="ps-section__content">
                            <form
                                class="ps-form--order-tracking"
                                action="/"
                                method="get"
                            >
                                <div class="form-group">
                                    <label>Order ID</label>
                                    <input
                                        class="form-control"
                                        type="text"
                                        placeholder="Found in your order confimation email"
                                    />
                                </div>
                                <div class="form-group">
                                    <label>Billing Email</label>
                                    <input
                                        class="form-control"
                                        type="text"
                                        placeholder=""
                                    />
                                </div>
                                <div class="form-group">
                                    <button class="ps-btn ps-btn--fullwidth">
                                        Track Your Order
                                    </button>
                                </div>
                            </form>
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
import HeaderMobile from '~/components/shared/mobile/HeaderMobile';

export default {
    transition: 'zoom',
    components: {
        HeaderMobile,
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
                    text: 'Order Tracking'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
