<template>
  <div>
    <el-container>
      <el-aside class="aside" style="background-color: rgb(50, 64, 87)">
        <el-menu
          background-color="rgb(50, 64, 87)"
          text-color="#fff"
          :router="true"
        >
          <el-menu-item index="" class="item bg">
            <div slot="title" class= "bg">ElementUi管理后台</div>
          </el-menu-item>
          <!-- 一级菜单 -->
          <el-menu-item index="/" class="item">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <!-- 二级菜单 -->
          <el-submenu index="2" class="item">
            <template slot="title">
              <i class="el-icon-s-finance"></i>
              <span>文章管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">文章列表</el-menu-item>
              <el-menu-item index="2-2">多层级路由示例</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          
        </el-menu>
      </el-aside>
      <el-container>
        <!-- 头部 -->
        <el-header class="header">
          <i class = "el-icon-menu" style = "color:#fff;"></i>
          
        </el-header>

        <!-- 主体 -->
        <el-main>
          <!-- 二级路由组件 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

export default {
  name: "HomeView",
  components: {
    // HelloWorld,
  },
};
</script>
<style scoped>
  .bg{
    width:100%;
    color:#fff;
    background:rgba(0, 134, 241);
  }
  .aside{
        height:100vh;
    }
    .aside .bg{
      height:60px;
      line-height: 60px;
      padding:0 !important;
    }
    .aside .item:hover{
        background:#f5f5f5;
    }
    .aside .item span{
        color:#fff;
    }
    .header{
        display:flex;
        justify-content: space-between;
        align-items: center;
        background:rgba(0, 134, 241);
    }
    .img{
        width:36px;
        height:36px;
        border-radius: 50%;
    }
</style>
