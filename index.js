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
 * git init 初始化仓库,生成一个.git隐藏目录，作为git的仓库目录
 * git add . 添加改动到仓库, 将工作区的内容添加到暂存区
 * git commit -m '' 将改动记录到仓库生成版本  将暂存区的内容添加到分支
 * git status 查看当前工作状态
 * git log 查看当前版本以及之前版本的记录
 * git reflog 查看当前版本以及之前之后的版本记录
 * git reset --hard 回退到某一个版本
 * git reset --hard HEAD^ 回退到上一个版本
 * git reset --hard HEAD^^ 回退到上一个的上一个版本
 * git reset --hard commitId 回退指定的某个版本
 * 工作区
 * 暂存区
 * 
 * git checkout -- file  将指定文件在工作区的修改撤销
 * git reset HEAD file 将添加到暂存取的并且没有提交到版本库的内容撤销到工作区
 * 
 * 
 * git remote add origin ssh地址  将本地仓库和远程仓库进行关联
 * git pull  从别人的仓库拉取内容 
 * git push 将自己仓库的内容推送到别人的仓库
 * 一般情况下别人指的就是远程仓库（中央服务器）
 * 
 * git remote -v 查看当前本地仓库和远程仓库的关联
 */