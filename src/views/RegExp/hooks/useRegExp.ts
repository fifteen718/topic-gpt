import { ref } from 'vue';
import { useMainStore } from '@/store';
import { storeToRefs } from 'pinia';
import {
  openaiRequest,
  type OpenaiRequestParams,
} from '@/utils/openai';
import { ElMessage } from 'element-plus';

export default function () {
  const mainStore = useMainStore();
  const { apiKey: storeApiKey } = storeToRefs(mainStore);

  /**输入框的值 */
  const inputData = ref('');
  /**返回数据 */
  const resData = ref('');

  /**发起正则请求 */
  async function requestApi() {
    resData.value = 'Loading ...';
    const inputVal = inputData.value.trim();
    const apiKey = storeApiKey.value;
    if (!inputVal) {
      ElMessage.error('输入内容 不能为空!');
      resData.value = '';
      return;
    }
    if (!apiKey) {
      ElMessage.error('ApiKey 不能为空!');
      return;
    }
    const params: OpenaiRequestParams = {
      apiKey,
      prompt: `Please write a regular expression: ${inputVal}`,
    };
    try {
      console.log('[openaiRequest]业务sdk请求入参 params: ');
      console.log(params);
      const res = await openaiRequest(params);
      resData.value = res;
    } catch (error) {
      ElMessage.error(String(error));
      resData.value = String(error);
    }
  }

  return {
    /**输入框的值 */
    inputData,
    /**返回数据 */
    resData,
    /**发起正则请求 */
    requestApi,
  };
}
