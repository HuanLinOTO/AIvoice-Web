import { handle } from './utils/proxy.js'
import { createOptions, setParams, bindData, getVoice, forbidCheck } from './utils/index.js'
import dialog from './utils/dialog'
import css from './assets/style/index.css'

// 原始数据
export let data = {
    'text': '',
    'speaker': '空',
    'sdp_ratio': '0.2',
    'noise': '0.5',
    'noisew': '0.9',
    'length': '0.8',
    'format': 'wav'
}

// 初始化
// 对象代理
data = new Proxy(data, handle)

// 页面加载时设置角色语音选项
createOptions()

// 页面加载时设置初始值
setParams()

// 绑定数据
bindData()

// 禁用控制台
forbidCheck()

// 点击支持一下弹出对话框
dialog()

// 绑定生成语音事件
document.querySelector('.produce').addEventListener('click', () => {
    getVoice()
})
