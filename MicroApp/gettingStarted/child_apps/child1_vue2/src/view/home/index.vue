<template>
    <div>
        <div>我的home</div>
        <div>
            <router-link to="/user" style="margin-right:20px">用户</router-link>
            <router-link to="/sex">性别</router-link>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>
.content{
    height: 200px;
}
</style>