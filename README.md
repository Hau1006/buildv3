# Project Title

This project help me understand and how to cancel a request in reactjs by AbortController() and axios.CancelToken

## Lessons Learned

- In this project I can build app Reactjs from zero to full

## 🛠 Skills

Javascript, HTML, CSS...

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherineoelsner.com/)

<!-- This tweak tells npm to only package the compiled files instead of the whole project directory when publishing.

Especially important if you use yarn’s package cache -->

"files": ["dist"] in package.json

Project Panel List :

- cách tách nhỏ các component ra

* tách Panel và PanelList ra

- cách tạo interface và type. Sự khác nhau giữa type và interface

* khi tạo component check xem nó có props k , nếu có tạo interface
* khi nào nên dùng type hay interface :
  interface là tạo hình dạng kiểu dữ liệu của Object in typescript
  type là tạo 1 type mới bth
  => nên sử dụng interface khi define kiểu dữ liệu trả về khi call API , nó có thể thừa kế và chứa nhiều loại
  type. dùng type tốt hơn type vì sẽ dễ scale in future

- cách sử dụng useCallback :

* khi 1 component có 1 component con có sử dụng callback function và nó re-render mỗi lần thằng cha bị re-render
* useCallback sẽ ngăn chặn child component re-render, trừ khi callback ở thằng cha thực sự thay đổi
* nó tùy thuộc vào từng trường hợp và application

- cách tối ưu hòa hình ảnh cho dự án đang có 3 cách

* Lazy Loading: thay vì load hết lên thì sẽ hiện view tạm cho ng dùng nhìn để tăng trải nghiệm ng dùng vs library react-lazyload

- Progressive Loading: là kỹ thuật hiện ảnh lên từ từ bằng cách hiện ảnh chất lượng thấp tới dần dần hiện ảnh chất lượng cao bằng cách sử dụng srcset attribute on the img tag, or by using a library such as react-progressive-image
- WebP images kỹ thuật sử dụng nhièu
