Component({
    options: {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
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
            this.triggerEvent("confirmEvent");
        }
    }
});
