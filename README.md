1.1. 项目简介
使用React编写的云音乐PC Web项目，接口来源于开源的接口，自己已经做了部署。

项目已经完成功能如下：（你可以下载下来自己体验一下）

推荐页面：
![页面截图](src/assets/img/推荐页.png)

目前做了榜单中歌曲的点击播放；
其他页面只要将歌曲的id传入到redux中就可以，整个逻辑已经打通；
做了歌曲的各种控制（暂停、播放、上一首、下一首、进度改变）；
做了播放循序切换：顺序播放、随机播放、单曲循环；
歌曲播放
![页面截图](src/assets/img/推荐页2.png)

1.2. 项目规范
项目规范：项目中有一些开发规范和代码风格

1.文件夹、文件名称统一小写、多个单词以连接符（-）连接；
2.JavaScript变量名称采用小驼峰标识，常量全部使用大写字母，组件采用大驼峰；
3.CSS采用普通CSS和styled-component结合来编写（全局采用普通CSS、局部采用styled-component）;
4.整个项目不再使用class组件，统一使用函数式组件，并且全面使用Hooks；
5.所有的函数式组件，为了避免不必要的渲染，全部使用memo进行包裹；
6.组件内部的状态，使用useState、useReducer；业务数据全部放在redux中管理；
7.函数组件内部按照如下顺序编写代码：
组件内部state管理；
redux的hooks代码；
其他组件hooks代码；
其他逻辑代码；
返回JSX代码；
8.redux代码规范如下：
redux结合ImmutableJS
每个模块有自己独立的reducer，通过combineReducer进行合并；
异步请求代码使用redux-thunk，并且写在actionCreators中；
redux直接采用redux hooks方式编写，不再使用connect；
9.网络请求采用axios
对axios进行二次封装；
所有的模块请求会放到一个请求文件中单独管理；
10.项目使用AntDesign
项目中某些AntDesign中的组件是直接使用；
1.3. 项目运行
clone项目：

git clone https://github.com/Leon0228-wly/react-web-music.git
安装项目依赖：

yarn install
项目运行：

yarn start
