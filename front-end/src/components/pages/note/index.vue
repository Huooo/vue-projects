<template>
    <div class="note-index" :class="[getTheme]">
        <n-header @menus=" menus==='' ? menus='menus' : menus='' "></n-header>

        <section class="note-main">
            <n-add></n-add>
            <n-lists></n-lists>
            <n-sidebar 
                :is-show="menus==='menus'"
                @switchTheme="menus='theme'"
                @downloadData="downloadData('note.txt', allLists)"
                @inputData="inputData"
                @editData="menus='editdata'"
                @clearData="clearData"
                @hideMenus="menus=''"
            ></n-sidebar>
        </section>

        <transition name='confirm'>
            <n-confirm 
                :msg="confirmMsg"
                :upload-state="uploadState"
                v-show="showConfirm"
                @upload="uploadData"
                @sure="comfirmSure"
                @cancel="showConfirm=false"  
            ></n-confirm>
        </transition>
        <n-theme @backMenus="menus='menus'" :is-show="menus==='theme'"></n-theme>
        <n-editdata @delete="deleteData" @backMenus="menus='menus'" :is-show="menus==='editdata'"></n-editdata>
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
            confirmMsg: '',
            confirmType: '',    // 记录confirm的对象
            uploadState: {      // 记录导入数据的状态
                success: false,
                error: false,
                data: null     
            },
            deleteData: {       // 记录删除元素的相关信息
                index: 0,
                id: 0
            },   
        }
    },
    computed: {
        getTheme () { 
            return this.$store.getters.getTheme;
        },
        allLists () {
            return JSON.stringify( this.$store.state );
        }
    },
    methods: {
        downloadData ( fileName, data ) {

            let aTag = document.createElement('a'),
                blob = new Blob( [data] );

            aTag.download = fileName;
            aTag.href = URL.createObjectURL( blob );
            aTag.click();
            URL.revokeObjectURL( blob );
        },
        uploadData ( event ) {

            let file = event.srcElement.files[0],
                reader = new FileReader();

            if ( file && file.name.indexOf('note') !== -1 ) {
                reader.onload = ( ev ) => {
                    this.uploadState.success = true;
                    this.uploadState.error = false;
                    this.uploadState.data = ev.target.result;
                }
                reader.readAsText( file );
            } else {
                this.uploadState.success = false;
                this.uploadState.error = true;
            }
        },
        inputData () {

            this.menus = '';
            this.showConfirm = true;
            this.confirmType = 'inputdata';
            this.confirmMsg = 'INPUTDATA';
        },
        clearData () {

            this.menus = '';
            this.showConfirm = true;
            this.confirmType = 'cleardata';
            this.confirmMsg = '数据清除将无法恢复，确认清除吗？';
        },
        deleteData ( index, id ) {

            this.menu = '';
            this.showConfirm = true;
            this.confirmType = 'deletedata';
            this.confirmMsg = '删除后无法恢复，确认删除吗？';

            this.deleteData.index = index;
            this.deleteData.id = id;
        },
        comfirmSure () {

            switch ( this.confirmType ) {

                case 'cleardata': 
                    this.$store.dispatch('dataClear');
                    break;

                case 'inputdata':
                    this.uploadState.success && this.$store.dispatch('dataInput', this.uploadState.data);
                    this.uploadState.success = false;
                    this.uploadState.error = false;
                    break;

                case 'deletedata':
                    this.$store.dispatch('dataDelete', this.deleteData);
                    break;

                default:;
            }

            this.showConfirm = false;
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
