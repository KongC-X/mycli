const download = require("download-git-repo");
const ora = require('ora');
const chalk = require('chalk');

const downloadFunction = function (url, project) {
    const spinner = ora().start();
    spinner.text = '代码正在下载...';
    // 下载代码模版
    download(
        // "direct:" + config.frameworkUrl[answer.framework], // 'direct:git@gitee.com:beiyaoyaoyao/express-template.git',
        "direct:" + url,
        project, // './xxx',
        { clone: true },
        (err) => {
            console.log(err);
            if(!err) {
                spinner.succeed(chalk.green.bold('代码下载成功！🐮'));
                console.log(chalk.blue.bold('项目已经准备就绪! 😄 你可以运行：'));
                console.log(chalk.yellow.bold('👀 cd ' + project));
                console.log(chalk.yellow.bold('🌟 npm install '));
                console.log(chalk.yellow.bold('🔥 npm run dev'));
            } else {
                spinner.fail('代码下载失败！🥺')
            }
        }
    );
};

module.exports = downloadFunction;
