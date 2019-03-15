# vue-frontend
vue的前端
项目采用 webpack+vue2.0的方式创建。

我们先上几张效果图

![images](https://github.com/yspwf/vue-frontend/blob/master/img/1.png)           ![images](https://github.com/yspwf/vue-frontend/blob/master/img/2.png)                    ![images](https://github.com/yspwf/vue-frontend/blob/master/img/3.png)                ![images](https://github.com/yspwf/vue-frontend/blob/master/img/4.png)              ![images](https://github.com/yspwf/vue-frontend/blob/master/img/5.png)

页面使用模板加组件的方式创建，父组件使用 bind 绑定数据，子组件 props 接收数据的方式展示数据，列：
```
//父组件
<template>
   <div>
      <v-focusinfo v-bind:focusinfo="focuslist"></v-focusinfo>
   </div>
</template>

<script>
     data(){
		return {
			  focuslist:[
			    {..........},
			    {..........}
			  ]
		 }
	},
	components:{
           vFocusinfo:vfocusinfo
	}
</script>
```
```
//子组件
<template>
	<div>
	   <div v-for="(item, index) in focuslist">
	      ...............
	   </div>		
	</div> 
</template>

<script>
	data(){
	 return {
	 
	   }
	},
	props:['focuslist']
</script>

```
	
