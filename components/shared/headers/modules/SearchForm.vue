<template lang="pug">
    form(@submit.prevent="" class="ps-form--search-primary")
        .ps-form__header
            input(class="form-control" placeholder="Enter your text..." v-model="keyword")
            button: i.icon.feather.icon-search
        .ps-form__content(:class="keyword !== '' ? 'active': ''")
            .ps-form__current-keyword
                p
                    strong
                        i.icon.feater.icon-search
                        |  Searching:
                    | ' {{ keyword }} '
</template>

<script>
export default {
    name: 'SearchForm.vue',
    data() {
        return {
            keyword: ''
        };
    }
};
</script>

<style lang="scss" scoped>
/*@import '~/assets/scss/env.scss';

.ps-form--search-primary {
    position: relative;

    input {
        height: 50px;
        border: 1px solid darken($color-border, 10%);
        background-color: #fff;
    }

    .ps-form__current-keyword {
        p {
            display: flex;
            align-items: center;
            margin-bottom: 0;
            font-weight: 600;
        }

        strong {
            display: flex;
            flex-flow: row nowrap;
            margin-right: 0.5rem;
            align-items: center;
            font-weight: 400;
            color: $color-text;
            i {
                display: flex;
                flex-flow: row nowrap;
                justify-content: center;
                align-items: center;
                margin-right: 0.5rem;
                width: 30px;
                height: 30px;
                background-color: $color-1st;
                border-radius: 4px;
                color: #fff;
                font-size: 12px;
            }
        }
    }

    .ps-form__header {
        display: flex;
        input {
            border-width: 2px;
        }

        button {
            @include vertical-align();
            right: 4px;
            height: 42px;
            padding: 0 36px;
            color: #ffffff;
            font-size: 18px;
            background-color: $color-1st;
        }
    }

    .ps-form__content {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: auto;
        z-index: 99;
        padding: 15px 20px;
        background-color: #fff;
        transform: translateY(10px) scale3d(1, 1, 0);
        transition: all 0.4s $timing-1;
        box-shadow: 1px 2px 4px 2px rgba(#ccc, 0.5);
        border: 1px solid darken($color-border, 10%);
        @include hidden();

        &.active {
            @include show();
            transform: translateY(10px) scale3d(1, 1, 1);
        }
    }
}*/
</style>
