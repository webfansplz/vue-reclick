(function() {
  /**
   * 函数防抖
   *
   * @param {any} method 方法名
   */
  function debounce(method) {
    clearTimeout(method.tId);
    method.tId = setTimeout(function() {
      method.call();
    }, 200);
  }
  /**
   * 事件绑定
   *
   * @param {any} element  绑定dom
   * @param {any} event    事件类型
   * @param {any} listener 方法
   */
  function addEvent(element, event, listener) {
    if (element.addEventListener) {
      element.addEventListener(event, listener, false);
    } else if (element.attachEvent) {
      element.attachEvent('on' + event, listener);
    } else {
      element['on' + event] = listener;
    }
  }
  var vueReclick = {};
  var reclick = {
    bind: function(el, binding) {
      addEvent(el, 'click', function() {
        debounce(binding.value);
      });
    },
    unbind: function(el) {
      addEvent(el, 'click', function() {});
    }
  };

  vueReclick.install = function(Vue) {
    Vue.directive('reclick', reclick);
  };

  if (typeof exports == 'object') {
    module.exports = vueReclick;
  } else if (typeof define == 'function' && define.amd) {
    define([], function() {
      return vueReclick;
    });
  } else if (window.Vue) {
    window.vueReclick = vueReclick;
    Vue.use(vueReclick);
  }
})();
