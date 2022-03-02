# 安装

npm
```shell
npm install -S @lc7457/storage
```

yarn
```shell
yarn add @lc7457/storage
```

# 使用
```javascript

import Storage from "@lc7457/storage"

const storage = new Storage({
  expire_suffix:'_expiry',
  adaptor: 'uniapp'
})

// 获取数据
storage.get(key)

// 写入数据
storage.set(key, value, ttl)

```

# 参数配置
## expire_suffix
超时字段名称自动添加的后缀标识   
required: false   
default: '_expiry'   

## adaptor
适配器   
兼容uniapp，uniapp根据环境选择存储方案，web中也可能为localStorage   
required: false   
default: 'localStorage'   
scope: [localStorage|uniapp]   


