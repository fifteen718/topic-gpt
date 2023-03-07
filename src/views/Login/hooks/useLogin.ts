import { ref } from 'vue';
import { useMainStore } from '@/store';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';

export default function () {
  const mainStore = useMainStore();
  const router = useRouter();

  /**输入框的值 */
  const inputKey = ref('');

  /**发起正则请求 */
  async function loginHandler() {
    const inputVal = inputKey.value.trim();
    if (!inputVal) {
      const errorMsg = '输入内容不能为空!';
      ElMessage.error(errorMsg);
      return;
    }
    mainStore.apiKey = inputVal;
    router.push('/home');
  }

  return {
    /**输入框的值 */
    inputKey,
    /**登录操作 */
    loginHandler,
  };
}
