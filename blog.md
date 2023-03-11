
# Hello ChatGPT, Hello TopicGPT
> Skip the chat, Straight to the topic.

## 1 - ChatGPT
> 认识一下。
### 能解决什么问题？
1. 查询
* 正则表达式
* 变量或方法的命名
2. 编码
* 实现某个UI组件
* 优化TS语法
* 写Polyfill和CSS兼容语法
* 添加注释
3. 检测
* Code Review
* 检查XSS漏洞
4. 学习
* 学习框架源码
* 阅读压缩后代码
* 咨询框架版本差异

## 2 - OpenAI API
> 从模型开始，在本节中将简要介绍一些GPT模型的原理。

### ChatGPT为什么在文本生成领域的表现极佳？
* ChatGPT是基于Transformer结构的语言模型，其中包括Encoder和Decoder两个部分。Encoder负责将输入的文本序列进行编码，Decoder则负责生成输出的文本序列。
* 在ChatGPT中，模型是基于Decoder部分进行训练的，这意味着在训练时，模型会接收一个已知的文本序列（例如聊天记录），然后生成下一个文本的预测结果。这个预测结果会与实际的下一个文本进行比较，从而计算损失值，并使用反向传播算法更新模型参数。

### 为什么ChatGPT在对话领域体验这么棒？
* ChatGPT在对话领域表现出色的一个重要原因是它具有in-context理解能力。in-context指的是模型在生成每一个回复时都能够考虑到先前对话的内容和上下文。这个in-context理解能力是基于Transformer结构的设计所实现的。
* Transformer结构的self-attention机制可以对序列中的任意两个位置之间的关系进行建模。
* 当然ChatGPT也用到了一些之前主流的人工智能的技术诸如强化学习和预训练。

### ChatGPT背后的OpenAI
在最新的OpenAI API中提供了几个模型，这些模型有各自的优缺点。

| LATEST MODEL | DESCRIPTION | MAX REQUEST | TRAINING Data（数据集最新的截止时间） |
|--|--|--|--|
| gpt-3.5-turbo | 最强力的GPT-3.5型号（特调版）。优化对话场景。并且比Text-Davinci-003模型的成本低10倍。将通过我们最新的模型迭代更新。 | 4,096 tokens | 截止到 2021年九月 |
| gpt-3.5-turbo-0301 | 这个模型将不会接收更新，并将只支持三个月期限到2023年6月1日为止。 | 4,096 tokens | 截止到 2021年九月 |
| text-davinci-003 | 该模型能够以更好的质量、更长的输出和更一致的指令跟踪完成任何语言任务，比Curie、Babbage或Ada模型更具优势。此外，该模型还支持在文本中插入完成语。 | 4,000 tokens | 截止到 2021年六月 |
| text-davinci-002 | 与Text-Davinci-003相似的功能，但接受了监督微调而不是强化学习 | 4,000 tokens | 截止到 2021年六月 |
| code-davinci-002 | 针对代码完成任务进行了优化 | 4,000 tokens | 截止到 2021年六月 |

### OpenAI API简介
1. prompt：输入文本。例如：“请问您需要什么帮助？”或“请为我推荐一部好看的电影。”
2. temperature：生成回复时的随机度量，通常介于0.1和1之间。温度值越高，生成的回复越随机。默认值为0.5。
3. max_tokens：生成回复的最大标记数。标记是ChatGPT模型的内部表示方式，一般可理解为生成回复的长度。默认值为60。
4. top_p：生成回复时，从所有可能的回复中选择可能性最高的回复。默认值为1，表示选择最可能的回复。
5. frequency_penalty：在生成回复时惩罚重复性，以产生更多不同的回复。默认值为0。
6. presence_penalty：惩罚生成回复中不存在的标记。默认值为0。
7. stop：用于指定生成回复的条件，通常是一些特定的单词或短语。当生成回复中出现了这些单词或短语时，模型将停止生成回复。
8. response_length：生成回复的最大长度，以字符为单位。如果该参数未指定，API将默认为20至60个字符之间的长度。

## 3 - TopicGPT
> 基于开源 OpenAI API 实现的另一个 ChatGPT.
### 在线预览
https://fifteen718.github.io/topic-gpt

### 源码地址
https://github.com/fifteen718/topic-gpt

### TODO
* 自定义规则：支持自定义规则功能；
* 共享规则：支持平台所有规则共享查阅功能；
* 热搜榜：根据现有规则库的点击量进行数据统计与分析；
* 推荐系统：缓存一些高点击量的功能（规则语句）并收录至推荐库。

## 4 - TopicGPT for VSCode
> 基于 TopicGPT 现有功能嫁接到 VSCode 插件中。
### 下载地址
暂不提供，请关注后续更新。

### 源码地址
暂不提供，请关注后续更新。

### TODO
* CodeReview：选中一部分代码，执行插件的CR命令，用ChatGPT返回的优化后代码，直接替换掉旧代码。
* 代码补全：根据注释自动实现JS函数，或者实现某一个想要的动画CSS。
* 单测用例：选中某个方法的一段代码，执行插件的单元测试unit test功能，ChatGPT返回单测用例，并生成一个新的文件来保存。

## 5 - AI Feature 
> 从分析式AI到生成式AI的进化。
### 生成式AI（AIGC)
![image](https://user-images.githubusercontent.com/15246253/224475513-6b5abd13-cb60-4c3d-a7ea-b16b2bc55eaf.png)

### AI发展阶段
1. 助手阶段：AIGC将辅助人类进行内容生产。
2. 协作阶段：AIGC以虚实并存的虚拟人形态出现，形成人机。
3. 原创阶段：AIGC将独立完成内容创作。

## TNANKS
以上内容由同花顺高峰论坛38期2组全体成员共同创作，转载请注明来源。
