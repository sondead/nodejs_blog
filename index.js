const express = require('express') // tạo hằng thư viện
const app = express() // hàm express() trả về đối tượng đại diện cho ứng dụng Nodejs
const port = 3000 // run ở cổng nào

app.get('/trang-chu', (req, res) => {
  var a = 1;
  var b = 2;
  var c = a + b;
  res.send('Hello World!')
}) // Trả lời bằng Hello World! khi yêu cầu GET được gửi đến trang chủ

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) // Lắng nghe cổng port

// 127.0.0.1 - localhost