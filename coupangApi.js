const axios = require('axios');
const { generateHmac } = require('./hmacGenerator');

const DOMAIN = "https://api-gateway.coupang.com";

// Replace with your own ACCESS_KEY and SECRET_KEY
const ACCESS_KEY = "5b9da438-76e5-4ac8-b6e7-d035dabdc508";
const SECRET_KEY = "a977c583f38c70ab41949de5f378e87826c38edc";

/*
쿠팡 홈 | https://www.coupang.com
제품 상세 | https://www.coupang.com/vp/products/70624070
검색 결과 | https://www.coupang.com/np/search?component=&q=toys&channel=user
기획전 | https://www.coupang.com/np/promotion/17502
골드박스 | https://www.coupang.com/np/goldbox
로켓와우클럽 | https://loyalty.coupang.com/loyalty/sign-up/home
로켓 배송 | https://www.coupang.com/np/campaigns/82
로켓 직구 | https://m.coupang.com/nm/section/sm/542
여행 상품 | http://m.coupang.com/nm/products/3013828592
*/
module.exports = {
	coupangApiFn: (REQUEST_METHOD, API_URL, REQUEST=null) => {
		const URL = "/v2/providers/affiliate_open_api/apis/openapi/v1" + API_URL;
		const returnValue = async () => {
			let result = null;
			const authorization = generateHmac(REQUEST_METHOD, URL, SECRET_KEY, ACCESS_KEY);
			axios.defaults.baseURL = DOMAIN;
			try {
				const response = await axios.request({
					method: REQUEST_METHOD,
					url: URL,
					headers: { Authorization: authorization },
					data: REQUEST
				});
				result = response.data;
				// console.log(response.data);
			} catch (err) {
				result = err.response.data;
				// console.error(err.response.data);
			}
			return result;
		}
		return returnValue();
		// console.log(returnValue);
	}
}