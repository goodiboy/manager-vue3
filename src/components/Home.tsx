import { defineComponent } from 'vue'
import './home.scss'
export default defineComponent({
  name: 'Home',
  setup() {
    return () => (
      <div id="home-module-css-id">
        <div class="basic-layout">
          <div class="nav-side" />
          <div class="content-right">
            <div class="nav-top">
              <div class="bread">面包屑</div>
              <div class="user-info">用户</div>
            </div>
            <div class="wrapper">
              <div class="main-page">
                <router-view />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
