const baseUrl = 'http://192.168.3.7:8001'; //雷江博联调服务器地址
// const baseUrl = 'http://192.168.3.3:8002';   //马佳禾联调服务器地址
// const baseUrl = 'https://www.feiaizn.com'; //线上联调服务器地址


const staticUrl = 'https://feikeyoujia.oss-cn-qingdao.aliyuncs.com/home' //图片路径
const api = {
	// 首页
	loadCity: `${baseUrl}/city/loadCity`, //城市
	carousel: `${baseUrl}/banner/list`, //获取轮播图
	hotNews: `${baseUrl}/news/loadNews`, //获取热点消息
	// 约量房(未接单)
	measurementRoomSendSMS: `${baseUrl}/msService/measure`, //发送短信接口
	addContractRoom: `${baseUrl}/measure`, //增添约量房信息
	addContractRoomList: `${baseUrl}/measure/list`, //约量房列表
	// 已接单
	takeOrders: `${baseUrl}/measurerecord`, //立即接单
	orderSquare:`${baseUrl}/measure/orderList`,//订单广场
	measureRecordList: `${baseUrl}/measurerecord/list`, //约量房记录列表
	decancelList:`${baseUrl}/measure/decancelList`,
	measurerecordDetail: `${baseUrl}/measurerecord/{recordId}`, // 约量房记录详情
	measurerecordecordNum: `${baseUrl}/measurerecord/recordNum`, // 约量房记录几家装企
	// 支付
	pay: `${baseUrl}/payment/topy`, //支付
	// payOrder:`${baseUrl}/payment/order`,//支付回调
	// 好店入驻
	addGoodStoreSettled: `${baseUrl}/dcancel`, //新增好店入驻接口
	quireDecorationEnterprise: `${baseUrl}/dcancel/list`, //查询装企信息列表
	detailsOfLoadingCompany: `${baseUrl}/dcancel`, //查看装企详情
	storesTask: `${baseUrl}/task`, // 好店入驻任务接口
	queryStoresTaskList: `${baseUrl}/task/list`,//装企任务列表接口
	storesRecommend:`${baseUrl}/task/recommend`,//推荐装企接口
	WxDirectpush:`${baseUrl}/wxService/WxDirectpush`,//用户绑定业务员
	// 业务申请
	// /installment/code
	loanCode: `${baseUrl}/installment/code`, //验证码校验的接口
	loanInfo: `${baseUrl}/installment`, //装修分期信息
	sendSMS: `${baseUrl}/msService/CommonMs`, //发送短信接口
	quireDecorationLoan: `${baseUrl}/installment/list`, //查询装修分期列表
	instalmentLoanAudit: `${baseUrl}/review/list`, //分期通过审核
	instalmentRevirw: `${baseUrl}/installment/review`, //分期审批流程接口
	getAuth: `${baseUrl}/baiduOCR/getAuth`, //百度授权码
	// /baiduOCR/idcard
	idcard: `${baseUrl}/baiduOCR/idcard`, //百度授权码
    //积分商城
	classifyList:`${baseUrl}/classify/list`, 	// 积分商品分类列表
    goodsDetails:`${baseUrl}/goods`,  //商品详情接口
	goodsExchange:`${baseUrl}/goods/point`,//商品兑换接口
	exchangeList:`${baseUrl}/exchange/list`,//兑换记录接口
	exchange:`${baseUrl}/exchange`,//兑换详情接口
	recordList: `${baseUrl}/record/list`, //获取收支列表

	//个人中心
	message:`${baseUrl}/message/list`,//系统消息接口
	meg:`${baseUrl}/message`,//信息接口
	address: `${baseUrl}/address`, //获取地址
	addressList: `${baseUrl}/address/list`, //获取地址列表
	getMember: `${baseUrl}/member`, //获取会员
	getMemberList: `${baseUrl}/member/list`, //获取会员列表
	memberState: `${baseUrl}/payment/memberState`, //会员充值
	bindDecorate: `${baseUrl}/member/bindingDecorate`, //绑定装企
	contractRoomList: `${baseUrl}/wx/user/contractRoomList`, //约量房列表
	// 用户登录获取手机号 用户信息
	WXLoginGetOpenId: `${baseUrl}/wxService/WXLoginGetOpenId`, //获取openid
	WXLoginGetPhone: `${baseUrl}/wxService/WXLoginGetPhone`, //获取phone
	upload: `${baseUrl}/ossService/Certification`, //上传文件
	review: `${baseUrl}/review`, //审核资料
	reviewList: `${baseUrl}/review/list`, //审核资料列表
	getUnlimited: `${baseUrl}/poster/getUnlimited`, //生成二维码
	getCoupon: `${baseUrl}//coupon/list`, //优惠券
    spendMessage: `${baseUrl}/message/wxMessage`,  //消息发送

	// 虚拟号码
	virtualNumber: `${baseUrl}/privacyProtection/BindAxN`, //绑定号码AXN号码接口
	virtualNumberCallback: `${baseUrl}/privacyProtection/updateSubscription`, // 修改回拨B号码接口

}

module.exports = {
	staticUrl,
	baseUrl,
	api
}
