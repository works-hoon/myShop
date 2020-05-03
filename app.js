var createError = require('http-errors');
var express = require('express');
/* var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users'); */

var app = express();
app.use(express.json());

// view engine setup
/* app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter); */
app.get('/', (req, res) => res.send('Hello World!'))

// 카테고리 별 베스트 상품에 대한 상세 상품 정보를 생성합니다.
app.get('/api/products/bestcategories', (req, res) => {
  const categoryId = req.query.categoryId
  const limit = req.query.limit || 20
  const subId = req.query.subId || ''
  coupangApiFn('GET', `/products/bestcategories/${categoryId}?limit=${limit}&subId=${subId}`).then(result => res.json(result))
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const { coupangApiFn } = require('./coupangApi');
const qs = require('querystring');


// products 쿠팡 상품의 상세 정보를 생성합니다.

// 카테고리 별 베스트 상품에 대한 상세 상품 정보를 생성합니다.
// coupangApiFn('GET', '/products/bestcategories/1006').then(result => console.log(result));

// 골드박스 상품에 대한 상세 상품 정보를 생성합니다. (골드박스 상품은 매일 오전 7:30에 업데이트 됩니다)
// coupangApiFn('GET', '/products/goldbox').then(result => console.log(result));

// 쿠팡 PL 상품에 대한 상세 정보를 생성합니다.
// coupangApiFn('GET', '/products/coupangPL?limit=10').then(result => console.log(result));

// 쿠팡 PL 상품에 대한 상세 정보를 생성합니다. 1001=탐사
// coupangApiFn('GET', '/products/coupangPL/1001').then(result => console.log(result));

// 검색 키워드에 대한 쿠팡 검색 결과와 상세 상품 정보를 생성합니다 (1 시간당 최대 10번 호출 가능합니다.)
// coupangApiFn('GET', `/products/search?keyword=${qs.escape('고프로')}`).then(result => console.log(result));


// reports 쿠팡 파트너스 회원의 실적 정보를 생성합니다(1시간당 최대 50번 호출 가능합니다.)
// startDate - 20181101 보다 커야함
// endDate - 시작일 180일 작거나 같아야 함

// 일 별 클릭 수에 대한 정보를 생성합니다. (일 별 실적은 매일 오후 12:30에 업데이트 됩니다) yyyyMMdd
// coupangApiFn('GET', '/reports/clicks?startDate=20200401&endDate=20200402').then(result => console.log(result));

// 일 별 주문 정보를 생성합니다. (일 별 실적은 매일 오후 12:30에 업데이트 됩니다)
// coupangApiFn('GET', '/reports/orders?startDate=20200401&endDate=20200430').then(result => console.log(result));

// 일 별 취소 정보를 생성합니다. (일 별 실적은 매일 오후 12:30에 업데이트 됩니다)
// coupangApiFn('GET', '/reports/cancels?startDate=20200401&endDate=20200430').then(result => console.log(result));



// links 입력된 쿠팡 상품 링크를 파트너스 회원의 링크로 변환합니다.
/* const deeplink_REQUEST = {
  "coupangUrls": [
    "https://www.coupang.com/np/search?component=&q=good&channel=user",
    "https://www.coupang.com/np/coupangglobal"
  ]
};
coupangApiFn('POST', '/deeplink', deeplink_REQUEST).then(result => console.log(result)); */

module.exports = app;
