import { defineComponent } from 'vue'
import home from './home.module.scss'
export default defineComponent({
  name: 'Home',
  setup() {
    return () => (
      <div class={home.home}>
        <div class={home['basic-layout']}>
          <div class={home['nav-side']} />
          <div class={home['content-right']}>
            <div class={home['nav-top']}>
              <div>面包屑</div>
              <div>用户</div>
            </div>
            <div class={home.wrapper}>
              <div class={home['main-page']}>
                <router-view />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
