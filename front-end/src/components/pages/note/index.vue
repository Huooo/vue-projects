<template>
    <div class="note-index" :class="[getTheme]">
        <n-header @menus="menus='menus'"></n-header>
        <section class="note-main">
            main
            <n-sidebar 
                :is-show="menus==='menus'"
                @switchTheme="menus='theme'"
                @editData="menus='editdata'"
            ></n-sidebar>
        </section>
        <n-theme :is-show="menus==='theme'"></n-theme>
        <n-editdata :is-show="menus==='editdata'"></n-editdata>
    </div>
</template>


<script>
import nHeader from './header.vue';
import nSidebar from './sidebar.vue';
import nTheme from './menu-theme.vue';
import nEditdata from './menu-editdata.vue';

export default {
    name: 'note-index',
    data: function () {
        return {
            menus: ''
        }
    },
    components: {
        nHeader, nSidebar, nTheme, nEditdata
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
