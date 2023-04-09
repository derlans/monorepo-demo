# pnpm + monorepo

## 项目结构

```
packages/vue3+vite
packages/nest
share/utils
```

## 遇到的问题

### 配置通用 eslint、prettierrc

### 不同包之间的引用

例如 vue3 和 nest 都需要使用 utils，有两种方式

#### pnpm 官方推荐的使用

```
// 根目录package.json @monorepo-demo/utils对应包的name 然后在根目录执行 pnpm install
"@monorepo-demo/utils": "workspace:*"

// packages/vue 使用如下方式引用
import { add } from '@monorepo-demo/utils'
```

但是在 nest 项目中这样使用会报错，因为 nest 使用的是 webpack 打包，不会去处理 utils/index.ts,意味着需要在 utils 中配置打包，让 nest 项目之间使用打包后的 dist/index.js，但是这样太麻烦了

#### 相对路径

配置好 tsconfig 下的 include、paths
例如在 nest 项目中，如果 include 包括了项目外的东西，就会下把所有的文件都打包处理，导致 dist 下面的目录结构改变，需要重新配置 nest 项目的入口文件
例如原来是 dist/main.js
会变成 dist/packages/nest/main.js

```
import { add } from 'share/utils/index'
```
