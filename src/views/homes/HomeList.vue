<template>
    <div>
        <!-- 文章列表 -->

        <!-- home index 组件 -->
        <el-table :data = "arrs">
            <el-table-column prop = "title" label = "文本标题"></el-table-column>
            <el-table-column prop = "name" label = "作者"></el-table-column>
            <el-table-column prop = "num" label = "浏览量"></el-table-column>
            <el-table-column prop = "huinum" label = "回复"></el-table-column>
            <el-table-column label = "操作">
                <!-- 编辑删除 -->
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 增加按钮 -->
        <el-button type = "primary" class = "addbtn" @click = "addfn(1)">
            增加
        </el-button>

        <!-- 弹窗 -->
        <el-dialog title="添加用户"  :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="姓名" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="文本" :label-width="formLabelWidth">
                    <el-input v-model="form.text" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>

    </div>
    
</template>
<script>
import instance from "../../api/index"
export default {
    data(){
        return {
            arrs: null,
            debounceedit: null, //新业务防抖封装
            debouncedelete: null,  
            dialogFormVisible: false, //弹窗的显示隐藏 
            form: {
                id: 0,
                name: "张三",
                text: "法外狂徒",
            },
            formLabelWidth: "120px",
        }
    },
    methods: {
        async getHomeIndex(){
            let {data} = await instance.get("/homelist")
            console.log(data);
            this.arrs = data
        },
        
        addfn(i){
            // 添加业务
            this.i = i
            this.dialogFormVisible = !this.dialogFormVisible
            this.form.name = ''
            this.form.text = ''
            
        },
        handleDelete(a, b){ //用户行为  删除
            console.log(a, b)
            // 弹窗确定
            this.$confirm(" 确定删除这条信息吗", "提示", {
                confirmButtonText: "确定",  //确定按钮
                cancelButtonText: "取消",   //取消按钮
                type: "warning"
            }).then(() => {
                // 确定回调函数
                console.log("删除了")
                this.deleteHomeIndex(a) //删除业务
                
            }).catch(() => {
                // 取消回调函数
                console.log("你取消了")
            })
        },
        // 删除业务
        async deleteHomeIndex(index){
            console.log("要删的", index)
            let {data} = await instance.delete("/homelist/" + index)
            console.log(data)
            this.getHomeIndex()
        },
    },
    created() {
        this.getHomeIndex()
    }
}
</script>
<style scoped>

</style>