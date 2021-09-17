/* eslint-disable */
// @ts-nocheck
import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}

declare module '@vue/runtime-dom' {
  /**
   *  tsx自定义的属性会报错，需要在这里声明
   *  tsx的一些指令也需要在这里声明，比如onClickOnce事件
   */
  interface HTMLAttributes {
    on?: any
  }
}
