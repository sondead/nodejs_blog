const path = require('path'); // thư viện path (bai 8)
const express = require('express'); // tạo hằng thư viện express
const morgan = require('morgan'); // thư viện morgan (trong bai 7)
const exhbs = require('express-handlebars'); // thư viện handlebars (trong bai 8)

const app = express(); // hàm express() trả về đối tượng đại diện cho ứng dụng Nodejs
const port = 3000; // run ở cổng nào

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public'))); // cấu hình để sử dụng static file - luôn chỉ đến public (bai 9 )

// HTTP loggger
app.use(morgan('combined')); // (trong bai 7)

app.use(
    express.urlencoded({
        extended: true,
    }),
); //xử lý dạng html trước khi gửi lên (bai 15)
app.use(express.json()); //xử lý dạng javascript trước khi gửi lên(bai 15)

// Template engine
app.engine(
    'hbs',
    exhbs.engine({
        extname: '.hbs', // đặt lại tên đuôi file mới cho ngắn (bai 8)
    }),
); // định nghĩa hbs (bai 8)

       app.set('view engine', 'hbs'); // set view engine = handlebars (bai 8)
app.set('views', path.join(__dirname, 'resources/views')); // set địa chỉ cho views (bai 8)

// __dirname trả về file ứng dụng đang chạy index.js (blog/src)

//Routes init
route(    app);

// app.get('/', (req, res) => {

//   // res.send('Hello World!');
//   res.render('home');
// }); // Trả lời khi yêu cầu GET được gửi đến trang chủ

// app.get('/news', (req, res) => {

//   res.render('news');

// });

// app.get('/search', (req, res) => {

//   console.log(req.query.q); // get thì là .query
//   res.render('search');

// });

// app.post('/search', (req, res) => {

//   console.log(req.body); // post thì là .body (bai 15)
//   res.send('');

// });

   app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
}); // Lắng nghe cổng port

// 127.0.0.1 - localhost
