import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Welcome',
  setup() {
    // const props = defineProps<{
    //   msg: string
    // }>()
    // const msg = toRefs(props)
    const router = useRouter()
    const toLogin = () => {
      router.push('/login')
    }
    return () => {
      return (
        <div class="welcome">
          <h1>欢迎来到Welcome页面</h1>
          <el-button type="default" onClick={toLogin}>
            去登录
          </el-button>
        </div>
      )
    }
  }
})
