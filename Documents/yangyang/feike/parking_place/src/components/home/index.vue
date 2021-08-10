<template>
	<div class="content">
		<!-- 头部导航栏 地区选择器 -->
		<navtop></navtop>
		<!-- 首页轮播 -->
		<div class="shop-swiper">
			<swiper-img :imgList="imgList" :heightNum="450"></swiper-img>
		</div>
		<div class="contentCard">
			<!-- 金刚区 -->
			<div class="classificate">
				<div v-for="(item,index) in classificateInfo" @click="toPages(index)" :key="index">
					<image :src="item.imgUrl"></image>
					<div class="text">{{item.content}}</div>
				</div>
			</div>
			<!-- 热点信息 -->
			<hotNews :hotNewList="hotNewList"></hotNews>

			<div class="cardItem2" style="margin-top: 50rpx;">
				<div style="background: #f4fbff;" @click="toMeasureRoom">
					<div class="conter">
						<div class="title colorB">约量房</div>
						<div class="item-text colorBL">上门量房&nbsp;&nbsp;&nbsp;定制方案</div>
					</div>
					<image style="width: 84rpx;height: 91rpx;"
						src="https://feikeyoujia.oss-cn-qingdao.aliyuncs.com/home/16269237741636294.png"></image>
				</div>
				<div style="background: #fff0f0;" @click="toOrderSquare" v-if="userInfo.mtype=='装企'">
					<div class="conter">
						<div class="title colorP">订单广场</div>
						<div class="item-text colorPL">订单广场&nbsp;&nbsp;&nbsp;立即抢单</div>
					</div>
					<image style="width: 90rpx;height: 80rpx;"
						src="https://feikeyoujia.oss-cn-qingdao.aliyuncs.com/home/16269238210814337.png"></image>
				</div>
				<div style="background: #fff0f0;" @click="toSettleIn" v-else>
					<div class="conter">
						<div class="title colorP">好店入驻</div>
						<div class="item-text colorPL">欢迎入驻&nbsp;&nbsp;&nbsp;非客有家</div>
					</div>
					<image style="width: 90rpx;height: 80rpx;"
						src="https://feikeyoujia.oss-cn-qingdao.aliyuncs.com/home/16269238210814337.png"></image>
				</div>
			</div>
			<div class="cardItem2" style="margin: 30rpx 0;">
				<div style="background: #fff6ea;" @click="toLoan">
					<div class="conter">
						<div class="title colorO">业务申请</div>
						<div class="item-text colorOL">三种业务&nbsp;&nbsp;&nbsp;快速申请</div>
					</div>
					<image style="width: 83rpx;height: 89rpx;"
						src="https://feikeyoujia.oss-cn-qingdao.aliyuncs.com/home/16269238597327210.png"></image>
				</div>
				<div style="background: #fff6ea;" @click="toMember">
					<div class="conter">
						<div class="title colorO">会员服务</div>
						<div class="item-text colorOL">购买会员&nbsp;&nbsp;&nbsp;尊享服务</div>
					</div>
					<image style="width: 87rpx;height: 89rpx;"
						src="https://feikeyoujia.oss-cn-qingdao.aliyuncs.com/home/16269238938396361.png"></image>
				</div>
			</div>
			<div class="cardItem3">
				<div class="title">
					<div class="line"></div>
					<div>业务申请</div>
				</div>
				<div class="list colorO">
					<div class="conter" style="background: #fff6ea;" @click="toBusinessIntroduction(index)"
						v-for="(item,index) in BusinessApply" :key="index">
						<div>
							<image :src="item.imgUrl"></image>
							<div>{{item.content}}</div>
						</div>
					</div>
				</div>
			</div>
			<div class="cardItem3">
				<div class="title">
					<div class="line"></div>
					<div>约量房</div>
				</div>
				<div class="list colorB">
					<div class="conter" style="background: #f4fbff;" @click="toMeasurement(index)"
						v-for="(item,index) in measuringRoom" :key="index">
						<div>
							<image :src="item.imgUrl"></image>
							<div>{{item.content}}</div>
						</div>
					</div>
				</div>
			</div>
			<div class="cardItem3" v-if="userInfo.mtype=='装企'">
				<div class="title">
					<div class="line"></div>
					<div>订单广场</div>
				</div>
				<div class="list colorP">
					<div class="conter" style="background: #fff0f0;" @click="toOrderSquare(index)"
						v-for="(item,index) in orderSquare" :key="index">
						<div>
							<image :src="item.imgUrl"></image>
							<div>{{item.content}}</div>
						</div>
					</div>
					<div></div>
				</div>
			</div>
			<div class="cardItem3" v-else>
				<div class="title">
					<div class="line"></div>
					<div>好店入驻</div>
				</div>
				<div class="list colorP">
					<div class="conter" style="background: #fff0f0;" @click="togoodStore(index)"
						v-for="(item,index) in goodStoreComing" :key="index">
						<div>
							<image :src="item.imgUrl"></image>
							<div>{{item.content}}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// import {
	// 	$quireDecorationEnterprise,
	// } from "../../../api/InterfaceList/decorationEnterprise.js"
	import {
		staticUrl
	} from "../../api/index.js"
	// import {
	// 	$loadHomeCarousel,
	// 	$hotNews,
	// 	$loadCity
	// } from '@/api/InterfaceList/carousel.js';
	// import {
	// 	$getMember,
	// 	$WxDirectpush
	// } from "../../../api/InterfaceList/member.js"
	export default {
		data() {
			return {
				userInfo: {},
				role: 1,
				imgList: [],
				hotNewList: [{
					content: "3月24日，全国大部降水稀少",
					date: "2021-03-24"
				}, {
					content: "3月26日是世界防治结核病日",
					date: "2021-03-26"
				}, {
					content: "姚策生母：妈妈还有好多话没跟你说",
					date: "2021-03-14"
				}],
				statusBar: '',
				customBar: '',
				citys: [],
				navList: [

				],
				state: 1,
				img: [`${staticUrl}/16165798904949102.jpeg`, `${staticUrl}/16165801604239453.jpeg`,
					`${staticUrl}/16165801946256250.jpeg`
				],
				settled: 0,
				mid: '',
				sence: "",
				classificateInfo: [{
						content: "了解非客",
						imgUrl: "https://feikeyoujia.oss-cn-qingdao.aliyuncs.com/homeClass/16269235048381334.png"
					},
					{
						content: "我的积分",
						imgUrl: "https://feikeyoujia.oss-cn-qingdao.aliyuncs.com/homeClass/16269234157001229.png"
					}, {
						content: "邀请有礼",
						imgUrl: "https://feikeyoujia.oss-cn-qingdao.aliyuncs.com/homeClass/16269235507827272.png"
					}, {
						content: "个人中心",
						imgUrl: "https://feikeyoujia.oss-cn-qingdao.aliyuncs.com/homeClass/16269235779384117.png"
					}
				],
				BusinessApply: [{
					content: "装修申请",
					imgUrl: "https://feikeyoujia.oss-cn-qingdao.aliyuncs.com/home/16269245731125868.png"
				}, {
					content: "车位申请",
					imgUrl: "https://feikeyoujia.oss-cn-qingdao.aliyuncs.com/home/16269246081553829.png"
				}, {
					content: "住房申请",
					imgUrl: "https://feikeyoujia.oss-cn-qingdao.aliyuncs.com/home/16269246372682728.png"
				}],
				measuringRoom: [{
					content: "申请量房",
					imgUrl: "https://feikeyoujia.oss-cn-qingdao.aliyuncs.com/home/16269246826215144.png"
				}, {
					content: "量房进度",
					imgUrl: "https://feikeyoujia.oss-cn-qingdao.aliyuncs.com/home/16269247047308412.png"
				}, {
					content: "热门活动",
					imgUrl: "https://feikeyoujia.oss-cn-qingdao.aliyuncs.com/home/16269247244671300.png"
				}],
				goodStoreComing: [{
					content: "申请入驻",
					imgUrl: "https://feikeyoujia.oss-cn-qingdao.aliyuncs.com/home/1626924757426407.png"
				}, {
					content: "申请进度",
					imgUrl: "https://feikeyoujia.oss-cn-qingdao.aliyuncs.com/home/16269247777695344.png"
				}, {
					content: "入驻规则",
					imgUrl: "https://feikeyoujia.oss-cn-qingdao.aliyuncs.com/home/16269247978992006.png"
				}],
				orderSquare: [{
					content: "实时订单",
					imgUrl: "https://feikeyoujia.oss-cn-qingdao.aliyuncs.com/home/1626924757426407.png"
				}, {
					content: "我的订单",
					imgUrl: "https://feikeyoujia.oss-cn-qingdao.aliyuncs.com/home/16269247777695344.png"
				}],

			}
		},
		onShareAppMessage: function(options) {
			let MId = uni.getStorageSync("feike-mid")
			var that = this;
			// 设置菜单中的转发按钮触发转发事件时的转发内容
			var shareObj = {
				title: "非客有家", // 默认是小程序的名称(可以写slogan等)
				path: `/pages/home/index/index?MId=${MId}`, // 默认是当前页面，必须是以‘/’开头的完整路径
				imageUrl: "https://feikeyoujia.oss-cn-qingdao.aliyuncs.com/null/16256487265654990.jpg",
				success: function(res) {
					// 转发成功之后的回调
					if (res.errMsg == 'shareAppMessage:ok') {}
				},
				fail: function() {
					// 转发失败之后的回调
					if (res.errMsg == 'shareAppMessage:fail cancel') {
						// 用户取消转发
					} else if (res.errMsg == 'shareAppMessage:fail') {
						// 转发失败，其中 detail message 为详细失败信息
					}
				},
				complete: function() {
					// 转发结束之后的回调（转发成不成功都会执行）
				}
			};
			// 来自页面内的按钮的转发
			if (options.from == 'button') {
				// 此处可以修改 shareObj 中的内容
				shareObj.path = `/pages/home/index/index?MId=${MId}`;
			}
			// 返回shareObj
			return shareObj;
		},
		onLoad: function(query) {


			this.getCarousel()
			this.toAuth(query)
		},
		onShow() {
			// if (uni.getStorageSync("feike-role")) {
			// 	this.role = uni.getStorageSync("feike-role")
			// }
			this.getMember()
			if (uni.getStorageSync("feike-mid")) {
				this.quireDecorationEnterprise()
			}

		},
		methods: {
			toOrderSquare(index) {
				let mid = uni.getStorageSync("feike-mid")
				if (!mid) {
					uni.navigateTo({
						url: "../../mine/auth/auth"
					})
				} else {
					if (index == 1) {
						uni.navigateTo({
							url:"../../mine/myOrder/myOrder?num=1"
						})
					} else {
						uni.navigateTo({
							url: "../orderSquare/orderSquare"
						})
					}
				}
			},
			togoodStore(index) {
				let mid = uni.getStorageSync("feike-mid")
				if (!mid) {
					uni.navigateTo({
						url: "../../mine/auth/auth"
					})
				} else {
					if (index == 0) {
						uni.navigateTo({
							url: "../settleIn/settleIn"
						})
					} else if (index == 1) {
						uni.navigateTo({
							url: '../../mine/settleInRecord/settleInRecord'
						})
					} else if (index == 2) {
						setTimeout(()=>{
							uni.navigateTo({
								url: "../storeIntroduction/storeIntroduction"
							})
						},300)
					}
				}

			},
			toMeasurement(index) {
				let mid = uni.getStorageSync("feike-mid")
				if (!mid) {
					uni.navigateTo({
						url: "../../mine/auth/auth"
					})
				} else {
					if (this.userInfo.mtype == '普通用户') {
						if (index == 0) {
							uni.navigateTo({
								url: "../measurementRoom/measurementRoom"
							})
						} else if (index == 1) {
							uni.navigateTo({
								url: '../../mine/measurementRoom/measurementRoom'
							})
						} else if (index == 2) {
							setTimeout(() => {
								uni.navigateTo({
									url: "../measurementActive/measurementActive"
								})
							}, 300)
						}
					} else if (this.userInfo.mtype == '装企') {
						uni.showModal({
							title: "提示",
							content: "您已升级为装企用户，暂无法体验此功能。",
							showCancel: false,
							success: (res) => {
								uni.switchTab({
									url: '../index/index'
								})
							}
						})
					}
				}

			},
			toBusinessIntroduction(index) {
				setTimeout(()=>{
					uni.navigateTo({
						url: `../businessIntroduction/businessIntroduction?type=${index+1}`
					})
				},300)
			},
			toPages(index) {
				if (index == 0) {
					uni.navigateTo({
						url: "../knowFeike/knowFeike"
					})
				} else if (index == 1) {
					uni.switchTab({
						url: '../../pointsMall/index/index'
					})
				} else if (index == 2) {
					uni.navigateTo({
						url: "../invitation/invitation"
					})
				} else {
					uni.switchTab({
						url: '../../mine/index/index'
					})
				}
			},
			getMember() {
				$getMember().then(res => {
					this.userInfo = res.data.data
					getApp().globalData.userInfo = res.data.data
					//改变开始
					if (this.userInfo) {
						if (this.userInfo.mtype == '装企') {
							this.role = 2
							uni.setStorageSync("feike-role", 2)
						} else if (this.userInfo.mtype == '普通用户') {
							this.role = 1
							uni.setStorageSync("feike-role", 1)
						}
					}
					// 结束
				})
			},
			toAuth(query) {
				const scene = decodeURIComponent(query.scene)
				console.log(scene, '二维码')
				if (scene != "undefined") {
					uni.setStorageSync("feike-scene", scene)
				}

				let mid = uni.getStorageSync("feike-mid")
				getApp().globalData.mid = mid
				if (!mid) {
					uni.navigateTo({
						url: "../../mine/auth/auth"
					})
				} else {
					if (query.scene != undefined) {
						var invitees = uni.getStorageSync('feike-scene')
						$WxDirectpush(invitees).then(res => {})
					}
				}
			},
			quireDecorationEnterprise() {
				const data = {
					MId: uni.getStorageSync("feike-mid"),
				}
				$quireDecorationEnterprise(data).then(res => {
					this.settled = res.data.total

				})
			},
			getCarousel() {
				let data = {}
				$loadHomeCarousel(data).then((res) => {
					res.data.rows.forEach((item, index) => {
						item.img = item.bannerUrl
					})
					this.imgList = res.data.rows
				})
			},
			hotNews() {
				$hotNews().then((res) => {
					let {
						list
					} = res.data.data
					this.hotNewList = list
				})
			},
			// 金刚区跳转页面
			toMeasureRoom() {
				uni.navigateTo({
					url: "../measurementRoom/measurementRoom"
				})
			},
			toSettleIn() {
				let mid = uni.getStorageSync("feike-mid")
				if (!mid) {
					uni.navigateTo({
						url: "../../mine/auth/auth"
					})
				} else {
					if (this.settled == 0) {
						uni.navigateTo({
							url: "../settleIn/settleIn"
						})
					} else {
						uni.showModal({
							title: "您已提交申请，点击查看",
							showCancel: false,
							success() {
								uni.navigateTo({
									url: "../../mine/settleInRecord/settleInRecord"
								})
							}
						})
					}
				}
			},
			toLoan() {
				uni.navigateTo({
					url: "../loan/loan"
				})
			},
			toInvitation() {
				uni.navigateTo({
					url: "../invitation/invitation"
				})
			},
			toMember() {
				let mid = uni.getStorageSync("feike-mid")
				if (!mid) {
					uni.navigateTo({
						url: "../../mine/auth/auth"
					})
				} else {
					uni.navigateTo({
						url: "../member/member"
					})
				}
			},

		}
	}
