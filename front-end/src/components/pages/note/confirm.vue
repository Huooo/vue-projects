<template>
    <div @click.self="$emit('cancel')" class="menu-confirm">
        <div class="confirm-wrapper">
            <div class="confirm-header">
                <span class="confirm-header-title">提示</span>
            </div>  
            <div v-if="msg === 'INPUTDATA'" class="confirm-content">
                <p><input @change="$emit('upload', $event)" type="file" accept="*.txt"></p>
                <p>请上传此处下载的数据文件note.txt。</p>
                <p v-if="uploadState.success" class="upload-success">文件上传成功，确认导入数据？</p>
                <p v-if="uploadState.error" class="upload-error">请确保上传文件是从此处下载的文件。</p>
            </div>
            <div v-else class="confirm-content" v-text='msg'></div>
            <div class="confirm-btns">
                <button @click="$emit('sure')" class="sure-btn" type="button">确定</button>
                <button @click="$emit('cancel')" class="cancel-btn" type="button">取消</button>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'note-confirm',
    data () {
        return {}
    },
    props: [
        'msg', 'uploadState'
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
.menu-confirm {
    position: fixed;top: 0;right: 0;bottom: 0;left: 0;z-index: 2;
    overflow: auto;
    background: rgba(0, 0, 0, .4);
    
    .confirm-wrapper {
        position: absolute;left: 50%;top: 20%;
        width:100%;max-width: 400px;
        background: #fff;border-radius: 2px;
        animation: confirm .5s;transform: translateX(-50%);
        box-shadow: 0 1px 3px rgba(0, 0, 0, .3);box-sizing: border-box;
    }
    .confirm-header {
        padding: 15px 0;
        font-size: 20px;font-weight: bold;text-align: center;
        border-bottom: 1px solid #ccc;
    }
    .confirm-content {
        padding: 30px 20px;
        color: #475669;font-size: 16px;text-align: center;

        .upload-success{
            color: #0b0;
        }
        .upload-error{
            color: #b00;
        }
    }
    .confirm-btns {
        padding-bottom: 10px;
        font-size: 14px;text-align: center;  
        
        button{
            width: 50px;height: 30px;
            border-radius: 4px;
        }
        .sure-btn {
            margin-right: 20px;
            color: #fff;
            transition: background .3s ease-in;
        }
        .cancel-btn {
            color: #1f2d3d;
            background: #fff;border: 1px solid #c0ccda;
        }
    }
}
@keyframes confirm {
    from{
        top: 15%;
    }
}
</style>
