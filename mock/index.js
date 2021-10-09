// 引入mockjs
const Mock = require('mockjs')
// 登录
Mock.mock('/api/user/login', 'post', req => {
  const data = JSON.parse(req.body).body
  return {
    header: { code: 0 },
    body: {
      busiId: '001',
      name: data.name,
      avatar:
        'https://img0.baidu.com/it/u=3233551726,336273710&fm=26&fmt=auto&gp=0.jpg'
    }
  }
})
