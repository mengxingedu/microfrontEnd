<template>
    <div>
        <div>我的home</div>
        <div>
            <router-link to="/child1" style="margin-right:20px">用户</router-link>
            <router-link to="/child2">性别</router-link>
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