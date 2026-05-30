# pot-app-translate-plugin-deepseek

DeepSeek翻译插件 - 一个为pot-app开发的翻译插件

## 简介

这是一个基于DeepSeek API的翻译插件，支持多语言翻译，提供高质量的翻译结果。支持四种输出强度等级，可根据Token资源和信息需求灵活选择。

## 前置要求

- [pot-app](https://github.com/pot-app/pot-app) - 请先下载并安装pot-app
- [deepseek API开放平台](https://platform.deepseek.com/usage)- 需要在DeepSeek官网申请API密钥

## 功能特点

- ✅ 支持四种输出强度等级，灵活控制Token消耗
- ✅ 支持多种语言之间的互译
- ✅ 提供专业、流畅的翻译结果
- ✅ 纯文本输出，无Markdown格式
- ✅ 单词/词组自动置顶显示

## 安装方法

1. 在pot-app中点击"偏好设置"
2. 选择"服务设置"
3. 点击"翻译-添加外部插件"
4. 选择本插件的发布包（.potext）进行安装

## 配置说明

### 1. 模型选择

- **deepseek-v4-flash**：快速响应，成本较低

### 2. 输出强度等级

#### 等级1：基础翻译
- Token消耗：最低
- 适用场景：快速翻译、Token资源有限
- 输出内容：仅翻译结果，无任何额外解释信息

#### 等级2：标准翻译
- Token消耗：较低
- 适用场景：日常使用
- 输出内容：
  - 单词：释义 + 变形 + 1个例句
  - 词组：所有释义
  - 句子：直接翻译

#### 等级3：详细翻译
- Token消耗：中等
- 适用场景：学习研究
- 输出内容：
  - 单词：释义 + 变形 + 3-5个同根词 + 2个例句
  - 词组：所有释义 + 2个例句
  - 句子：直接翻译

#### 等级4：完整翻译
- Token消耗：最高
- 适用场景：深度学习
- 输出内容：
  - 单词：释义 + 变形 + 3-5个同根词 + 3-5个搭配 + 2-3个例句
  - 词组：所有释义 + 2-3个例句
  - 句子：直接翻译

### 3. API密钥

输入你的DeepSeek API密钥

## 使用说明

1. 安装并配置完成后，在pot-app的翻译引擎列表中选择"DeepSeek"即可使用
2. 在插件设置中选择合适的输出强度等级
3. 选中文本即可触发翻译

## 输出示例

### 单词翻译（等级4）

```
translate

释义：
动词: 翻译，转化
名词: 翻译，译文

变形：
动词（如适用）: 过去式: translated, 过去分词: translated, 现在分词: translating

同根词：
1. translation (名词): 翻译，译文
2. translator (名词): 翻译者，翻译机
3. translatable (形容词): 可翻译的
4. translative (形容词): 翻译的，转移的

常用搭配：
1. translate into — 翻译成
2. translate from — 从...翻译
3. translate for — 为...翻译

例句：
1. Can you translate this sentence into Chinese?
   翻译：你能把这个句子翻译成中文吗？
2. She works as a translator for the United Nations.
   翻译：她在联合国担任翻译。
```

### 词组翻译（等级3）

```
look up

释义：
1. 查阅，查找
2. 拜访，看望
3. 好转，改善

例句：
1. I need to look up this word in the dictionary.
   翻译：我需要在字典里查这个词。
2. Don't forget to look me up when you come to Beijing.
   翻译：你来北京的时候别忘了来看我。
```

### 句子翻译

```
原文：The quick brown fox jumps over the lazy dog.
译文：那只敏捷的棕色狐狸跳过了懒狗。
```

## 注意事项

- 请妥善保管你的API密钥
- 翻译服务需要联网使用
- 输出强度越高，消耗的Token越多，请合理选择
- 纯文本输出，不包含任何Markdown格式

