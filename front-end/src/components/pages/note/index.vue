<template>
    <div class='note-index' :class="[getTheme]">
        <n-header @menus='showMenus'></n-header>
        <section class='note-main'>
            main
            <n-sidebar :is-show='menus'></n-sidebar>
        </section>
    </div>
</template>


<script>
import nHeader from './header.vue';
import nSidebar from './sidebar.vue';

export default {
    name: 'note-index',
    data: function () {
        return {
            menus: false
        }
    },
    components: {
        nHeader, nSidebar
    },
    created: function () {
        console.log('--- note-index ---');
        console.log(this);
    },
    computed: {
        getTheme: function () { // 获取主题颜色
            return this.$store.getters.getTheme;
        }
    },
    methods: {
        showMenus: function(){
            var _this = this;

            _this.menus = !_this.menus;
        }
    }
}
</script>

<style lang="scss" rel="stylesheet/scss" src="../../../../static/scss/theme.scss"></style>
<style scoped lang="scss">

/*
 * 样式顺序
 * position
 * box-model
 * font
 * visual
 * dynamic effect
 * misc
 *
*/
ul,li,ol,li{
    margin: 0;padding: 0;
    list-style: none;
}
.note-index{
    position: relative;
    width: 100%;height: 800px;
}
.note-main{
    width: 80%;margin: 0 auto;
}
</style>
