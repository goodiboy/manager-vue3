import { defineComponent, reactive, ref } from 'vue'
import { ElForm } from 'element-plus'
import './login.scss'
export default defineComponent({
  name: 'Login',
  setup() {
    const user = reactive({
      userName: '',
      userPwd: ''
    })
    const userFrom = ref<InstanceType<typeof ElForm>>()
    // 校验规则
    const rules = {
      userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
      userPwd: [{ required: true, message: '请输入密码', trigger: 'blur' }]
    }

    const login = () => {
      if (!userFrom?.value) return
      userFrom.value.validate((valid) => {
        console.log(valid)
      })
    }

    return () => (
      <div id="login-module-css-container">
        <div class="modal">
          <el-form ref={userFrom} model={user} status-icon rules={rules}>
            <div class="title">紫荆企业人员管理平台</div>
            <el-form-item prop="userName">
              <el-input prefix-icon="el-icon-user" v-model={user.userName} />
            </el-form-item>
            <el-form-item prop="userPwd">
              <el-input prefix-icon="el-icon-view" v-model={user.userPwd} />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class="btn-login" onClick={login}>
                登录
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    )
  }
})
