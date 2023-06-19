var inquirer = require('inquirer');
const download = require('download-git-repo');
const config = require('../../config');
const downloadFunction = require('./download');

const myAction = async (project, args) => {
    // 命令行的执行逻辑代码
    // console.log(project);
    // console.log(args);
    const answer = await inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: '请输入你的名字',
        },
        {
            type: 'list',
            name: 'framework',
            // choices: ['express', 'koa', 'egg'],
            choices: config.framework,
            message: '请选择你所使用的框架',
        }
    ])
    // .then(answer => {
    //     console.log(answer);
    // })
    
    // 下载代码模版
    // download(
    //     'direct:' + config.frameworkUrl[answer.framework], // 'direct:git@gitee.com:beiyaoyaoyao/express-template.git', 
    //     project,  // './xxx',
    //     { clone: true }, 
    //     (err) => {
    //         console.log(err);
    //     }
    // )
    downloadFunction(config.frameworkUrl[answer.framework], project);
}

module.exports = myAction;