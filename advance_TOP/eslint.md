# eslint 配置文件 新版本使用的都是eslint.config.js
如果需要迁移查看:  
https://eslint.org/docs/latest/use/configure/migration-guide
# eslint.config.js查看：
```js
export default [
    {
        rules: {
            "no-unused-vars": "error",
            "no-undef": "error"
        }
    }
];
```
rules 代表检查错误的方式：
等级可以是：
off===0 关闭
warn===1 警告
error===2 错误
## 导入示例：
```js
import js from "@eslint/js";

export default [
    js.configs.recommended,

    {
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn"
        }
    }
];
```
导出推荐配置。如果没有这些配置