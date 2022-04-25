<!-- docs/Forms/index.md -->
### 基本用法
<!-- 集成组件，vite自动解析，源代码不会在页面展示 -->
<div>
  <el-button type="primary" @click="alert">按钮</el-button>
  <!-- <form-render
    :schema="schema"
    :value="{}"
  >
  </form-render> -->
</div>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
// import { formSchema } from '../../examples/layouts/index.ts'

export default defineComponent({
  setup () {
    // const schema = reactive(formSchema)
    function alert () {
      window.alert('1234')
    }
    return {
      // schema,
      alert
    }
  }
})
</script>
