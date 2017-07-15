<template>
    <div class="lists-add">
        <input @keyup.enter='submitNewList' v-model='content' type="text" class="lists-add-input" placeholder="待办事项">
        <button @click='submitNewList' class="lists-add-submit">提交</button>
        <span v-text='test'></span>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                content: ''
            }
        },
        computed: {
            test: function () {
                return JSON.stringify(this.$store.getters.getLists);
            }
        },
        methods: {
            submitNewList: function(){
                var self = this,
                    newList = {
                        id: 0,
                        type: 1,
                        content: self.content.trim(),
                        time: ''
                    };

                if(self.content){
                    self.$store.dispatch('addList', newList);
                    self.content = '';
                }
            }
        },
        mounted: function(){
            console.log(this);
        }
    }
</script>

<style lang="scss" scoped>
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
.lists-add{
    position: relative;
    padding: 30px 90px 30px 0;
    font-size: 16px;

    .lists-add-input{
        width: 100%;height: 40px;padding: 7px 10px;
        font-size: inherit;line-height: 26px;
        box-sizing: border-box;border:1px solid #c0ccda;border-radius:4px;
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        
        &:focus {
            outline: none;
        }
    }
    .lists-add-submit{
        position: absolute;right: 0;top: 30px;
        width: 80px;height: 40px;
        color: #fff;line-height: 26px;
        /*transition: background .3s ease-in;*/
    }
}
</style>
