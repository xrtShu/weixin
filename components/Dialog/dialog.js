Component({
    options: {
        multipleSlots: true, // 允许组件中使用多个slot
        // addGlobalClass: true, // 允许组件外部样式类影响组件内部
    },
    /**
     * 组件的属性列表
     * 用于组件自定义设置
     */
    properties: {
        title: {
            type: String,
            value: '标题'
        },
        content: {
            type: String ,
            value: '弹窗内容',
            observer: function (newData, oldData) {
                console.log(newData, oldData);
            }
        },
        cancelText: {
            type: String ,
            value: '取消'
        },
        confirmText: {
            type: String ,
            value: '确定'
        }
    },

    /**
     * 私有数据,组件的初始数据
     * 可用于模版渲染
     */
    data: {
        isShow: false // 弹窗显示控制
    },

    /**
     * 组件的方法列表
     * 更新属性和数据的方法与更新页面数据的方法类似
     */
    methods: {
        // 公有方法
        hideDialog(){
            this.setData({
                isShow: !this.data.isShow
            })
        },
        showDialog(){
            this.setData({
                isShow: !this.data.isShow
            })
        },
        // 内部私有方法建议以下划线开头, triggerEvent 用于触发事件
        _cancelEvent(){
            this.triggerEvent("cancelEvent");
        },
        _confirmEvent(){
            let eventDetail = {a:1, b: 2}; // 提供给事件监听函数
            let eventOption = {
                bubbles: false, // 事件是否冒泡
                composed: false, // 是否穿越组件边界
                capturePhase: false // 事件是否拥有捕获阶段
            }; // 触发事件的选项
            this.triggerEvent("confirmEvent", eventDetail, eventOption); // 事件名、detail对象和事件选项
        }
    }
});
