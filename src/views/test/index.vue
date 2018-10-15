<template>
    <div class="test">
        <button @click="back">返回首页</button>
    </div>
</template>
<script type="text/babel">
    export default {
        name: 'Index',
        methods: {
            back () {
                this.$router.back()
            }
        }
    }
</script>
<style lang="scss" type="text/scss" scoped>
    .home {
        font-size: 50px;
        text-align: center;
    }
</style>
