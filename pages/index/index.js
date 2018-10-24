// pages/index/index.js
import {
  $log,
  $sheet
} from '../../utils/wxUtil.js'

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    $log('监听页面加载')
  },

  // 跳转到微信封装的各种工具中
  toWx(){
    wx.navigateTo({
      url: '../wxUtils/wxUtils',
    })
  },

  // 跳转到组件的使用
  toComponent() {
    $sheet(['组件', '特殊样式'], '#008C96').then(res => {
      if (res.tapIndex == 0) {
        wx.navigateTo({
          url: '../componentUse/componentUse',
        })
      } else {
        wx.navigateTo({
          url: '../specialStyle/specialStyle',
        })
      }
    }).catch(res => {
      console.log(res)
    })
  },

  // 跳转到特殊样式
  toStyle() {
    wx.navigateTo({
      url: '../specialStyle/specialStyle',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})