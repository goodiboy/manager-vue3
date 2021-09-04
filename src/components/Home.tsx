import { ComponentInternalInstance, defineComponent, getCurrentInstance } from 'vue'

export default defineComponent({
  name: 'Home',
  setup() {
    // console.log(getCurrentInstance())
    const { proxy } = getCurrentInstance() as ComponentInternalInstance
    const a = 1
    // const instance = getCurrentInstance()
    // console.log(ctx.$axios.get)

    // console.log(instance?.appContext.config.globalProperties.$axios.get)
    return () => (
      <div>
        12334
        <el-button type="primary">主要按钮</el-button>
      </div>
    )
  }
})
