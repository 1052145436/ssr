<template>
    <div class="home">
        <!--<About></About>-->
        <!--<Contact></Contact>-->
        <Cultrue></Cultrue>
    </div>
</template>
<script type="text/babel">
    import About from '../about/index'
    import Contact from '../contact/index'
    import Cultrue from '../cultrue/index'
    export default {
        components: {
            About,
            Contact,
            Cultrue
        },
        name: 'Index',
        data () {
            return {
                test: 'Hello World!'
            }
        },
        methods: {
            jump () {
                this.$router.push({
                    name: 'test'
                })
            }
        }
    }
</script>
<style lang="scss" type="text/scss" scoped>
    .home {

        h1 {
            font-size: 50px;
            text-align: center;
        }
    }
</style>
