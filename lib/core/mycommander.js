const myAction = require('../core/actions');

const mycommander = function(program) {
    program
    .command('create <project> [other...]')
    .alias('crt')
    .description('创建项目')
    // .action((project,args) => {
    //     // 命令行的执行逻辑代码
    //     console.log(project);
    //     console.log(args);
    // })
    .action(myAction)
}

module.exports = mycommander;