<template>
    <div class="menu-sidebar" :class="{'fade-in': isShow}">
        <ul class='menu-lists'>
            <li><button @click="switchTheme('blue')" class='menu-btn theme-blue'>#00b0f0</button></li>
            <li><button @click="switchTheme('green')" class='menu-btn theme-green'>#00d1b2</button></li>
            <li><button @click="switchTheme('orange')" class='menu-btn theme-orange'>#f4b976</button></li>
            <li><button @click="switchTheme('pink')" class='menu-btn theme-pink'>#f39894</button></li>
            <li><button @click="switchTheme('cyan')" class='menu-btn theme-cyan'>#26b6be</button></li>
        </ul>
        <span @click="$emit('backMenus')" class="menu-back">BACK</span>
    </div>
</template>


<script>
export default {
    name: 'note-theme',
    data: function(){
        return {}
    },
    props: [
        'isShow'
    ],
    methods: {
        switchTheme: function (color) {
            this.$store.dispatch('switch_theme', color);
        }
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
        border-color: transparent;border-radius: 5px;
        transition: background .3s ease-in;
        cursor: pointer;
    }
    .theme-blue{ 
        background-color: #00b0f0; 
        &:hover{
            background-color: #08aae5;
        }
    }
    .theme-green{ 
        background-color: #00d1b2; 
        &:hover{
            background-color: #18c2a9;
        }
    }
    .theme-orange{ 
        background-color: #f4b976; 
        &:hover{
            background-color: #e9ae6a;
        }
    }
    .theme-pink{ 
        background-color: #f39894; 
        &:hover{
            background-color: #d77672;
        }
    }
    .theme-cyan{ 
        background-color: #26b6be; 
        &:hover{
            background-color: #1facb4;
        }
    }
}
.menu-back{
    position: absolute; bottom: 10px;right: 10px;
    font-weight: bold;font-size: 14px;
    cursor: pointer;
}
</style>
