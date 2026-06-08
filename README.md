# pot-app-translate-plugin-deepseek

DeepSeek翻译插件 - 一个为pot-app开发的翻译插件

## 简介
这是一个基于DeepSeek API的翻译插件，支持多语言翻译，提供高质量的翻译结果。

## 前置要求
- [pot-app](https://github.com/pot-app/pot-app) - 请先下载并安装pot-app
- [deepseek API开放平台](https://platform.deepseek.com/usage)- 需要在DeepSeek官网申请API密钥

## 功能特点
- 支持两种模型选择：deepseek-v4-flash和deepseek-v4-pro
- 支持四种翻译级别，根据token消耗灵活选择
- 支持多种语言之间的互译
- 提供专业、流畅的翻译结果

## 翻译级别说明
- **一级（简洁翻译）**：最低token消耗，提供最基本的翻译结果
- **二级（基础详解）**：单词提供词性、变形和例句；词组提供所有含义
- **三级（深度解析）**：单词额外提供同根词；词组提供例句
- **四级（完整详解）**：单词额外提供常用搭配；词组提供更多例句

## 安装方法
1. 在pot-app中点击"偏好设置"
2. 选择"服务设置"
3. 点击"翻译-添加外部插件"
4. 选择本插件的发布包进行安装

## 配置说明
1. 选择翻译模型（deepseek-v4-flash或deepseek-v4-pro）
2. 输入你的DeepSeek API密钥

## 使用说明
安装并配置完成后，在pot-app的翻译引擎列表中选择"DeepSeek"即可使用。

## 注意事项
- 请妥善保管你的API密钥
- 翻译服务需要联网使用
