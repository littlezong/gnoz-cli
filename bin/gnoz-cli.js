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

const nameQuestion = {
    type: 'input',
    message: '项目名称',
    name: 'name',
    default: 'gnoz'
}

const versionQuestion = {
    type: 'input',
    message: '初始版本：',
    name: 'version',
    default: '1.0.0'
}

const remQuestion = {
    type: 'confirm',
    message: '使用px2rem布局？',
    name: 'px2rem',
    default: false
}

if (program.init) {
    inquirer.prompt([
        nameQuestion,
        versionQuestion,
        remQuestion
    ]).then(answers => {
        const spinner = ora('正在初始化项目').start();
        download('littlezong/gnoz-cli', program.init, function (err) {
            if (!err) {
                // 可以输出一些项目成功的信息
                console.info(chalk.blueBright('下载成功'));
            } else {
                // 可以输出一些项目失败的信息
                spinner.warn(['下载失败！'])
                process.exit()
            }
        })
    })
}