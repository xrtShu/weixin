//index.js
//获取应用实例
const app = getApp();
const { sayHello, sayGoodbye } = require('../../utils/common');

Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        count: 0,
        themeImg: '/images/mm_lm.png',
        dialog: {
            id: 'dialog',
            title: 'hello',
            content: '恭喜你，学会了小程序组件',
            confirmText: '谢谢您',
        }
    },
    //事件处理函数
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    handleCountClick: function () {
        this.setData({
            count: ++this.data.count,
        })
    },
    onLoad: function () {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse){
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
    },
    getUserInfo: function (e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },
    onShow: function () {
        // 获取当前页面栈的实例，以数组形式按栈的顺序给出，
        // 第一个元素为首页，最后一个元素为当前页面。
        console.log(getCurrentPages()[0], 'getCurrentPages');
        sayHello('Hygge');
        sayGoodbye('Hygge');
    },
    /**
     * 生命周期函数--监听页面初次渲染完成, dialog 相关方法
     */
    onReady: function () {
        // 获得dialog组件
        this.dialog = this.selectComponent("#dialog");
        console.log(this.dialog, 'dd');
    },
    showDialog(){
        this.dialog.showDialog();
    },
    _cancelEvent(){
        console.log('你点击了取消');
        this.dialog.hideDialog();
    },
    _confirmEvent(e){
        console.log('你点击了确定', e);
        this.dialog.hideDialog();
    }
});
