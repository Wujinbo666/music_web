<template>
  <div>
    <p class="title">推荐歌单</p>
    <van-row gutter="5">
      <van-col span="8" v-for="(item,i) in songNumber" :key="i">
        <van-image width="100%" height="3rem" fit="cover" :src="item.picUrl" />
        <p class="song_name">{{item.name}}</p>
      </van-col>
    </van-row>
     <p class="title">最新音乐</p>
     <van-cell title="单元格" value="内容" label="描述信息" />
  </div>
</template>

<script>
  import { recommendMusic } from '../../network/home'
  export default {
    name: 'index',
    data() {
      return {
        songNumber: 0

      }
    },
    created() {
      this.recommendMusic({ limit: 6 })
    },
    methods: {
      async recommendMusic(params) {
        const { result: res } = await recommendMusic(params)
        this.songNumber = res
        console.log(res);
      }
    }
  }
</script>

<style scoped>
  /* 标题 */
  .title {
    padding: 0.266667rem 0.24rem;
    margin: 0 0 0.24rem 0;
    background-color: #eee;
    color: #333;
    font-size: 15px;
  }

  /* 推荐歌单 - 歌名 */
  .song_name {
    font-size: 0.346667rem;
    padding: 0 0.08rem;
    margin-bottom: 0.266667rem;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    /** 对象作为伸缩盒子模型显示 **/
    -webkit-box-orient: vertical;
    /** 设置或检索伸缩盒对象的子元素的排列方式 **/
    -webkit-line-clamp: 2;
    /** 显示的行数 **/
    overflow: hidden;
    /** 隐藏超出的内容 **/
  }
</style>