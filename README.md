如何启动

安装依赖：npm install 

启动项目：npm run dev

打开项目：<http://localhost:8080/dist/my_compontent.html>



# 组件介绍

## 一  Minput

#### props

| name     | type   | 描述                        |
| -------- | ------ | ------------------------- |
| validate | 正则表达式  | 该input需要验证的正则表达式          |
| isCheck  | Number | 是否启动验证                    |
| value    | String | 通过v-model绑定，可实时返回input的数据 |

#### event

| name      | 描述                        |
| --------- | ------------------------- |
| on-blur   | @on-blur input失去焦点的时候触发   |
| on-change | @on-change input内容改变的时候触发 |
| on-input  | @on-input input输入数据的时候触发  |

## 二  Mscroll 

#### props

| name               | type    | 描述                             |
| ------------------ | ------- | ------------------------------ |
| scrollBottomOffset | Number  | 滚动到距离底部多久时触发on-scroll-bottom事件 |
| isCf               | Bollean | 是否触发on-scroll-bottom事件         |

#### event

| name             | 描述                        | 方法参数                            |
| ---------------- | ------------------------- | ------------------------------- |
| on-scroll-bottom | @on-scroll-bottom 触发底部时触发 | 无                               |
| on-scroll        | @on-scroll 滚动触发           | (position),type为json,对应left和top |

## 三  Mprogress（可拖拽进度条）

#### event

| name     | 描述                           | 方法参数               |
| -------- | ---------------------------- | ------------------ |
| changeJd | @on-changeJd 当进度（拖拽或点击）变化时触发 | 返回进度值（0-1，保留两位小数点） |

## 四  Mdrag（指令实现）

#### 指令的功能参数

| name     | type                   | 描述                            |
| -------- | ---------------------- | ----------------------------- |
| startFun | function               | 开始拖拽时候的触发函数                   |
| moveFun  | function               | 拖拽过程的触发函数                     |
| endFun   | function               | 拖拽结束后的触发函数                    |
| xLimit   | json（{min:20,max:200}） | 限制x轴的可拖拽范围，eg：                |
| yLimit   | json（{min:20,max:200}） | 限制x轴的可拖拽范围，个：{min:20,max:200} |



