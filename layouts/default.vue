<template lang="html">
    <client-only>
        <div class="__martfury">
            <nuxt></nuxt>
            <notify />
            <navigation-list />
            <mobile-drawer />
        </div>
    </client-only>
</template>

<script>
import Notify from '~/components/elements/commons/notify';
import NavigationList from '~/components/shared/mobile/NavigationList';
import MobileDrawer from '~/components/shared/mobile/MobileDrawer';
import DemoPanel from '~/components/shared/DemoPanel';
export default {
    components: { DemoPanel, MobileDrawer, NavigationList, Notify }
};
</script>

<style lang="scss" scoped></style>
