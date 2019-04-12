<template>
    <div class="panel">
        <div class="header">
            <h2 class="headline">{{ headline }}</h2>
        </div>
        <div class="body">
            <slot />
        </div>
    </div>
</template>
<script>
export default {
    name: 'panel',
    props:{
        headline: String
    },
    data: function () {
        return {
            count: 0,
        }
    },

};

</script>

<style lang="scss" scoped>
    @import '../assets/styles/Panel.scss';
</style>