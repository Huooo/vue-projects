<template>
    <div class="note-index" :class="[getTheme]">
        <n-header @menus=" menus==='' ? menus='menus' : menus='' "></n-header>

        <section class="note-main">
            <n-add></n-add>
            <n-lists></n-lists>
            <n-sidebar 
                :is-show="menus==='menus'"
                @switchTheme="menus='theme'"
                @inputData="inputData"
                @editData="menus='editdata'"
                @clearData="clearData"
                @hideMenus="menus=''"
            ></n-sidebar>
        </section>

        <transition name='confirm'>
            <n-confirm @cancel='showConfirm=false' :msg="confirmMsg" v-show='showConfirm'></n-confirm>
        </transition>
        <n-theme @backMenus="menus='menus'" :is-show="menus==='theme'"></n-theme>
        <n-editdata @backMenus="menus='menus'" :is-show="menus==='editdata'"></n-editdata>
    </div>
</template>


<script>
import nHeader from './header.vue';
import nAdd from './lists-add.vue';
import nLists from './lists.vue';
import nSidebar from './sidebar.vue';
import nConfirm from './confirm.vue';
import nTheme from './menu-theme.vue';
import nEditdata from './menu-editdata.vue';

export default {
    name: 'note-index',
    components: {
        nHeader, nAdd, nLists, nSidebar, nConfirm, nTheme, nEditdata
    },
    data () {
        return {
            menus: '',
            showConfirm: false,
            confirmMsg: ''
        }
    },
    computed: {
        getTheme () { 
            return this.$store.getters.getTheme;
        }
    },
    methods: {
        inputData () {
            this.menus = '';
            this.showConfirm = true;
            this.confirmMsg = '请上传数据文件';
        },
        clearData () {
            this.menus = '';
            this.showConfirm = true;
            this.confirmMsg = '数据清除将无法恢复，确认清除吗？';
        }
    },
    created () {
        console.log('------------------------ note-index ------------------------------------');
        console.log(this);
    },
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
.note-index{
    position: relative;
    width: 100%;height: 700px;
}
.note-main{
    width: 80%;margin: 0 auto;
}
.confirm-enter-active, .confirm-leave-active {
    transition: opacity .3s;
}
.confirm-enter, .confirm-leave-to{
    opacity: 0;
}
</style>
