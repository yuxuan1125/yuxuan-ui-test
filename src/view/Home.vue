<template>
  <div class="wrap">
    <h3>{{ msg }}</h3>
    <h2>组件测试</h2>
    <h4>调用按钮</h4>
    <yu-button>普通</yu-button>
    <yu-button type="primary" @click="btnClick" icon="xm__icon--checked" >主要</yu-button>
    <yu-button type="error" icon="xm__icon--checked" ></yu-button>
    <yu-button type="warning" disabled>禁止</yu-button>
    <yu-button plain>简约</yu-button>
    <yu-button type="text" icon="xm__icon--checked">文字</yu-button>
    <yu-button loading type="success">loading状态</yu-button>
    <yu-button bg-color="#fc0" color="#e0439a" border-color="#fc0">自定义颜色</yu-button>
   
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: `测试组件调用`,
    }
  },
  methods: {
    btnClick () {
      alert(1222)
    },

  },
  mounted: () => {
    // alert(this.modalVisible)

  }
}
</script>

<style scoped lang="scss">
#demo-wrap{
  margin: 10px auto;
}
.wrap{
  margin: 10px;
}
h1,h3{
  margin: 0;
}
h3{
  font-weight: normal;
  font-size: 16px;
}
h4{
  font-weight: normal;
  font-size: 14px;
  text-align: left;
  background-color: #e9e9e9;
  padding: 10px;
}
h2{
  text-align: left;
  width: 100%;
  border-bottom: 1px dashed #ededed;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  text-indent: 10px;
  margin-top: 30px;
  margin-bottom: 0;
}
.btn__group{
  border: 1px solid #eee;
  padding: 10px;
  position: relative;
  margin: 0 20px;
}
.btn__group::before{
  content: '按钮组';
  font-size:12px;
  position: absolute;
  top: -6px;
  right: -20px;
  background: #fff;
  color: #aaa;
}
.btn__block{
  margin: 0 auto!important;
}
.xm__btn,.xm__tag{
  margin-bottom: 10px;
}
.xm__dialog--special .xm__dialog--bd img{
  width: 100%;
  border-radius: 4px;
}
.xm__loading--wrap{
  margin: 15px auto;
}
.right-top-loading{
  position: fixed;
  right: 5px;
  top: 5px;
  z-index: 9999;
}
.right-top-loading.xm__loading--wrap{
  margin: 0;
}
.form-demo{
  width: 98%;
  margin: 0 auto;
  background: #f5f5f5;
  padding: 1%;
}
// 骨架demo
.topic-loading-item{
  margin-top: 20px;
}
.topic-loading-item .loading-item-one{
  display: flex;
  align-items: center;
}
.topic-loading-item .loading-item-one .xm__skeleton--bar{
  margin-left: 10px;
}
.topic-loading-item .loading-item-two {
    margin-top: 10px;
}
.topic-loading-item .loading-item-three {
    margin-top: 10px;
}
.xm__tabbar{
  background: #fff;
}
.tabbar-wrap, .navbar-wrap{
  background: #f5f5f5;
  padding: 10px;
}

.xm__navbar--title img{
  height: 30px;
}

.flex.xm__flexbox{
  border:1px solid #eee;
  font-size: 16px;
}
.flex.xm__flexbox.xm__flex--vertical{
  border:none;
  height: 300px;
}
.flex.xm__flexbox div:nth-child(odd){
  background: #ededed;
  width: 100px;
  height: 50px;
  align-items: center;
  justify-content: center;
  display: flex;
}

.flex.xm__flexbox.xm__flex--vertical div{
  width: 100%;
}
.flex.xm__flexbox.xm__flex--vertical .xm__flex--item{
  background: #ddd;
  align-items: center;
  justify-content: center;
  display: flex;
}


</style>

