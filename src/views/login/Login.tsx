import { withKeys, defineComponent, reactive, ref } from 'vue'
import { ElForm, ElMessage } from 'element-plus'
import './login.scss'
import axiosInstance from '@/utils/http'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'Login',
  setup() {
    const router = useRouter()

    const user = reactive({
      userName: '',
      userPwd: ''
    })
    // 获取构造函数的实例类型
    const userFrom = ref<InstanceType<typeof ElForm>>()
    // 校验规则
    const rules = {
      userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
      userPwd: [{ required: true, message: '请输入密码', trigger: 'blur' }]
    }
    const login = () => {
      if (!userFrom?.value) return
      userFrom.value.validate(async (valid) => {
        console.log(valid)
        if (valid) {
          const res = await axiosInstance.post('/api/users/login', {
            userName: user.userName,
            userPwd: user.userPwd
          })
          console.log(res)
          router.back()
        } else {
          ElMessage.error('表单填写错误')
        }
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
              <el-input
                prefix-icon="el-icon-view"
                onKeyup={withKeys(login, ['enter'])}
                type="password"
                v-model={user.userPwd}
              />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class="btn-login" onClick={login}>
                <span>登录</span>
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    )
  }
})
