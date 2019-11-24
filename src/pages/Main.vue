<template>
  <div class="main" id="main">
    <JDHeader />
    <div>
      <div class="nav">
        <swiper ref="mySwiper2" id="mySwiper2" :options="swiperOption2">
          <swiper-slide v-for="(item,index) in navData" :key="index">
            <div v-for="(itme2,index2) in item.data" :key="index2">
              <img :src="itme2.url" :alt="itme2.text" />
              <span>{{itme2.text}}</span>
            </div>
          </swiper-slide>
          <div class="swiper-pagination2" slot="pagination"></div>
        </swiper>
      </div>
      <div class="miaosha">
        <div class="miaoshatITLE">
          <div class="miaoshatITLEleft">
            <div class="jdmslogo">
              <img src="../assets/JDMS.png" alt srcset />
            </div>
            <div class="changci">{{changci+'点场'}}</div>
            <div class="time">
              <span>{{hour}}</span>
              <span>:</span>
              <span>{{minute}}</span>
              <span>:</span>
              <span>{{second}}</span>
            </div>
          </div>
          <div class="morems">
            更多秒杀
            <i class="seckill-more-icon"></i>
          </div>
        </div>
        <div class="wrapper" ref="wrapper">
          <div class="miaoshaPic content" ref="content">
            <div v-for="(item,index) in msData" :key="index">
              <img :src="item.url" alt />
              <span class="newprice">
                <em>¥</em>
                {{item.newPrice}}
              </span>
              <span class="oldprice">
                <em>¥</em>
                {{item.oldPrice}}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="newUser">
        <div>
          <img
            src="//m.360buyimg.com/mobilecms/s376x240_jfs/t1/49601/16/12206/115887/5d91b4d5E34709952/aba2bcb4855e6e52.png!q70.jpg.dpg"
            alt
          />
        </div>
        <div>
          <img
            src="//m.360buyimg.com/mobilecms/s376x240_jfs/t1/32449/33/15631/174497/5cc2d86bE0289110c/9c53e25651659d43.png!q70.jpg.dpg"
            alt
          />
        </div>
      </div>
      <div class="djxy">
        <div class="jdxytitle">
          <img
            src="//m.360buyimg.com/mobilecms/s750x80_jfs/t1/104532/40/2146/24646/5dcc2957E83954979/5ec2bb870605dcb3.png!q70.jpg.dpg"
            alt
            srcset
          />
        </div>
        <div class="jdxybody">
          <div class="one" v-for="(item,index) in djxyDataOne" :key="index">
            <span class="jdxbodytitle">
              <span>{{item.title}}</span>
            </span>
            <span class="jdxbodytitle1">{{item.desc}}</span>
            <div class="oneimg">
              <div v-for="(itemimgs,indeximgs) in item.imgs" :key="'item'+indeximgs">
                <img :src="itemimgs.url" alt />
              </div>
            </div>
          </div>

          <div class="two" v-for="(item,index) in djxjDataTwo" :key="'f'+index">
            <div v-for="(item1,index1) in item.data" :key="index1">
              <span class="twotitle">{{item1.title}}</span>
              <span class="jdxbodytitle1">{{item1.desc}}</span>
              <img :src="item1.url" alt />
            </div>
          </div>
        </div>
      </div>
      <div class="mrk">
        <div class="mrktitle">
          <img
            src="//m.360buyimg.com/mobilecms/s750x80_jfs/t1/83520/33/13546/23804/5dcc2979E64764662/4654df31323ded7c.png!q70.jpg.dpg"
            alt
            srcset
          />
        </div>
        <div class="mrkbody">
          <div v-for="(item,index) in mrgData" :key="index">
            <span :class="'mrkbodytitle'+(index+2)">
              <span>{{item.title}}</span>
            </span>
            <span class="mrkbodytitle1">{{item.desc}}</span>
            <img :src="item.url" alt />
          </div>
        </div>
      </div>
      <div class="quickReport">
        <img
          src="//m.360buyimg.com/mobilecms/jfs/t14752/82/2574581467/6535/c8158ace/5aa8935bN94e31ff6.jpg.dpg"
          alt
          srcset
        />
        <div class="qiuckReportBody" :class="{'anim':animate==true}" ref="qiuckReportBody">
          <div :key="index" v-for="(item,index) in quickData">
            <a href="###" class="quicrContent">
              <span>{{item.hotTitile}}</span>
              <span>{{item.content}}</span>
            </a>
          </div>
        </div>

        <span class="more">更多</span>
      </div>
      <div class="wntj">
        <div class="commontitle">
          <img
            src="//img11.360buyimg.com/jdphoto/jfs/t1/31601/22/15554/14040/5cc2a86fEbdb1098b/88174b36f85283b6.png"
            alt
          />
        </div>
        <div class="wntjbody">
          <div v-for="(item,index) in wntjData" :key="index">
            <img :src="item.url" alt />
            <span class="wntijbodtext">{{item.desc}}</span>
            <div class="wntijbodyprice">
              <span class="wntijbodyprice1">
                <span>¥</span>
                <span>{{item.price}}</span>
              </span>
              <span class="wntijbodyprice2">看相似</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <JDFooter />
  </div>
