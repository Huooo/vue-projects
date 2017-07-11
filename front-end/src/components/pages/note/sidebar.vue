<template>
    <div class="menu-sidebar" :class="{'fade-in': isShow}">
        <ul class='menu-lists'>
            <li><button class='menu-btn'>test</button></li>
            <li><button class='menu-btn'>test</button></li>
            <li><button class='menu-btn'>test</button></li>
            <li><button class='menu-btn'>test</button></li>
            <li><button class='menu-btn'>test</button></li>
        </ul>
    </div>
</template>


<script>
export default {
    name: 'note-sidebar',
    data: function(){
        return {}
    },
    props: [
        'isShow'
    ],
    created: function(){

    },
    methods: {
        
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
    width: 300px;height: 100%;padding-top: 150px;
    color: #fff;
    background-color: rgba(0,0,0,.5);
    transform: translateX(-350px);transition: all .3s ease;
    &.fade-in{
        transform: translateX(0);
    }
}
.menu-lists{
    >li{
        margin-bottom: 30px;
    }
    >.menu{
        
    }
}
</style>
