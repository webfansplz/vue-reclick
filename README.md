# vue-reclick (基于 vue2.0 )

```
一个vue自定义指令.

用于解决快速点击多次调用绑定方法多次的问题.
```

```
使用方法:

1.非node环境 .

  先引入vue.js,再引入vue-reclick.js 就可以直接使用啦.

2.node环境 .

  (1).

      npm install vue-reclick

  (2).

      import vueReclick from 'vue-reclick';
      Vue.use(vueReclick);

在dom上使用箭头函数来返回 该方法并调用.

(多套一层函数是因为vue在解析自定义指令时会立即调用方法,vue有对v-on做了特殊处理所以不会立即调用!)

例:

<div v-reclick="()=>helloFn(a,b,c)">hello!</div>

<div v-reclick="()=>worldFn()">world!</div>
```