</template>

<script>
import JDHeader from "@/components/JDHeader.vue";
import JDFooter from "@/components/JDFooter.vue";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import BScroll from "better-scroll";
import { DownTime } from "../util";

export default {
  name: "Main",
  created() {
    this.scrollMessageID = setInterval(this.scrollMessage, 2000);
    var oDate = new Date();
    let changci = this.dcData.find(item => oDate.getHours() - item <= 2);
    if (changci) {
      this.changci = new DownTime().tow(changci);
      oDate.setHours(changci + 2); //
      oDate.setMinutes(0);
      oDate.setSeconds(0);
      this.getDate(oDate);
      this.timeID = setInterval(() => {
        this.getDate(oDate);
      }, 500);
    } else {
      this.hour = "00";
      this.minute = "00";
      this.second = "00";
    }
  },
  data() {
    return {
      changci: "12",
      dcData: [15, 18, 20],
      timeID: 0,
      hour: 0,
      minute: 0,
      second: 0,
      scrollMessageID: null,
      animate: false,
      wrapper: null,
      scroll: null,
      swiperOption2: {
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination2",
          bulletClass: "my-bullet2",
          bulletActiveClass: "my-bullet-active2"
        }
      },
      quickData: [
        {
          hotTitile: "最新",
          content: "华为P30无奈清库存，8GB+128GB售价便宜千元"
        },
        {
          hotTitile: "推荐",
          content: "搭载A12的iPad仅红米价！为什么苹果突然良心了？             "
        },
        {
          hotTitile: "热门",
          content: "华为MatePad官宣：11月25日正式发布 "
        },
        {
          hotTitile: "HOT",
          content: "带你体验华为nova5Pro，它有哪些不俗表现 "
        }
      ],
      navData: [
        {
          data: [
            {
              url:
                "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png.webp",
              text: "京东超市"
            },
            {
              url:
                "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png",
              text: "数码电器"
            },
            {
              url:
                "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png",
              text: "京东服饰"
            },
            {
              url:
                "//m.360buyimg.com/mobilecms/s120x120_jfs/t17725/156/1767366877/17404/f45d418b/5ad87bf0N66c5db7c.png",
              text: "京东生鲜"
            },
            {
              url:
                "//m.360buyimg.com/mobilecms/s120x120_jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png",
              text: "京东到家"
            },
            {
              url:
                "//m.360buyimg.com/mobilecms/s120x120_jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png",
              text: "充值缴费"
            },
            {
              url:
                "//m.360buyimg.com/mobilecms/s120x120_jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png",
              text: "9.9元拼"
            },
            {
              url:
                "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/7068/29/8987/5605/5c120da2Ecae1cc3a/016033c7ef3e0c6c.png",
              text: "领券"
            },
            {
              url:
                "//m.360buyimg.com/mobilecms/s120x120_jfs/t16828/63/2653634926/5662/d18f6fa1/5b03b779N5c0b196f.png",
              text: "赚钱"
            },
            {
              url:
                "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/22262/9/1470/4527/5c120cd0E5d3c6c66/4792ec307a853e9f.png",
              text: "PLUS会员"
            }
          ]
        },
        {
          data: [
            {
              url:
                "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png.webp",
              text: "京东超市"
            },
            {
              url:
                "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png",
              text: "数码电器"
            },
            {
              url:
                "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png",
              text: "京东服饰"
            },
            {
              url:
                "//m.360buyimg.com/mobilecms/s120x120_jfs/t17725/156/1767366877/17404/f45d418b/5ad87bf0N66c5db7c.png",
              text: "京东生鲜"
            },
            {
              url:
                "//m.360buyimg.com/mobilecms/s120x120_jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png",
              text: "京东到家"
            },
            {
              url:
                "//m.360buyimg.com/mobilecms/s120x120_jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png",
              text: "充值缴费"
            },
            {
              url:
                "//m.360buyimg.com/mobilecms/s120x120_jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png",
              text: "9.9元拼"
            },
            {
              url:
                "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/7068/29/8987/5605/5c120da2Ecae1cc3a/016033c7ef3e0c6c.png",
              text: "领券"
            },
            {
              url:
                "//m.360buyimg.com/mobilecms/s120x120_jfs/t16828/63/2653634926/5662/d18f6fa1/5b03b779N5c0b196f.png",
              text: "赚钱"
            },
            {
              url:
                "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/22262/9/1470/4527/5c120cd0E5d3c6c66/4792ec307a853e9f.png",
              text: "PLUS会员"
            }
          ]
        }
      ],
      msData: [
        {
          url:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/102295/3/2667/176406/5dd3b2ceE2cef8b00/b83a7debd3227657.jpg.dpg",
          newPrice: 4999,
          oldPrice: 6099
        },
        {
          url:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/47792/27/15417/121512/5dc7e10fE90582076/80712be938b224ee.jpg.dpg",
          newPrice: 59,
          oldPrice: 177
        },
        {
          url:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/14920/39/1872/188805/5c17032dE70679caf/6b4d3c94c71cae6a.jpg.dpg",
          newPrice: 49.9,
          oldPrice: 59
        },
        {
          url:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/96037/39/2754/123537/5dd50a2cE55a7a265/827e6d8d6eec263b.jpg.dpg",
          newPrice: 14.8,
          oldPrice: 40
        },
        {
          url:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/99479/6/2683/34943/5dd4ad10E2902baad/7e87f7554f7e4d38.jpg.dpg",
          newPrice: 19,
          oldPrice: 49
        },
        {
          url:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/47792/27/15417/121512/5dc7e10fE90582076/80712be938b224ee.jpg.dpg",
          newPrice: 59,
          oldPrice: 177
        },
        {
          url:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/14920/39/1872/188805/5c17032dE70679caf/6b4d3c94c71cae6a.jpg.dpg",
          newPrice: 49.9,
          oldPrice: 59
        },
        {
          url:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/96037/39/2754/123537/5dd50a2cE55a7a265/827e6d8d6eec263b.jpg.dpg",
          newPrice: 14.8,
          oldPrice: 40
        },
        {
          url:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/99479/6/2683/34943/5dd4ad10E2902baad/7e87f7554f7e4d38.jpg.dpg",
          newPrice: 19,
          oldPrice: 49
        }
      ],
      djxyDataOne: [
        {
          title: "艺术生活",
          desc: "轻松打造炫酷萌娃",
          imgs: [
            {
              url:
                "//m.360buyimg.com/mobilecms/s150x150_jfs/t1/66461/6/6767/431210/5d4d2cadEd0828681/59c61c1bbd90c299.png!q70.jpg.dpg"
            },
            {
              url:
                "//m.360buyimg.com/mobilecms/s150x150_jfs/t1/79068/10/15883/208423/5dd49675E375d0ce3/227d09c317e513c4.jpg!q70.jpg.dpg"
            }
          ]
        },
        {
          title: "悦享生活",
          desc: "简而美的生活",
          imgs: [
            {
              url:
                "//m.360buyimg.com/mobilecms/s150x150_jfs/t1/71466/34/15507/213357/5dd0ee85E97cd77ef/c2bb078a33edc593.jpg!q70.jpg.dpg"
            },
            {
              url:
                "//m.360buyimg.com/mobilecms/s150x150_jfs/t1/72786/6/11122/146880/5d89b941E0c680818/bc6adb4978f4ca9b.jpg!q70.jpg.dpg"
            }
          ]
        }
      ],
      djxjDataTwo: [
        {
          data: [
            {
              title: "法律盲人",
              desc: "法学丛书",
              url:
                "//m.360buyimg.com/mobilecms/s150x150_jfs/t28573/35/1314712684/549568/73294502/5cdd18b9N507fcafe.jpg!q70.jpg.dpg"
            },
            {
              title: "职场精英",
              desc: "办公室装备",
              url:
                "//m.360buyimg.com/mobilecms/s150x150_jfs/t1/57208/9/16165/282474/5dd2684aEda582fe4/fa59062af0f74469.jpg!q70.jpg.dpg"
            }
          ]
        },
        {
          data: [
            {
              title: "净爽剃须",
              desc: "男神同款",
              url:
                "//m.360buyimg.com/mobilecms/s150x150_jfs/t1/89487/21/2526/229716/5dd23215Ea7218ec5/d684c1ec954f7d18.jpg!q70.jpg.dpg"
            },
            {
              title: "美齿好物",
              desc: "提颜秘诀",
              url:
                "//m.360buyimg.com/mobilecms/s150x150_jfs/t1/56877/13/11087/266223/5d7f0d69E2f979be3/3e04a561faff58b7.jpg!q70.jpg.dpg"
            }
          ]
        }
      ],
      mrgData: [
        {
          title: "免息星球",
          desc: "白条免息购",
          url:
            "//m.360buyimg.com/n1/s150x150_jfs/t29566/227/1464891645/10350/a5b133e2/5ce20cdcNd9cdd972.jpg!q70.jpg.dpg"
        },
        {
          title: "品牌闪购",
          desc: "汇大牌好假",
          url:
            "//m.360buyimg.com/n1/s150x150_jfs/t18337/154/150031047/10921/90aecefc/5a60384dN46bf2eac.jpg!q70.jpg.dpg"
        },
        {
          title: "品秒杀",
          desc: "低价抢大牌",
          url:
            "//m.360buyimg.com/n1/s150x150_jfs/t1/48126/34/97/423985/5cd27ba6E87c1da1b/a41fe114ff507b5a.png!q70.jpg.dpg"
        },
        {
          title: "京东直播",
          desc: "边看边买",
          url:
            "//m.360buyimg.com/mobilecms/s150x150_jfs/t1/80435/12/13755/37856/5daeb76bEc10eb013/177eb658079595d1.jpg!q70.jpg.dpg"
        },
        {
          title: "排行榜",
          desc: "热销推荐",
          url:
            "//m.360buyimg.com/mobilecms/s150x150_jfs/t1/76945/35/760/26244/5cef9705E501242ee/c56b89c0946438ef.jpg!q70.jpg.dpg"
        },
        {
          title: "拍拍好物",
          desc: "iphone 5折起",
          url:
            "//m.360buyimg.com/mobilecms/s150x150_jfs/t1/34938/26/11155/70774/5cefa0c6E5a90edb2/47b686712510d44e.png!q70.jpg.dpg"
        },
        {
          title: "新品首发",
          desc: "京东小魔方",
          url:
            "//m.360buyimg.com/n1/s150x150_jfs/t11128/25/2817168750/9187/72b53c/5cdaa568N8f652eb8.jpg!q70.jpg.dpg"
        },
        {
          title: "发现好货",
          desc: "发现品质生活",
          url:
            "//m.360buyimg.com/mobilecms/s150x150_jfs/t1/38988/36/7707/54292/5cefa2b0E1cce5cfa/64e76ed6c67568bf.png!q70.jpg.dpg"
        }
      ],
      wntjData: [
        {
          url:
            "//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/75232/29/1833/284400/5d01a368E32466a01/e36ecebb31fc4406.jpg!q70.dpg.webp",
          desc:
            " 迪赛(Diesel)手表 THEDADDIE系列 四区时显男士手表 光辉铠甲 DZ7333                             ",
          price: 4190
        },
        {
          url:
            "//img11.360buyimg.com/mobilecms/s372x372_jfs/t1/39217/31/12508/24952/5d39442fE4590e4aa/27e8d86dc4118828.jpg!q70.dpg.webp",
          desc:
            "洗漱杯出差用品收纳漱口牙刷杯便携式分装旅行洗护套装牙刷盒 优雅白",
          price: 19
        },
        {
          url:
            "//img11.360buyimg.com/mobilecms/s372x372_jfs/t1/39341/38/8682/184601/5d00b6acE1eb91d8e/044d802b90ae78cb.jpg!q70.dpg.webp",
          desc:
            "吴家牛肉 牛腱子肉鱼儿肉 五香卤味零食 即食牛肉熟食真空180g 原味",
          price: 288
        },
        {
          url:
            "//img13.360buyimg.com/mobilecms/s372x372_jfs/t1/66215/22/3793/181129/5d1f8122Ee0713255/5ea91b7d9e10fb83.jpg!q70.dpg.webp",
          desc:
            "户外旅行保温杯大容量热水壶户外运动水杯男便携车载旅游瓶 1200ML湖蓝色",
          price: 39.1
        }
      ]
    };
  },
  components: {
    swiper,
    swiperSlide,
    JDHeader,
    JDFooter
  },
  mounted() {
    this.wrapper = document.querySelector(".wrapper");
    let width = this.msData.length * 2.03;
    this.$refs.content.style.width = width + "rem";
    this.scroll = new BScroll(this.$refs.wrapper, {
      scrollX: true,
      scrollY: false
    });
  },
  beforeDestroy() {
    clearInterval(this.scrollMessageID);
    clearInterval(this.timeID);
  },
  methods: {
    scrollMessage() {
      this.animate = true;
      setTimeout(() => {
        this.quickData.push(this.quickData[0]);
        this.quickData.shift();
        this.animate = false;
      }, 800);
    },
    getDate(endDate) {
      const { hour, minute, second } = new DownTime().getDate(endDate);
      this.hour = hour;
      this.minute = minute;
      this.second = second;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../assets/base.scss";
#main {
  overflow: hidden;
  .nav {
    height: px2em(138.23);
    position: relative;
  }

  .miaosha {
    height: px2em(140.53);
    margin: px2em(8.5333);
    overflow: hidden;
    background: #fff;
    border-radius: px2em(5);
  }
  .miaoshatITLE {
    display: flex;
    height: px2em(29);
    align-items: center;
    justify-content: space-between;
    margin: 0 px2em(7.68);
  }
  .miaoshatITLEleft {
    display: flex;
    align-items: center;
  }
  .miaoshaPic {
    display: flex;
  }
  .miaoshaPic > div {
    padding: 0 px2em(4.26667);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .miaoshaPic img {
    width: px2em(56.63);
    height: px2em(56.63);
  }
  .newUser {
    display: flex;
    height: px2em(102);
    margin: 0 px2em(8.5333);
    overflow: hidden;
    border-radius: px2em(8);
    margin-bottom: 8px;
  }
  .newUser > div {
    width: 50%;
  }
  .newUser > div > img {
    height: px2em(102.29);
  }
  .jdxytitle {
    height: px2em(29.86);
  }
  .jdxytitle > img {
    height: px2em(29.86);
  }
  .jdxybody {
    display: flex;
    flex-wrap: wrap;
    margin: px2em(8.533);
    margin-top: 0;
    background: #fff;
  }
  .jdxybody > div.one {
    width: 50%;
    display: flex;
    flex-direction: column;
    height: px2em(102.39);
    justify-content: center;
    border: 1px solid #f6f6f6;
    box-sizing: border-box;
  }
  .oneimg {
    display: flex;
  }
  .oneimg img {
    width: px2em(51.19);
    height: px2em(51.19);
    margin: px2em(4.69) px2em(5.97);
  }
  .oneimg > div {
    width: 50%;
    display: flex;
    justify-content: center;
  }

  .two > div {
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #f6f6f6;
    box-sizing: border-box;
    border-top: none;
  }
  .two > div img {
    width: px2em(51.19);
    height: px2em(51.19);
    margin: px2em(4.69) px2em(5.97);
  }
  .jdxybody > div.two {
    display: flex;
    width: 50%;
    height: px2em(102.39);
  }
  .mrktitle {
    height: px2em(29.86);
  }
  .mrktitle img {
    height: px2em(29.86);
  }
  .mrkbody {
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    margin: 0 px2em(8.53) px2em(8.53) px2em(8.53);
    border-radius: px2em(5);
  }
  .mrkbody > div {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #f6f6f6;
    box-sizing: border-box;
    border-top: none;
    padding: px2em(5.54667) px2em(4.26667);
  }
  .mrkbody > div img {
    width: px2em(51.19);
    height: px2em(51.19);
    margin-top: px2em(3.43);
  }
  .mrkbodytitle2 {
    font-weight: 700;
    display: inline-block;
    max-width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .mrkbodytitle2 > span {
    background: -webkit-linear-gradient(left, #ff2a2a, #f139d2);
    background: linear-gradient(90deg, #ff2a2a, #f139d2);
    -webkit-background-clip: text;
    color: transparent;
  }
  .mrkbodytitle1 {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
  }
  .quickReport {
    display: flex;
    justify-content: space-between;
    margin: 0 px2em(8.5333);
    padding: 0 px2em(4.2667);
    height: px2em(25.59);
    background: #fff;
    align-items: center;
    border-radius: px2em(8);
    overflow: hidden;
  }
  .quickReport img {
    height: px2em(13.64);
  }
  .quicrContent {
    display: flex;
    flex: 1;
  }

  .quicrContent > span:first-child {
    width: px2em(37.14);
    text-align: center;
    color: #f23030;
  }
  .quicrContent > span:last-child {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 1;
  }
  .more {
    width: px2em(29.31);
  }
  .commontitle {
    height: px2em(29.86);
    margin: px2em(8.533);
    margin-bottom: 0;
    overflow: hidden;
  }
  .commontitle > img {
    height: px2em(29.86);
    width: 100%;
    border-radius: px2em(5);
  }
  .wntjbody {
    display: flex;
    flex-wrap: wrap;
    margin: px2em(8.533);
    margin-top: 0;
  }
  .wntjbody > div {
    width: px2em(149);
    background: #fff;
    margin-top: 2px;
    height: 240px;
  }
  .wntjbody > div:nth-child(2n) {
    margin-left: 4px;
  }
  .wntjbody > div > img {
    width: px2em(149);
    height: px2em(149);
  }
  .jdmslogo {
    height: px2em(29);
    display: flex;
    align-items: center;
    margin-right: px2em(7.68);
  }
  .jdmslogo img {
    height: px2em(15);
    width: px2em(56.5);
  }
  .seckill-more-icon {
    display: inline-block;
    width: px2em(9.38);
    height: px2em(9.38);
    background: url(//wq.360buyimg.com/wxsq_project/portal/m_jd_index/images/arrow_rt_2ccb8cd5.png)
      no-repeat;
    background-size: cover;
    // margin-left: 3px;
  }
  .morems {
    display: inline-block;
    color: #f23030;
    font-size: 10px;
  }
  .miaoshatITLEleft > .changci {
    font-size: 12px;
    font-weight: bold;
  }
  .miaoshatITLEleft > .time {
    margin-left: 6px;
    display: flex;
    align-items: center;
  }
  .miaoshatITLEleft > .time > span:nth-child(2n + 1) {
    width: 20px;
    line-height: 18px;
    color: #232326;
    font-size: 12px;
    text-align: center;
    border: 1px solid #dfdfdf;
  }
  .miaoshatITLEleft > .time > span:nth-child(2n) {
    width: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .newprice {
    margin-top: px2em(10);
    color: #e93b3d;
    font-family: JDZhengHT-EN-Bold;
    font-size: 16px;
  }
  .newprice > em {
    font-size: 11px;
  }
  .oldprice {
    color: #999;
    font-size: 12px;
    text-decoration: line-through;
  }
  .jdxbodytitle > span {
    background: -webkit-linear-gradient(left, #45caff, #1471fb);
    background: linear-gradient(90deg, #45caff, #1471fb);
    -webkit-background-clip: text;
    color: transparent;
    font-size: px2em(13.6533);
    // line-height: px2em(19);
    font-weight: 700;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-indent: px2em(7.68);
    padding-top: px2em(4.2667);
  }
  .jdxbodytitle1 {
    color: #666771;
    font-size: 12px;
    text-indent: px2em(7.68);
  }
  .twotitle {
    /* color: #333; */
    color: #000;
    font-weight: 700;
    font-size: px2em(13.6533);
    line-height: 1.125rem;
    display: inline-block;
    max-width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .mrkbodytitle3 > span {
    background: -webkit-linear-gradient(left, #fe8537, #f02b2b);
    background: linear-gradient(90deg, #fe8537, #f02b2b);
    -webkit-background-clip: text;
    color: transparent;
  }
  .mrkbodytitle4 > span {
    background: -webkit-linear-gradient(left, #ff765c, #ff23b3);
    background: linear-gradient(90deg, #ff765c, #ff23b3);
    -webkit-background-clip: text;
    color: transparent;
  }
  .mrkbodytitle5 > span {
    background: -webkit-linear-gradient(left, #ff2a00, #ff00af);
    background: linear-gradient(90deg, #ff2a00, #ff00af);
    -webkit-background-clip: text;
    color: transparent;
  }
  .mrkbodytitle6 > span {
    background: -webkit-linear-gradient(left, #d400ff, #ff320a);
    background: linear-gradient(90deg, #d400ff, #ff320a);
    -webkit-background-clip: text;
    color: transparent;
  }
  .mrkbodytitle7 > span {
    background: -webkit-linear-gradient(left, #00c2ab, #3e94ff);
    background: linear-gradient(90deg, #00c2ab, #3e94ff);
    -webkit-background-clip: text;
    color: transparent;
  }
  .mrkbodytitle8 > span {
    background: -webkit-linear-gradient(left, #ff765c, #ff23b3);
    background: linear-gradient(90deg, #ff765c, #ff23b3);
    -webkit-background-clip: text;
    color: transparent;
  }
  .mrkbodytitle9 > span {
    background: -webkit-linear-gradient(left, #2ad396, #85bb1f);
    background: linear-gradient(90deg, #2ad396, #85bb1f);
    -webkit-background-clip: text;
    color: transparent;
  }
  .qiuckReportBody {
    margin: 0 px2em(5.12);
    height: px2em(25.58);
    padding-left: 0;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
    flex-direction: column;
    box-sizing: border-box;
    transform: translate3d(0px, 0px, 0px);
    transition: none 0s ease 0s;
  }
  .qiuckReportBody div {
    display: flex;
    height: px2em(25.58);
    overflow: hidden;
    justify-content: center;
    align-items: center;
  }
  .qiuckReportBody div a {
    display: flex;
    width: 100%;
    color: #181818;
    height: 100%;
    align-items: center;
  }
  .qiuckReportBody div a span {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .wntijbodtext {
    box-sizing: border-box;
    height: 31px;
    font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-word;
    color: #232326;
    margin-top: 5px;
    line-height: 16px;
    margin-bottom: 3px;
    padding: 0 4px;
  }
  .wntijbodyprice {
    display: flex;
    justify-content: space-between;
    height: px2em(26);
    align-items: center;
  }
  .wntijbodyprice1 > span:first-child {
    color: #f23030;
    display: inline-block;
    padding: 0 5px 0 4px;
    height: 25px;
    line-height: 25px;
  }
  .wntijbodyprice1 > span:last-child {
    color: #f23030;
    font-size: 16px;
  }
  .wntijbodyprice2 {
    text-align: center;
    color: #686868;
    font-size: 12px;
    width: 49px;
    height: 24px;
    line-height: 24px;
    border: 1px solid #bfbfbf;
    border-radius: 4px;
    margin-right: 8px;
  }
  #mySwiper2 {
    width: 100%;
    position: relative;
    height: px2em(140.23);
    .swiper-pagination2 {
      position: absolute;
      bottom: -1px;
      text-align: center;
    }
    .swiper-wrapper {
      .swiper-slide {
        height: px2em(140.23);
        display: flex;
        flex-wrap: wrap;
      }
      .swiper-slide img {
        width: px2em(34.13);
      }
      .swiper-slide > div {
        width: 20%;
        height: px2em(65.77);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .swiper-slide > div > img {
        margin-top: px2em(8.53333);
      }
      .swiper-slide > div > span {
        margin-top: px2em(5.12);
        color: #666;
      }
    }
    .my-bullet2 {
      width: 5px;
      height: 5px;
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.2);
      box-sizing: border-box;
      border-radius: 50%;
      display: inline-block;
      vertical-align: middle;
      margin: 0 3px;
    }
    .my-bullet-active2 {
      background-color: #e93b3d;
      width: 10px;
      height: 5px;
      border-radius: 3px;
      opacity: 0.7;
    }
  }
  .anim {
    transform: translate3d(0px, px2em(-25.58), 0px);
    transition: transform 800ms ease-in-out 0s;
  }
}
</style>
