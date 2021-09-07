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

program
.command('concat <type>')
.description('合并指定类型文件')
.action((type) => {
  inquirer.prompt(promptList).then(concat)
})


program.parse(process.argv);