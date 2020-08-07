<template lang="html">
    <div class="ps-product--detail ps-product--box">
        <div class="ps-product__header ps-product__box">
            <thumbnail-box :product="product" />
            <information-boxed :product="product" />
        </div>
        <div class="ps-product__content">
            <div class="row">
                <div class="col-xl-9">
                    <!--<DescriptionBox />-->
                </div>
                <div class="col-xl-3">
                    <div class="ps-product__box">
                        <aside class="widget widget_same-brand">
                            <h3>Same Brand</h3>
                            <div class="widget__content"></div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { sample } from '~/static/data/product';
import ThumbnailBox from '~/components/elements/detail/thumbnail/ThumbnailBox';
import InformationBoxed from '~/components/elements/detail/information/InformationBoxed';
export default {
    name: 'ProductDetailBox',
    components: { InformationBoxed, ThumbnailBox },
    computed: {
        product() {
            return sample;
        }
    }
};
</script>

<style lang="scss" scoped></style>
