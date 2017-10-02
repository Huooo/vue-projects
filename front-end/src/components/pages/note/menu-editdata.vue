<template>
    <div class="menu-sidebar" :class="{'fade-in': isShow}">
        
        <div class='menu-lists'>

            <div v-show="editState" class="lists-edit">
                <input @keyup.enter="editData" v-model="needEdit.content" ref="content" class="edit-input" type="text" placeholder="请输入修改的名字">
                <button @click="editData" class="edit-submit">提交</button>
            </div>
            
            <div v-show="!editState" class="lists-filter">
                <select class="filter-select">
                    <option value="">筛选类型</option>
                    <option value="">未完成</option>
                    <option value="">已完成</option>
                    <option value="">已取消</option>
                </select>
                <input class="filter-input" type="text" placeholder="筛选关键词">
            </div>

            <table class="lists-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>所有事项</th>
                        <th>类型</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(list, index) in allLists" :key="list.id">
                        <td align="center" v-text="index+1"></td>
                        <td align="center" v-text="list.content"></td>
                        <td align="center">{{ list.type | typeName }}</td>
                        <td align="center">
                            <button @click="showEdit(index)">编辑</button>
                            <button @click="$emit('delete', index, list.id)" class="delete-btn">删除</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <span @click="$emit('backMenus')" class="menu-back">BACK</span>
    </div>
</template>


<script>
export default {
    name: 'note-editdata',
    data () {
        return {
            editState: false,   // 编辑状态
            needEdit: {
                index: 0,
                id: 0,
                content: ''
            },
            newContent: '',
        }
    },
    props: [
        'isShow'
    ],
    computed: {
        allLists () {
            return this.$store.getters.getAllLists;
        }
    },
    filters: {
        typeName ( type ) {
            switch ( type ) {
                case 1: type = '未完成'; break;
                case 2: type = '已完成'; break;
                case 3: type = '已取消'; break;
                default: ;
            }
            return type;
        }
    },
    methods: {
        showEdit ( index ) {

            this.editState = true;
            this.needEdit.index = index;
            this.needEdit.id = this.allLists[index].id;
            this.needEdit.content = this.allLists[index].content;
            this.$refs.content.focus(); // 此处有一个坑：v-if和v-show对该元素的检索速度不一样，需要排查
        },
        editData () {

            this.needEdit.content = this.needEdit.content.trim();
            if ( this.needEdit.content ) {
                this.$store.dispatch('dataEdit', this.needEdit);
                this.editState = false;
            } else {
                this.$refs.content.focus();
            }
            
        }
    },
    created () {
        console.log('----------------- edit data ------------------------------');
        console.log(this.allLists);
    }
}
</script>


<style scoped  lang="scss">   
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
.menu-sidebar{
    position: absolute;top: 0;left: 0;
    width: 100%;height: 100%;overflow-Y: scroll;
    color: #eee;
    background-color: rgba(0, 0, 0, .9);
    transform: translateX(-105%);transition: all .3s ease;

    &.fade-in{
        transform: translateX(0);
    }
    &::-webkit-scrollbar{
        width:0;
    }
}
.menu-lists{
    margin-top: 100px;padding: 0 20px;

    .lists-edit{
        width: 100%;margin-bottom: 20px;box-sizing: border-box;

        >input, >button{
            height: 30px;box-sizing: border-box;
            color: #eee;
            background-color: transparent;border: 1px solid #eee;
        }
        .edit-input{
            width: calc(100% - 95px);padding-left: 5px;

            &::placeholder{
                color: #eee;
            }
        }
        .edit-submit{
            width: 90px;
            cursor: pointer;
        }
    }

    .lists-filter{
        width: 100%;margin-bottom: 20px;box-sizing: border-box;

        >input, >select{
            height: 30px;padding-left: 5px;box-sizing: border-box;
            color: #eee;
            border: 1px solid #eee;background-color: transparent;
        }
        .filter-select{
            width: 90px;

            >option{
                color: #eee;
                background-color: rgba(0, 0, 0, .5);
            }
        }
        .filter-input{
            width: calc(100% - 95px);

            &::placeholder{
                color: #eee;
            }
        }
    }

    .lists-table{
        width: 100%;padding: 0;margin: auto;
        border:{ left: 1px solid #eee;top: 1px solid #eee; }
        border-spacing: 0px;

        td,th{
            position: relative;
            height: 40px;min-width: 0;padding: 5px 10px;box-sizing: border-box;
            text-overflow: ellipsis;vertical-align: middle;
            border:{ right: 1px solid #eee;bottom: 1px solid #eee; }
        }
        button{
            padding:3px 7px;margin: 0 3px 3px 0;
            font-size: 12px;color: #eee;
            background: #0b0;border:0;border-radius: 2px;
            cursor: pointer;
            
            &.delete-btn{
                background: #f57067;
            }
        }
    }
}
.menu-back{
    position: absolute; bottom: 10px;right: 10px;
    font-weight: bold;font-size: 14px;
    cursor: pointer;
}
</style>
