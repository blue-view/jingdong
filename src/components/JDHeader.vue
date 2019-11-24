<template>
  <div class="jdheader">
    <div class="loginBar"></div>
    <div class="loginbar1">
      <div class="jdheader-left">
        <img src="../assets/collage.png" alt srcset />
      </div>
      <div class="searchBar">
        <form action>
          <img src="../assets/JDpng.png" alt srcset width="20px" height="15px" class="searchimg" />
          <div class="spcls"></div>
          <span class="searchIcon"></span>
          <input type="text" placeholder="监控摄像头" class="searchInput" />
        </form>
      </div>
      <div class="logincls">登录</div>
    </div>
    <div class="banner">
      <swiper ref="mySwiper" id="mySwiper" :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in banners" :key="index">
          <img :src="item.url" alt srcset />
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: "jdheader",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop:true,
        pagination: {
          el: ".swiper-pagination",
          bulletClass: "my-bullet",
          bulletActiveClass: "my-bullet-active"
        }
      },
      banners: [
        {
          url:
            "//imgcps.jd.com/ling4/60329901817/5qOJ5pyN5b-r5o236YWN6YCB/5b-F5YWl55qE5ZOB6LSo5aW96LSn/p-5c136f5e82acdd181ddfed78/651589aa/cr_1125x445_0_171/s1125x690/q70.jpg"
        },
        {
          url:
            "//imgcps.jd.com/ling4/60329901817/5qOJ5pyN5b-r5o236YWN6YCB/5b-F5YWl55qE5ZOB6LSo5aW96LSn/p-5c17126882acdd181dd53ce0/816937bf/cr_1125x445_0_171/s1125x690/q70.jpg"
        },
        {
          url:
            "//m.360buyimg.com/mobilecms/s700x280_jfs/t1/85120/36/2889/150672/5dd5f5ffEf05da67a/94cc259e78e3701c.jpg!cr_1125x445_0_171!q70.jpg.dpg"
        },
        {
          url:
            "//m.360buyimg.com/mobilecms/s700x280_jfs/t1/82660/14/14364/101447/5dbc053bE048a8df5/e6d35466fe3bd010.jpg!cr_1125x445_0_171!q70.jpg.dpg"
        }
      ]
    };
  }
};
</script>

<style  lang="scss">
@import "../assets/base.scss";
.jdheader {
  width: 100%;
  height: px2em(159.56);
  position: relative;
  .banner {
    width: 100%;
    height: px2em(119.45);
    position: absolute;
    top: 44px;
    display: flex;
    justify-content: center;
  }
  #mySwiper {
    width: px2em(298.66);
  }
  .banner img {
    width: px2em(298.66);
    border-radius: px2em(8);
  }
  .loginBar {
    background-image: -webkit-gradient(
      linear,
      left bottom,
      left top,
      from(#f1503b),
      color-stop(50%, #c82519)
    );
    background-image: -webkit-linear-gradient(bottom, #f1503b, #c82519 50%);
    background-image: linear-gradient(0deg, #f1503b, #c82519 50%);
    position: absolute;
    top: 0;
    left: -25%;
    height: px2em(123.72);
    width: 150%;
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;
  }
  .jdheader-left {
    width: 20px;
    height: 16px;
    display: block;
    background-size: 100% 100%;
    box-sizing: border-box;
    margin: 0px 0 0 15px;
  }
  .jdheader-left img {
    width: 20px;
    height: 16px;
  }
  .logincls {
    display: flex;
    margin: 10px 0;
    color: #fff;
    font-size: 14px;
    width: 40px;
    align-items: center;
  }
  .loginbar1 {
    width: 100%;
    position: fixed;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    height: 44px;
    background-color: #c82519;
    align-items: center;
  }

  .searchBar {
    background: #fff;
    height: 30px;
    border-radius: 15px;
    flex: 1;
    margin: 0px 8px 0 8px;
  }
  .searchBar > form {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .searchimg {
    margin-left: 15px;
  }
  .searchIcon {
    display: inline-block;
    width: 18px;
    height: 15px;
    background: url(https://st.360buyimg.com/so/images/search/jd-sprites.png?__inline)
      no-repeat;
    background-position: -80px 0;
    background-size: 200px;
    position: relative;
    z-index: 1;
  }
  .searchInput {
    border: 0;
    margin-left: 5px;
    line-height: 30px;
    margin-right: 15px;
    text-indent: 10px;
    font-size: 12px;
  }
  .spcls {
    width: 1px;
    background-color: #ccc;
    height: 15px;
    margin: 0 5px;
  }
}

.my-bullet {
  box-sizing: border-box;
  border-radius: 7px;
  height: 3px;
  width: 8px;
  background: hsla(0, 0%, 92.9%, 0.4);
  margin: 0 2px;
  display: inline-block;
  opacity: 1;
}
.my-bullet-active {
  width: 12px;
  background: #ededed;
}
</style>