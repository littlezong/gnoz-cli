#! /usr/bin/env node
 // 指定这个文件使用node执行

const program = require('commander')
const download = require('download-git-repo')
const chalk = require('chalk')
const ora = require('ora')

program
    .version('0.1.0')
    .option('-i, init [name]', '初始化gnoz-cli项目')
    .parse(process.argv)

if (program.init) {
    const spinner = ora('正在初始化项目').start();
    download('littlezong/gnoz-cli', program.init, function (err) {
        if (!err) {
            // 可以输出一些项目成功的信息
            console.info(chalk.blueBright('下载成功'));
        } else {
            // 可以输出一些项目失败的信息
        }
    })
}