</script>

<style scoped>
  page,
  .content {
  	background-color: #fff;
  	height: 100%;
  }

  .hotNew {
  	display: flex;
  }

  .icon {
  	margin: 0 0 0 20rpx;
  }

  .icon-image {
  	width: 40rpx;
  	height: 40rpx;
  	vertical-align: middle;
  }

  .contentCard {
  	padding: 0 30rpx;
  	box-sizing: border-box;
  	position: relative;
  	top: -23rpx;
  	width: 100%;
  	/* height: calc(100% - 450rpx); */
  	background-color: #fff;
  	border-radius: 26rpx 26rpx 0 0;
  }

  .classificate {
  	display: flex;
  	justify-content: space-around;
  	align-items: center;
  	font-size: 26rpx;
  	padding: 40rpx 0 50rpx 0;
  	box-sizing: border-box;
  }

  .classificate>view {
  	text-align: center;
  }

  .classificate image {
  	width: 112rpx;
  	height: 112rpx;
  }

  .cardItem2 {
  	display: flex;
  	justify-content: space-between;
  	align-items: center;
  }

  .cardItem2>view {
  	width: 336rpx;
  	height: 170rpx;
  	border-radius: 6rpx;
  	position: relative;
  }

  .cardItem2 .title {
  	font-size: 32rpx;
  	margin: 0 0 30rpx 26rpx;
  }

  .cardItem2 .item-text {
  	font-size: 20rpx;
  	margin-left: 26rpx;
  }

  .cardItem2 image {
  	margin: auto;
  	position: absolute;
  	right: 26rpx;
  	top: 0;
  	bottom: 0;
  }

  .cardItem2 .conter {
  	margin: 35rpx 0;
  }

  .cardItem3 {
  	margin: 30rpx 0;
  	font-size: 32rpx;
  }

  .cardItem3 .title {
  	display: flex;
  	align-items: flex-end;
  	margin-bottom: 26rpx;
  }

  .cardItem3 .line {
  	height: 42rpx;
  	width: 8rpx;
  	background: #ff6946;
  	margin-right: 12rpx;
  }

  .cardItem3 .list {
  	display: flex;
  	justify-content: space-between;
  	align-items: center;
  }

  .cardItem3 .list>view {
  	text-align: center;
  	width: 210rpx;
  	height: 170rpx;
  	font-size: 26rpx;
  	border-radius: 6rpx;
  }

  .cardItem3 .list image {
  	width: 92rpx;
  	height: 92rpx;
  	margin-bottom: 6rpx;
  }

  .cardItem3 .conter {
  	display: flex;
  	justify-content: center;
  	align-items: center;
  }

  .colorBL {
  	color: #6aa9e2;
  }

  .colorB {
  	color: #1266b1;
  }

  .colorPL {
  	color: #fb8b8b;
  }

  .colorP {
  	color: #f34747;
  }

  .colorOL {
  	color: #f0c338;
  }

  .colorO {
  	color: #e1af17;
  }
</style>
