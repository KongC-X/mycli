#! /usr/bin/env node

// console.log(process.argv[2]);

const { program } = require('commander')

const myhelp = require('../lib/core/help')

const mycommander = require('../lib/core/mycommander')


// if(process.argv[2] == '--help') {
//     console.log('获取到了help命令参数');
// }

// program.option('-f --framework <framework>','设置框架')
myhelp(program);

// program.command('create <project> [other...]')
// .alias('crt')
// .description('创建项目')
// .action((project,args) => {
//     // 命令行的执行逻辑代码
//     console.log(project);
//     console.log(args);
// })
mycommander(program);

program.parse(process.argv);