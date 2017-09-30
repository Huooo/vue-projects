<template>
    <div class="note-lists">
        <div @click='collapse[0].show=!collapse[0].show' class="lists-tab">
            <span>未完成</span>
            <span :class="{'icon-arrow-right': collapse[0].show}" class='icon-arrow-bottom'></span>
        </div>
        <div v-if="collapse[0].show" class="lists-wrapper">
            <ul>
                <li v-for='todo in todoLists' class="lists-item">
                    <input @click="moveDone(todo.id)" :key="todo.id" class="todo-done" type="checkbox">
                    <span v-text='todo.content'></span>
                    <button @click="moveCancel(todo.id)" :key="todo.id" class="todo-cancel">取消</button>
                </li>
            </ul>
        </div>

        <div @click='collapse[1].show=!collapse[1].show' class="lists-tab">
            <span>已完成</span>
            <span :class="{'icon-arrow-right': collapse[1].show}" class='icon-arrow-bottom'></span>
        </div>
        <div v-if="collapse[1].show" class="lists-wrapper">
            <ul>
                <li v-for='done in doneLists' class="lists-item">
                    <input @click="moveTodo(done.id)" :key="done.id" class="done-todo" type="checkbox" checked>
                    <span v-text='done.content'></span>
                    <span class='done-time' v-text="done.time"></span>
                </li>
            </ul>
        </div>

        <div @click='collapse[2].show=!collapse[2].show' class="lists-tab">
            <span>已取消</span>
            <span :class="{'icon-arrow-right': collapse[2].show}" class='icon-arrow-bottom'></span>
        </div>
        <div v-if="collapse[2].show" class="lists-wrapper">
            <ul>
                <li v-for='cancel in cancelLists' class="lists-item">
                    <span class="cancel-content" v-text='cancel.content'></span>
                    <button @click="moveTodo(cancel.id)" :key="cancel.id" class="cancel-todo">恢复</button>
                </li>
            </ul>
        </div>

    </div>
</template>


<script>
export default {
    name: 'note-lists',
    data () {
        return {
            collapse: [ 
                { show: true },
                { show: true },
                { show: true }
            ]
        }
    },
    computed: {
        allLists () {
            return this.$store.getters.getAllLists;
        },
        todoLists () {
            return this.$store.getters.getTodoLists;
        },
        doneLists () {
            return this.$store.getters.getDoneLists;
        },
        cancelLists () {
            return this.$store.getters.getCancelLists;
        }
    },
    methods: {
        moveDone ( id ) {
            this.$store.dispatch( 'eventDone', id );
        },
        moveTodo ( id ) {
            this.$store.dispatch( 'eventTodo', id );
        },
        moveCancel ( id ) {
            this.$store.dispatch( 'eventCancel', id ); 
        }
    },
    created () {
        console.log('--------------------------- note-lists ----------------------------------');

        console.log('--- all-lists ---');
        console.log( this.allLists );

        console.log('--- todo-lists ---');
        console.log( this.todoLists );


        console.log('--- done-lists ---');
        console.log( this.doneLists );

        console.log('--- cancel-lists ---');
        console.log( this.cancelLists );
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
        transition: all .3s;

        .lists-item {
            position: relative;
            min-height: 44px;padding: 10px 100px 10px 50px;
            color: #373e40;line-height: 25px;
            box-sizing: border-box;border-bottom: 1px solid #eee;
            
            .todo-done, .done-todo {
                position: absolute;left: 15px;top: 12px;
                width: 20px;height: 20px;
            }
            .todo-cancel, .cancel-todo {
                position: absolute;right: 10px;top: 7px;
                width: 50px;height: 30px;padding: 0;
                color: #666;font-size: 12px;line-height: 30px;
                background: #fff;border: 1px solid #c0ccda;
            }
            .done-time {
                position: absolute;right: 10px;top: 0;
                color: #aaa;font-size: 12px;line-height: 44px;
            }
            .cancel-content{
                color: #999;text-decoration: line-through;
            }
        }
    }
}
</style>
