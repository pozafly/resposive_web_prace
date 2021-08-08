const pathName = window.location.pathname;
const route = pathName.slice(1);

const html = document.querySelector('html');

import(`./practice/${route}.html`)
  .then((result) => {
    html.innerHTML = result.default;
  })
  .catch((error) => {
    html.innerHTML = '<div style="color: red;">해당 경로에 맞는 콘텐츠가 없습니다.</div>';
    console.log(error);
  });
