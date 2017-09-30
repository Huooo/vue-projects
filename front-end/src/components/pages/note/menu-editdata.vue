<template>
    <div class="menu-sidebar" :class="{'fade-in': isShow}">
        <ul class='menu-lists'>
            <li><button class='menu-btn'>data</button></li>
            <li><button class='menu-btn'>data</button></li>
            <li><button class='menu-btn'>data</button></li>
            <li><button class='menu-btn'>data</button></li>
            <li><button class='menu-btn'>data</button></li>
        </ul>
        <span @click="$emit('backMenus')" class="menu-back">BACK</span>
    </div>
</template>


<script>
export default {
    name: 'note-editdata',
    data () {
        return {}
    },
    props: [
        'isShow'
    ],
    methods: {
        
    },
    created () {

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
    width: 300px;height: 100%;
    color: #fff;
    background-color: rgba(0,0,0,.5);
    transform: translateX(-350px);transition: all .3s ease;
    &.fade-in{
        transform: translateX(0);
    }
}
.menu-lists{
    margin-top: 150px;

    >li{
        margin-bottom: 30px;
    }
    .menu-btn{
        width: 100px;height: 40px;
        color: #fff;line-height: 26px;
        border-radius: 5px;
        transition: background .3s ease-in;
        cursor: pointer;
    }
}
.menu-back{
    position: absolute; bottom: 10px;right: 10px;
    font-weight: bold;font-size: 14px;
    cursor: pointer;
}
</style>
