/**
 * @description 基于 @tectalic/openai 库二次封装用于业务的 OpenAI 请求方法
 * @author Kuroko
 * @exports { OpenaiRequestParams, openaiRequest }
 */
// @ts-ignore
import tectalicOpenai from '@tectalic/openai';

interface OpenaiRequestParams {
  /**当前用户的 OPENAI_API_KEY */
  apiKey: string,
  /**查询的提示信息 */
  prompt: string,
  /**返回的文本长度限制 */
  maxTokens?: number,
  /**AI模型 */
  model?: string,
}

interface TransRequestParams {
  /**查询的提示信息 */
  prompt: string,
  /**返回的文本长度限制 */
  max_tokens: number,
  /**AI模型 */
  model: string,
}

/**AI模型 */
const TD3 = 'text-davinci-003';
// const GPT3_5 = 'gpt-3.5-turbo';

/**默认返回长度 */
const MAX_TOKENS = 1000;

/**当前SDK允许配置的最大长度 */
const WARNING_MAX_TOKENS = 10000;

/**默认请求兜底配置 */
const DEFAULT_CONFIG = {
  model: TD3,
  maxTokens: MAX_TOKENS,
};

let currentKey = '';
let currentClient: any = null;

async function openaiRequest(params: OpenaiRequestParams) {
  // -------- 入参前置校验 --------
  const { apiKey, prompt, maxTokens, model } = params;
  // 校验 apiKey
  if (!apiKey.trim()) {
    const errorMsg = 'apiKey - OpenAI API key 不能为空!';
    throw errorMsg;
  }
  // 校验 prompt
  if (!prompt.trim()) {
    const errorMsg = 'prompt - 上传信息不能为空!';
    throw errorMsg;
  }
  // 校验 maxTokens
  if (maxTokens && maxTokens > WARNING_MAX_TOKENS) {
    const errorMsg = `maxTokens - 超出上限! 测试资源有限 当前最大值不能超过 ${WARNING_MAX_TOKENS}`;
    throw errorMsg;
  }
  // -------- 开始请求 --------
  let res = null;
  if (apiKey !== currentKey) {
    // 创建新链接
    currentKey = apiKey;
    currentClient = tectalicOpenai(apiKey);
  }
  // 发送请求
  const newConfig: TransRequestParams = {
    prompt,
    model: model ?? DEFAULT_CONFIG.model,
    // eslint-disable-next-line camelcase
    max_tokens: maxTokens ?? DEFAULT_CONFIG.maxTokens,
  };
  res = await currentClient.completions.create(newConfig);
  console.log('[tectalicOpenai]请求返回的原始数据 res:');
  console.log(res);
  if (newConfig.model === TD3) {
    // TD3类型 >>> 返回内嵌数据
    res = res.data.choices[0].text;
    console.log('[text-davinci-003]模型转换后的数据 res:');
    console.log(res);
  }
  return res;
}

export {
  openaiRequest,
  type OpenaiRequestParams,
};
