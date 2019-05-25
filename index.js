/**
 * Helper.js
 * 工具函数
 */
const Helper = {
    timerEnd: null,
    timerStart: null
  }
  
  /**
   * toast
   * toast组件
   * @param {String} txt弹出文案
   * @param {Number} 动画时间
   */
  Helper.toast = function (txt, t) {
    function styleExtend(target, options) {
      Object.assign(target, options)
    }
    var mToast, mTxt
    var mToastStyles = {
      position: 'fixed',
      width: 'auto',
      bottom: '350px',
      left: '0',
      right: '0',
      textAlign: 'center',
      opacity: '0',
      transition: 'all 0.8s',
      webkitTransition: 'all 0.8s',
      zIndex: '999999'
    }
    var mTxtStyles = {
      fontSize: '14px',
      display: 'inline-block',
      background: 'rgba(0, 0, 0, 0.86)',
      color: '#fff',
      padding: '20px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      borderRadius: '5px',
      maxWidth: '95%'
    }
    mToast = document.querySelector('#toast')
    if (mToast !== null) {
      document.body.removeChild(mToast)
    }
    mToast = document.createElement('div')
    mTxt = document.createElement('span')
    mToast.id = 'toast'
    mTxt.id = 'toast-txt'
  
    styleExtend(mToast.style, mToastStyles)
    styleExtend(mTxt.style, mTxtStyles)
    mTxt.innerText = txt
    mToast.appendChild(mTxt)
  
    document.body.appendChild(mToast)
  
    this.timerStart = setTimeout(() => {
      styleExtend(mToast.style, {
        opacity: 1,
        zIndex: 999999
      })
    }, 0)
  
    this.timerEnd = setTimeout(() => {
      styleExtend(mToast.style, {
        opacity: 0,
        zIndex: -999999
      })
    }, t || 3000)
  }
  
  module.exports = function() {
    return Helper
  }

  