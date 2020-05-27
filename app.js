const express = require('express');
const cors = require('cors');
const app = express();

app.listen(3307, () => console.log('大事件接口启动了'));


// 配置中间件

app.use(cors())

app.use(express.urlencoded({ extended: false }));

// 加载路由模块

app.use('/api', require('./routers/login'));
app.use('/my/article', require('./routers/article'));
app.use('/my/article', require('./routers/category'));
app.use('/api', require('./routers/user'));




