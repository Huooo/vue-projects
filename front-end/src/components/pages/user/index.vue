<template>
    <div class='user-index'>user/index</div>
</template>


<script>
export default {
    name: 'user-index',
    data: function(){
        return {}
    },
    created: function(){
        this.getUsersLists();
    },
    methods: {
        getUsersLists: function(){
            this.$ajax
                .get('http://localhost:3030/users/lists')
                .then(function(response){
                    console.log('success-get-users-lists');
                    console.log(response.data);
                })
                .catch(function(error){
                    console.log('error-get-users-lists');
                })

        }
    }
}
</script>


<style scoped>

</style>
