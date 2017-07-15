<template>
    <div class="note-lists">
        <div class="lists-tab">未完成
            <span class='icon-arrow-bottom'></span>
        </div>
        <div class="lists-wrapper">
            
        </div>

        <div class="lists-tab">已完成
            <span class='icon-arrow-bottom'></span>
        </div>
        <div class="lists-wrapper">

        </div>

        <div class="lists-tab">已取消
            <span class='icon-arrow-bottom'></span>
        </div>
        <div class="lists-wrapper">

        </div>

    </div>
</template>


<script>
export default {
    name: 'note-lists',
    data: function(){
        return {}
    },
    props: [
        
    ],
    created: function(){

    },
    methods: {
        
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
.note-lists {
    text-align: left;

    .lists-tab {
        position: relative;
        height: 44px;padding-left: 20px;
        color: #fff;line-height: 44px;
        border-bottom: 1px solid #fff;
        box-sizing: border-box;cursor: pointer;

        .icon-arrow-bottom {
            position: absolute;right: 20px;top: 15px;
            width: 10px;height: 10px;
            content: '';border: { top: 2px solid #fff;right: 2px solid #fff; }
            transform: rotate(135deg);transition: transform .3s;

            &.icon-arrow-right {
                transform: rotate(45deg);
            }
        }
    }
    .lists-wrapper {
        overflow: hidden;
        list-style: none;border: { left: 1px solid #eee;right: 1px solid #eee; }
        transition: height .3s;

        .event-list {
            position: relative;
            min-height: 44px;padding: 10px 100px 10px 50px;
            color: #373e40;line-height: 25px;
            box-sizing: border-box;border-bottom: 1px solid #eee;
            
            // input[type=checkbox] {
            //     position: absolute;left: 15px;top: 12px;
            //     width: 20px;height: 20px;
            // }
            // .cancel-btn {
            //     position: absolute;right: 10px;top: 7px;
            //     width: 50px;height: 30px;padding: 0;
            //     color: #666;font-size: 12px;line-height: 30px;
            //     background: #fff;border: 1px solid #c0ccda;
            // }
            // .event-time {
            //     position: absolute;right: 10px;top: 0;
            //     color: #aaa;font-size: 12px;line-height: 44px;
            // }
            // .event-delete {
            //     color: #999;text-decoration: line-through;
            // }
        }
    }
}
</style>
