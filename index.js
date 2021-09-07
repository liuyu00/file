#!/usr/bin/env node
const program = require('commander')
const inquirer = require('inquirer')
const concat = require('./caoncat')

program
.version('0.0.1')
.option('-C, --chdir <path>', 'change the working directory')
.option('-c, --config <path>', 'set config path. defaults to ./deploy.conf')
.option('-T, --no-tests', 'ignore test hook')


/**
 * 问题列表
 */
const promptList = [
  {
    type: 'input',
    message: '请输入合并后的文件名',
    name: 'name',
    default: "" // 默认值
  }
]
// 创建一个concat命令
program
.command('concat <type>')
.description('合并指定类型文件')
.action((type) => {
  inquirer.prompt(promptList).then(concat)
})

// 解析参数
program.parse(process.argv);

/**
 * git init 初始化仓库
 * git add . 添加改动到仓库
 * git commit -m '' 将改动记录到仓库生成版本
 * git status 查看当前工作状态
 * git log 查看当前版本以及之前版本的记录
 * git reflog 查看当前版本以及之前之后的版本记录
 * git reset --hard 回退到某一个版本
 * git reset --hard HEAD^ 回退到上一个版本
 * git reset --hard HEAD^^ 回退到上一个的上一个版本
 * git reset --hard commitId 回退指定的某个版本
 * 
 */