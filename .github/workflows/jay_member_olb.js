# This workflow will do a clean install of node dependencies, build the source code and run tests across different versions of node
# For more information see: https://help.github.com/actions/language-and-framework-guides/using-nodejs-with-github-actions

name: ^欧乐b

on:
  workflow_dispatch:
  schedule:
     cron: '30 1 * * *'
  
  watch:
    types: started
  repository_dispatch:
    types: 测试
jobs:
  build:

    runs-on: ubuntu-latest
    if: github.event.repository.owner.id == github.event.sender.id
    steps:
      - name: Checkout
        uses: actions/checkout@v2
        with:
          repository: hakamaka-che/nbcheche
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}
      - name: Cache node_modules
        uses: actions/cache@v2 # 使用 GitHub 官方的缓存 Action。
        env:
          cache-name: cache-node-modules
        with:
          path: node_modules
          key: ${{ runner.os }}-${{ env.cache-name }}-${{ hashFiles('package-lock.json') }} # 使用 package-lock.json 的 Hash 作为缓存的 key。也可以使用 package.json 代替
      - name: npm install
        run: |
          npm install
         
      - name: '运行'
        run: |
          node jay_member_olb.js
         
          
        env:
          JD_COOKIE: ${{ secrets.JD_COOKIE }}
          JD_DEBUG: ${{ secrets.JD_DEBUG }}
          PUSH_KEY: ${{ secrets.PUSH_KEY }}
          BARK_PUSH: ${{ secrets.BARK_PUSH }}
          FRUITSHARECODES: ${{ secrets.FRUITSHARECODES }}
          FRUIT_BEAN_CARD: ${{ secrets.FRUIT_BEAN_CARD }}
          TG_BOT_TOKEN: ${{ secrets.TG_BOT_TOKEN }}
          TG_USER_ID: ${{ secrets.TG_USER_ID }}
          FRUIT_NOTIFY_CONTROL: ${{ secrets.FRUIT_NOTIFY_CONTROL }}
          BARK_SOUND: ${{ secrets.BARK_SOUND }}
          DD_BOT_TOKEN: ${{ secrets.DD_BOT_TOKEN }}
          DD_BOT_SECRET: ${{ secrets.DD_BOT_SECRET }}
          IGOT_PUSH_KEY: ${{ secrets.IGOT_PUSH_KEY }}
          PUSH_PLUS_TOKEN: ${{ secrets.PUSH_PLUS_TOKEN }}
          PUSH_PLUS_USER: ${{ secrets.PUSH_PLUS_USER }}
          QYWX_KEY: ${{ secrets.QYWX_KEY }}
          QYWX_AM: ${{ secrets.QYWX_AM }}
          
