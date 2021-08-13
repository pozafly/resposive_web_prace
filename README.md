# 빡치네...

- webpack.config.js 파일에서

```js
new HtmlWebpackPlugin({
  // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
  template: 'src/introduce.html',
}),
```

template 부분 일일이 바꿔 주어야 함. route.js 적용 시, html만 적용되고, css가 동적 import로 불러와지지 않는 이슈 존재.

<br/>

- style.css 파일에서 import css 명 바꿔 주어야 함.

- 여기까지.
